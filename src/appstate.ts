import ComplexObject from "./models/compexobject";

export default interface AppState {
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    complex: KnockoutObservable<ComplexObject>;
}