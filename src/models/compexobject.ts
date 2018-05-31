interface Address {
    houseNo: number;
    street: string;
    town: string;
    postCode: string;
}

export default interface ComplexObject {
    age: number;
    address: Address;
}