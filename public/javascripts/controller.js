$(document).ready(function() {
	if(!window.DeviceOrientationEvent) {
		console.log("No supported device, must have an accelerometer!");
		return;
	}

	var socket = io.connect('http://localhost:3000');

	window.addEventListener('deviceorientation', function(eventData) {
		// console.log("Sending data: ", eventData);
		socket.emit('sendreading', {
			alpha : eventData.alpha,
			beta : eventData.beta,
			gamma : eventData.gamma
		});
	}, false);

	socket.on('gotreading', function(data) {
		//for debugging
	});
});