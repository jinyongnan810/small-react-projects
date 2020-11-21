import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

const Map = ({ center, zoom }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [locationInfo, setLocationInfo] = useState({ id: '', title: '' });
    const [showLocationInfo, setShowLocationInfo] = useState(false);
    const onClickIcon = (info) => {
        if (info.id === locationInfo.id) {
            setShowLocationInfo(!showLocationInfo);
        } else {
            setShowLocationInfo(true);
        }
        setLocationInfo(info);
    };
    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            const res = await fetch(
        'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events',
      );
            const json = await res.json();
            setEvents(json.events);
            setLoading(false);
        };
        fetchEvents();
    }, []);
    if (loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDlZjjfdULoPo8vraTqReoZTJrbaw0vCBg' }}
                defaultCenter={center}
                defaultZoom={zoom}>
                {events
                    .filter(e => e.categories[0].id === 8)
                    .map(fire => (
                        <LocationMarker
                            key={fire.id}
                            lat={fire.geometries[0].coordinates[1]}
                            lng={fire.geometries[0].coordinates[0]}
                            onClickIcon={onClickIcon}
                            fire={fire} />
          ))}
            </GoogleMapReact>
            {showLocationInfo ? <LocationInfoBox info={locationInfo} /> : ''}
        </div>
    );
};

Map.defaultProps = {
    center: {
        lat: 35.6804,
        lng: 139.769,
    },
    zoom: 6,
};

export default Map;
