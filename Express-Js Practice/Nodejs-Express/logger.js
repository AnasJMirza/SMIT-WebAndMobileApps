const log = (req, res, next) => {
    console.log("This is a custom middleware function...");
    next();
}

module.exports = log;