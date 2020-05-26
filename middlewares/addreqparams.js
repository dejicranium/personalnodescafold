module.exports = (req, res, next) => {
    req.data = {...req.query, ...req.headers, ...req.body, ...req.params};
    next();
}