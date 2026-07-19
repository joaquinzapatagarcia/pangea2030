# CHANGELOG PANGEA 2030

Registro de versiones del teletipo PANGEA 2030.

## 2026-07-19 - Estructura maestra v1

- La emisión pública permanece en HTML v3, JSON v1 y audio v2.
- Se crea la Base Maestra de identidad, capas, fuentes de verdad y protocolo de actualización.
- Se incorporan directorios para canon, material bruto, temporadas, radio y archivo.
- Se documenta la Temporada 00 · Big Bang y la playlist activa.
- Se añade un validador sin dependencias para JSON, imágenes, audios y constantes de versión.
- Se añade una comprobación automática mediante GitHub Actions.
- Se amplía el README con estado estable, arquitectura, operación y llamada Carrd.
- No se modifican `index.html`, `pangea.json`, `paralelo.jpg` ni los audios.
- Versión estable anterior: Radio PANGEA 2030 v3.

## 2026-07-07 - v3 Radio PANGEA 2030 Control de pista

- Version HTML/Carrd: `PANGEA_HTML_V=3`
- Version JSON: `PANGEA_JSON_V=1`
- Version audio: `PANGEA_AUDIO_V=2`
- Cambio realizado: se añade informacion visible de la pista activa y control manual de avance de pista.
- Archivos afectados:
  - `index.html`
  - `CHANGELOG_PANGEA.md`
- Funcionamiento:
  - Boton `ACTIVAR EMISION`.
  - Al pulsar, suenan los seis audios en orden.
  - El bloque de estado muestra la pista actual con formato `EMITIENDO · nombre de pista`.
  - Boton `SIGUIENTE PISTA` disponible solo durante la emision.
  - Al pulsar `SIGUIENTE PISTA`, se salta a la pista siguiente.
  - Al terminar el sexto audio, vuelve automaticamente al primero.
  - El volumen queda fijado en `0.18`.
  - El boton `CORTAR SEÑAL` detiene la pista actual y reinicia la playlist.
  - No hay autoplay obligatorio.
- Version estable anterior: `pangea2030-playlist-v2.zip`.

## 2026-07-07 - v2 Radio PANGEA 2030 Playlist

- Version HTML/Carrd: `PANGEA_HTML_V=2`
- Version JSON: `PANGEA_JSON_V=1`
- Version audio: `PANGEA_AUDIO_V=2`
- Cambio realizado: sustitucion del sistema intro + loop por una playlist ordenada en bucle.
- Archivos afectados:
  - `index.html`
  - `pangea_radio_01_intro2.mp3`
  - `pangea_radio_02_instrumental.mp3`
  - `pangea_radio_03_batucada_cyberpunk.mp3`
  - `pangea_radio_04_intro_original.mp3`
  - `pangea_radio_05_bajo_el_paralelo.mp3`
  - `pangea_radio_06_batucada_cyberpunk_1.mp3`
  - `CHANGELOG_PANGEA.md`
- Funcionamiento:
  - Boton `ACTIVAR EMISION`.
  - Al pulsar, suenan los seis audios en orden.
  - Al terminar el sexto, vuelve automaticamente al primero.
  - El volumen queda fijado en `0.18`.
  - El boton `CORTAR SEÑAL` detiene la pista actual y reinicia la playlist.
  - No hay autoplay obligatorio.
- Version estable anterior: `v1 Radio PANGEA 2030`.

## 2026-07-07 - v1 Radio PANGEA 2030

- Version HTML/Carrd: `PANGEA_HTML_V=1`
- Version JSON: `PANGEA_JSON_V=1`
- Version audio: `PANGEA_AUDIO_V=1`
- Cambio realizado: integracion inicial de Radio PANGEA 2030 en el teletipo.
- Archivos afectados:
  - `index.html`
  - `pangea_radio_intro.mp3`
  - `pangea_radio_loop.mp3`
  - `pangea_radio_full_web.mp3`
  - `CHANGELOG_PANGEA.md`
- Funcionamiento:
  - Boton `ACTIVAR EMISION`.
  - Al pulsar, suena `pangea_radio_intro.mp3`.
  - Al terminar la intro, entra `pangea_radio_loop.mp3` en bucle.
  - El volumen queda fijado en `0.18`.
  - El boton cambia a `CORTAR SEÑAL`.
  - No hay autoplay obligatorio.
- Version estable anterior: `pangea2030-mobile-wrap-v1.zip`.
