const socket = new WebSocket(`ws://${location.host}`);
let playerNumber = 0;
let currentTurn = 1;

const joinBtn = document.getElementById('joinBtn');
const roomInput = document.getElementById('roomInput');
const board = document.getElementById('board');
const role = document.getElementById('role');
const cells = document.querySelectorAll('.cell');

joinBtn.onclick = () => {
  const room = roomInput.value.trim();
  if (room) {
    socket.send(JSON.stringify({ type: 'join', room }));
  }
};

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);

  if (data.type === 'init') {
    playerNumber = data.player;
    if (playerNumber > 2) {
      role.textContent = 'Eres un observador';
    } else {
      role.textContent = `Eres el jugador ${playerNumber}`;
    }
  }

  if (data.type === 'start') {
    board.classList.remove('hidden');
  }

  if (data.type === 'move') {
    cells[data.index].textContent = data.symbol;
    currentTurn = data.nextTurn;
  }
};

cells.forEach((cell, index) => {
  cell.onclick = () => {
    if (playerNumber > 2 || currentTurn !== playerNumber || cell.textContent) return;
    const symbol = playerNumber === 1 ? 'X' : 'O';
    cell.textContent = symbol;
    socket.send(JSON.stringify({ type: 'move', index, symbol, nextTurn: playerNumber === 1 ? 2 : 1 }));
  };
});