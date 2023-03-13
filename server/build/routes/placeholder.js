"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var multer = require('multer');
var upload = multer({
  dest: 'uploads/',
  onError: function onError(err, next) {
    console.log('error', err);
    next(err);
  }
});
var indexRouter = _express["default"].Router();
indexRouter.get('/', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '..', '..', '..', 'placeholders', 'placeholders.json'));
});
indexRouter.get('/set', function (req, res) {
  var fname = _path["default"].join(__dirname, '..', '..', '..', 'placeholders', 'placeholders.json');
  var data = _fs["default"].readFileSync(fname);
  var placeholders = JSON.parse(data);
  var _req$query = req.query,
    key = _req$query.key,
    value = _req$query.value;
  if (key && value) {
    placeholders[key] = value;
    var wdata = JSON.stringify(placeholders, null, 4);
    _fs["default"].writeFileSync(fname, wdata);
  }
  res.status(200).json(placeholders);
});
indexRouter.post('/', upload.array('images', 3), function (req, res) {
  console.log(req.body);
  var fname = _path["default"].join(__dirname, '..', '..', 'placeholders', 'placeholders.json');
  var data = _fs["default"].readFileSync(fname);
  var placeholders = JSON.parse(data);
  for (var property in req.body) {
    if (property !== 'images' && req.body[property]) {
      console.log("".concat(property, ": ").concat(req.body[property]));
      placeholders[property] = req.body[property];
    }
  }

  //for uploading mutiple images
  var uploadedFiles = [];
  console.log(req.files);
  if (req.files) {
    var images = req.files;
    for (var i = 0; i < images.length; i++) {
      var fileName = _path["default"].join(__dirname, '..', '/uploads/', images[i].name);
      uploadedFiles.push(fileName);
      images[i].mv(fileName, function (err) {
        if (err) {
          res.send(err);
        }
      });
    }
  }
  _fs["default"].writeFileSync(fname, JSON.stringify(placeholders, null, '\t'));
  console.log(placeholders);
  res.status(302).redirect('/wa/upload');
});
var _default = indexRouter;
exports["default"] = _default;