"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = exports.init = void 0;
var sockets = [];
var init = function init(_socket) {
  sockets.push(_socket);
  _socket.on("disconnect", function () {
    var i = sockets.indexOf(_socket);
    sockets.splice(i, 1);
  });
};
exports.init = init;
var send = function send(channel, message) {
  for (var _i = 0, _sockets = sockets; _i < _sockets.length; _i++) {
    var s = _sockets[_i];
    try {
      s.emit(channel, message);
    } catch (err) {
      console.log(err);
    }
  }
};
exports.send = send;