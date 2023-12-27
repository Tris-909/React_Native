interface Coord {
  latitude: Number;
  longitude: Number;
  altitude: Number;
  accuracy: Number;
  heading: Number;
  speed: Number;
}

type MapPoint = {
  timestamp: Number;
  coords: Coord;
};

export interface TrackInterface {
  id: String;
  userId: String;
  name: String;
  locations: MapPoint[];
}
