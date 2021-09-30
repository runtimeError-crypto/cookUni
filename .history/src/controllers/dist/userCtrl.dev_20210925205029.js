// @ts-nocheck
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;

var _validation = require({
    propertyName1: `../validation`
});


function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(source, true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(source).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

// function clearStates(viewData) {
//     msgs = [];
//     sharedData = {}; //validation data? 
//     viewData = {}
// }
const sharedData = null;
var User = function() {
    function User() {
        _classCallCheck(this, User);
    }

    _createClass(User, [{
        key: "getLogin",
        value: () => {
            console.log('[getLogin] Display Login Page');

            var viewData = _objectSpread({
                propertyName1: {},
                propertyName2: sharedData,
                propertyName3: {
                    loginActive: true,
                    loggedIn: loggedIn
                }
            });

            if (FormData && msgs.length !== 0) {
                viewData.username ? viewData.username.input = FormData.username : '';
                viewData.password ? viewData.password.input = FormData.password : '';
                viewData.msgs = msgs;
            }

            this.loadPartials({
                navbar: '../views/partials/navbar.hbs',
                notifications: '../views/partials/notifications.hbs'
            }).then(function() {
                this.render('../views/users/login.hbs', viewData).swap();
                // @ts-ignore
                (0, _interopRequireDefault(require("../helpers/clearStates"))["default"])(viewData);
            });
        }
    }, {
        key: "postLogin",
        value: function postLogin() {
            var _this = this;

            console.log('[postLogin] Validate User Login');
            var _this = this.params,
                username = _this.username,
                password = _this.password;
            FormData = {
                username: username,
                password: password
            };
            var isValid = (0, _validation.loginValidation)(FormData);

            if (!isValid) {
                this.redirect('#/user/login');
                return;
            }

            sharedData.isLoading = true;
            this.redirect('#/user/login');
            db.login({
                username: username,
                password: password
            }).then(function(jsonRes) {
                sessionStorage.setItem('userId', jsonRes._id);
                sessionStorage.setItem('firstname', jsonRes.firstname);
                sessionStorage.setItem('lastname', jsonRes.lastname);
                sessionStorage.setItem('loggedIn', jsonRes._kmd.authtoken);
                loggedIn = true;
                msgs.push({
                    msg: 'Logged In successully!',
                    "class": 'alert-success'
                });
                sharedData.isLoading = false;

                _this.redirect('#/');
            })["catch"](function(err) {
                msgs.push({
                    msg: 'Invalid credentials. Please retry your request with correct credentials',
                    "class": 'alert-danger'
                });
                sharedData.username = {};
                sharedData.username.invalid = true;
                sharedData.password = {};
                sharedData.isLoading = false;

                _this.redirect('#/user/login');
            });
        }
    }, {
        key: "getSignup",
        value: function getSignup() {
            console.log('[getSignUp] Display Signup Form');

            var viewData = _objectSpread({}, sharedData, {
                signupActive: true,
                loggedIn: loggedIn
            });

            if (formData && msgs.length !== 0) {
                viewData.firstname.input = formData.firstname;
                viewData.lastname.input = formData.lastname;
                viewData.username.input = formData.username;
                viewData.password.input = formData.password;
                viewData.password2.input = formData.password2;
                viewData.msgs = msgs;
            }

            this.loadPartials({
                navbar: '../views/partials/navbar.hbs',
                notifications: '../views/partials/notifications.hbs'
            }).then(function() {
                this.render('../views/users/signup.hbs', viewData).swap();
                (0, _interopRequireDefault(require("../helpers/clearStates"))["default"])(viewData);
            });
        }
    }, {
        key: "postSignup",
        value: function postSignup() {
            var _this2 = this;

            console.log('[postsignUp] Validate Signup Form');
            var _this = this.params,
                firstname = _this.firstname,
                lastname = _this.lastname,
                username = _this.username,
                password = _this.password,
                password2 = _this.password2;
            formData = {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password2: password2,
                password: password
            };
            var isValid = (0, _validation.signupValidation)(formData);

            if (!isValid) {
                this.redirect('#/user/signup');
                return;
            }

            console.log('[postSignUp] isValid');
            sharedData.isLoading = true;
            this.redirect('#/user/signup');
            db.signup(_defineProperty({
                username: username,
                password: password,
                firstname: firstname,
                lastname: lastname
            }, "username", username)).then(function(res) {
                console.log(res);
                msgs.push({
                    msg: 'User Created Successfully !',
                    "class": 'alert-success'
                });
                sharedData.isLoading = false;

                _this2.redirect('#/user/login');

                formData = {};
            })["catch"](function(err) {
                if (err.status === 409) {
                    console.log('[postSignUp] isInvalid');
                    msgs.push({
                        msg: 'Invalid credentials. Please retry your request with correct credentials',
                        "class": 'alert-danger'
                    });
                    sharedData.firstname = {};
                    sharedData.lastname = {};
                    sharedData.username = {};
                    sharedData.username.invalid = true;
                    sharedData.password = {};
                    sharedData.password2 = {};
                    sharedData.isLoading = false;
                    console.log(sharedData);

                    _this2.redirect('#/user/signup');
                }
            });
        }
    }, {
        key: "getLogout",
        value: function getLogout() {
            var _this3 = this;

            console.log('[getLogout] User Logged Out');
            var token = sessionStorage.getItem('loggedIn');
            db.logout(token).then(function(res) {
                msgs = [];
                msgs.push({
                    msg: 'Logged out Successfully !',
                    "class": 'alert-success'
                });
                sessionStorage.removeItem('loggedIn');
                sessionStorage.removeItem('userId');
                sessionStorage.removeItem('username');
                loggedIn = false;

                _this3.redirect('#/user/login');
            })["catch"](function(err) {
                msgs.push({
                    msg: err.statusText,
                    "class": 'alert-danger'
                });

                _this3.redirect('#/');
            });
        }
    }]);

    return User;
}();

exports["default"] = User;