//exporting the Implementation to its test case
exports.getPrimes = function(num){
	//declaration of prime_number array and variable count
	var prime_number = [];
	var count = 0;

	//testing if num is negative
	if (num < 0){
		return "negative integers can not be prime";
	}	

	// testing if num is equals 1
	else if (num == 1){
		return "1 is not a prime number";
	}

	else
	{
		//making sure num is integer
		var realNumber = Math.floor(num);

		//loops from 0 to realNumber
		for (var i= 0; i <= realNumber; i++)
		{		
			for(var j=0; j <= i; j++){
				if (i % j == 0){
					count += 1;
				}

			}
			if (count == 2){
				prime_number.push(i);
			}
			count = 0;
		}
		return prime_number;
		prime_number = [];

	}
	

};

