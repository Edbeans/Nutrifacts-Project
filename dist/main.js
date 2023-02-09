/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_buttons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/buttons.js */ \"./src/scripts/buttons.js\");\n/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/slider.js */ \"./src/scripts/slider.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  _scripts_buttons_js__WEBPACK_IMPORTED_MODULE_0__.Button.homePage();\n  _scripts_buttons_js__WEBPACK_IMPORTED_MODULE_0__.Button.redirectToHome();\n  _scripts_buttons_js__WEBPACK_IMPORTED_MODULE_0__.Button.directToMacro();\n  _scripts_slider_js__WEBPACK_IMPORTED_MODULE_1__.Slider.slideAction(\".fat_slide\", \".f-btn-next\", \".f-btn-prev\");\n  _scripts_slider_js__WEBPACK_IMPORTED_MODULE_1__.Slider.slideAction(\".carb_slide\", \".c-btn-next\", \".c-btn-prev\");\n  _scripts_slider_js__WEBPACK_IMPORTED_MODULE_1__.Slider.slideAction(\".protein_slide\", \".p-btn-next\", \".p-btn-prev\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTJDO0FBQ0Q7QUFFMUNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoREgsZ0VBQWUsRUFBRTtFQUNqQkEsc0VBQXFCLEVBQUU7RUFDdkJBLHFFQUFvQixFQUFFO0VBR3RCQyxrRUFBa0IsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztFQUM5REEsa0VBQWtCLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7RUFDL0RBLGtFQUFrQixDQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7QUFDdEUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCdXR0b259IGZyb20gJy4vc2NyaXB0cy9idXR0b25zLmpzJ1xuaW1wb3J0IHtTbGlkZXJ9IGZyb20gJy4vc2NyaXB0cy9zbGlkZXIuanMnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgQnV0dG9uLmhvbWVQYWdlKCk7IFxuICAgIEJ1dHRvbi5yZWRpcmVjdFRvSG9tZSgpOyBcbiAgICBCdXR0b24uZGlyZWN0VG9NYWNybygpO1xuXG5cbiAgICBTbGlkZXIuc2xpZGVBY3Rpb24oXCIuZmF0X3NsaWRlXCIsIFwiLmYtYnRuLW5leHRcIiwgXCIuZi1idG4tcHJldlwiKTsgXG4gICAgU2xpZGVyLnNsaWRlQWN0aW9uKFwiLmNhcmJfc2xpZGVcIiwgXCIuYy1idG4tbmV4dFwiLCBcIi5jLWJ0bi1wcmV2XCIpO1xuICAgIFNsaWRlci5zbGlkZUFjdGlvbihcIi5wcm90ZWluX3NsaWRlXCIsIFwiLnAtYnRuLW5leHRcIiwgXCIucC1idG4tcHJldlwiKTsgXG59KTtcblxuXG5cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJTbGlkZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJob21lUGFnZSIsInJlZGlyZWN0VG9Ib21lIiwiZGlyZWN0VG9NYWNybyIsInNsaWRlQWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/buttons.js":
/*!********************************!*\
  !*** ./src/scripts/buttons.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": function() { return /* binding */ Button; }\n/* harmony export */ });\nconst Button = {\n  // initialize a home page \n  homePage() {\n    document.querySelector(\"#main_page\").style.display = 'block';\n    const pages = document.getElementsByClassName(\"page\");\n    for (let i = 0; i < pages.length; i++) {\n      pages[i].style.display = 'none';\n    }\n  },\n  // goes back to home \n  redirectToHome() {\n    const homeButton = document.querySelector(\".logo-head\");\n    homeButton.addEventListener('click', () => {\n      this.homePage();\n    });\n  },\n  // helper method to hide homepage \n  hideHomePage() {\n    document.querySelector(\"#main_page\").style.display = 'none';\n  },\n  // helper methods to show macronutrient slides \n  showProteinOnly() {\n    this.hideHomePage();\n    document.querySelector(\"#carb_page\").style.display = 'none';\n    document.querySelector(\"#fat_page\").style.display = 'none';\n    const proteinPage = document.querySelector(\"#protein_page\");\n    proteinPage.style.display = 'grid';\n  },\n  showCarbOnly() {\n    this.hideHomePage();\n    document.querySelector(\"#protein_page\").style.display = 'none';\n    document.querySelector(\"#fat_page\").style.display = 'none';\n    const carbPage = document.querySelector(\"#carb_page\");\n    carbPage.style.display = 'grid';\n  },\n  showFatOnly() {\n    this.hideHomePage();\n    document.querySelector(\"#carb_page\").style.display = 'none';\n    document.querySelector(\"#protein_page\").style.display = 'none';\n    const fatPage = document.querySelector(\"#fat_page\");\n    fatPage.style.display = 'grid';\n  },\n  // Buttons for macronutrient pages \n  directToMacro() {\n    const proteinButton = document.querySelector(\".protein\");\n    proteinButton.addEventListener('click', () => {\n      document.getElementById(\"music\").play();\n      this.showProteinOnly();\n    });\n    const carbButton = document.querySelector(\".carbs\");\n    carbButton.addEventListener('click', () => {\n      document.getElementById(\"music\").play();\n      this.showCarbOnly();\n    });\n    const fatButton = document.querySelector(\".fats\");\n    fatButton.addEventListener('click', () => {\n      document.getElementById(\"music\").play();\n      this.showFatOnly();\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9idXR0b25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxNQUFNLEdBQUc7RUFDbEI7RUFDQUMsUUFBUSxHQUFHO0lBQ1BDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0lBRTVELE1BQU1DLEtBQUssR0FBR0osUUFBUSxDQUFDSyxzQkFBc0IsQ0FBQyxNQUFNLENBQUM7SUFDckQsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLEtBQUssQ0FBQ0csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNuQ0YsS0FBSyxDQUFDRSxDQUFDLENBQUMsQ0FBQ0osS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUNuQztFQUNKLENBQUM7RUFFRDtFQUNBSyxjQUFjLEdBQUc7SUFDYixNQUFNQyxVQUFVLEdBQUdULFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztJQUN2RFEsVUFBVSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtNQUN2QyxJQUFJLENBQUNYLFFBQVEsRUFBRTtJQUNuQixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQ7RUFDQVksWUFBWSxHQUFHO0lBQ1hYLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQy9ELENBQUM7RUFFRDtFQUNBUyxlQUFlLEdBQUc7SUFDZCxJQUFJLENBQUNELFlBQVksRUFBRTtJQUVuQlgsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDM0RILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBRTFELE1BQU1VLFdBQVcsR0FBR2IsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0lBQzNEWSxXQUFXLENBQUNYLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFDdEMsQ0FBQztFQUVEVyxZQUFZLEdBQUc7SUFDWCxJQUFJLENBQUNILFlBQVksRUFBRTtJQUVuQlgsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDOURILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBRTFELE1BQU1ZLFFBQVEsR0FBR2YsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0lBQ3JEYyxRQUFRLENBQUNiLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFDbkMsQ0FBQztFQUVEYSxXQUFXLEdBQUc7SUFDVixJQUFJLENBQUNMLFlBQVksRUFBRTtJQUVuQlgsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDM0RILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBRTlELE1BQU1jLE9BQU8sR0FBR2pCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNuRGdCLE9BQU8sQ0FBQ2YsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtFQUNsQyxDQUFDO0VBRUQ7RUFDQWUsYUFBYSxHQUFHO0lBQ1osTUFBTUMsYUFBYSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ3hEa0IsYUFBYSxDQUFDVCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtNQUMxQ1YsUUFBUSxDQUFDb0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxJQUFJLEVBQUU7TUFDdkMsSUFBSSxDQUFDVCxlQUFlLEVBQUU7SUFDMUIsQ0FBQyxDQUFDO0lBRUYsTUFBTVUsVUFBVSxHQUFHdEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ25EcUIsVUFBVSxDQUFDWixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtNQUN2Q1YsUUFBUSxDQUFDb0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxJQUFJLEVBQUU7TUFDdkMsSUFBSSxDQUFDUCxZQUFZLEVBQUU7SUFDdkIsQ0FBQyxDQUFDO0lBRUYsTUFBTVMsU0FBUyxHQUFHdkIsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ2pEc0IsU0FBUyxDQUFDYixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtNQUN0Q1YsUUFBUSxDQUFDb0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxJQUFJLEVBQUU7TUFDdkMsSUFBSSxDQUFDTCxXQUFXLEVBQUU7SUFDdEIsQ0FBQyxDQUFDO0VBQ047QUFFSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvYnV0dG9ucy5qcz9jNDFkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBCdXR0b24gPSB7XG4gICAgLy8gaW5pdGlhbGl6ZSBhIGhvbWUgcGFnZSBcbiAgICBob21lUGFnZSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluX3BhZ2VcIikuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGFnZVwiKTsgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYWdlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBnb2VzIGJhY2sgdG8gaG9tZSBcbiAgICByZWRpcmVjdFRvSG9tZSgpIHtcbiAgICAgICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nby1oZWFkXCIpOyBcbiAgICAgICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9tZVBhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIGhlbHBlciBtZXRob2QgdG8gaGlkZSBob21lcGFnZSBcbiAgICBoaWRlSG9tZVBhZ2UoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbl9wYWdlXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSxcblxuICAgIC8vIGhlbHBlciBtZXRob2RzIHRvIHNob3cgbWFjcm9udXRyaWVudCBzbGlkZXMgXG4gICAgc2hvd1Byb3RlaW5Pbmx5KCkge1xuICAgICAgICB0aGlzLmhpZGVIb21lUGFnZSgpOyBcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmJfcGFnZVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZhdF9wYWdlXCIpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgY29uc3QgcHJvdGVpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb3RlaW5fcGFnZVwiKTsgXG4gICAgICAgIHByb3RlaW5QYWdlLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7IFxuICAgIH0sXG5cbiAgICBzaG93Q2FyYk9ubHkoKSB7XG4gICAgICAgIHRoaXMuaGlkZUhvbWVQYWdlKCk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm90ZWluX3BhZ2VcIikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYXRfcGFnZVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIGNvbnN0IGNhcmJQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJiX3BhZ2VcIik7IFxuICAgICAgICBjYXJiUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnOyBcbiAgICB9LFxuXG4gICAgc2hvd0ZhdE9ubHkoKSB7XG4gICAgICAgIHRoaXMuaGlkZUhvbWVQYWdlKCk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmJfcGFnZVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb3RlaW5fcGFnZVwiKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIGNvbnN0IGZhdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZhdF9wYWdlXCIpO1xuICAgICAgICBmYXRQYWdlLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgfSxcblxuICAgIC8vIEJ1dHRvbnMgZm9yIG1hY3JvbnV0cmllbnQgcGFnZXMgXG4gICAgZGlyZWN0VG9NYWNybygpIHtcbiAgICAgICAgY29uc3QgcHJvdGVpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvdGVpblwiKTsgXG4gICAgICAgIHByb3RlaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm11c2ljXCIpLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb3RlaW5Pbmx5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNhcmJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmJzXCIpO1xuICAgICAgICBjYXJiQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtdXNpY1wiKS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dDYXJiT25seSgpOyBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZmF0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXRzXCIpOyBcbiAgICAgICAgZmF0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtdXNpY1wiKS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dGYXRPbmx5KCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgXG59OyJdLCJuYW1lcyI6WyJCdXR0b24iLCJob21lUGFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsInBhZ2VzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJyZWRpcmVjdFRvSG9tZSIsImhvbWVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZUhvbWVQYWdlIiwic2hvd1Byb3RlaW5Pbmx5IiwicHJvdGVpblBhZ2UiLCJzaG93Q2FyYk9ubHkiLCJjYXJiUGFnZSIsInNob3dGYXRPbmx5IiwiZmF0UGFnZSIsImRpcmVjdFRvTWFjcm8iLCJwcm90ZWluQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5IiwiY2FyYkJ1dHRvbiIsImZhdEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/buttons.js\n");

/***/ }),

/***/ "./src/scripts/slider.js":
/*!*******************************!*\
  !*** ./src/scripts/slider.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": function() { return /* binding */ Slider; }\n/* harmony export */ });\nconst Slider = {\n  slideAction(macroName, nextBtn, prevBtn) {\n    // Selecting all slides \n    const slides = document.querySelectorAll(macroName);\n    slides.forEach((slide, idx) => {\n      slide.style.transform = `translateX(${idx * 100}%)`;\n    });\n\n    // set current slide to 0 \n    // select next slide btn \n    // set a last slide variable \n    const nextSlide = document.querySelector(nextBtn);\n    const prevSlide = document.querySelector(prevBtn);\n    let currentSlide = 0;\n    let maxSlide = slides.length - 1;\n\n    // next slide function \n    nextSlide.addEventListener(\"click\", () => {\n      if (currentSlide === maxSlide) {\n        currentSlide = 0;\n      } else {\n        currentSlide++;\n      }\n      slides.forEach((slide, idx) => {\n        slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`;\n      });\n    });\n\n    // prev slide function \n    prevSlide.addEventListener(\"click\", () => {\n      if (currentSlide === 0) {\n        currentSlide = maxSlide;\n      } else {\n        currentSlide--;\n      }\n      slides.forEach((slide, idx) => {\n        slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`;\n      });\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLE1BQU0sR0FBRztFQUVsQkMsV0FBVyxDQUFDQyxTQUFTLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFO0lBQ3JDO0lBQ0EsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDTCxTQUFTLENBQUM7SUFFbkRHLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLENBQUNDLEtBQUssRUFBRUMsR0FBRyxLQUFLO01BQzNCRCxLQUFLLENBQUNFLEtBQUssQ0FBQ0MsU0FBUyxHQUFJLGNBQWFGLEdBQUcsR0FBRyxHQUFJLElBQUc7SUFDdkQsQ0FBQyxDQUFDOztJQUVGO0lBQ0E7SUFDQTtJQUNBLE1BQU1HLFNBQVMsR0FBR1AsUUFBUSxDQUFDUSxhQUFhLENBQUNYLE9BQU8sQ0FBQztJQUNqRCxNQUFNWSxTQUFTLEdBQUdULFFBQVEsQ0FBQ1EsYUFBYSxDQUFDVixPQUFPLENBQUM7SUFDakQsSUFBSVksWUFBWSxHQUFHLENBQUM7SUFDcEIsSUFBSUMsUUFBUSxHQUFHWixNQUFNLENBQUNhLE1BQU0sR0FBRyxDQUFDOztJQUVoQztJQUNBTCxTQUFTLENBQUNNLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ3RDLElBQUlILFlBQVksS0FBS0MsUUFBUSxFQUFFO1FBQzNCRCxZQUFZLEdBQUcsQ0FBQztNQUNwQixDQUFDLE1BQU07UUFDSEEsWUFBWSxFQUFFO01BQ2xCO01BRUFYLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLENBQUNDLEtBQUssRUFBRUMsR0FBRyxLQUFLO1FBQzNCRCxLQUFLLENBQUNFLEtBQUssQ0FBQ0MsU0FBUyxHQUFJLGNBQWEsR0FBRyxJQUFJRixHQUFHLEdBQUdNLFlBQVksQ0FBRSxJQUFHO01BQ3hFLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQzs7SUFFRjtJQUNBRCxTQUFTLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ3RDLElBQUlILFlBQVksS0FBSyxDQUFDLEVBQUU7UUFDcEJBLFlBQVksR0FBR0MsUUFBUTtNQUMzQixDQUFDLE1BQU07UUFDSEQsWUFBWSxFQUFFO01BQ2xCO01BRUFYLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLENBQUNDLEtBQUssRUFBRUMsR0FBRyxLQUFLO1FBQzNCRCxLQUFLLENBQUNFLEtBQUssQ0FBQ0MsU0FBUyxHQUFJLGNBQWEsR0FBRyxJQUFJRixHQUFHLEdBQUdNLFlBQVksQ0FBRSxJQUFHO01BQ3hFLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9zY3JpcHRzL3NsaWRlci5qcz9mMzAyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTbGlkZXIgPSB7XG5cbiAgICBzbGlkZUFjdGlvbihtYWNyb05hbWUsIG5leHRCdG4sIHByZXZCdG4pIHtcbiAgICAgICAgLy8gU2VsZWN0aW5nIGFsbCBzbGlkZXMgXG4gICAgICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobWFjcm9OYW1lKTsgXG4gICAgICAgIFxuICAgICAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgc2xpZGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtpZHggKiAxMDB9JSlgO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIHNldCBjdXJyZW50IHNsaWRlIHRvIDAgXG4gICAgICAgIC8vIHNlbGVjdCBuZXh0IHNsaWRlIGJ0biBcbiAgICAgICAgLy8gc2V0IGEgbGFzdCBzbGlkZSB2YXJpYWJsZSBcbiAgICAgICAgY29uc3QgbmV4dFNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuZXh0QnRuKTsgXG4gICAgICAgIGNvbnN0IHByZXZTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJldkJ0bik7XG4gICAgICAgIGxldCBjdXJyZW50U2xpZGUgPSAwOyBcbiAgICAgICAgbGV0IG1heFNsaWRlID0gc2xpZGVzLmxlbmd0aCAtIDE7IFxuICAgICAgICBcbiAgICAgICAgLy8gbmV4dCBzbGlkZSBmdW5jdGlvbiBcbiAgICAgICAgbmV4dFNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNsaWRlID09PSBtYXhTbGlkZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIHNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7MTAwICogKGlkeCAtIGN1cnJlbnRTbGlkZSl9JSlgO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gcHJldiBzbGlkZSBmdW5jdGlvbiBcbiAgICAgICAgcHJldlNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gbWF4U2xpZGU7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUtLTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgc2xpZGVzLmZvckVhY2goKHNsaWRlLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBzbGlkZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkezEwMCAqIChpZHggLSBjdXJyZW50U2xpZGUpfSUpYDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlNsaWRlciIsInNsaWRlQWN0aW9uIiwibWFjcm9OYW1lIiwibmV4dEJ0biIsInByZXZCdG4iLCJzbGlkZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2xpZGUiLCJpZHgiLCJzdHlsZSIsInRyYW5zZm9ybSIsIm5leHRTbGlkZSIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2U2xpZGUiLCJjdXJyZW50U2xpZGUiLCJtYXhTbGlkZSIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/slider.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;