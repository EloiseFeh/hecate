import '../style/map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Parse from 'parse/dist/parse.min.js';
import React, { useState } from 'react';


export default function Map() {

    const [supportPoints, setSupportPoints] = useState(null);

    async function fetchSupportPoints() {
        const query = new Parse.Query('SupportPoints');
        let queryResult = await query.findAll();
        console.log('SupportPoints: ', queryResult);
        setSupportPoints(queryResult);
    }

    return (
        <div>
            <div className="header">
                <label>Mapa</label>
            </div>
            <div className='row'>
                <MapContainer center={[51.505, -0.09]} zoom={20} scrollWheelZoom={false} className='mapView'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );

}