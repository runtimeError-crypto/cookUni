/******/
(function() {


        /******/
        "use strict";
        /******/

        var __webpack_modules__ = {
                /***/
                "./src/app.js":


                /***/
                    function srcAppJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_recipeCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/recipeCtrl */ \"./src/controllers/recipeCtrl.js\");\n/* harmony import */ var _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/userCtrl */ \"./src/controllers/userCtrl.js\");\n/* harmony import */ var _helpers_kinvey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/kinvey */ \"./src/helpers/kinvey.js\");\n
                                /***/
                            },

                            /***/
                            "./src/controllers/recipeCtrl.js":


                            /***/
                            function srcControllersRecipeCtrlJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Recipe)\n/* harmony export */ });\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ \"./src/validation.js\");\n/* harmony import */ var _helpers_clearStates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/clearStates */ \"./src/helpers/clearStates.js\");\n/* harmony import */ var _helpers_username__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/username */ \"./src/helpers/username.js\");\n
                                        /***/
                                    },

                                    /***/
                                    "./src/controllers/userCtrl.js":


                                    /***/
                                    function srcControllersUserCtrlJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                                        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ \"./src/validation.js\");\n/* harmony import */ var _helpers_clearStates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/clearStates */ \"./src/helpers/clearStates.js\");\n\n 
                                                /***/
                                            },

                                            /***/
                                            "./src/helpers/clearStates.js":


                                            /***/
                                            function srcHelpersClearStatesJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                                                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearStates)\n/* harmony export */ });\nfunction clearStates(viewData) {\n  msgs = [];\n  sharedData = {};\n  viewData = {};\n}\n\n
                                                        /***/
                                                    },

                                                    /***/
                                                    "./src/helpers/kinvey.js":


                                                    /***/
                                                    function srcHelpersKinveyJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                                                        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Kinvey)\n/* harmony export */ });\nclass Kinvey {\n  constructor(app_id, app_secret) {\n    this.app_id = app_id;\n    this.app_secret = app_secret;\n  }\n\n  test(data) {\n    return new Promise((resolve, reject) => {\n      let url = `https:
                                                                /***/
                                                            },

                                                            /***/
                                                            "./src/helpers/username.js":


                                                            /***/
                                                            function srcHelpersUsernameJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                                                                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ username)\n/* harmony export */ });\nfunction username(viewData) {\n  viewData.firstname = sessionStorage.getItem('firstname');\n  viewData.lastname = sessionStorage.getItem('lastname');\n}\n\n
                                                                        /***/
                                                                    },

                                                                    /***/
                                                                    "./src/validation.js":


                                                                    /***/
                                                                    function srcValidationJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                                                                        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginValidation\": () => (/* binding */ loginValidation),\n/* harmony export */   \"signupValidation\": () => (/* binding */ signupValidation),\n/* harmony export */   \"createValidation\": () => (/* binding */ createValidation)\n/* harmony export */ });\nconst loginValidation = ({\n  username,\n  password\n}) => {\n  console.log('[Validation] Perform Login Validation');\n  sharedData = {\n    username: {},\n    password: {}\n  };\n\n  if (!username) {\n    msgs.push({\n      msg: 'Username is required',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Username is required');\n    sharedData.username.invalid = true;\n  } else if (!validator.isLength(username, {\n    min: 3\n  })) {\n    msgs.push({\n      msg: 'Username should be at least 3 characters',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Invaild character (a-z, A-Z, 0-9, _ . -) only');\n    sharedData.username.invalid = true;\n  } else {\n    sharedData.username.valid = true;\n  }\n\n  if (!password) {\n    msgs.push({\n      msg: 'Password Field is required',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Password Field is required');\n    sharedData.password.invalid = true;\n  } else if (!validator.isLength(password, {\n    min: 6,\n    max: 15\n  })) {\n    msgs.push({\n      msg: 'Password should be 6-15 characters',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Password should be 6-15 characters');\n    sharedData.password.invalid = true;\n  } else {\n    sharedData.password.valid = true;\n  }\n\n  let isValid = msgs.length === 0;\n  return isValid;\n};\nconst signupValidation = ({\n  firstname,\n  lastname,\n  username,\n  password,\n  password2\n}) => {\n  console.log('[Validation] Perform Signup Validation');\n  loginValidation({\n    username,\n    password\n  });\n  sharedData.password2 = {};\n  sharedData.firstname = {};\n  sharedData.firstname.name = firstname;\n  sharedData.lastname = {};\n  sharedData.lastname.name = lastname;\n\n  if (!firstname) {\n    msgs.push({\n      msg: 'First name field is required',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] First name field is required');\n    sharedData.firstname.invalid = true;\n  } else {\n    sharedData.firstname.valid = true;\n  }\n\n  if (!lastname) {\n    msgs.push({\n      msg: 'Last name field is required',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Last name field is required');\n    sharedData.lastname.invalid = true;\n  } else {\n    sharedData.lastname.valid = true;\n  }\n\n  if (!password2) {\n    msgs.push({\n      msg: 'Confirmed Password Field is required',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Confirmed Password Field is required');\n    sharedData.password2.invalid = true;\n  } else if (!validator.equals(password, password2)) {\n    msgs.push({\n      msg: 'Password not matching',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Password not matching');\n    sharedData.password2.invalid = true;\n  } else {\n    sharedData.password2.valid = true;\n  }\n\n  let isValid = msgs.length === 0;\n  return isValid;\n};\nconst createValidation = ({\n  meal,\n  ingredients,\n  prepMethod,\n  description,\n  foodImageURL,\n  category\n}) => {\n  console.log('[Validation] Perform New/Edit Recipe Validation');\n  msgCounter = 0; 
                                                                                /***/
                                                                            }
                                                                            /******/

                                                                    };



                                                                var __webpack_module_cache__ = {};

                                                                function __webpack_require__(moduleId) {
                                                                    /******/
                                                                    var cachedModule = __webpack_module_cache__[moduleId];
                                                                    /******/

                                                                    if (cachedModule !== undefined) {

                                                                        return cachedModule.exports;
                                                                        /******/
                                                                    }






                                                                    var module = __webpack_module_cache__[moduleId] = {
                                                                        /******/


                                                                        /******/


                                                                        /******/
                                                                        exports: {}
                                                                        /******/

                                                                    };
                                                                    /******/

                                                                    /******/


                                                                    /******/

                                                                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                                                                    /******/

                                                                    /******/


                                                                    /******/


                                                                    return module.exports;
                                                                    /******/
                                                                }
                                                                /******/

                                                                /************************************************************************/

                                                                /******/



                                                                /******/


                                                                (function() {
                                                                    /******/


                                                                    /******/
                                                                    __webpack_require__.d = function(exports, definition) {
                                                                        /******/
                                                                        for (var key in definition) {
                                                                            /******/
                                                                            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                                                                                /******/
                                                                                Object.defineProperty(exports, key, {
                                                                                    enumerable: true,
                                                                                    get: definition[key]
                                                                                });
                                                                                /******/
                                                                            }
                                                                            /******/

                                                                        }
                                                                        /******/

                                                                    };
                                                                    /******/

                                                                })();
                                                                /******/

                                                                /******/



                                                                /******/


                                                                (function() {
                                                                    /******/
                                                                    __webpack_require__.o = function(obj, prop) {
                                                                        return Object.prototype.hasOwnProperty.call(obj, prop);
                                                                    };
                                                                    /******/

                                                                })();
                                                                /******/

                                                                /******/



                                                                /******/


                                                                (function() {
                                                                    /******/


                                                                    /******/
                                                                    __webpack_require__.r = function(exports) {
                                                                        /******/
                                                                        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                                                                            /******/
                                                                            Object.defineProperty(exports, Symbol.toStringTag, {
                                                                                value: 'Module'
                                                                            });
                                                                            /******/
                                                                        }
                                                                        /******/


                                                                        Object.defineProperty(exports, '__esModule', {
                                                                            value: true
                                                                        });
                                                                        /******/
                                                                    };
                                                                    /******/

                                                                })();
                                                                /******/

                                                                /************************************************************************/

                                                                /******/

                                                                /******/


                                                                /******/


                                                                /******/


                                                                /******/


                                                                var __webpack_exports__ = __webpack_require__("./src/app.js");
                                                                /******/

                                                                /******/

                                                            })();