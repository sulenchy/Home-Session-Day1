var dataTypeLab = require('../dataTypeLab');

describe("Case for arrays", function() {
    
    it("should return `2` for `[0, 1, 2]`", function() {
      var response = dataTypeLab.dataTypeLab([0,1,2]);
      expect(response).toEqual(2);
    });

    
    it("should return `undefined` for `[]`", function() {
      var response = dataTypeLab.dataTypeLab([]);
      expect(response).not.toBeDefined();
    });

    it("should return `undefined` for `[4, 9]`", function() {
      var response = dataTypeLab.dataTypeLab([4,9]);
      expect(response).not.toBeDefined();
    });

  });

describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'no value' for null", function() {
      var response = dataTypeLab.dataTypeLab(null);
      expect(response).toBe('no value');
    });

    it("should return 'no value' for undefined", function() {
      var response = dataTypeLab.dataTypeLab(undefined);
      expect(response).toBe('no value');
    });

  });

  describe("Case for booleans", function() {

    it("should return true for `true`", function() {
      var response = dataTypeLab.dataTypeLab(true);
      expect(response).toBe(true);
    });

    it("should return false for `false`", function() {
      var response = dataTypeLab.dataTypeLab(false);
      expect(response).toBe(false);
    });

  });

  describe("Case for Numbers", function() {

    it("should return 'less than 100' for 44", function() {
      var response = dataTypeLab.dataTypeLab(44);
      expect(response).toBe('less than 100');
    });

    it("should return 'more than 100' for 144", function() {
      var response = dataTypeLab.dataTypeLab(144);
      expect(response).toBe('more than 100');
    });

    it("should return 'equal to 100' for 100", function() {
      var response = dataTypeLab.dataTypeLab(100);
      expect(response).toBe('equal to 100');
    });


  });

  describe("Case for Strings", function() {

    it("should return the length of `tergiversate`", function() {
      var response = dataTypeLab.dataTypeLab('tergiversate');
      expect(response).toBe(12);
    });

    it("should return the length of an empty string", function() {
      var response = dataTypeLab.dataTypeLab('');
      expect(response).toBe(0);
    });

    it("should return the length of `555`", function() {
      var response = dataTypeLab.dataTypeLab('555');
      expect(response).toBe(3);
    });


  });

    describe("Case for functions", function() {
    it("should call the `callback` function with argument true, and return `called callback`", function() {
      var callback = function(arg) {
        expect(arg).toBeTruthy();
        if(arg === true) {
          return 'called callback';
        }
      };
      var response =dataTypeLab.dataTypeLab(callback);
      expect(response).toBe('called callback');
    });
  });
});