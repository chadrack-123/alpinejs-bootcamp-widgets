function greetWidget() {
    console.log("great")
    return {
        name: '',
        language: 'english',
        greeting: '',
        greet() {
            const greetings = {
                english: `Hello, ${this.name}!`,
                spanish: `Hola, ${this.name}!`,
                french: `Bonjour, ${this.name}!`
            };
            this.greeting = greetings[this.language];
        }
    }
}