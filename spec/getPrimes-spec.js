
var getPrimes = require('../getPrimes');

  describe("Test cases for getPrimes function", function() {
      
      it("should return 'negative integers can not be prime' for negative integers", function() {
        var response = getPrimes.getPrimes(-23);
        expect(response).toEqual("negative integers can not be prime");
      });

      it("should return an empty array if argument is equal to 1", function() {
        var response = getPrimes.getPrimes(1);
        expect(response).toBe("1 is not a prime number");
      });

      it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ] if argument is equal to 29", function() {
        var response = getPrimes.getPrimes(29);
        expect(response).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23,29 ]);
      });

      it("should return an [2,3] if the argument passed is equal to 4", function() {
        var response = getPrimes.getPrimes(4);
        expect(response).toEqual([ 2, 3 ]);
      });

      it("should return an [2,3,5,7] if the argument passed is equal to 7", function() {
        var response = getPrimes.getPrimes(7);
        expect(response).toEqual([ 2, 3, 5, 7 ]);
      });

      it("should return an [ 2, 3, 5, 7, 11 ] if the argument passed is equal to 12", function() {
        var response = getPrimes.getPrimes(12);
        expect(response).toEqual([ 2, 3, 5, 7, 11 ]);
      });

      it("should return an [ 2, 3, 5, 7, 11, 13, 17, 19 ] if the argument passed is equal to 20", function() {
        var response = getPrimes.getPrimes(20);
        expect(response).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19 ]);
      });


      it("should return the equivalent of getPrimes(29) if the argument passed is equal to getPrimes(30)", function() {
        var response = getPrimes.getPrimes(30);
        expect(response).toEqual(getPrimes.getPrimes(29));
      });

      it("should return an [ 2 ] if the argument passed is equal to 2", function() {
        var response = getPrimes.getPrimes(2);
        expect(response).toEqual([ 2 ]);
      });

      it("should return an [ 2, 3 ] if the argument passed is equal to 3", function() {
        var response = getPrimes.getPrimes(3);
        expect(response).toEqual([ 2, 3 ]);
      });

    });
      
    describe("Test cases for getPrimes function", function() {

      
      
      });

      

      
    
  