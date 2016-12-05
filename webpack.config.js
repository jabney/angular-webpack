if (process.env.NODE_ENV == 'production') {
    module.exports = require('./config/webpack.prod.js');
} else {
    module.exports = require('./config/webpack.dev.js');
}
