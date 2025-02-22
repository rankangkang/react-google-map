import { Draggable, LatLng } from "../../types";

export type MarkerDraggable = Draggable<{ latlng: LatLng }>;

export type MarkerOrigin = "center" | "bottomCenter";

export type MarkerOriginOffset = [number, number];
