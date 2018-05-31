import * as ko from "knockout";
import { getState } from 'knockout-store';
import AppState from "../appstate";
import ComplexObject from "../models/compexobject";

const state = getState() as KnockoutObservable<AppState>;

class EditComponent {
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    complex: KnockoutObservable<ComplexObject>;

    constructor() {
        this.firstName = state().firstName;
        this.lastName = state().lastName;
        this.complex = state().complex;
    }

    public incrementAge(): void {
        let c = this.complex();
        c.age++;
        this.complex(c);
        console.log(c);
    }
}

export default {
    viewModel: EditComponent,
    template: require("./edit.html")
};