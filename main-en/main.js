(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AyonisProj\WebApi\nngUI\src\main.ts */"zUnb");


/***/ }),

/***/ "1Hmu":
/*!***********************************************************!*\
  !*** ./src/app/Components/Person/Store/person.reducer.ts ***!
  \***********************************************************/
/*! exports provided: personReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personReducer", function() { return personReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _person_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./person.action */ "8cgu");
/* harmony import */ var _person_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./person.state */ "Iu+Z");



const personReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_person_state__WEBPACK_IMPORTED_MODULE_2__["initialPersonState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_person_action__WEBPACK_IMPORTED_MODULE_1__["getPersonsAction"], (state, action) => (Object.assign({}, state))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_person_action__WEBPACK_IMPORTED_MODULE_1__["getPersonsSuccessAction"], (state, action) => (Object.assign(Object.assign({}, state), { persons: action.personsList }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_person_action__WEBPACK_IMPORTED_MODULE_1__["getPersonsErrorAction"], (state, action) => (Object.assign({}, state))));


/***/ }),

/***/ "434U":
/*!**********************************************************!*\
  !*** ./src/app/Components/Person/Store/person.effect.ts ***!
  \**********************************************************/
/*! exports provided: PersonEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonEffects", function() { return PersonEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _person_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./person.action */ "8cgu");
/* harmony import */ var src_app_Services_person_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/person.service */ "ICWV");








class PersonEffects {
    constructor(_actions$, _personService) {
        this._actions$ = _actions$;
        this._personService = _personService;
        this.getPersons$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this._actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_person_action__WEBPACK_IMPORTED_MODULE_4__["getPersonsAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => this._personService.getAllPersons().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(personList => Object(_person_action__WEBPACK_IMPORTED_MODULE_4__["getPersonsSuccessAction"])({
            personsList: personList
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            console.log(err.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_person_action__WEBPACK_IMPORTED_MODULE_4__["getPersonsErrorAction"])({ error: err.error }));
        })))));
    }
}
PersonEffects.ɵfac = function PersonEffects_Factory(t) { return new (t || PersonEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_Services_person_service__WEBPACK_IMPORTED_MODULE_5__["PersonService"])); };
PersonEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PersonEffects, factory: PersonEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: src_app_Services_person_service__WEBPACK_IMPORTED_MODULE_5__["PersonService"] }]; }, null); })();


/***/ }),

/***/ "8cgu":
/*!**********************************************************!*\
  !*** ./src/app/Components/Person/Store/person.action.ts ***!
  \**********************************************************/
/*! exports provided: PersonsActions, getPersonsAction, getPersonsSuccessAction, getPersonsErrorAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonsActions", function() { return PersonsActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonsAction", function() { return getPersonsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonsSuccessAction", function() { return getPersonsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonsErrorAction", function() { return getPersonsErrorAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var PersonsActions;
(function (PersonsActions) {
    PersonsActions["GetPersons"] = "[PERSONS] GetPersin";
    PersonsActions["GetPersonsSuccess"] = "[PERSONS] GetPersonSuccess";
    PersonsActions["GetPersonsError"] = "[PERSONS] GetPersonError";
})(PersonsActions || (PersonsActions = {}));
const getPersonsAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PersonsActions.GetPersons);
const getPersonsSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PersonsActions.GetPersonsSuccess, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getPersonsErrorAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PersonsActions.GetPersonsError, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "9X93":
/*!*************************************!*\
  !*** ./src/app/Constants/APIurl.ts ***!
  \*************************************/
/*! exports provided: APIurl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIurl", function() { return APIurl; });
const APIurl = "https://localhost:5001";


/***/ }),

/***/ "9vgZ":
/*!******************************************!*\
  !*** ./src/app/AppStore/app.reducers.ts ***!
  \******************************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _Components_Person_Store_person_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Person/Store/person.reducer */ "1Hmu");

const appReducers = {
    persons: _Components_Person_Store_person_reducer__WEBPACK_IMPORTED_MODULE_0__["personReducer"]
};


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "ICWV":
/*!********************************************!*\
  !*** ./src/app/Services/person.service.ts ***!
  \********************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Constants_APIurl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/APIurl */ "9X93");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class PersonService {
    constructor(http) {
        this.http = http;
    }
    getPerson(personModel) {
        return this.http.post(_Constants_APIurl__WEBPACK_IMPORTED_MODULE_1__["APIurl"] + "/getPerson", personModel);
    }
    deletePerson(personModel) {
        return this.http.post(_Constants_APIurl__WEBPACK_IMPORTED_MODULE_1__["APIurl"] + "/deletePerson", personModel).subscribe(() => console.log("Service deleting person"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(console.log(err))));
    }
    updatePerson(personModel) {
        return this.http.post(_Constants_APIurl__WEBPACK_IMPORTED_MODULE_1__["APIurl"] + "/editPerson", personModel).subscribe(() => console.log("Service editing person"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(console.log(err))));
    }
    createPerson(personModel) {
        console.log(personModel);
        return this.http.post(_Constants_APIurl__WEBPACK_IMPORTED_MODULE_1__["APIurl"] + "/createPerson", personModel).subscribe(() => console.log("Service creating person"), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(console.log(err))));
    }
    getAllPersons() {
        return this.http.post(_Constants_APIurl__WEBPACK_IMPORTED_MODULE_1__["APIurl"] + "/getAllPersons", {});
    }
}
PersonService.ɵfac = function PersonService_Factory(t) { return new (t || PersonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PersonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PersonService, factory: PersonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Iu+Z":
/*!*********************************************************!*\
  !*** ./src/app/Components/Person/Store/person.state.ts ***!
  \*********************************************************/
/*! exports provided: initialPersonState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialPersonState", function() { return initialPersonState; });
const initialPersonState = {
    persons: []
};


/***/ }),

/***/ "Lg5G":
/*!************************************************************************************!*\
  !*** ./src/app/Components/Person/person-edit/person-edit/person-edit.component.ts ***!
  \************************************************************************************/
/*! exports provided: PersonEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonEditComponent", function() { return PersonEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_Services_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/person.service */ "ICWV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class PersonEditComponent {
    constructor(_personService, dialogRef, data) {
        this._personService = _personService;
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
        this.Name = data.person.name;
        this.Surname = data.person.surname;
    }
    ngOnInit() {
    }
    onEditClick() {
        let personModel = {
            id: this.data.person.id,
            name: this.Name,
            surname: this.Surname
        };
        this._personService.updatePerson(personModel);
        this.dialogRef.close();
    }
    onCloseClick() {
        this.dialogRef.close();
    }
}
PersonEditComponent.ɵfac = function PersonEditComponent_Factory(t) { return new (t || PersonEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
PersonEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonEditComponent, selectors: [["app-person-edit"]], decls: 8, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7585826646011739428$$SRC_APP_COMPONENTS_PERSON_PERSON_EDIT_PERSON_EDIT_PERSON_EDIT_COMPONENT_TS_1 = goog.getMsg("Edit");
        i18n_0 = MSG_EXTERNAL_7585826646011739428$$SRC_APP_COMPONENTS_PERSON_PERSON_EDIT_PERSON_EDIT_PERSON_EDIT_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟28f86ffd419b869711aa13f5e5ff54be6d70731c␟7585826646011739428:Edit`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_688560883283893567$$SRC_APP_COMPONENTS_PERSON_PERSON_EDIT_PERSON_EDIT_PERSON_EDIT_COMPONENT_TS_3 = goog.getMsg(" Close");
        i18n_2 = MSG_EXTERNAL_688560883283893567$$SRC_APP_COMPONENTS_PERSON_PERSON_EDIT_PERSON_EDIT_PERSON_EDIT_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟972e71aed4c67128949bdc4a982cc22aafd5a0ab␟688560883283893567: Close`;
    } return [["name", "nameInp", "type", "text", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["name", "SurnameInp", "type", "text", "placeholder", "Surname", 3, "ngModel", "ngModelChange"], [3, "click"], i18n_0, i18n_2]; }, template: function PersonEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonEditComponent_Template_input_ngModelChange_1_listener($event) { return ctx.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonEditComponent_Template_input_ngModelChange_3_listener($event) { return ctx.Surname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonEditComponent_Template_button_click_4_listener() { return ctx.onEditClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonEditComponent_Template_button_click_6_listener() { return ctx.onCloseClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Surname);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb24tZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-person-edit',
                templateUrl: './person-edit.component.html',
                styleUrls: ['./person-edit.component.scss']
            }]
    }], function () { return [{ type: src_app_Services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Mqu4":
/*!************************************************************!*\
  !*** ./src/app/Components/Person/Store/person.selector.ts ***!
  \************************************************************/
/*! exports provided: selectPersons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPersons", function() { return selectPersons; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const selectPers = (state) => state.persons;
const selectPersons = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPers, (state) => state.persons);


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Components_Header_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Header/header/header.component */ "h9xA");
/* harmony import */ var src_app_Components_Person_person_person_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Components/Person/person/person.component */ "pl84");




class AppComponent {
    constructor() {
        this.title = 'nngUI';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-person");
    } }, directives: [_Components_Header_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], src_app_Components_Person_person_person_component__WEBPACK_IMPORTED_MODULE_2__["PersonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _Modules_Person_person_person_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/Person/person/person.module */ "iLQD");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _AppStore_app_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AppStore/app.reducers */ "9vgZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _Components_Header_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/Header/header/header.component */ "h9xA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["APP_BASE_HREF"], useValue: '/' },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_AppStore_app_reducers__WEBPACK_IMPORTED_MODULE_9__["appReducers"], {}),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]),
            _Modules_Person_person_person_module__WEBPACK_IMPORTED_MODULE_6__["PersonModule"],
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _Components_Header_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"], _Modules_Person_person_person_module__WEBPACK_IMPORTED_MODULE_6__["PersonModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _Components_Header_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_AppStore_app_reducers__WEBPACK_IMPORTED_MODULE_9__["appReducers"], {}),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]),
                    _Modules_Person_person_person_module__WEBPACK_IMPORTED_MODULE_6__["PersonModule"],
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"].forRoot(),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["APP_BASE_HREF"], useValue: '/' },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_14__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_14__["HashLocationStrategy"] },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "h9xA":
/*!**************************************************************!*\
  !*** ./src/app/Components/Header/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3492007542396725315$$SRC_APP_COMPONENTS_HEADER_HEADER_HEADER_COMPONENT_TS_1 = goog.getMsg("Welcome");
        i18n_0 = MSG_EXTERNAL_3492007542396725315$$SRC_APP_COMPONENTS_HEADER_HEADER_HEADER_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟65cc4ab3b4c438e07c89be2b677d08369fb62da2␟3492007542396725315:Welcome`;
    } return [[1, "header"], i18n_0]; }, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\n  background-color: silver;\n  color: black;\n  font-size: 3vmin;\n  width: 100%;\n  align-items: center;\n  height: 10vh;\n  text-align: center;\n  margin-bottom: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpzaWx2ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDN2bWluO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iLQD":
/*!********************************************************!*\
  !*** ./src/app/Modules/Person/person/person.module.ts ***!
  \********************************************************/
/*! exports provided: PersonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonModule", function() { return PersonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_Components_Person_person_person_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Components/Person/person/person.component */ "pl84");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var src_app_Components_Person_Store_person_effect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Components/Person/Store/person.effect */ "434U");
/* harmony import */ var src_app_Components_Person_Store_person_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Components/Person/Store/person.reducer */ "1Hmu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Components_Person_person_edit_person_edit_person_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Components/Person/person-edit/person-edit/person-edit.component */ "Lg5G");
/* harmony import */ var src_app_Components_Person_person_add_person_add_person_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Components/Person/person-add/person-add/person-add.component */ "o1RG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");

















const accountRoutes = [];
const routes = [
    {
        path: 'account',
        component: src_app_Components_Person_person_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"]
    },
    {
        path: 'account',
        children: accountRoutes,
    },
];
class PersonModule {
}
PersonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PersonModule });
PersonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PersonModule_Factory(t) { return new (t || PersonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature("personReducers", src_app_Components_Person_Store_person_reducer__WEBPACK_IMPORTED_MODULE_7__["personReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([src_app_Components_Person_Store_person_effect__WEBPACK_IMPORTED_MODULE_6__["PersonEffects"]]),
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes),
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonModule, { declarations: [src_app_Components_Person_person_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"],
        src_app_Components_Person_person_add_person_add_person_add_component__WEBPACK_IMPORTED_MODULE_10__["PersonAddComponent"],
        src_app_Components_Person_person_edit_person_edit_person_edit_component__WEBPACK_IMPORTED_MODULE_9__["PersonEditComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsFeatureModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]], exports: [src_app_Components_Person_person_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"],
        src_app_Components_Person_person_add_person_add_person_add_component__WEBPACK_IMPORTED_MODULE_10__["PersonAddComponent"],
        src_app_Components_Person_person_edit_person_edit_person_edit_component__WEBPACK_IMPORTED_MODULE_9__["PersonEditComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    src_app_Components_Person_person_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"],
                    src_app_Components_Person_person_add_person_add_person_add_component__WEBPACK_IMPORTED_MODULE_10__["PersonAddComponent"],
                    src_app_Components_Person_person_edit_person_edit_person_edit_component__WEBPACK_IMPORTED_MODULE_9__["PersonEditComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature("personReducers", src_app_Components_Person_Store_person_reducer__WEBPACK_IMPORTED_MODULE_7__["personReducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([src_app_Components_Person_Store_person_effect__WEBPACK_IMPORTED_MODULE_6__["PersonEffects"]]),
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes),
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                ],
                exports: [
                    src_app_Components_Person_person_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"],
                    src_app_Components_Person_person_add_person_add_person_add_component__WEBPACK_IMPORTED_MODULE_10__["PersonAddComponent"],
                    src_app_Components_Person_person_edit_person_edit_person_edit_component__WEBPACK_IMPORTED_MODULE_9__["PersonEditComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "o1RG":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/Person/person-add/person-add/person-add.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PersonAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonAddComponent", function() { return PersonAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_Services_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/person.service */ "ICWV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class PersonAddComponent {
    constructor(store, _personService, dialogRef) {
        this.store = store;
        this._personService = _personService;
        this.dialogRef = dialogRef;
        this.Name = "";
        this.Surname = "";
    }
    ngOnInit() {
    }
    onAddClick() {
        let personModel = {
            name: this.Name,
            surname: this.Surname,
            id: 0 //no matter what id
        };
        this._personService.createPerson(personModel);
        this.dialogRef.close();
    }
    onCloseClick() {
        this.dialogRef.close();
    }
}
PersonAddComponent.ɵfac = function PersonAddComponent_Factory(t) { return new (t || PersonAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"])); };
PersonAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonAddComponent, selectors: [["app-person-add"]], decls: 8, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3249513483374643425$$SRC_APP_COMPONENTS_PERSON_PERSON_ADD_PERSON_ADD_PERSON_ADD_COMPONENT_TS_1 = goog.getMsg("Add");
        i18n_0 = MSG_EXTERNAL_3249513483374643425$$SRC_APP_COMPONENTS_PERSON_PERSON_ADD_PERSON_ADD_PERSON_ADD_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟f6755cff4957d5c3c89bafce5651f1b6fa2b1fd9␟3249513483374643425:Add`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7819314041543176992$$SRC_APP_COMPONENTS_PERSON_PERSON_ADD_PERSON_ADD_PERSON_ADD_COMPONENT_TS_3 = goog.getMsg("Close");
        i18n_2 = MSG_EXTERNAL_7819314041543176992$$SRC_APP_COMPONENTS_PERSON_PERSON_ADD_PERSON_ADD_PERSON_ADD_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`;
    } return [["name", "nameInp", "type", "text", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["name", "SurnameInp", "type", "text", "placeholder", "Surname", 3, "ngModel", "ngModelChange"], [3, "click"], i18n_0, i18n_2]; }, template: function PersonAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonAddComponent_Template_input_ngModelChange_1_listener($event) { return ctx.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonAddComponent_Template_input_ngModelChange_3_listener($event) { return ctx.Surname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonAddComponent_Template_button_click_4_listener() { return ctx.onAddClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonAddComponent_Template_button_click_6_listener() { return ctx.onCloseClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Surname);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb24tYWRkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-person-add',
                templateUrl: './person-add.component.html',
                styleUrls: ['./person-add.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: src_app_Services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "pl84":
/*!**************************************************************!*\
  !*** ./src/app/Components/Person/person/person.component.ts ***!
  \**************************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _person_add_person_add_person_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../person-add/person-add/person-add.component */ "o1RG");
/* harmony import */ var _person_edit_person_edit_person_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../person-edit/person-edit/person-edit.component */ "Lg5G");
/* harmony import */ var _Store_person_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Store/person.action */ "8cgu");
/* harmony import */ var _Store_person_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Store/person.selector */ "Mqu4");
/* harmony import */ var src_app_Services_person_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/person.service */ "ICWV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function PersonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonComponent_div_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const person_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onDeleteClick(person_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonComponent_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const person_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onEditClick(person_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", person_r1.id, " ", person_r1.name, ", \u00A0 ", person_r1.surname, " ");
} }
class PersonComponent {
    constructor(store, _personService, dialog) {
        this.store = store;
        this._personService = _personService;
        this.dialog = dialog;
        this.personsAsync$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_Store_person_selector__WEBPACK_IMPORTED_MODULE_5__["selectPersons"]));
    }
    ngOnInit() {
        this.store.dispatch(Object(_Store_person_action__WEBPACK_IMPORTED_MODULE_4__["getPersonsAction"])());
    }
    onDeleteClick(person) {
        this._personService.deletePerson(person);
        this.refreshPersons();
    }
    onEditClick(person) {
        const dialogRef = this.dialog.open(_person_edit_person_edit_person_edit_component__WEBPACK_IMPORTED_MODULE_3__["PersonEditComponent"], {
            width: '250px',
            data: { person: person },
            hasBackdrop: false,
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The person is edited');
            this.refreshPersons();
        });
    }
    onAddClick() {
        const dialogRef = this.dialog.open(_person_add_person_add_person_add_component__WEBPACK_IMPORTED_MODULE_2__["PersonAddComponent"], {
            width: '250px',
            hasBackdrop: false,
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The person is added');
            this.refreshPersons();
        });
    }
    refreshPersons() {
        this.store.dispatch(Object(_Store_person_action__WEBPACK_IMPORTED_MODULE_4__["getPersonsAction"])());
    }
}
PersonComponent.ɵfac = function PersonComponent_Factory(t) { return new (t || PersonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_person_service__WEBPACK_IMPORTED_MODULE_6__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
PersonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonComponent, selectors: [["app-person"]], decls: 5, vars: 3, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3249513483374643425$$SRC_APP_COMPONENTS_PERSON_PERSON_PERSON_COMPONENT_TS_1 = goog.getMsg("Add");
        i18n_0 = MSG_EXTERNAL_3249513483374643425$$SRC_APP_COMPONENTS_PERSON_PERSON_PERSON_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟f6755cff4957d5c3c89bafce5651f1b6fa2b1fd9␟3249513483374643425:Add`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7022070615528435141$$SRC_APP_COMPONENTS_PERSON_PERSON_PERSON_COMPONENT_TS__3 = goog.getMsg("Delete");
        i18n_2 = MSG_EXTERNAL_7022070615528435141$$SRC_APP_COMPONENTS_PERSON_PERSON_PERSON_COMPONENT_TS__3;
    }
    else {
        i18n_2 = $localize `:␟826b25211922a1b46436589233cb6f1a163d89b7␟7022070615528435141:Delete`;
    } let i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7585826646011739428$$SRC_APP_COMPONENTS_PERSON_PERSON_PERSON_COMPONENT_TS__5 = goog.getMsg("Edit");
        i18n_4 = MSG_EXTERNAL_7585826646011739428$$SRC_APP_COMPONENTS_PERSON_PERSON_PERSON_COMPONENT_TS__5;
    }
    else {
        i18n_4 = $localize `:␟28f86ffd419b869711aa13f5e5ff54be6d70731c␟7585826646011739428:Edit`;
    } return [[1, "personsOutput"], ["class", "person", 4, "ngFor", "ngForOf"], [3, "click"], i18n_0, [1, "person"], i18n_2, i18n_4]; }, template: function PersonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PersonComponent_div_1_Template, 6, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonComponent_Template_button_click_3_listener() { return ctx.onAddClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.personsAsync$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".personsOutput[_ngcontent-%COMP%] {\n  height: 60%;\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGVyc29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJwZXJzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVyc29uc091dHB1dHtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-person',
                templateUrl: './person.component.html',
                styleUrls: ['./person.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: src_app_Services_person_service__WEBPACK_IMPORTED_MODULE_6__["PersonService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map