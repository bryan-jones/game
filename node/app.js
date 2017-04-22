var express = require('express');
var app = express();
var serv = require('http').Server(app);
var io = require('socket.io')(serv);
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));
var SOCKET_LIST = {};
var Entity = function () {
    var self = {
        x: 250,
        y: 250,
        spdX: 0,
        spdY: 0,
        id: ''
    };
    self.update = function () {
        self.updatePosition();
    };
    self.updatePosition = function () {
        self.x += self.spdX;
        self.y += self.spdY;
    };
};
var Player = function (id) {
    var self = new Entity();
    self.id = id;
    self.number = "" + Math.floor(10 * Math.random());
    self.pressingRight = false;
    self.pressingLeft = false,
        self.pressingUp = false;
    self.pressingDown = false;
    self.maxSpd = 10;
    var super_update = self.update;
    self.update = function () {
        self.updateSpd();
        super_update();
    };
    self.updateSpd = function () {
        if (self.pressingRight) {
            self.spdX = self.maxSpd;
        }
        else if (self.pressingLeft) {
            self.spdX = -self.maxSpd;
        }
        else {
            self.spdX = 0;
        }
        if (self.pressingUp) {
            self.spdY = -self.maxSpd;
        }
        else if (self.pressingDown) {
            self.spdY = self.maxSpd;
        }
        else {
            self.spdY = 0;
        }
    };
    Player.list[id] = self;
    return self;
};
Player.list = {};
Player.onConnect = function (socket) {
    var player = Player(socket.id);
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
};
Player.onDisconnect = function (socket) {
    delete Player.list[socket.id];
};
Player.update = function () {
    var pack = [];
    for (var i in Player.list) {
        var player = Player.list[i];
        player.update();
        pack.push({
            x: player.x,
            y: play.y,
            number: player.number
        });
    }
    return pack;
};
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
    Player.onConnect(socket);
    socket.on('disconnect', function () {
        delete SOCKET_LIST[socket.id];
        Player.onDisconnect(socket);
        console.log('a user disconnected');
    });
});
// Update loop.
setInterval(function () {
    var pack = Player.update();
    // Send locations to each player.
    for (var i in SOCKET_LIST) {
        var socket = SOCKET_LIST[i];
        socket.emit('newPositions', pack);
    }
}, 1000 / 30);
serv.listen(2000, function () {
    console.log('listening on *:2000');
});
