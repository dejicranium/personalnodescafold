function conditional(nullable, callback, error=null) {
    if (nullable) {
        callback;
    }
    else if (error) {
        throw new Error('null')
    }
}

module.exports = conditional;