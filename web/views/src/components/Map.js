import React, { Component } from "react";
import { MapContainer as Map, CircleMarker, TileLayer,Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "./cities";

class Maps extends Component {
  render() {
    var centerLat = (data.minLat + data.maxLat) / 2;
    var distanceLat = data.maxLat - data.minLat;
    var bufferLat = distanceLat * 0.05;
    var centerLong = (data.minLong + data.maxLong) / 2;
    var distanceLong = data.maxLong - data.minLong;
    var bufferLong = distanceLong * 0.05;
    return (
      <div className="flex flex-col col-span-full sm:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
        <h3 class="text-2xl  leading-normal font-bold mt-0 mb-2 text-slate-800" style={{ textAlign: "center" }}>Geo Attack Data</h3>
        <Map
          style={{ height: "480px", width: "100%" }}
          zoom={1}
          center={[centerLat, centerLong]}
          bounds={[
            [data.minLat - bufferLat, data.minLong - bufferLong],
            [data.maxLat + bufferLat, data.maxLong + bufferLong]
          ]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {data.city.map((city, k) => {
            return (
              <CircleMarker
                key={k}
                center={[city["coordinates"][1], city["coordinates"][0]]}
                radius={20 * Math.log(city["population"] / 10000000)}
                fillOpacity={0.5}
                stroke={false}
              >
                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                  <span>{city["name"] + ": " + "Count" + " " + city["population"]}</span>
                </Tooltip>
              </CircleMarker>
            );
          })}
        </Map>
      </div>
    );
  }
}

export default Maps;
