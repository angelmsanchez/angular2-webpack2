// Look in ./config folder for webpack.dev.json
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod')({
      env: 'prod'
    });
    break;
  case 'test':
  case 'testing':
    module.exports = require('./config/webpack.test')({
      env: 'test'
    });
    break;
  case 'int':
  case 'integration':
    module.exports = require('./config/webpack.int')({
      env: 'int'
    });
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev')({
      env: 'development'
    });
}
