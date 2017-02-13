//exporting the Implementation to the test case

exports.dataTypeLab = function(data){
	
	//testing for null and undefined
	if (typeof data === 'object' && Array.isArray(data) != true){
		return 'no value'
	}
	// testing for undefined
	else if (typeof data === 'undefined' && Array.isArray(data) != true ){
		return 'no value'
	}

	//testing for boolean values
	else if (typeof data === 'boolean' && Array.isArray(data) != true){
		return data;
	}

	//Case for Number
	else if (typeof data === 'number'){
		if(data < 100){
			return 'less than 100'
		}
		else if (data > 100){
			return 'more than 100'
		}
		else if(data == 100){
			return 'equal to 100'
		}
	}

	//Case for string
	else if( typeof String(data) === 'string' && Array.isArray (data) != true){
		return data.length;
	}

	// Case for array
	else if (Array.isArray(data) == true && typeof data === 'object'){
		return data[2];
	}

	//For functions call the function and pass in true as an argument and return it.
	else if (typeof data === 'function' ) {

      return data(true);
    }

};

