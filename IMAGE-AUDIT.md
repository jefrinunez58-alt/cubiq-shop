# CUBIQ — Informe honesto de imágenes (prioridad: fotos reales)
> **Alcance respetado:** solo calidad/asignación/almacenamiento de imágenes. **No se modificó el diseño, colores, tipografía, distribución, tarjetas, navegación, carrito, favoritos ni funcionalidades.**  
> **Estado:** sustitución por **fotografías comerciales reales verificadas** **NO terminada**. **Ninguna imagen se marca como fotografía real si es dibujo/ilustración.**

## Instrucción aplicada (28 JPG heredados)
Los **28 JPG heredados** (`public/images/products/*.jpg`, raíz de esa carpeta) son los mismos usados antes y **no resuelven calidad/correspondencia de forma verificada**. Por indicación del usuario: **descartados para asignación al catálogo** (no se asignan). **Imágenes originales no modificadas ni eliminadas** del disco.

## Listado de fotografías realmente conseguidas (ANTES de cambios) — verificado
| Producto (id/slug) | Modelo/tipo representado | Archivo/foto | Fuente (URL/origen) | Autorización/licencia de uso (verificada) | Resolución real | Correspondencia exacta verificada | Estado |
|---|---|---|---|---|---:|---|---|
| *(ninguno)* | — | — | — | — | — | — | **0 fotografías conseguidas/asignadas** |

**Motivo (verificación estricta):** no se descargó ni asignó ninguna imagen porque, en este entorno, no pude verificar de forma fiable **(a)** autorización/licencia explícita para reutilización/uso comercial, **(b)** correspondencia exacta al producto/tipo/tamaño, y **(c)** que sea fotografía real (no dibujo/SVG/ilustración/generada) con calidad aceptable. No se inventaron modelos, características ni fotografías.

## Fuentes investigadas (fabricantes/oficiales solicitados)
- **GAN** — https://www.gancube.com/ (sitio oficial)
- **MoYu** — https://www.instagram.com/moyucube/ / canales oficiales (fabricante)
- **QiYi** — https://www.qiyitoys.com/ (referencia oficial de marca; verificar dominio/licencia específica del activo)
- **DaYan, YJ** — fabricantes reconocidos; se debe obtener imagen oficial con permiso/licencia.
- Referencias previas (licencias/uso): SpeedCubeShop/TheCubicle muestran términos orientados a uso personal/no comercial o licencias limitadas; no se usaron sus imágenes sin permiso explícito.

**Qué falta para “conseguirlas” correctamente:** permiso/licencia por escrito o términos claros que permitan el uso previsto, archivo original de alta calidad, y confirmación de que la foto corresponde exactamente al tipo/modelo (2x2 no como 3x3/4x4, accesorio físico real, etc.). Wikimedia Commons: solo si el archivo es **fotografía real** (no SVG/dibujo) con licencia compatible **y** atribución/cumplimiento; **no** usar SVGs/ilustraciones como foto de producto.

## Plan seguro (sin cambios al catálogo hasta verificación)
1. Obtener por producto una **foto real** (fabricante con permiso/media kit, foto propia, o licencia comercial verificada).
2. Guardar localmente en `public/images/products/<categoria>/` con nombre descriptivo; verificar resolución (ideal ≥1000×1000), nitidez, sin ampliar artificialmente.
3. Registrar: producto `id/slug`, tipo/modelo exacto, fuente, autorización/licencia, resolución.
4. Solo entonces actualizar `images[0]` en `src/data/products.ts` (sin tocar diseño) y revalidar: `node scripts/validate-catalog.mjs`, `cmd /c "npm run build"`.

## Productos pendientes (50/50) — necesitan foto real verificada
*Todos siguen con SVG (dibujo) asignado actualmente; deben reemplazarse por foto real con permiso. No se asignaron los 28 JPG heredados.*

| # | Categoría | Producto (id) | Tipo de foto real requerida | Estado |
|---:|---|---|---|---|
| 1 | Cubos 2x2 | `p-2x2-01` Cubo 2x2 Demo Aurora | 2x2 real, individual, correspondencia exacta | PENDIENTE |
| 2 | Cubos 2x2 | `p-2x2-02` Cubo 2x2 Demo Neon | 2x2 real | PENDIENTE |
| 3 | Cubos 2x2 | `p-2x2-03` Cubo 2x2 Demo Carbon | 2x2 real | PENDIENTE |
| 4 | Cubos 2x2 | `p-2x2-04` Cubo 2x2 Demo Pastel | 2x2 real | PENDIENTE |
| 5 | Cubos 2x2 | `p-2x2-05` Cubo 2x2 Demo Stickerless | 2x2 real | PENDIENTE |
| 6 | Cubos 2x2 | `p-2x2-06` Cubo 2x2 Demo Sprint | 2x2 real | PENDIENTE |
| 7 | Cubos 3x3 | `p-3x3-01` Cubo 3x3 Demo Classic | 3x3 real | PENDIENTE |
| 8 | Cubos 3x3 | `p-3x3-02` Cubo 3x3 Demo Violet | 3x3 real | PENDIENTE |
| 9 | Cubos 3x3 | `p-3x3-03` Cubo 3x3 Demo Aqua | 3x3 real | PENDIENTE |
| 10 | Cubos 3x3 | `p-3x3-04` Cubo 3x3 Demo Flame | 3x3 real | PENDIENTE |
| 11 | Cubos 3x3 | `p-3x3-05` Cubo 3x3 Demo Mint | 3x3 real | PENDIENTE |
| 12 | Cubos 3x3 | `p-3x3-06` Cubo 3x3 Demo Frost | 3x3 real | PENDIENTE |
| 13 | Cubos 4x4 | `p-4x4-01` Cubo 4x4 Demo Master | 4x4 real (no 5x5) | PENDIENTE |
| 14 | Cubos 4x4 | `p-4x4-02` Cubo 4x4 Demo Ocean | 4x4 real | PENDIENTE |
| 15 | Cubos 4x4 | `p-4x4-03` Cubo 4x4 Demo Solar | 4x4 real | PENDIENTE |
| 16 | Cubos 4x4 | `p-4x4-04` Cubo 4x4 Demo Grape | 4x4 real | PENDIENTE |
| 17 | Cubos 4x4 | `p-4x4-05` Cubo 4x4 Demo Lime | 4x4 real | PENDIENTE |
| 18 | Cubos 4x4 | `p-4x4-06` Cubo 4x4 Demo Graphite | 4x4 real | PENDIENTE |
| 19 | 5x5 y superiores | `p-5x5-01` Cubo 5x5 Demo Challenge | 5x5 real | PENDIENTE |
| 20 | 5x5 y superiores | `p-5x5-02` Cubo 5x5 Demo Glacier | 5x5 real | PENDIENTE |
| 21 | 5x5 y superiores | `p-5x5-03` Cubo 5x5 Demo Amber | 5x5 real | PENDIENTE |
| 22 | 5x5 y superiores | `p-6x6-01` Cubo 6x6 Demo Superior | 6x6 real | PENDIENTE |
| 23 | 5x5 y superiores | `p-6x6-02` Cubo 6x6 Demo Rose | 6x6 real | PENDIENTE |
| 24 | 5x5 y superiores | `p-7x7-01` Cubo 7x7 Demo Superior | 7x7 real | PENDIENTE |
| 25 | Profesionales | `p-pro-01` Cubo 3x3 Pro Demo Velocity | 3x3 profesional verificable; no inventar specs | PENDIENTE |
| 26 | Profesionales | `p-pro-02` Cubo 3x3 Pro Demo Circuit | 3x3 profesional verificable | PENDIENTE |
| 27 | Profesionales | `p-pro-03` Cubo 3x3 Pro Demo Crimson | 3x3 profesional verificable | PENDIENTE |
| 28 | Profesionales | `p-pro-04` Cubo 3x3 Pro Demo Matrix | 3x3 profesional verificable | PENDIENTE |
| 29 | Profesionales | `p-pro-05` Cubo 3x3 Pro Demo Indigo | 3x3 profesional verificable | PENDIENTE |
| 30 | Profesionales | `p-pro-06` Cubo 3x3 Pro Demo Apex | 3x3 profesional verificable | PENDIENTE |
| 31 | Variantes y Megaminx | `p-var-01` Megaminx Demo Classic | Megaminx real | PENDIENTE |
| 32 | Variantes y Megaminx | `p-var-02` Megaminx Demo Nova | Megaminx real | PENDIENTE |
| 33 | Variantes y Megaminx | `p-var-03` Pyraminx Demo Classic | Pyraminx real | PENDIENTE |
| 34 | Variantes y Megaminx | `p-var-04` Pyraminx Demo Bloom | Pyraminx real | PENDIENTE |
| 35 | Variantes y Megaminx | `p-var-05` Mirror Cube Demo | Mirror real (tipo correcto) | PENDIENTE |
| 36 | Variantes y Megaminx | `p-var-06` Skewb Demo | Skewb real | PENDIENTE |
| 37 | Magnéticos | `p-mag-01` Cubo 3x3 Demo Control A | 3x3 magnético verificable | PENDIENTE |
| 38 | Magnéticos | `p-mag-02` Cubo 3x3 Demo Control B | 3x3 magnético verificable | PENDIENTE |
| 39 | Magnéticos | `p-mag-03` Cubo 2x2 Demo Control | 2x2 magnético verificable | PENDIENTE |
| 40 | Magnéticos | `p-mag-04` Cubo 4x4 Demo Control | 4x4 magnético verificable | PENDIENTE |
| 41 | Magnéticos | `p-mag-05` Cubo 3x3 Demo Control C | 3x3 magnético verificable | PENDIENTE |
| 42 | Magnéticos | `p-mag-06` Cubo 3x3 Demo Control D | 3x3 magnético verificable | PENDIENTE |
| 43 | Accesorios | `p-acc-01` Lubricante cubos Demo A | Foto real de lubricante (producto físico) | PENDIENTE |
| 44 | Accesorios | `p-acc-02` Lubricante cubos Demo B | Lubricante real (distinto) | PENDIENTE |
| 45 | Accesorios | `p-acc-03` Cronómetro práctica Demo | Cronómetro speedcubing real | PENDIENTE |
| 46 | Accesorios | `p-acc-04` Tapete práctica Demo | Tapete real | PENDIENTE |
| 47 | Accesorios | `p-acc-05` Bolsa/estuche protector Demo | Bolsa/estuche real | PENDIENTE |
| 48 | Accesorios | `p-acc-06` Soporte exhibición Demo | Soporte real | PENDIENTE |
| 49 | Accesorios | `p-acc-07` Kit mantenimiento Demo | Kit mantenimiento real | PENDIENTE |
| 50 | Accesorios | `p-acc-08` Herramienta ajuste Demo | Herramienta de ajuste real | PENDIENTE |

## Control de calidad / integridad
- **28 JPG heredados:** no asignados (descartados para asignación); originales conservados.
- **Fotos reales asignadas:** 0. **No** se usaron dibujos, SVG, ilustraciones, imágenes generadas ni pixeladas como foto real; **no** se repitieron fotos; **no** se inventó nada.
- **Diseño/funcionalidad CUBIQ:** sin cambios. Validación actual: `node scripts/validate-catalog.mjs` OK, `cmd /c "npm run build"` OK.
