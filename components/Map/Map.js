import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const Map = () => {

  
  return (
    <div className="p-4">
      <MapContainer 
      center={[51.505, -0.09]} 
      zoom={13} 
      scrollWheelZoom={false} 
      style={{height: 400, width: 700}}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN2}`}
          
        />
        
      </MapContainer>
    </div>
  )
}

export default Map