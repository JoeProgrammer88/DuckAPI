class RandomDuck {
    constructor(message, url) {
        this.message = message;
        this.url = url;
    }
}
function main() {
    getDuck().then((duck) => {
        console.log(duck);
    });
}
function getDuck() {
    return fetch('https://random-d.uk/api/v2/random')
        .then(response => response.json())
        .then((data) => {
        return new RandomDuck(data.message, data.url);
    });
}
