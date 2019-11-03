interface AbstractPoint {
  pointId: string;
  type: Type;
  ts: number;
}

type Type = "PERCENTAGE" | "SINGLE_EVENT" | "GEOLOCATION"

export const POINT_TYPE_SINGLE_EVENT = "SINGLE_EVENT"
interface SingleEventPoint extends AbstractPoint {
  type: "SINGLE_EVENT";
  payload: void;
}

export const POINT_TYPE_PERCENTAGE = "PERCENTAGE"
interface PercentagePoint extends AbstractPoint {
  payload: number; // 0 - 1
}

export const POINT_TYPE_GEOLOCATION = "GEOLOCATION"
interface LatLng {
  lat: number;
  lng: number;
}
interface GeolocationPoint extends AbstractPoint {
  payload: LatLng;
}
