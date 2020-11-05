import React from 'react';
import PageTitle from '../components/PageTitle';
import {Map, MapContainer, TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'



function ContactPage() {
  return(
    <>
    <PageTitle title="Contato" />
    <h1>Contact page!</h1>
    <div>
      <MapContainer 
        center={[-19.9546277,-43.9353844]}
        zoom={15}
        style={{width: '100%', height:'100%'}}
      >

        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
    </>
  );
}

export default ContactPage;