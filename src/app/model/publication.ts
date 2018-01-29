import { Property } from "./property";

export class Publication {
    public ID: number;
    public Title: string;
    public Operation: string;
    public Property: Property;
    public PropertyID: number;
    public Price: number;
    public StartDate: Date;
    public EndDate: Date;
    public CreatedAt: Date;
    public ContactInformation: ContactInformation;
}

export class ContactInformation {
    public ID: number;
    public Name: string;
    public Email: string;
	public PhoneNumber: string;
}