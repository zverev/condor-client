interface AbstractPoint {
  pointId: string;
  type: Type;
  ts: number;
}

type Type = "PERCENTAGE" | "SINGLE_EVENT" | "GEOLOCATION"

interface LatLng {
  lat: number;
  lng: number;
}
interface GeolocationPoint extends AbstractPoint {
  payload: LatLng;
}

interface SingleEventPoint extends AbstractPoint {
  type: "SINGLE_EVENT";
  payload: void;
}
export const createSingleEventPoint = (pointId: string): SingleEventPoint => ({
  type: "SINGLE_EVENT",
  pointId,
  ts: Date.now(),
  payload: undefined,
});

interface PercentagePoint extends AbstractPoint {
  payload: number; // 0 - 1
}

export const writeSingleEventPoint = () => {

}
