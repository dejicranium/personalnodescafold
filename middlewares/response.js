const createError = require('http-errors');
const scrubber = require('../utils/scrubber');
//const scrub = require('./scrub')

module.exports = (req, res, next)  =>{
    const extensions = {

        ok (data, message="success", code=200){
            scrubber.scrub(data);
            this.status(code).json({data, message});
            if (!data) {
                this.status(code).end();
            }
        },
        
        error(data, message="error", code=404) {
            if (data) scrubber.scrub(data)
            this.status(code).json({data, message});
        }
    }

    res = Object.assign(res, extensions);

    next()
}