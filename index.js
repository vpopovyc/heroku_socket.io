// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   index.js                                           :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: vpopovyc <vpopovyc@42.fr>                  +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/08/13 15:26:33 by vpopovyc          #+#    #+#             //
//   Updated: 2018/08/13 16:03:18 by vpopovyc         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var express = require('express');
var http = require('http');

// Express server - ok
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
	console.log('Connected');

	socket.on('disconnect', function () {
		console.log("Disconnected");
	});
});

// 322$ – you know 
server.listen(322);
