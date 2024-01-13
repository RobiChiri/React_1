import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation() {
  const { location, loading, error } = useCurrentLocation();

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error detected...</h1>}
      {location && <h1>{location}</h1>}
    </div>
  );
}
