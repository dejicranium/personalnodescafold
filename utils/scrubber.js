module.exports = (function() {
    const scrubvals = {
        password: 1,
        token: 1,
        secret: 1,
        secretkey: 1, 
    }

    
    let newobj = {}
    return {
        scrub(object, add=[], avoid=[], key=null) {
            if (add) {
                add.forEach(x=> {
                    scrubvals[x] = 1;
                })
            }
            

            for (let i = 0; i < Object.keys(object).length; i++) {
                const key = Object.keys(object)[i];
                
                if (!scrubvals[key] && typeof(object[key]) !== 'object') {
                   // newobj[key] = object[key];
                }
                else if (typeof (object[key]) === 'object' ) {
                    this.scrub(object[key])
                }
                else {
                    delete object[key];
                }
            }
            return object
        }
    }
})()


