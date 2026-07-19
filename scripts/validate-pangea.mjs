import { existsSync, readFileSync } from "node:fs";

const failures = [];
const requireCondition = (condition, message) => {
  if (!condition) failures.push(message);
};

let data;
try {
  data = JSON.parse(readFileSync("pangea.json", "utf8"));
} catch (error) {
  console.error("PANGEA INVALIDO: pangea.json no puede leerse.");
  console.error(error.message);
  process.exit(1);
}

requireCondition(data && typeof data === "object", "La raíz del JSON debe ser un objeto.");
requireCondition(data.meta && typeof data.meta === "object", "Falta meta.");
requireCondition(data.mapa && typeof data.mapa === "object", "Falta mapa.");
requireCondition(Array.isArray(data.items), "items debe ser una lista.");
requireCondition(typeof data.meta?.version === "string" && data.meta.version.trim(), "Falta meta.version.");
requireCondition(typeof data.mapa?.titulo === "string" && data.mapa.titulo.trim(), "Falta mapa.titulo.");

if (data.mapa?.imagen) {
  requireCondition(existsSync(data.mapa.imagen), `No existe la imagen del mapa: ${data.mapa.imagen}`);
}

const ids = new Set();
const requiredStrings = ["id", "tipo", "titulo", "texto", "origen"];

for (const [index, item] of (data.items || []).entries()) {
  const label = `items[${index}]`;

  for (const field of requiredStrings) {
    requireCondition(
      typeof item[field] === "string" && item[field].trim(),
      `${label}: falta ${field}.`
    );
  }

  if (typeof item.id === "string") {
    requireCondition(!ids.has(item.id), `${label}: id duplicado ${item.id}.`);
    ids.add(item.id);
  }

  requireCondition(
    Array.isArray(item.etiquetas) &&
      item.etiquetas.length > 0 &&
      item.etiquetas.every((tag) => typeof tag === "string" && tag.trim()),
    `${label}: etiquetas debe contener textos válidos.`
  );

  if (item.imagen) {
    requireCondition(existsSync(item.imagen), `${label}: no existe ${item.imagen}.`);
  }
}

try {
  const html = readFileSync("index.html", "utf8");
  const audioPaths = [...html.matchAll(/src:\s*"([^"]+\.mp3)"/g)].map((match) => match[1]);
  requireCondition(audioPaths.length > 0, "No se detectaron pistas en RADIO_PLAYLIST.");
  for (const path of audioPaths) {
    requireCondition(existsSync(path), `No existe la pista activa: ${path}`);
  }
  for (const constant of ["PANGEA_HTML_V", "PANGEA_JSON_V", "PANGEA_AUDIO_V"]) {
    requireCondition(html.includes(`const ${constant} =`), `Falta la constante ${constant}.`);
  }
} catch (error) {
  failures.push(`No puede validarse index.html: ${error.message}`);
}

if (failures.length) {
  console.error("PANGEA INVALIDO");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

const counts = (data.items || []).reduce((result, item) => {
  result[item.tipo] = (result[item.tipo] || 0) + 1;
  return result;
}, {});

console.log(`PANGEA VALIDO · ${data.items.length} fragmentos · versión ${data.meta.version}`);
console.log(counts);
