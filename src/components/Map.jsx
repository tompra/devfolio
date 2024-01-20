import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
    const position = [52.52, 13.405];
    return (
        <div className='align-element relative w-full h-96 md:h-full max-h-96 md:max-h-full sm:w-80 md:w-full md:px-5 mx-auto'>
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
                    <Popup>Looking for new opportunities</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
