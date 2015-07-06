// var foo = 123;
// console.log(foo);


// function longRunningOperation(callback) {
// 	setTimeout(callback, 3000);
// }

// function userClicked() {
// 	console.log('starting a long operation');
// 	longRunningOperation(function() {
// 		console.log('ending a long operation');
// 	});
// }

// userClicked();


// console.time('timer');
// setTimeout(function() {
// 	console.timeEnd('timer');
// }, 1000)


// console.time('timeit');
// function fibonacci(n) {
// 	if (n < 2)
// 		return 1;
// 	else
// 		return fibonacci(n - 2) + fibonacci(n - 1);
// }
// fibonacci(44);
// console.timeEnd('timeit');


// function fibonacci(n) {
// 	if (n < 2)
// 		return 1;
// 	else
// 		return fibonacci(n - 2) + fibonacci(n - 1);
// }

// console.time('timer');
// setTimeout(function() {
// 	console.timeEnd('timer');
// }, 1000)

// fibonacci(44);


// function printableMessage() {
// 	var message = 'hello';
// 	function setMessage(newMessage) {
// 		if (!newMessage) throw new Error('cannot set empty message');
// 		message = newMessage;
// 	}
	
// 	function getMessage() {
// 		return message;
// 	}

// 	function printMessage() {
// 		console.log(message);
// 	}

// 	return {
// 		setMessage: setMessage,
// 		getMessage: getMessage,
// 		printMessage: printMessage
// 	};
// }

// var awesome1 = printableMessage();
// awesome1.printMessage();

// var awesome2 = printableMessage();
// awesome2.setMessage('hi');
// awesome2.printMessage();

// awesome1.printMessage();


// try {
// 	console.log('About to throw an error');
// 	throw new Error('Error thrown asdf');
// }
// catch(e) {
// 	console.log('I will only execute if an error is thrown');
// 	console.log('Error caught: ', e.message);
// }
// finally {
// 	console.log('I will execute irrespective of an error being thrown')
// }


