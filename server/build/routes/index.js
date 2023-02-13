"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _express = _interopRequireDefault(require("express"));
var _listener = require("../listener");
var _statemachine = _interopRequireDefault(require("../statemachine"));
var _fs = _interopRequireDefault(require("fs"));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _layers = [];
var format = function format(l) {
  return _objectSpread(_objectSpread({}, l), {}, {
    events: l.events.map(function (e, i) {
      return _objectSpread(_objectSpread({}, e), {}, {
        rules: (e.rules || []).map(function (r, j) {
          return _objectSpread({
            id: "".concat(e.id).concat(i).concat(j)
          }, r);
        })
      });
    })
  });
};

//const _layers = fs.readdirSync(__dirname.replace("routes","layers")).filter(f=>f.startsWith("layer")).map(f => format(require(`../layers/${f}`)));
//console.log(_layers);

var events = function events(layers) {
  return layers.reduce(function (acc, item) {
    var startevent = item.start.event;
    var event = item.events.reduce(function (acc, item) {
      if (item.id == startevent) {
        return item;
      }
      return acc;
    }, null);
    return [].concat((0, _toConsumableArray2["default"])(acc), [{
      id: item.id,
      data: event
    }]);
  }, []);
};
var indexRouter = _express["default"].Router();

//indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

var statemachines = [];
var _seen = {};
var extractplaceholderfromaction = function extractplaceholderfromaction(actions) {
  console.log("extracting placholder", JSON.stringify(actions, null, 4));
  var items = {};
  var _iterator = _createForOfIteratorHelper(actions),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var action = _step.value;
      var placeholders = [];
      var input = JSON.stringify(action, null, 4);
      var indexes = (0, _toConsumableArray2["default"])(input).reduce(function (acc, item, i) {
        if (item === "|") {
          return [].concat((0, _toConsumableArray2["default"])(acc), [i]);
        }
        return acc;
      }, []);
      console.log(indexes);
      for (var i = 0; i < indexes.length; i += 2) {
        placeholders.push(input.substring(indexes[i] + 1, indexes[i + 1]));
      }
      console.log(placeholders);
      items[action.action] = placeholders;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  console.log(JSON.stringify(items, null, 4));
  return items;
};
var extractplaceholders = function extractplaceholders(node) {
  var onstart = node.onstart,
    rules = node.rules;
  var osactions = onstart.actions;
  var ractions = rules.actions;
  var actions = [].concat((0, _toConsumableArray2["default"])(osactions || []), (0, _toConsumableArray2["default"])(ractions || []));
  var placeholders = {};
  var _iterator2 = _createForOfIteratorHelper(actions),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var action = _step2.value;
      if (JSON.stringify(action).indexOf("|") != -1) {
        placeholders = _objectSpread(_objectSpread({}, placeholders), extractplaceholderfromaction(action));
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return placeholders;
};
var children = function children(events, node, trigger) {
  var actions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  if (!node) {
    return;
  }
  if (_seen[node.id]) {
    return {
      id: node.id,
      name: node.name || node.id,
      trigger: trigger
    };
  }
  _seen[node.id] = true;

  //this is wheer we add placeholders
  var placeholders = {
    placeholders: extractplaceholders(node)
  };
  return _objectSpread({
    id: node.id,
    name: node.name || node.id,
    trigger: trigger,
    children: (node.rules || []).map(function (r) {
      return children(events, events[r.next] || "", r.id, actions);
    }).filter(function (t) {
      return t;
    }),
    links: (node.rules || []).reduce(function (acc, r) {
      var key = /*trigger ? `${trigger}` :*/"".concat(node.id, "->").concat(r.next || "");
      return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, r.id, {
        rid: r.id,
        actions: r.actions,
        rule: r.rule
      }));
    }, {})
  }, placeholders);
};
var tree = function tree(layer) {
  var events = layer.events.reduce(function (acc, item) {
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, item.id, item));
  }, {});
  _seen = {};
  var t = {
    layerid: layer.id,
    events: events,
    tree: children(events, events[layer.start.event], null, [])
  };
  return t;
};
indexRouter.get('/layers', function (req, res) {
  console.log("ok getting layers!!");
  var _req$query$layer = req.query.layer,
    layer = _req$query$layer === void 0 ? "layer1.json" : _req$query$layer;
  var _lfile = _fs["default"].readFileSync("authored/".concat(layer, ".json"));
  var _ljson = JSON.parse(_lfile);
  _layers = _ljson.map(function (f) {
    return format(f);
  });
  //console.log(JSON.stringify(_layers,null,4));
  res.status(200).json(_layers.map(function (l) {
    return tree(l);
  }));
});
indexRouter.get('/start', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _i, _statemachines, statem, parallel, _iterator3, _step3, _loop, _loop2, _i2, _statemachines2;
    return _regenerator["default"].wrap(function _callee2$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          //need to reset everything here..!

          if (statemachines.length > 0) {
            for (_i = 0, _statemachines = statemachines; _i < _statemachines.length; _i++) {
              statem = _statemachines[_i];
              statem.unsubscribe();
            }
          }
          statemachines = [];
          parallel = [];
          if (!(statemachines.length <= 0)) {
            _context4.next = 22;
            break;
          }
          _iterator3 = _createForOfIteratorHelper(_layers);
          _context4.prev = 5;
          _loop = /*#__PURE__*/_regenerator["default"].mark(function _loop() {
            var l, smac;
            return _regenerator["default"].wrap(function _loop$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  l = _step3.value;
                  smac = (0, _statemachine["default"])(l); //await smac.init();
                  parallel.push(function () {
                    smac.init();
                    statemachines.push(smac);
                  });
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _loop);
          });
          _iterator3.s();
        case 8:
          if ((_step3 = _iterator3.n()).done) {
            _context4.next = 12;
            break;
          }
          return _context4.delegateYield(_loop(), "t0", 10);
        case 10:
          _context4.next = 8;
          break;
        case 12:
          _context4.next = 17;
          break;
        case 14:
          _context4.prev = 14;
          _context4.t1 = _context4["catch"](5);
          _iterator3.e(_context4.t1);
        case 17:
          _context4.prev = 17;
          _iterator3.f();
          return _context4.finish(17);
        case 20:
          _context4.next = 29;
          break;
        case 22:
          _loop2 = /*#__PURE__*/_regenerator["default"].mark(function _loop2() {
            var sm;
            return _regenerator["default"].wrap(function _loop2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  sm = _statemachines2[_i2];
                  parallel.push(function () {
                    sm.reset();
                  });
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _loop2);
          });
          _i2 = 0, _statemachines2 = statemachines;
        case 24:
          if (!(_i2 < _statemachines2.length)) {
            _context4.next = 29;
            break;
          }
          return _context4.delegateYield(_loop2(), "t2", 26);
        case 26:
          _i2++;
          _context4.next = 24;
          break;
        case 29:
          _context4.next = 31;
          return Promise.all(parallel.map( /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(p) {
              return _regenerator["default"].wrap(function _callee$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return p();
                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }, _callee);
            }));
            return function (_x3) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 31:
          res.status(200).json(events(_layers));
        case 32:
        case "end":
          return _context4.stop();
      }
    }, _callee2, null, [[5, 14, 17, 20]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
indexRouter.get('/trigger', function (req, res) {
  var _req$query = req.query,
    node = _req$query.node,
    layer = _req$query.layer;
  (0, _listener.send)("/trigger/".concat(layer), JSON.stringify({
    node: node,
    layer: layer
  }));
  res.status(200).json({
    node: node
  });
});
indexRouter.get('/webhook', function (req, res) {
  console.log("ok seen a webhook come in!");
  var trigger = req.query.trigger;
  (0, _listener.send)("/webhook", JSON.stringify({
    data: trigger
  }));
  res.status(200).json({
    trigger: trigger
  });
});
indexRouter.get('/press', function (req, res) {
  var ts = Date.now();
  var _req$query2 = req.query,
    name = _req$query2.name,
    layer = _req$query2.layer;
  (0, _listener.send)("/press", JSON.stringify({
    data: name,
    layer: layer,
    ts: ts
  }));
  res.status(200).json({
    press: name
  });
});
indexRouter.get('/gesture', function (req, res) {
  var ts = Date.now();
  var _req$query3 = req.query,
    gesture = _req$query3.gesture,
    layer = _req$query3.layer;
  (0, _listener.send)("/gesture", JSON.stringify({
    data: gesture,
    layer: layer,
    ts: ts
  }));
  res.status(200).json({
    gesture: gesture
  });
});
indexRouter.get('/speech', function (req, res) {
  var ts = Date.now();
  var _req$query4 = req.query,
    speech = _req$query4.speech,
    layer = _req$query4.layer;
  (0, _listener.send)("/speech", JSON.stringify({
    data: speech,
    layer: layer,
    ts: ts
  }));
  res.status(200).json({
    speech: speech
  });
});
var _default = indexRouter;
exports["default"] = _default;