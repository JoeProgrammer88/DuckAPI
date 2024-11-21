/**
 * This class represents a random duck response from
 * the random duck API
 */
class RandomDuck {
    /**
     * Contains the attribution text for the image
     */
    message: string;

    /**
     * Contains the full URL of the image
     */
    url: string;

    constructor(message: string, url: string) {
        this.message = message;
        this.url = url;
    }
}

function main() {
    getDuck().then((duck: RandomDuck) => {
        // Display the random duck
        console.log(duck);
        // console.log(duck.message);
        // console.log(duck.url);
    });
}

/**
 * Gets a random duck from the random duck API
 * @returns A promise that resolves to a RandomDuck object
 */
function getDuck(): Promise<RandomDuck> {
    return fetch('https://random-d.uk/api/v2/random', {
        headers: {
            
        }
    })
            .then(response => response.json())
            .then((data: RandomDuck) => {
                return new RandomDuck(data.message, data.url);
            });
}