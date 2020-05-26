
class UnauthorizedError extends Error {
    constructor(message, client_or_sdk) {
        //client_or_sdk = 0 or 1; 
        const context = client_or_sdk == 'client' ? "Please login and try again" :  "Please authenticate with a valid secret key"
        message || `Unauthorized request. ${context}`
        super(message);
        
        this.name = "UnauthorizedError"
    }
}