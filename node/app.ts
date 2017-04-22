var express = require('express');
var app = express();
var serv = require('http').Server(app);
var io = require('socket.io')(serv);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + '/client'));

var SOCKET_LIST = {};
var playerList = {};

/**
 * Create a base class.
 */
class Entity {
    protected x: number;
    protected y: number;
    protected spdX: number;
    protected spdY: number;
    

    constructor() {
        this.x = 250;
        this.y = 250;
        this.spdX = 0;
        this.spdY = 0;
    }

    updatePosition() {
        this.x += this.spdX;
        this.y += this.spdY;
    }

    update() {
        this.updatePosition();
    }
}

/**
 * 
 */
class Player extends Entity {

     id: string;
     number: string;
     pressingLeft: boolean;
     pressingRight: boolean;
     pressingUp: boolean;
     pressingDown: boolean;
     maxSpd: number;
     
    constructor(id: string) {
        super();
        this.id = id;
        this.number = "" + Math.floor(10 * Math.random())
        this.pressingRight = false;
        this.pressingLeft = false,
        this.pressingUp = false;
        this.pressingDown = false;
        this.maxSpd = 10;
    }

     updateSpd() {
        if (this.pressingRight) {
            this.spdX = this.maxSpd;
        }
        else if (this.pressingLeft) {
            this.spdX = -this.maxSpd;
        }
        else {
            this.spdX = 0;
        }

        if (this.pressingUp) {
            this.spdY = -this.maxSpd;
        }
        else if (this.pressingDown) {
            this.spdY = this.maxSpd;
        }
        else {
            this.spdY = 0;
        }
    }
}

var onConnect = function (socket) {
    let player = new Player(socket.id);
    playerList[socket.id] = player;

    socket.on('keyPress', function (data) {
        if (data.inputId === 'left') {
            player.pressingLeft = data.state;
        }
        else if (data.inputId === 'right') {
            player.pressingRight = data.state;
        }
        else if (data.inputId === 'up') {
            player.pressingUp = data.state;
        }
        else if (data.inputId === 'down') {
            player.pressingDown = data.state;
        }
    });
}

var onDisconnect = function (socket) {
    delete playerList[socket.id];
}

var update = function () {
    var pack = [];

    for (var i in playerList) {
        var player = playerList[i];

        player.updateSpd();

        pack.push({
            x: player.x,
            y: player.y,
            number: player.number
        });

    }
    return pack;
}

io.on('connection', function (socket) {

    console.log('a user connected');

    // Create unique user socket.
    socket.id = Math.random();
    SOCKET_LIST[socket.id] = socket;

    // Chat.
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    onConnect(socket);

    socket.on('disconnect', function () {
        delete SOCKET_LIST[socket.id];
        onDisconnect(socket);
        console.log('a user disconnected');
    });

});


// Update loop.
setInterval(function () {
    var pack = update();

    // Send locations to each player.
    for (var i in SOCKET_LIST) {
        var socket = SOCKET_LIST[i];
        socket.emit('newPositions', pack);
    }

}, 5000);


serv.listen(2000, function () {
    console.log('listening on *:2000');
});