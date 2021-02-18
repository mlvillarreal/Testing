const expect = chai.expect;

// describe("login", () => {
//     describe("when the user logs in successfully", () => {
//       it("should resolve a token", () => {
//         const response = { token: "123" };
//         const loginValue = new Promise((resolve, reject) => {
//           resolve(response);
//         });
//         const spy = chai.spy.on(Api, "login", (returns) => loginValue);
  
//         return login("test", "test").then((response) => {
//           expect(response).to.equal("123");
//         });
//       });
//     });
//   });


//   describe("when the user uses an incorrect email", () => {
//     it("should reject with an error message", () => {
//       const response = { error: "user not found" };
//       const loginValue = new Promise((resolve, reject) => {
//         resolve(response);
//       });
  
//       const spy = chai.spy.on(Api, "login", (returns) => loginValue);
//       expect(() => {
//         login("test", "test").to.throw(
//           Error,
//           "Oops! Incorrect username or password. Check your details and try again."
//         );
//       });
//     });
//   });


//   describe("when a password is not passed to login", () => {
//     it("should reject with an error message", () => {
//       const response = { error: 'Missing password' };
//       const loginValue = new Promise((resolve, reject) => {
//         resolve(response);
//       });
  
//       const spy = chai.spy.on(Api, "login", (returns) => loginValue);
//       expect(() => {
//         login("test", "test").to.throw(
//           Error,
//           'Oops! Missing password, make sure to fill in your password and try again.'
//         );
//       });
//     });
//   });


  describe("when a password is not passed to login", () => {
    it("should reject with an error message", () => {
      const response = { error: 'Missing password' };
      const loginValue = new Promise((resolve, reject) => {
        resolve(response);
      });
  
      const spy = chai.spy.on(Api, "login", (returns) => loginValue);
      expect(() => {
        login("test", "test").to.throw(
          Error,
          'Oops! Missing password, make sure to fill in your password and try again.'
        );
      });
    });
  });

  return clickButton.then(() => {
    expect(loginMessage.innerText).to.equal('FILL THIS IN!')
  })