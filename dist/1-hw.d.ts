interface IDataObj {
    dt: string;
    quantity: number;
    age: number | null;
    temp: {
        temperature: string;
        city: string;
        optional?: boolean;
    };
}
declare let data: IDataObj[];
declare let setData: Set<string>;
declare let dateMap: Map<string, any[]>;
