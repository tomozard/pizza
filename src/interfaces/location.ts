interface FeaturesGeometry {
    type: string;
    coordinates: any[];
  }
  interface FeaturesProperties {
    Name: string;
    description: string;
    OBJECTID: number;
    Shape_Leng: number;
    Shape_Area: number;
    Grid: number;
    StoreName: string;
    Remark: string;
    QuadrantID: number;
    StoreNo: number;
    Join: number;
  }
  interface Features {
    type: string;
    properties: FeaturesProperties;
    geometry: FeaturesGeometry;
  }
  interface CrsProperties {
    name: string;
  }
  interface Crs {
    type: string;
    properties: CrsProperties;
  }
  
  export default interface ILocation {
    type: string;
    name: string;
    crs: Crs;
    features: Features[];
  }