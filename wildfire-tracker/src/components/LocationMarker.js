import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

import React from 'react';

const LocationMarker = ({ onClickIcon, fire }) => (
    <div className="location-marker">
        <Icon
            icon={locationIcon}
            className="location-icon"
            onClick={e => onClickIcon({ id: fire.id, title: fire.title }, e)} />
    </div>
);

export default LocationMarker;
