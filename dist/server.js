"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const port = 8080

_app2.default.listen(port, () => {
  console.log();
  console.log('Listening on port', port);
  console.log('CRTL + Clique em http://localhost:' + port);
})
