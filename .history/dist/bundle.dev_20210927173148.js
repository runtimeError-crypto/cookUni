"use strict";

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.o rg/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */

/******/
(function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./src/app.js":
    /*!********************!*\
      !*** ./src/app.js ***!
      \********************/

    /***/
    function srcAppJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_recipeCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/recipeCtrl */ \"./src/controllers/recipeCtrl.js\");\n/* harmony import */ var _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/userCtrl */ \"./src/controllers/userCtrl.js\");\n/* harmony import */ var _helpers_kinvey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/kinvey */ \"./src/helpers/kinvey.js\");\n//Setup Sammy.js\n\n\n\nwindow.allRecipes = []; //dom data\n\nwindow.msgs = []; // hold all the notification messages that are generated based on user interaction\n\nwindow.msgCounter = 0;\nwindow.formData = {}; // holds the data that the user entered into forms\n\nwindow.sharedData = {}; // data that is passed to the views\n\nwindow.loggedIn = false; // determines the logged in state of the user\n\nwindow.db = new _helpers_kinvey__WEBPACK_IMPORTED_MODULE_2__.default('kid_HJNicPfqd', '76e60e033b7444d79f8f4df192c76590'); //Initialize Sammy\n\nconst app = Sammy('#rooter', function () {\n  this.use('Handlebars', 'hbs');\n  db.get('recipes', null, {\n    username: 'guest',\n    password: 'guest'\n  }).then(res => {\n    allRecipes = res;\n  });\n  const recipeCtrl = new _controllers_recipeCtrl__WEBPACK_IMPORTED_MODULE_0__.default();\n  const userCtrl = new _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_1__.default(); //@route    GET  /\n  //@desc     render Home Page for a logged-In user\n  //@access   Public\n\n  this.get('#/', recipeCtrl.getHome); //@route    GET  /recipes/share\n  //@desc     render shared recipes\n  //@access   Public\n\n  this.get('#/recipes/share', recipeCtrl.getShareRecipe); //@route    POST  /recipes/share\n  //@desc     render shared recipes\n  //@access   Public\n\n  this.post('#/recipes/share', recipeCtrl.postShareRecipe); //@route    GET  /user/login\n  //@desc     render user login page\n  //@access   Private\n\n  this.get('#/user/login', userCtrl.getLogin); //@route    POST  /user/login\n  //@desc     process and login users\n  //@access   Private\n\n  this.post('#/user/login', userCtrl.postLogin); //@route    GET  /user/signup\n  //@desc     render signup Page \n  //@access   Public\n\n  this.get('#/user/signup', userCtrl.getSignup); //@route    POST  /user/signup\n  //@desc     process and sigup users\n  //@access   Private\n\n  this.post('#/user/signup', userCtrl.postSignup); //@route    GET  /user/logout\n  //@desc     logoout a user \n  //@access   Private\n\n  this.get('#/user/logout', userCtrl.getLogout); //@route    GET  /recipes/details/:id\n  //@desc     render recipes/ details view\n  //@access   Public\n  // this.get('/recipes/details/:id', recipeCtrl.getDetails);\n\n  this.get('#/details/:id', recipeCtrl.getDetails); //@route    GET  /recipe/archive/:id\n  //@desc     Archive a recipe\n  //@access   Private\n\n  this.get('#/recipe/archive/:id', recipeCtrl.getArchive); //@route    GET  /recipe/edit/:id\n  //@desc     Edit a recipe\n  //@access   Private\n\n  this.get('#/recipe/edit/:id', recipeCtrl.getEdit); //@route    POST  /recipe/edit/:id\n  //@desc     Edit a recipe\n  //@access   Private\n\n  this.post('#/recipe/edit', recipeCtrl.postEdit); //@route    POST  /recipe/details/like\n  //@desc     Like a recipe\n  //@access   Private\n\n  this.get('#/recipe/like/:id', recipeCtrl.getLike);\n});\napp.run('#/');\n\n//# sourceURL=webpack://routinglab-v1/./src/app.js?");
      /***/
    },

    /***/
    "./src/controllers/recipeCtrl.js":
    /*!***************************************!*\
      !*** ./src/controllers/recipeCtrl.js ***!
      \***************************************/

    /***/
    function srcControllersRecipeCtrlJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Recipe)\n/* harmony export */ });\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ \"./src/validation.js\");\n/* harmony import */ var _helpers_clearStates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/clearStates */ \"./src/helpers/clearStates.js\");\n/* harmony import */ var _helpers_username__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/username */ \"./src/helpers/username.js\");\n// import clearStates from '../helpers/clearStates';\n\n\n\nclass Recipe {\n  getHome() {\n    console.log('[getHome] Display Home Page');\n    const firstname = sessionStorage.getItem('firstname');\n    const lastname = sessionStorage.getItem('lastname');\n    const viewData = { ...sharedData,\n      homeActive: true,\n      firstname,\n      lastname,\n      loggedIn,\n      msgs\n    };\n\n    if (allRecipes.length != 0) {\n      console.log('[getHome] No Need To Fetch From The Server'); // No need to fetch from the server \n\n      viewData.allRecipes = allRecipes;\n      viewData.isLoading = false;\n\n      if (viewData.loggedIn && allRecipes.length > 0) {\n        viewData.displayRecipes = true;\n      } else {\n        viewData.displayRecipes = false;\n      }\n\n      this.loadPartials({\n        navbar: '../views/partials/navbar.hbs',\n        notifications: '../views/partials/notifications.hbs',\n        footer: '../views/partials/footer.hbs'\n      }).then(function () {\n        this.render('../views/app/home.hbs', viewData).swap();\n        (0,_helpers_clearStates__WEBPACK_IMPORTED_MODULE_1__.default)();\n      });\n    } else {\n      console.log('[getHome] Fetch From The Server'); //Go and fetch from server\n\n      this.loadPartials({\n        navbar: '../views/partials/navbar.hbs',\n        notifications: '../views/partials/notifications.hbs',\n        footer: '../views/partials/footer.hbs'\n      }).then(function () {\n        viewData.isLoading = true;\n        this.render('../views/app/home.hbs', viewData).swap();\n        db.get('recipes', null, {\n          username: 'guest',\n          password: 'guest'\n        }).then(res => {\n          allRecipes = res;\n          viewData.allRecipes = res;\n\n          if (viewData.loggedIn && allRecipes.length > 0) {\n            viewData.displayRecipes = true;\n          } else {\n            viewData.displayRecipes = false;\n          }\n\n          viewData.isLoading = false;\n          this.render('../views/app/home.hbs', viewData).swap();\n          (0,_helpers_clearStates__WEBPACK_IMPORTED_MODULE_1__.default)();\n        });\n      });\n    }\n  }\n\n  getShareRecipe() {\n    console.log('[getShareRecipe] Display New Recipe Form Layout');\n    formData = {};\n    const viewData = { ...sharedData,\n      addActive: true,\n      loggedIn\n    };\n    (0,_helpers_username__WEBPACK_IMPORTED_MODULE_2__.default)(viewData);\n\n    if (formData && msgCounter != 0) {\n      const options = {\n        'Vegetables and legumes/beans': 'option1',\n        'Fruits': 'option2',\n        'Grain Food': 'option3',\n        'Milk, cheese, eggs and alternatives': 'option4',\n        'Lean meats and poultry, fish and alternatives': 'option5'\n      };\n      const selected = options[sessionStorage.getItem('categorySelection')];\n      msgCounter = 0; //reset counter\n\n      viewData.meal.input = sharedData.meal.input;\n      viewData.ingredients.input = sharedData.ingredients.input;\n      viewData.prepMethod.input = sharedData.prepMethod.input;\n      viewData.description.input = sharedData.description.input;\n      viewData.foodImageURL.input = sharedData.foodImageURL.input;\n      viewData.category.input = sharedData.category.input;\n      viewData.category.input = sharedData.category.input;\n      viewData[selected] = true;\n      viewData.msgs = msgs;\n    }\n\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs',\n      notifications: '../views/partials/notifications.hbs',\n      footer: '../views/partials/footer.hbs'\n    }).then(function () {\n      this.render('../views/app/share.hbs', viewData).swap();\n    });\n  }\n\n  postShareRecipe() {\n    console.log('[postShareRecipe] Validate the Recipe Form');\n    let {\n      meal,\n      ingredients,\n      prepMethod,\n      description,\n      foodImageURL,\n      category\n    } = this.params;\n    formData = {\n      meal,\n      ingredients,\n      prepMethod,\n      description,\n      foodImageURL,\n      category\n    };\n    let isValid = (0,_validation__WEBPACK_IMPORTED_MODULE_0__.createValidation)(formData);\n\n    if (isValid) {\n      //Ingredients Array\n      formData.ingredients = ingredients.split(', ');\n      const titleIngredients = formData.ingredients.filter((item, index) => index < 4);\n      const [categorySelection, categoryURL] = category.split('..***..');\n      let likes = [sessionStorage.getItem('userId')];\n      const data = {\n        category: categorySelection,\n        categoryImageURL: categoryURL,\n        likesCounter: 1,\n        likes,\n        titleIngredients\n      };\n      msgCounter = 0; //reset counter\n\n      let serverData = { ...formData,\n        user: sessionStorage.getItem('userId'),\n        ...data\n      }; //server request\n\n      db.post('recipes', serverData, sessionStorage.getItem('loggedIn')).then(res => {\n        //update the local recipes array\n        allRecipes.push({ ...serverData,\n          _id: res._id\n        }); //display user message\n\n        msgs.push({\n          msg: 'Loading',\n          class: 'alert-primary'\n        });\n        msgs.push({\n          msg: 'Recipe created successfully!',\n          class: 'alert-success'\n        }); //send user to home page\n\n        this.redirect('#/');\n      });\n    } else {\n      this.redirect('#/recipes/share');\n    }\n  }\n\n  getDetails() {\n    console.log('[getDetails] Display Recipe Details Layout'); //locate the selected recipe from the allRecipes array\n\n    const viewRecipe = allRecipes.find(item => item._id.toString() === this.params.id); //check if recipe more than 1 like (change text to \"likes\")\n\n    let hasLikes = false;\n    viewRecipe.likes.length > 0 ? hasLikes = true : hasLikes = false; //check if recipe has only 1 like (change text to \"like\")\n\n    let hasOnlyOneLike = false;\n    viewRecipe.likes.length == 1 ? hasOnlyOneLike = true : hasOnlyOneLike = false;\n    viewRecipe.msgs = []; //compose the sharedData array\n\n    sharedData = {};\n    sharedData.activeUserId = sessionStorage.getItem('userId');\n    sharedData.firstname = sessionStorage.getItem('firstname');\n    sharedData.lastname = sessionStorage.getItem('lastname');\n    sharedData.recipeId = viewRecipe._id; //check if the viewer is the same person that created the recipe.\n    // If so, hide the like button and show the edit buttons.\n\n    let likeButton;\n    let editButtons;\n    viewRecipe.user === sharedData.activeUserId ? likeButton = true : likeButton = false;\n    viewRecipe.user === sharedData.activeUserId ? editButtons = false : editButtons = true; //compose the object that wiil be passed to the DETAILS view\n\n    const viewData = { ...viewRecipe,\n      ...sharedData,\n      homeActive: true,\n      loggedIn,\n      likeButton,\n      editButtons,\n      hasLikes,\n      hasOnlyOneLike\n    }; //load recipe\n\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs',\n      notifications: '../views/partials/notifications.hbs',\n      footer: '../views/partials/footer.hbs'\n    }).then(function () {\n      this.render('../views/app/details.hbs', viewData).swap();\n    });\n  }\n\n  getArchive() {\n    console.log('[getArchive] Remove Recipe From Database');\n    let id = this.params.id;\n    console.log('Archive: ' + id); //remove/archive the recipe from the database\n\n    db.delete('recipes', id, sessionStorage.getItem('loggedIn')).then(() => {\n      //remove/archive the recipe from the allRecipes array\n      allRecipes = allRecipes.filter(recipe => recipe._id !== id); //return user to the home page\n\n      this.redirect('#/'); //notify the user\n\n      msgs.push({\n        msg: 'Your recipe was archived.',\n        class: 'alert-success'\n      });\n    });\n  }\n\n  getEdit() {\n    console.log('[getEdit] Display Edit Recipe Form');\n    let id = this.params.id;\n    let recipetoEdit = allRecipes.find(recipe => recipe._id == id);\n    const viewData = {\n      homeActive: true,\n      editmode: true,\n      loggedIn,\n      id: recipetoEdit._id,\n      likes: recipetoEdit.likes,\n      likesCounter: recipetoEdit.likesCounter,\n      ...sharedData\n    };\n\n    if (msgCounter > 0) {\n      console.log('[getEdit] editmode');\n      viewData.meal.input = formData.meal;\n      viewData.ingredients.input = formData.ingredients;\n      viewData.prepMethod.input = formData.prepMethod;\n      viewData.description.input = formData.description;\n      viewData.foodImageURL.input = formData.foodImageURL;\n      viewData.category.input = formData.category;\n    } else {\n      console.log('[getEdit] regular mode');\n      viewData.meal = {\n        input: recipetoEdit.meal\n      };\n      viewData.ingredients = {\n        input: recipetoEdit.ingredients.join(', ')\n      };\n      viewData.prepMethod = {\n        input: recipetoEdit.prepMethod\n      };\n      viewData.description = {\n        input: recipetoEdit.description\n      };\n      viewData.foodImageURL = {\n        input: recipetoEdit.foodImageURL\n      };\n      viewData.category = {\n        input: recipetoEdit.category\n      };\n      viewData.categoryImageURL = {\n        input: recipetoEdit.categoryImageURL\n      };\n    }\n\n    viewData.editMode = true; //set the dropdown menu with the proper selected category\n\n    const options = {\n      'Vegetables and legumes/beans': 'option1',\n      'Fruits': 'option2',\n      'Grain Food': 'option3',\n      'Milk, cheese, eggs and alternatives': 'option4',\n      'Lean meats and poultry, fish and alternatives': 'option5'\n    };\n    const selected = options[recipetoEdit.category];\n    viewData[selected] = true;\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs',\n      notifications: '../views/partials/notifications.hbs',\n      footer: '../views/partials/footer.hbs'\n    }).then(function () {\n      this.render('../views/app/share.hbs', viewData).swap();\n    });\n  }\n\n  postEdit() {\n    console.log('[postEdit] Post Edit');\n    let {\n      meal,\n      ingredients,\n      prepMethod,\n      description,\n      foodImageURL,\n      category,\n      id,\n      likesCounter,\n      likes\n    } = this.params;\n    formData = {\n      meal,\n      ingredients,\n      prepMethod,\n      description,\n      foodImageURL,\n      category\n    };\n    let isValid = (0,_validation__WEBPACK_IMPORTED_MODULE_0__.createValidation)(formData);\n\n    if (isValid) {\n      console.log('[postEdit] Edit isValid');\n      msgCounter = 0; //reset counter\n      //Ingredients Array\n\n      formData.ingredients = ingredients.split(', ');\n      const titleIngredients = formData.ingredients.filter((item, index) => index < 4);\n      const [categorySelection, categoryURL] = category.split('..***..'); //update the form data\n\n      formData.category = categorySelection;\n      formData.categoryImageURL = categoryURL;\n      const data = {\n        category: categorySelection,\n        categoryImageURL: categoryURL,\n        titleIngredients,\n        likes,\n        likesCounter\n      };\n      let serverData = { ...formData,\n        user: sessionStorage.getItem('userId'),\n        ...data\n      };\n      db.edit('recipes', id, serverData, sessionStorage.getItem('loggedIn')).then(res => {\n        msgs.push({\n          msg: 'Recipe successully updated!',\n          class: 'alert-success'\n        });\n        let index = allRecipes.findIndex(recipe => recipe._id == id);\n        allRecipes[index] = { ...serverData,\n          _id: id\n        };\n        this.redirect('#/');\n      });\n    } else {\n      console.log('[postEdit] Edit invalid');\n      this.redirect(`#/recipe/edit/${id}`);\n    }\n  }\n\n  getLike() {\n    console.log('[getLike] Validate Like Request');\n    let id = this.params.id;\n    let userId = sessionStorage.getItem('userId'); //capture the recipe that is to be liked\n\n    let index = allRecipes.findIndex(recipe => recipe._id == id); // check if user has already liked this recipe\n\n    if (allRecipes[index].likes.includes(userId)) {\n      console.log('[getLike] User Removed Like'); //append local copy of the recipe properties (count & id from array)\n\n      allRecipes[index].likesCounter--;\n      allRecipes[index].likes = allRecipes[index].likes.filter(id => id != userId);\n      msgs.push({\n        msg: 'You no longer like that recipe.',\n        class: 'alert-success'\n      });\n    } else {\n      console.log('[getLike] User Added Like'); //append local copy of the recipe properties (count & id from array)\n\n      allRecipes[index].likesCounter++;\n      allRecipes[index].likes.push(userId);\n      msgs.push({\n        msg: 'You liked that recipe.',\n        class: 'alert-success'\n      });\n    }\n\n    const viewData = allRecipes[index];\n    db.edit('recipes', id, viewData, sessionStorage.getItem('loggedIn')).then(res => {\n      //return user to the details page\n      this.redirect('#/');\n    });\n  }\n\n}\n\n//# sourceURL=webpack://routinglab-v1/./src/controllers/recipeCtrl.js?");
      /***/
    },

    /***/
    "./src/controllers/userCtrl.js":
    /*!*************************************!*\
      !*** ./src/controllers/userCtrl.js ***!
      \*************************************/

    /***/
    function srcControllersUserCtrlJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation */ \"./src/validation.js\");\n/* harmony import */ var _helpers_clearStates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/clearStates */ \"./src/helpers/clearStates.js\");\n\n // function clearStates(viewData) {\n//     msgs = [];\n//     sharedData = {}; //validation data? \n//     viewData = {}\n// }\n\nclass User {\n  getLogin() {\n    console.log('[getLogin] Display Login Page');\n    const viewData = { ...sharedData,\n      loginActive: true,\n      loggedIn\n    };\n\n    if (formData && msgs.length !== 0) {\n      viewData.username ? viewData.username.input = formData.username : '';\n      viewData.password ? viewData.password.input = formData.password : '';\n      viewData.msgs = msgs;\n    }\n\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs',\n      notifications: '../views/partials/notifications.hbs'\n    }).then(function () {\n      this.render('../views/users/login.hbs', viewData).swap();\n      (0,_helpers_clearStates__WEBPACK_IMPORTED_MODULE_1__.default)(viewData);\n    });\n  }\n\n  postLogin() {\n    console.log('[postLogin] Validate User Login');\n    const {\n      username,\n      password\n    } = this.params;\n    formData = {\n      username,\n      password\n    };\n    let isValid = (0,_validation__WEBPACK_IMPORTED_MODULE_0__.loginValidation)(formData);\n\n    if (!isValid) {\n      this.redirect('#/user/login');\n      return;\n    }\n\n    sharedData.isLoading = true;\n    this.redirect('#/user/login');\n    db.login({\n      username,\n      password\n    }).then(jsonRes => {\n      sessionStorage.setItem('userId', jsonRes._id);\n      sessionStorage.setItem('firstname', jsonRes.firstname);\n      sessionStorage.setItem('lastname', jsonRes.lastname);\n      sessionStorage.setItem('loggedIn', jsonRes._kmd.authtoken);\n      loggedIn = true;\n      msgs.push({\n        msg: 'Logged In successully!',\n        class: 'alert-success'\n      });\n      sharedData.isLoading = false;\n      this.redirect('#/');\n    }).catch(err => {\n      msgs.push({\n        msg: 'Invalid credentials. Please retry your request with correct credentials',\n        class: 'alert-danger'\n      });\n      sharedData.username = {};\n      sharedData.username.invalid = true;\n      sharedData.password = {};\n      sharedData.isLoading = false;\n      this.redirect('#/user/login');\n    });\n  }\n\n  getSignup() {\n    console.log('[getSignUp] Display Signup Form');\n    const viewData = { ...sharedData,\n      signupActive: true,\n      loggedIn\n    };\n\n    if (formData && msgs.length !== 0) {\n      viewData.firstname.input = formData.firstname;\n      viewData.lastname.input = formData.lastname;\n      viewData.username.input = formData.username;\n      viewData.password.input = formData.password;\n      viewData.password2.input = formData.password2;\n      viewData.msgs = msgs;\n    }\n\n    this.loadPartials({\n      navbar: '../views/partials/navbar.hbs',\n      notifications: '../views/partials/notifications.hbs'\n    }).then(function () {\n      this.render('../views/users/signup.hbs', viewData).swap();\n      (0,_helpers_clearStates__WEBPACK_IMPORTED_MODULE_1__.default)(viewData);\n    });\n  }\n\n  postSignup() {\n    console.log('[postsignUp] Validate Signup Form');\n    const {\n      firstname,\n      lastname,\n      username,\n      password,\n      password2\n    } = this.params;\n    formData = {\n      firstname,\n      lastname,\n      username,\n      password2,\n      password\n    };\n    let isValid = (0,_validation__WEBPACK_IMPORTED_MODULE_0__.signupValidation)(formData);\n\n    if (!isValid) {\n      this.redirect('#/user/signup');\n      return;\n    }\n\n    console.log('[postSignUp] isValid');\n    sharedData.isLoading = true;\n    this.redirect('#/user/signup');\n    db.signup({\n      username,\n      password,\n      firstname,\n      lastname,\n      username\n    }).then(res => {\n      console.log(res);\n      msgs.push({\n        msg: 'User Created Successfully !',\n        class: 'alert-success'\n      });\n      sharedData.isLoading = false;\n      this.redirect('#/user/login');\n      formData = {};\n    }).catch(err => {\n      if (err.status === 409) {\n        console.log('[postSignUp] isInvalid');\n        msgs.push({\n          msg: 'Invalid credentials. Please retry your request with correct credentials',\n          class: 'alert-danger'\n        });\n        sharedData.firstname = {};\n        sharedData.lastname = {};\n        sharedData.username = {};\n        sharedData.username.invalid = true;\n        sharedData.password = {};\n        sharedData.password2 = {};\n        sharedData.isLoading = false;\n        console.log(sharedData);\n        this.redirect('#/user/signup');\n      }\n    });\n  }\n\n  getLogout() {\n    console.log('[getLogout] User Logged Out');\n    let token = sessionStorage.getItem('loggedIn');\n    db.logout(token).then(res => {\n      msgs = [];\n      msgs.push({\n        msg: 'Logged out Successfully !',\n        class: 'alert-success'\n      });\n      sessionStorage.removeItem('loggedIn');\n      sessionStorage.removeItem('userId');\n      sessionStorage.removeItem('username');\n      loggedIn = false;\n      this.redirect('#/user/login');\n    }).catch(err => {\n      msgs.push({\n        msg: err.statusText,\n        class: 'alert-danger'\n      });\n      this.redirect('#/');\n    });\n  }\n\n}\n\n//# sourceURL=webpack://routinglab-v1/./src/controllers/userCtrl.js?");
      /***/
    },

    /***/
    "./src/helpers/clearStates.js":
    /*!************************************!*\
      !*** ./src/helpers/clearStates.js ***!
      \************************************/

    /***/
    function srcHelpersClearStatesJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearStates)\n/* harmony export */ });\nfunction clearStates(viewData) {\n  msgs = [];\n  sharedData = {};\n  viewData = {};\n}\n\n//# sourceURL=webpack://routinglab-v1/./src/helpers/clearStates.js?");
      /***/
    },

    /***/
    "./src/helpers/kinvey.js":
    /*!*******************************!*\
      !*** ./src/helpers/kinvey.js ***!
      \*******************************/

    /***/
    function srcHelpersKinveyJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Kinvey)\n/* harmony export */ });\nclass Kinvey {\n  constructor(app_id, app_secret) {\n    this.app_id = app_id;\n    this.app_secret = app_secret;\n  }\n\n  test(data) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/appdata/${this.app_id}`;\n      let {\n        username,\n        password\n      } = data;\n      let headers = {\n        'Content-Type': 'application/json',\n        'Authorization': 'Basic ' + btoa(username + \":\" + password)\n      };\n      fetch(url, {\n        method: 'GET',\n        headers: headers\n      }).then(res => {\n        if (res.ok) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n\n  get(endpoint, authToken, loginData) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/appdata/${this.app_id}/${endpoint}`;\n      let headers;\n\n      if (loginData) {\n        let {\n          username,\n          password\n        } = loginData;\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Basic ' + btoa(username + \":\" + password)\n        };\n      }\n\n      if (authToken) {\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Kinvey ' + authToken\n        };\n      }\n\n      fetch(url, {\n        method: 'GET',\n        headers: headers\n      }).then(res => {\n        if (res.ok) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n\n  post(endpoint, data, authToken, loginData) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/appdata/${this.app_id}/${endpoint}`;\n      let headers;\n\n      if (loginData) {\n        let {\n          username,\n          password\n        } = loginData;\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Basic ' + btoa(username + \":\" + password)\n        };\n      }\n\n      if (authToken) {\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Kinvey ' + authToken\n        };\n      }\n\n      fetch(url, {\n        method: 'POST',\n        headers: headers,\n        body: JSON.stringify(data)\n      }).then(res => {\n        if (res.status === 201) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n\n  delete(endpoint, id, authToken, loginData) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/appdata/${this.app_id}/${endpoint}/${id}`;\n      let headers;\n\n      if (loginData) {\n        let {\n          username,\n          password\n        } = loginData;\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Basic ' + btoa(username + \":\" + password)\n        };\n      }\n\n      if (authToken) {\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Kinvey ' + authToken\n        };\n      }\n\n      fetch(url, {\n        method: 'DELETE',\n        headers: headers\n      }).then(res => {\n        if (res.ok) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n\n  edit(endpoint, id, data, authToken, loginData) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/appdata/${this.app_id}/${endpoint}/${id}`;\n      let headers;\n\n      if (loginData) {\n        let {\n          username,\n          password\n        } = loginData;\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Basic ' + btoa(username + \":\" + password)\n        };\n      }\n\n      if (authToken) {\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Kinvey ' + authToken\n        };\n      }\n\n      fetch(url, {\n        method: 'PUT',\n        headers: headers,\n        body: JSON.stringify(data)\n      }).then(res => {\n        if (res.ok) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n\n  update(endpoint, id, data, authToken, loginData) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/appdata/${this.app_id}/${endpoint}/${id}`;\n      let headers;\n\n      if (loginData) {\n        let {\n          username,\n          password\n        } = loginData;\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Basic ' + btoa(username + \":\" + password)\n        };\n      }\n\n      if (authToken) {\n        headers = {\n          'Content-Type': 'application/json',\n          'Authorization': 'Kinvey ' + authToken\n        };\n      }\n\n      fetch(url, {\n        method: 'PATCH',\n        headers: headers,\n        body: JSON.stringify(data)\n      }).then(res => {\n        if (res.ok) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n\n  signup(data) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/user/${this.app_id}`;\n      const headers = {\n        'Content-Type': 'application/json',\n        'Authorization': 'Basic ' + btoa(this.app_id + \":\" + this.app_secret)\n      };\n      fetch(url, {\n        method: 'POST',\n        headers: headers,\n        body: JSON.stringify(data)\n      }).then(res => {\n        if (res.status === 201) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data._kmd.authtoken)).catch(err => reject(err));\n    });\n  }\n\n  login(data) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/user/${this.app_id}/login`;\n      let {\n        username,\n        password\n      } = data;\n      const headers = {\n        'Content-Type': 'application/json',\n        'Authorization': 'Basic ' + btoa(username + \":\" + password)\n      };\n      fetch(url, {\n        method: 'POST',\n        headers: headers,\n        body: JSON.stringify(data)\n      }).then(res => {\n        if (res.ok) {\n          return res.json();\n        }\n\n        throw res;\n      }).then(data => resolve(data)).catch(err => reject(err));\n    });\n  }\n\n  logout(authToken) {\n    return new Promise((resolve, reject) => {\n      let url = `https://baas.kinvey.com/user/${this.app_id}/_logout`;\n      const headers = {\n        'Content-Type': 'application/json',\n        'Authorization': 'Kinvey ' + authToken\n      };\n      fetch(url, {\n        method: 'POST',\n        headers: headers\n      }).then(res => {\n        if (res.status === 204) {\n          resolve({\n            msg: 'user logged out'\n          });\n        }\n      }).catch(err => reject(err));\n    });\n  }\n\n}\n\n//# sourceURL=webpack://routinglab-v1/./src/helpers/kinvey.js?");
      /***/
    },

    /***/
    "./src/helpers/username.js":
    /*!*********************************!*\
      !*** ./src/helpers/username.js ***!
      \*********************************/

    /***/
    function srcHelpersUsernameJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ username)\n/* harmony export */ });\nfunction username(viewData) {\n  viewData.firstname = sessionStorage.getItem('firstname');\n  viewData.lastname = sessionStorage.getItem('lastname');\n}\n\n//# sourceURL=webpack://routinglab-v1/./src/helpers/username.js?");
      /***/
    },

    /***/
    "./src/validation.js":
    /*!***************************!*\
      !*** ./src/validation.js ***!
      \***************************/

    /***/
    function srcValidationJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginValidation\": () => (/* binding */ loginValidation),\n/* harmony export */   \"signupValidation\": () => (/* binding */ signupValidation),\n/* harmony export */   \"createValidation\": () => (/* binding */ createValidation)\n/* harmony export */ });\nconst loginValidation = ({\n  username,\n  password\n}) => {\n  console.log('[Validation] Perform Login Validation');\n  sharedData = {\n    username: {},\n    password: {}\n  };\n\n  if (!username) {\n    msgs.push({\n      msg: 'Username is required',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Username is required');\n    sharedData.username.invalid = true;\n  } else if (!validator.isLength(username, {\n    min: 3\n  })) {\n    msgs.push({\n      msg: 'Username should be at least 3 characters',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Invaild character (a-z, A-Z, 0-9, _ . -) only');\n    sharedData.username.invalid = true;\n  } else {\n    sharedData.username.valid = true;\n  }\n\n  if (!password) {\n    msgs.push({\n      msg: 'Password Field is required',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Password Field is required');\n    sharedData.password.invalid = true;\n  } else if (!validator.isLength(password, {\n    min: 6,\n    max: 15\n  })) {\n    msgs.push({\n      msg: 'Password should be 6-15 characters',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Password should be 6-15 characters');\n    sharedData.password.invalid = true;\n  } else {\n    sharedData.password.valid = true;\n  }\n\n  let isValid = msgs.length === 0;\n  return isValid;\n};\nconst signupValidation = ({\n  firstname,\n  lastname,\n  username,\n  password,\n  password2\n}) => {\n  console.log('[Validation] Perform Signup Validation');\n  loginValidation({\n    username,\n    password\n  });\n  sharedData.password2 = {};\n  sharedData.firstname = {};\n  sharedData.firstname.name = firstname;\n  sharedData.lastname = {};\n  sharedData.lastname.name = lastname;\n\n  if (!firstname) {\n    msgs.push({\n      msg: 'First name field is required',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] First name field is required');\n    sharedData.firstname.invalid = true;\n  } else {\n    sharedData.firstname.valid = true;\n  }\n\n  if (!lastname) {\n    msgs.push({\n      msg: 'Last name field is required',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Last name field is required');\n    sharedData.lastname.invalid = true;\n  } else {\n    sharedData.lastname.valid = true;\n  }\n\n  if (!password2) {\n    msgs.push({\n      msg: 'Confirmed Password Field is required',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Confirmed Password Field is required');\n    sharedData.password2.invalid = true;\n  } else if (!validator.equals(password, password2)) {\n    msgs.push({\n      msg: 'Password not matching',\n      class: 'alert-danger'\n    });\n    console.log('[Validation] Password not matching');\n    sharedData.password2.invalid = true;\n  } else {\n    sharedData.password2.valid = true;\n  }\n\n  let isValid = msgs.length === 0;\n  return isValid;\n};\nconst createValidation = ({\n  meal,\n  ingredients,\n  prepMethod,\n  description,\n  foodImageURL,\n  category\n}) => {\n  console.log('[Validation] Perform New/Edit Recipe Validation');\n  msgCounter = 0; //reset counter\n\n  const ingredientsArray = ingredients.split(', ');\n  const [categorySelection, categoryURL] = category.split('..***..');\n\n  if (!meal) {\n    sharedData.meal = {\n      invalid: true,\n      valid: false,\n      msg: 'Provide Meal'\n    };\n    msgCounter++;\n    console.log('[Validation] Provide Meal');\n  } else if (!validator.isLength(meal, {\n    min: 4\n  })) {\n    sharedData.meal = {\n      invalid: true,\n      valid: false,\n      msg: 'Meal should be at least 4 characters'\n    };\n    console.log('[Validation] Meal should be at least 4 characters');\n    msgCounter++;\n  } else {\n    sharedData.meal = {\n      valid: true,\n      invalid: false,\n      input: meal\n    };\n  }\n\n  if (!ingredients) {\n    sharedData.ingredients = {\n      invalid: true,\n      valid: false,\n      msg: 'Provide ingredients'\n    };\n    console.log('[Validation] Provide ingredients');\n    msgCounter++;\n  } else if (ingredientsArray.length < 2 || ingredientsArray[1] === ',') {\n    sharedData.ingredients = {\n      invalid: true,\n      valid: false,\n      msg: 'You need to provide at least 2 ingredients seperated with a comma and a space'\n    };\n    console.log('[Validation] You need to provide at least 2 ingredients seperated with a comma and a space');\n    msgCounter++;\n  } else {\n    sharedData.ingredients = {\n      valid: true,\n      invalid: false,\n      input: ingredients\n    };\n  }\n\n  if (!prepMethod) {\n    sharedData.prepMethod = {\n      invalid: true,\n      valid: false,\n      msg: 'Provide preparation Method'\n    };\n    console.log('[Validation] Provide preparation Method');\n    msgCounter++;\n  } else if (!validator.isLength(prepMethod, {\n    min: 10\n  })) {\n    sharedData.prepMethod = {\n      invalid: true,\n      valid: false,\n      msg: 'Preparation method should be at least 10 characters'\n    };\n    console.log('[Validation] Preparation method should be at least 10 characters');\n    msgCounter++;\n  } else {\n    sharedData.prepMethod = {\n      valid: true,\n      invalid: false,\n      input: prepMethod\n    };\n  }\n\n  if (!description) {\n    sharedData.description = {\n      invalid: true,\n      valid: false,\n      msg: 'Provide a description'\n    };\n    console.log('[Validation] Provide a description');\n    msgCounter++;\n  } else if (!validator.isLength(description, {\n    min: 10\n  })) {\n    sharedData.description = {\n      invalid: true,\n      valid: false,\n      msg: 'Description method should be at least 10 characters'\n    };\n    console.log('[Validation] Description method should be at least 10 characters');\n    msgCounter++;\n  } else {\n    sharedData.description = {\n      valid: true,\n      invalid: false,\n      input: description\n    };\n  }\n\n  if (!foodImageURL) {\n    sharedData.foodImageURL = {\n      invalid: true,\n      valid: false,\n      msg: 'Provide a food imageURL'\n    };\n    console.log('[Validation] Provide a food imageURL');\n    msgCounter++;\n  } else if (!validator.isURL(foodImageURL)) {\n    sharedData.foodImageURL = {\n      invalid: true,\n      valid: false,\n      msg: 'Food URL should start with \"http://\" or \"https://\"'\n    };\n    console.log('[Validation] Food URL should start with \"http://\" or \"https://\"');\n    msgCounter++;\n  } else {\n    sharedData.foodImageURL = {\n      valid: true,\n      invalid: false,\n      input: foodImageURL\n    };\n  }\n\n  if (categorySelection === 'Select category...') {\n    sharedData.category = {\n      invalid: true,\n      valid: false,\n      msg: 'Provide category'\n    };\n    console.log('[Validation] Provide category');\n    msgCounter++;\n  } else {\n    sharedData.category = {\n      valid: true,\n      invalid: false,\n      input: categorySelection,\n      url: categoryURL\n    };\n  }\n\n  sessionStorage.setItem('categorySelection', categorySelection);\n  let isValid = msgCounter;\n  isValid > 0 ? isValid = false : isValid = true;\n  return isValid;\n};\n\n//# sourceURL=webpack://routinglab-v1/./src/validation.js?");
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  (function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = function (exports, definition) {
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

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/


  (function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/


  (function () {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = function (exports) {
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
  // startup

  /******/
  // Load entry module and return exports

  /******/
  // This entry module can't be inlined because the eval devtool is used.

  /******/


  var __webpack_exports__ = __webpack_require__("./src/app.js");
  /******/

  /******/

})();