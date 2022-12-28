const Game = require('./role/__init__');

const listPlayer = [
    {name: 'Tri', role: '', id: '1'},
    {name: 'Tu', role: '', id: '2'},
    {name: 'Thong', role: '', id: '3'},
    {name: 'Dung', role: '', id: '4'},
    {name: 'Huy', role: '', id: '5'},
    {name: 'Mai', role: '', id: '6'}
];

const game = new Game(listPlayer);
const t = game.getPlayerLife();
