# PANGEA 2030

**Editorial de universos vivos · Teletipo · Radio · Archivo creativo**

PANGEA 2030 recibe textos, ideas, diarios, imágenes, sonidos, lecturas y señales; los ordena como canon narrativo y los convierte en emisiones, obras y productos derivados.

- [Emisión pública](https://joaquinzapatagarcia.github.io/pangea2030/)
- [Base maestra](docs/BASE_MAESTRA_PANGEA.md)
- [Historial de versiones](CHANGELOG_PANGEA.md)

## Estado estable

| Capa | Versión |
|---|---:|
| Universo narrativo | 0.5.0 |
| HTML | 3 |
| JSON | 1 |
| Audio | 2 |
| Temporada | 00 · Big Bang |
| Fragmentos | 183 |

La interfaz pública se sirve desde la raíz para conservar las URLs de GitHub Pages y Carrd.

## Arquitectura

```text
/
├── index.html                         # Experiencia pública
├── pangea.json                        # Emisión textual
├── paralelo.jpg                       # Mapa
├── pangea_radio_*.mp3                 # Activos publicados
├── docs/
│   └── BASE_MAESTRA_PANGEA.md         # Identidad y reglas
├── canon/                             # Material aceptado
├── bruto/                             # Material de entrada
├── temporadas/
│   └── temporada-00-big-bang/
├── radio/                             # Inventario y protocolo de audio
├── archivo/                           # Historia y restauración
├── scripts/
│   └── validate-pangea.mjs
└── .github/workflows/
    └── validate-pangea.yml
```

## Funcionamiento público

- `GÉNESIS` y `SIGUIENTE`: avanzan por una baraja aleatoria completa.
- `AUTO`: cambia de fragmento cada 30 segundos.
- `ACTIVAR EMISIÓN`: inicia Radio PANGEA tras una acción del visitante.
- `SIGUIENTE PISTA`: avanza manualmente en la playlist.
- Al terminar la última pista, la radio vuelve a la primera.
- Carrd muestra el HTML mediante iframe; no transforma contenido.

## Radio activa

1. `pangea_radio_01_intro2.mp3`
2. `pangea_radio_02_instrumental.mp3`
3. `pangea_radio_03_batucada_cyberpunk.mp3`
4. `pangea_radio_04_intro_original.mp3`
5. `pangea_radio_05_bajo_el_paralelo.mp3`
6. `pangea_radio_06_batucada_cyberpunk_1.mp3`

Consulta [radio/README.md](radio/README.md) antes de mover o sustituir audios.

## Validación

El repositorio comprueba automáticamente el JSON, los identificadores, los campos obligatorios, el mapa, las imágenes, la playlist y las constantes de versión.

Para validarlo localmente:

```bash
npm run validate
```

No requiere instalar dependencias.

## Protocolo de publicación

1. Incorporar material en `bruto/`.
2. Aprobar su entrada en `canon/`.
3. Actualizar `pangea.json`, la radio o la interfaz.
4. Ejecutar la validación.
5. Incrementar `PANGEA_HTML_V`, `PANGEA_JSON_V` o `PANGEA_AUDIO_V` según corresponda.
6. Registrar el cambio en `CHANGELOG_PANGEA.md`.
7. Revisar en una rama antes de integrar en `main`.

## Carrd

```html
<iframe
  src="https://joaquinzapatagarcia.github.io/pangea2030/?v=playlist3"
  style="width:100%; height:900px; border:0; overflow:hidden;"
  loading="lazy"
  title="PANGEA 2030">
</iframe>
```

La consulta del iframe ayuda a renovar la caché exterior. Las versiones internas del JSON y del audio se controlan desde `index.html`.
