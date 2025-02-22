import React from "react";

export interface GoogleMapApi {
  map: google.maps.Map;
  maps: typeof google.maps;
}

export type LatLng = google.maps.LatLngLiteral;

/**
 * paneType z-index sequence: floatPane > overlayMouseTarget > markerLayer > overlayLayer > mapPane
 */
export type PaneType = keyof NonNullable<google.maps.MapPanes>;

export type Draggable<T = any> = {
  draggable?: boolean;
  onDrag?(e: MouseEvent, params: T): void;
  onDragStart?(e: MouseEvent, params: T): void;
  onDragEnd?(e: MouseEvent, params: T): void;
};

/** overlay component type */
export type OCType<Props, Ref = undefined> = Ref extends undefined
  ? React.ComponentType<Props>
  : React.ForwardRefExoticComponent<Props & React.RefAttributes<Ref>>;
