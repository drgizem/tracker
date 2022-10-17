import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker,Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"


function Map(props){
  const position=[props.lat,props.lng]
  const newicon = new L.icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [46, 56]  
  })
  const mapstyle={ height: "80vh", width: "110%",zindex:"999"}
  return (
    <>
    <MapContainer style={mapstyle} center={position} zoom={13} scrollWheelZoom={true} attributionControl={false} zoomControl={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position} icon={newicon}>
  <Popup>
        You are here
    </Popup>
  </Marker>
</MapContainer>
</>
  )
}
export default Map

