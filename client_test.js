// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   client_test.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: vpopovyc <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/08/13 15:47:07 by vpopovyc          #+#    #+#             //
//   Updated: 2018/08/13 16:01:22 by vpopovyc         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var io = require('socket.io-client');


var socket = io.connect('http://10.1.21.254:322');


socket.on('connect', function(data) {
	console.log('Connected');
});
