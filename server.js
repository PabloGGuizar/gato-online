const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  let contentType = 'text/html';
  if (filePath.endsWith('.css')) contentType = 'text/css';
  if (filePath.endsWith('.js')) contentType = 'application/javascript';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error al cargar el archivo');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

const wss = new WebSocket.Server({ server });
let rooms = {};

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const data = JSON.parse(message);

    if (data.type === 'join') {
      if (!rooms[data.room]) rooms[data.room] = [];
      rooms[data.room].push(ws);
      ws.room = data.room;
      ws.player = rooms[data.room].length;
      ws.send(JSON.stringify({ type: 'init', player: ws.player }));
      if (rooms[data.room].length === 2) {
        rooms[data.room].forEach(s => s.send(JSON.stringify({ type: 'start' })));
      }
    } else if (data.type === 'move') {
      rooms[ws.room].forEach(s => {
        if (s !== ws) s.send(JSON.stringify(data));
      });
    }
  });

  ws.on('close', () => {
    if (ws.room && rooms[ws.room]) {
      rooms[ws.room] = rooms[ws.room].filter(s => s !== ws);
      if (rooms[ws.room].length === 0) delete rooms[ws.room];
    }
  });
});

server.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
