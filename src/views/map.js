import "../style/map.css";
import Parse from "parse/dist/parse.min.js";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from "react";
import { CircularProgress, Typography } from '@mui/material';


export default function Map() {
  const [supportPoints, setSupportPoints] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const marker = require('../assets/marker.png');

  const customIcon = new Icon({
    iconUrl: String(marker),
    iconSize: [50, 50],
    // iconAnchor: [1, 1],
    popupAnchor: [-0, -25]
  })

  async function fetchSupportPoints() {
    const query = new Parse.Query("SupportPoints");
    let queryResult = await query.findAll();
    console.log("SupportPoints: ", queryResult);
    setSupportPoints(queryResult);
  }

  async function loadLocation() {
    await navigator.geolocation.getCurrentPosition(function (position) {
      setUserLocation([position.coords.latitude, position.coords.longitude]);
    });
  }

  useEffect(() => {
    loadLocation();
    fetchSupportPoints();
  }, []);


  return userLocation ? (
    <div>
      <div className="header">
        <h2>Mapa</h2>
      </div>
      <div className="row">
        <MapContainer
          center={userLocation}
          zoom={12}
          scrollWheelZoom={false}
          className="mapView"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {supportPoints !== null &&
            supportPoints.map((point, i) => {
              var position = [point.get("location")._latitude, point.get("location")._longitude];
              return (
                <Marker position={position} icon={customIcon}>
                  <Popup>
                  <Typography variant="body2" color="text.secondary">
                    {`${point.get("name")}`}
                  </Typography>
                  </Popup>
                </Marker>
              )
            })
          }
        </MapContainer>
      </div>
    </div>
  ) : <CircularProgress color="secondary" />;
}
