const object = {
    message: 'Hello, World!',
    logMessage() {
    console.log(this.message); // What is logged?
    }
    };
    setTimeout(object.logMessage, 1000);