import {Address} from './address'

export class Property {
    public ID: number;
    public Description: string;
    public Type: string;
    public Orientation: string;
    public Disposition: string;
    public State: number;
    public Bedrooms: number;
    public Bathrooms: number;
    public Garages: number;
    public ConstructionYear: number;
    // Sizes
    public Size: number;
    public ConstructionSize: number;
    public TerraceSize: string;
    public Floors: number;
    public Address: Address;
    public AddressID: number;
    
    public Expenses: number;
    public Amenities: string;
    public CreatedAt: string; 

    // public Padron: string;
    //public BuildingName: string;
    //public ApartmentsPerFloor: number;
    //public BedromsSizes: string;
    //public Kitchens: number;
    //public KitchenSizes: string;
    //public LivingroomSize: number;
    //public CourtyardSize: number;
    //public BaclonySize: string; //fix
    //public Showers: number;
    //public PropertyState: string; // fix
    //public Elevators: number;
    //public GarageSize: number;
}
//   property: this.fb.group({
//     description: [''],
//     title: ['', <any>Validators.required],
//     type: ['', <any>Validators.required],
//     orientation: ['', <any>Validators.required],
//     squareFeet: ['', [<any>Validators.required,Validators.min(0), Validators.max(10000)]],
//     lotSize: ['', [<any>Validators.required,Validators.min(0), Validators.max(10000)]],
//     terraceSize: ['', [<any>Validators.required,Validators.min(0), Validators.max(10000)]],
//     bedrooms: ['', [<any>Validators.required,Validators.min(0), Validators.max(5)]],
//     state: ['', [<any>Validators.required,Validators.min(0), Validators.max(10)]],
//     disposition: [''],
//     bathrooms: ['', [<any>Validators.required,Validators.min(0), Validators.max(5)]],
//     floors: ['', [<any>Validators.required,Validators.min(0), Validators.max(5)]],
//     garages: ['', [<any>Validators.required,Validators.min(0), Validators.max(4)]],
//     constructionYear: ['', [Validators.min(1800), Validators.max(2045)]]
//   }),