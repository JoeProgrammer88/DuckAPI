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
