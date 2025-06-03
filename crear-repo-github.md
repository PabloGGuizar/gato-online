# 🚀 Crear y subir tu juego del Gato a GitHub

Sigue estos pasos para subir tu proyecto y prepararlo para Render:

## 1. Crea el repositorio en GitHub

1. Ve a [https://github.com/new](https://github.com/new)
2. Nombre sugerido: `gato-online`
3. Opcional: agrega una descripción
4. Marca como **Public**
5. Da clic en **Create repository**

---

## 2. Sube tu proyecto desde tu computadora

Abre una terminal en la carpeta del proyecto (donde está `server.js`) y ejecuta:

```bash
git init
git remote add origin https://github.com/tu_usuario/gato-online.git
```

> Cambia `tu_usuario` por tu nombre de usuario real de GitHub.

```bash
git add .
git commit -m "Subida inicial del juego del Gato"
git branch -M main
git push -u origin main
```

---

## 3. Conecta Render

1. Inicia sesión en [https://render.com](https://render.com)
2. Selecciona **New Web Service**
3. Conecta tu cuenta de GitHub y elige el repositorio `gato-online`
4. Render detectará automáticamente `render.yaml`
5. ¡Listo! Tu aplicación estará disponible públicamente 🌐
