const expect = chai.expect;
describe('GradeBook', () => {
    it('should throw error if string',()=>{
        expect(() => findMean('1','2','5')).to.throw();
       // expect(() => findMean('1','2','5')).to.throw();
    });
    describe('when passed three numbers', () => {
        it('should not throw an error', () => {
          expect(() => findMean(60,60,60)).not.to.throw();
        });
    });
    it('should return grade D',()=>{
        const result = findMean(60,60,60);
        expect(result).to.equal('D');
    })
    it('should return grade B',()=>{
        const result = findMean(85,85,85);
        expect(result).to.equal('B');
    })
});

describe('summation', () => {
    describe('when passed one number', () => {
        it('should not throw an error', () => {
          expect(() => summation(10)).not.to.throw();
        });
    });
    it('should return summation',()=>{
        const result = summation(4);
        expect(result).to.equal(10);
    })
});

describe('even-odd', () => {
    describe('when passed String', () => {
        it('should throw an error', () => {
        expect(() => evenOdd('abc')).to.throw();
          //expect(() => evenOdd('abc')).to.throw(); // if we add .not works fine!
        });
    });
    it('should return even',()=>{
        expect(evenOdd(4)).to.equal('even');
    });
    it('should return odd',()=>{
        expect(evenOdd(5)).to.equal('odd');
    })
});
describe('Repeat', () => {
    it('should return hello 3 times',()=>{
        expect(repeatValue('Hello',3)).to.equal('HelloHelloHello');
    });
});