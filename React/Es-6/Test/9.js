const object = {
    message: 'Hello, World!'
    };
    function logMessage() {
    console.log(this.message); // "Hello, World!"
    }
    let rf = logMessage.bind(object);

    rf();