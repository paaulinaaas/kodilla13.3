process.stdin.setEncoding('utf-8'); 
var os = require('os');
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
    	var instruction = input.toString().trim();
    	switch(instruction) {
			case '/exit':
	    		process.stdout.write('Quitting app!\n');
	    		process.exit();
	    		break;
    	 	case '/version': 
	    		process.stdout.write('The Node version is ' + process.versions.node + '\n');
	    		break;
    	 	case '/lang': 
	    		process.stdout.write('The language version is: ' + process.env.lang + '\n')
	    		break;
    		default:
    			process.stderr.write('Wrong instruction!\n');
    	};
    }
});

