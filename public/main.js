(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "stockScraper2";
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: "<router-outlet></router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _main_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/home.component */ "./src/app/main/home.component.ts");
/* harmony import */ var _main_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/sidebar.component */ "./src/app/main/sidebar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _main_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/table.component */ "./src/app/main/table.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _main_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _main_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"], _main_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"])
            ],
            providers: [_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n.row {\r\n  margin: 0px;\r\n}\r\n#padding {\r\n  padding-right: 50px;\r\n  padding-left: 350px;\r\n}\r\n#sidebar {\r\n  z-index: 1;\r\n}\r\n#sidebar-top:hover {\r\n  background-color: #394046;\r\n}\r\n.fas {\r\n  font-size: 2.5rem;\r\n  margin-top: 10px;\r\n  margin-left: 21px;\r\n}\r\n.sidebar-top-open {\r\n  width: 300px;\r\n  background-color: #343a40;\r\n  position: fixed;\r\n  height: 61px;\r\n}\r\n.sidebar-top-close {\r\n  width: 62.5px;\r\n  background-color: #343a40;\r\n  position: fixed;\r\n  height: 100vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tYWluL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbi5yb3cge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4jcGFkZGluZyB7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDM1MHB4O1xyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuI3NpZGViYXItdG9wOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk0MDQ2O1xyXG59XHJcblxyXG4uZmFzIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMXB4O1xyXG59XHJcblxyXG4uc2lkZWJhci10b3Atb3BlbiB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogNjFweDtcclxufVxyXG5cclxuLnNpZGViYXItdG9wLWNsb3NlIHtcclxuICB3aWR0aDogNjIuNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/home.component.html":
/*!******************************************!*\
  !*** ./src/app/main/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n  <div id=\"sidebar\" class=\"col-md-2\">\r\n    <div id=\"sidebar-top\" class=\"sidebar-top-open\" (click)=\"sidebarToggle()\">\r\n      <i id=\"sidebar-arrow\" class=\"fas fa-angle-left\"></i>\r\n    </div>\r\n    <side-bar\r\n      id=\"sidebar-component\"\r\n      (eventClick)=\"filterEvents($event)\"\r\n    ></side-bar>\r\n  </div>\r\n  <div class=\"col-md-12\" id=\"padding\">\r\n    <table-component></table-component>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.component */ "./src/app/main/table.component.ts");

//controls the opening and closing of the sidebar
//gets data from sidebar filter and passes it to table filter


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        //sidebar toggle function
        this.toggle = "open";
    }
    //this is called when the filter is pressed on the sidebar and it calls a function on the child component (TableComponent)
    HomeComponent.prototype.filterEvents = function (data) {
        this.tableComponent.filterTable(data);
    };
    //sidebar Toggle function
    HomeComponent.prototype.sidebarToggle = function () {
        this.toggle == "open" ? this.closeSidebar() : this.openSidebar();
    };
    HomeComponent.prototype.closeSidebar = function () {
        this.toggle = "close";
        document.getElementById("sidebar-top").classList.add("sidebar-top-close");
        document.getElementById("sidebar-top").classList.remove("sidebar-top-open");
        document.getElementById("sidebar-arrow").classList.add("fa-angle-right");
        document.getElementById("sidebar-arrow").classList.remove("fa-angle-left");
        document.getElementById("sidebar-component").style.display = "none";
        document.getElementById("padding").style.paddingLeft = "112.5px";
    };
    HomeComponent.prototype.openSidebar = function () {
        this.toggle = "open";
        document.getElementById("sidebar-top").classList.add("sidebar-top-open");
        document
            .getElementById("sidebar-top")
            .classList.remove("sidebar-top-close");
        document.getElementById("sidebar-arrow").classList.add("fa-angle-left");
        document.getElementById("sidebar-arrow").classList.remove("fa-angle-right");
        document.getElementById("sidebar-component").style.display = "block";
        document.getElementById("padding").style.paddingLeft = "350px";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"])
    ], HomeComponent.prototype, "tableComponent", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/main/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/main/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/sidebar.component.html":
/*!*********************************************!*\
  !*** ./src/app/main/sidebar.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\r\n  [formGroup]=\"filterStocksForm\"\r\n  (ngSubmit)=\"filterStocks(filterStocksForm.value)\"\r\n>\r\n  <div class=\"form-group\">\r\n    <h2>P/E</h2>\r\n    <input formControlName=\"peMin\" class=\"form-control\" placeholder=\"min\" />\r\n    <input formControlName=\"peMax\" class=\"form-control\" placeholder=\"max\" />\r\n  </div>\r\n  <br />\r\n  <hr />\r\n  <div class=\"form-group\">\r\n    <h2>P/B</h2>\r\n    <input formControlName=\"pbMin\" class=\"form-control\" placeholder=\"min\" />\r\n    <input formControlName=\"pbMax\" class=\"form-control\" placeholder=\"max\" />\r\n  </div>\r\n  <br />\r\n  <hr />\r\n  <div class=\"form-group\">\r\n    <h2>Market Cap</h2>\r\n    <input\r\n      formControlName=\"marketCapMin\"\r\n      class=\"form-control\"\r\n      placeholder=\"min\"\r\n    />\r\n    <input\r\n      formControlName=\"marketCapMax\"\r\n      class=\"form-control\"\r\n      placeholder=\"max\"\r\n    />\r\n  </div>\r\n  <br />\r\n  <hr />\r\n  <div class=\"form-group\">\r\n    <h2>Sector</h2>\r\n    <div class=\"input-group mb-3\">\r\n      <select\r\n        class=\"custom-select\"\r\n        id=\"inputGroupSelect01\"\r\n        formControlName=\"formSector\"\r\n      >\r\n        <option value=\"\">All</option>\r\n        <option value=\"Financials\">Financials</option>\r\n        <option value=\"Utilities\">Utilities</option>\r\n        <option value=\"Consumer Discretionary\">Consumer Discretionary</option>\r\n        <option value=\"Consumer Staples\">Consumer Staples</option>\r\n        <option value=\"Energy\">Energy</option>\r\n        <option value=\"Health Care\">Health Care</option>\r\n        <option value=\"Industrials\">Industrials</option>\r\n        <option value=\"Information Technology\">Information Technology</option>\r\n        <option value=\"Telecommunication Services\">Telecommunication</option>\r\n        <option value=\"Materials\">Materials</option>\r\n        <option value=\"Real Estate\">Real Estate</option>\r\n        <option value=\"Metals & Mining\">Metals & Mining</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <br />\r\n  <hr />\r\n  <button class=\"btn btn-primary\" id=\"filter\">\r\n    Filter\r\n  </button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/main/sidebar.component.ts":
/*!*******************************************!*\
  !*** ./src/app/main/sidebar.component.ts ***!
  \*******************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.eventClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.peMin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.peMax = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.pbMin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.pbMax = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.marketCapMin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.marketCapMax = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.formSector = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
        this.filterStocksForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            peMin: this.peMin,
            peMax: this.peMax,
            pbMin: this.pbMin,
            pbMax: this.pbMax,
            marketCapMin: this.marketCapMin,
            marketCapMax: this.marketCapMax,
            formSector: this.formSector
        });
    };
    //sends the filter params to the parent component (home component)
    SidebarComponent.prototype.filterStocks = function (filterValues) {
        this.eventClick.emit(filterValues);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidebarComponent.prototype, "eventClick", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "side-bar",
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/main/sidebar.component.html"),
            styles: ["\n      form {\n        margin-top: 62.5px;\n        padding-top: 10px;\n        padding-bottom: 80px;\n        background-color: #f2f2f2;\n        height: 100vh;\n        width: 300px;\n        position: fixed;\n        overflow-y: scroll;\n      }\n      h1 {\n        text-align: center;\n      }\n      a:hover {\n        cursor: pointer;\n      }\n      .form-group {\n        padding-left: 10px;\n        padding-right: 10px;\n      }\n      input {\n        margin-top: 5px;\n      }\n      .dropdown {\n        padding-left: 10px;\n        padding-right: 10px;\n      }\n      #filter {\n        margin-left: 10px;\n      }\n      #dropdownMenuButton {\n        width: 40px;\n      }\n      #sectorInput {\n        padding-right: 50px !important;\n      }\n    "]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/main/table.component.html":
/*!*******************************************!*\
  !*** ./src/app/main/table.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"tableFixHead\">\r\n  <table class=\"table table-striped\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n        <th scope=\"col\">Name</th>\r\n        <th scope=\"col\">Symbol</th>\r\n        <th scope=\"col\">Sector</th>\r\n        <th scope=\"col\">Open</th>\r\n        <th scope=\"col\">Market Cap</th>\r\n        <th scope=\"col\">Net Income</th>\r\n        <th scope=\"col\">Equity</th>\r\n        <th scope=\"col\">P/e</th>\r\n        <th scope=\"col\">P/b</th>\r\n      </tr>\r\n    </thead>\r\n    <div id=\"padding\"></div>\r\n    <tbody>\r\n      <tr *ngFor=\"let stock of filteredStock\">\r\n        <td>{{ stock.companyName }}</td>\r\n        <td>{{ stock.primarySymbol }}</td>\r\n        <td>{{ stock.sector }}</td>\r\n        <td>$ {{ stock.openPrice }}</td>\r\n        <td>{{ stock.marketCap }}</td>\r\n        <td>{{ stock.netIncome }}</td>\r\n        <td>{{ stock.equity }}</td>\r\n        <td>{{ stock.pe }}</td>\r\n        <td>{{ stock.pb }}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/table.component.ts":
/*!*****************************************!*\
  !*** ./src/app/main/table.component.ts ***!
  \*****************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");



var TableComponent = /** @class */ (function () {
    function TableComponent(dataService) {
        this.dataService = dataService;
    }
    TableComponent.prototype.filterTable = function (data) {
        this.filterEvents(data);
    };
    //retrieves an observable of the stocks from the data service
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("fetching data");
        return this.dataService
            .getStocks()
            .subscribe(function (data) { return (_this.stocks = data.companyData.stockData); }, function (err) { return console.log(err); }, function () { return _this.doMaths(); });
    };
    //calculates the pe and pe for all stocks
    TableComponent.prototype.doMaths = function () {
        this.stocks.forEach(function (d) {
            d.pe = (d.marketCap / d.netIncome).toFixed(2);
            d.pb = (d.marketCap / d.equity).toFixed(2);
        });
        this.filteredStock = this.stocks;
    };
    TableComponent.prototype.filterEvents = function (f) {
        console.log(f);
        //filter the stocks for if there is a sector sector or not
        //checks if sector is set to all and if it is calls the second filter function
        //else filters for the selected sector then calls the seconds function with the new data
        if (f.formSector == "") {
            this.filterEvents2(this.stocks, f);
        }
        else {
            this.filteredStock = this.stocks.filter(function (s) { return s.sector == f.formSector; });
            this.filterEvents2(this.filteredStock, f);
        }
    };
    //filters the data based on what has been entered into the sidebar (pe, pb, market cap) fields
    TableComponent.prototype.filterEvents2 = function (data, f) {
        //sets the max fields to high numbers if theyre not filled out
        if (f.peMax == 0) {
            f.peMax = 1000;
        }
        if (f.peMin == 0) {
            f.peMin = -1000;
        }
        if (f.pbMax == 0) {
            f.pbMax = 1000;
        }
        if (f.pbMin == 0) {
            f.pbMin = -1000;
        }
        if (f.marketCapMax == 0) {
            f.marketCapMax = 1000000000000000;
        }
        //filters the stock for the pe/pb/market cap
        this.filteredStock = data.filter(function (s) {
            return +s.pe > f.peMin &&
                +s.pe < f.peMax &&
                +s.pb > f.pbMin &&
                +s.pb < f.pbMax &&
                +s.marketCap > f.marketCapMin &&
                +s.marketCap < f.marketCapMax;
        });
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "table-component",
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/main/table.component.html"),
            styles: ["\n      .tableFixHead {\n        height: 100vh;\n      }\n      .tableFixHead th {\n        position: sticky;\n        top: 0;\n        border: 0;\n      }\n\n      /* Just common table stuff. Really. */\n      table {\n        //border-collapse: collapse;\n        width: 100%;\n      }\n      th {\n        font-size: 26px;\n        font-weight: 500;\n      }\n\n      .row {\n        margin: 0px;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _main_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/home.component */ "./src/app/main/home.component.ts");

var appRoutes = [
    { path: "home", component: _main_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: "", redirectTo: "/home", pathMatch: "full" }
];


/***/ }),

/***/ "./src/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getStocks = function () {
        return this.http.get("/data");
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Zac\Desktop\SoftwareProjects\StockScraper\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map