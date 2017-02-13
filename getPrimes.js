
exports.getPrimes = function(num){
	var prime_number = [];
	var count = 0;
	if (num < 0)
	{
		return "negative integers can not be prime";
	}	
	else if (num == 1)
	{
		return "1 is not a prime number";
	}
	else
	{
		for (var i= 0; i <= num; i++)
		{		
			for(var j=0; j <= i; j++)
			{
				if (i % j == 0)
				{
					count += 1;
				}

			}
			if (count == 2)
			{
				prime_number.push(i);
			}
			count = 0;
		}
		return prime_number;
		prime_number = [];

	}
	

};

