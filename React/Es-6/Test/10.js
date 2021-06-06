const object = {
    who: 'World',
    greet() {
    return `Hello, ${this.who}!`;
    },
    farewell: () => {
    return `Goodbye, ${this.who}!`;
    }
   };
   console.log(object.greet()); // What is logged?
   console.log(object.farewell()); // What is logged?
   