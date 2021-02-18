const expect = chai.expect;

describe('getWeatherFor', () => {
    describe('when passed "Sydney"', () => {
      it('should return 25', () => {
        return getWeatherFor('Sydney')
          .then((temp) => {
            expect(temp).to.equal(25);
          });
      });
    });
  });


describe('getWeatherFor', () => {
describe('when passed "Melbourne"', () => {
    it('should return 15', () => {
    return getWeatherFor('melbourne')
        .then((temp) => {
        expect(temp).to.equal(15);
        });
    });
});
});



  describe('getWeatherFor', () => {
    describe('when passed "Perth"', () => {
      it('should return `City ${city} does not exist in our database`', () => {
        getWeatherFor('Perth')
          .then((temp) => {
            expect(temp).to.equal(`City Perth does not exist in our database`);
          });
      });
    });
  });



  describe('getWeatherFor', () => {
    describe('when passed Adelaide', () => {
      it('should return `City Adelaide does not exist in our database`', () => {
        getWeatherFor('Adelaide')
          .then((temp) => {
            expect(temp).to.equal(`City Adelaide does not exist in our database`);
          });
      });
    });
  });


  describe('getWeatherFor', () => {
    describe('when passed "Adelaide"', () => {
      it('should throw an error', () => {
        return getWeatherFor('adelaide')
          .then((message) => {
            throw new Error('was not supposed to succeed'); 
          })
          .catch((message) => { expect(message).to.equal('City adelaide does not exist in our database'); 
      });
    });
  });})