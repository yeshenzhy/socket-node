var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var uuid = require('uuid');

var users = [];
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function( req, res ) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	// 监听加入用户
	socket.on('adduser', function(data) {
		users.push({
			name: data.name,
			url: data.url,
			socket_id: data.socket_id,
			id: uuid.v1(),
			
		});
		io.emit('adduser-todom', users);
	});
	// 监听用户断开连接
	socket.on('disconnect', function(data) {
		const dis_user = users.find(e => e.socket_id == socket.id)
		if (dis_user){
			users = users.filter(function(user, index) {
				if (user.socket_id === dis_user.socket_id) {
					return false;
				} else {
					return true;
				}
			});
		}
		io.emit('user-disconnect', users);
	});
	// 聊天消息转发
	socket.on('send-message', function(msg) {
		io.emit('send-message-todom', msg);
	});
});
http.listen(5000);
