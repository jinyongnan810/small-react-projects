import React from 'react';

const LocationInfoBox = ({ info }) => (
    <div className="location-info">
        <h3>Event Location Info</h3>
        <h4>
            ID: <strong>{info.id}</strong>
        </h4>
        <h4>
            TITLE: <strong>{info.title}</strong>
        </h4>
    </div>
  );

export default LocationInfoBox;
