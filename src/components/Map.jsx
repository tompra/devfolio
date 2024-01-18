import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
    const position = [52.52, 13.405];
    return (
        <div className='align-element h-96 md:h-screen'>
            <MapContainer
                center={position}
                zoom={13}
                style={{ width: '100%', height: '100%' }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={position}>
                    <Popup>Looking for a new opportunities</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};
export default Map;
