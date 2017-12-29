import {Address} from './address'

export class Property {
    public ID: number;
    public Description: string;
    public Type: string;
    public Orientation: string;
    public State: number;
    public Bedroms: number;
    public BedromsSizes: string;
    public Kitchens: number;
    public KitchenSizes: string;
    public LivingroomSize: number;
    public CourtyardSize: number;
    public Bathrooms: number;
    public Size: number;
    public ConstructionYear: number;
    public ConstructionSize: number;
    public Padron: string;
    public BuildingName: string;
    public Address: Address;
    public AddressID: number;
    public ApartmentsPerFloor: number;
    public Floors: number;
    public TerraceSize: string; //fix
    public BaclonySize: string;//fix
    public Showers: number;
    public Expenses: number;
    public Amenities: string;
    public CreatedAt: string; // fix
    public PropertyState: string; // fix
    public Elevators: number;
    public GarageSize: number;
}