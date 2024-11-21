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
    return fetch('https://random-d.uk/api/v2/random', {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
        }
    })
        .then(response => response.json())
        .then((data) => {
        return new RandomDuck(data.message, data.url);
    });
}
