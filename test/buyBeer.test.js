const expect = chai.expect;

describe('canGregBuyBeer', () => {
  describe('when greg is 18', () => {
    it('should return "Greg is 18, he can buy beer!"', () => {
     expect(canBuyBeer(18)).to.equal(true);
    })
    it('should return "Greg is 6, he cant buy beer!"', () => {
      expect(canBuyBeer(6)).to.equal(false);
     })
  });
});



describe('canGregBuyBeer', () => {
  describe('when greg is 18', () => {
    it('should return "Greg is 18, he can buy beer!"', () => {
      const originalAge = greg.age;
      greg.age = 18
      
      const result = canGregBuyBeer();

      expect(result).to.equal(`Greg is ${greg.age}, he can buy beer!`);
      greg.age = originalAge;
    })
  });
});



describe('canGregBuyBeer', () => {
  describe('when greg is 6', () => {
    it('should return "Greg is ${greg.age}, he can\'t buy beer :( sgsdgsg"', () => {
      const originalAge = greg.age;
      greg.age = 6
      
      const result = canGregBuyBeer();

      expect(result).to.equal(`Greg is ${greg.age}, he cant buy beer :(`);
      greg.age = originalAge;
    })
  });
});