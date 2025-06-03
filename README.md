# 🐱 Juego del Gato Online (Tic-Tac-Toe)

Una aplicación web multijugador para jugar al Gato (Tic-Tac-Toe) entre dos personas de forma remota. También permite espectadores que pueden observar el juego en tiempo real.

## 🚀 Características

- Sala de juego personalizada mediante nombre.
- Dos jugadores por sala (X y O).
- Número ilimitado de observadores.
- Interfaz interactiva con tablero visual.
- Sin necesidad de cuenta, solo abre y juega.

## 📦 Estructura del proyecto

```
/ (raíz)
├── public/
│   ├── index.html
│   ├── style.css
│   └── client.js
├── server.js
└── README.md
```

## 🛠️ Cómo usar

### 1. Instala las dependencias (solo `ws`):
```bash
npm install ws
```

### 2. Ejecuta el servidor:
```bash
node server.js
```

### 3. Abre el juego en tu navegador:
```
http://localhost:3000
```

### 4. Juega
- Escribe un nombre de sala y presiona "Unirse".
- Comparte ese nombre con otro jugador.
- El tercero (y siguientes) que se conecten a esa sala serán observadores.

## 💡 Ideas futuras
- Chat dentro de la sala.
- Puntaje acumulado.
- Rondas múltiples.

---

Creado con ❤️ usando Node.js y WebSocket.