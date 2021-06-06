function Pet(person) {
    this.person =person;
     this.getName = function()
     {
         console.log(this);
         return this.person
     }
    }
    const cat = new Pet('Fluffy');
    console.log(cat.getName()); // What is logged?
    const { getName } = cat;
    console.log(getName()); // What is logged?