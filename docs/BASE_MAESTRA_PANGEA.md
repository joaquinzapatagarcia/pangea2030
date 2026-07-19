# BASE MAESTRA · PANGEA 2030

## Identidad

PANGEA 2030 es un universo editorial vivo. No es únicamente un teletipo, una web o una emisora: es una estructura capaz de recibir material bruto y convertirlo en lenguaje, memoria, obra y productos derivados.

Su territorio combina futuro, cultura, familia, arte, señales, dinero, belleza, criterio, Mediterráneo, tecnología, riesgo y ambición tranquila. Debe sonar a obra en expansión, nunca a marca vacía.

## Núcleo narrativo vigente

- Universo: **PANGEA 2030**
- Estado: **LIBERTAD DECRETADA**
- Temporada: **00 · BIG BANG**
- Obra fuente declarada: `pangea 2030.docx`
- Espacios y grupos: PANGEA, META, PARALELO, METAS, PROS y PARIAS.
- Eje visual: el mapa del PARALELO.
- Lemas públicos:
  - LA ESTABILIDAD PUEDE SER UNA TRAMPA.
  - LA MAYORÍA ES LA VERDAD.
  - La línea no divide países. Divide acceso, memoria, tecnología y destino.

## Capas del sistema

1. **Bruto**: textos, notas, diarios, imágenes, audios, lecturas, intuiciones y materiales todavía no aceptados.
2. **Canon**: decisiones narrativas vigentes y materiales aceptados como parte del universo.
3. **Temporadas**: ciclos narrativos con identidad, fuentes y emisiones propias.
4. **Datos**: JSON que alimenta las experiencias públicas.
5. **Emisión**: teletipo, Radio PANGEA y futuras interfaces.
6. **Archivo**: versiones retiradas, materiales históricos y restauración.
7. **Derivados**: libros, piezas artísticas, sesiones, exposiciones, productos y talleres.

## Formatos editoriales

GENESIS, REFLEXION, SENTENCIA, AVISO, OBJETIVO, SEÑAL, PREDICCION, DIARIO, MITOLOGIA, SITUACION, CRONOLOGIA, MAPA, OBRA, VENTA y futuros formatos aprobados.

## Reglas de continuidad

- Carrd muestra; no transforma contenido.
- GitHub Pages publica la experiencia.
- `index.html` controla diseño, baraja y radio.
- `pangea.json` es la fuente de datos pública de la emisión.
- El contenido bruto no se convierte en canon automáticamente.
- Todo cambio público debe quedar registrado en `CHANGELOG_PANGEA.md`.
- La emisión estable nunca debe romperse para reorganizar el archivo interno.
- Los 183 fragmentos actuales se conservan como emisión Génesis fundacional.

## Fuentes de verdad

| Ámbito | Fuente |
|---|---|
| Experiencia pública | `index.html` |
| Emisión textual | `pangea.json` |
| Radio activa | `RADIO_PLAYLIST` dentro de `index.html` |
| Versiones | constantes de `index.html` y `CHANGELOG_PANGEA.md` |
| Criterio editorial | `docs/BASE_MAESTRA_PANGEA.md` y `canon/` |
| Material de entrada | `bruto/` |
| Historia | `archivo/` |

## Protocolo de actualización

1. Incorporar el material nuevo en `bruto/`.
2. Decidir qué parte entra en el canon.
3. Transformar el contenido aprobado en uno o varios elementos JSON.
4. Ejecutar `npm run validate`.
5. Incrementar la versión correspondiente:
   - HTML: cambios de interfaz o lógica.
   - JSON: cambios en la emisión textual.
   - AUDIO: cambios en archivos o playlist.
6. Registrar el cambio.
7. Revisar en una rama antes de integrar en `main`.
