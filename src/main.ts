import * as ko from "knockout";
import {setState} from "knockout-store";
import DisplayComponent from "./components/display";
import EditComponent from "./components/edit";
import AppState from "./appstate";
import ComplexObject from "./models/compexobject";

const state: AppState = {
    firstName: ko.observable("Testy"),
    lastName: ko.observable("McTest"),
    complex: ko.observable({
        age: 42,
        address: {
            houseNo: 123,
            street: "Street",
            town: "Town",
            postCode: "AB1 1BA"
        }
    })
};

setState(state);

ko.components.register("display", DisplayComponent);
ko.components.register("edit", EditComponent);

ko.applyBindings();