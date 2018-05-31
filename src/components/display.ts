import * as ko from "knockout";
import { getState } from 'knockout-store';
import AppState from "../appstate";
import ComplexObject from "../models/compexobject";

const state = getState() as KnockoutObservable<AppState>;

class DisplayComponent {
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    complex: KnockoutObservable<ComplexObject>;

    constructor() {
        this.firstName = state().firstName;
        this.lastName = state().lastName;
        this.complex = state().complex;
    }
}

export default {
    viewModel: DisplayComponent,
    template: require("./display.html")
};