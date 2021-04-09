import React from 'react';
import peopleIcon from '../../images/peopleicon.png';
import './DestinationCard.css'

const DestinationCard = (props) => {
    const {vehicle, seat} = props;
    const { name, icon, seatRate} = vehicle;
    return (
        <div className="destination_card">
            <img src={icon} alt={name} className="vehicle_icon" />
            <h2 className="vehicle_name">{name}</h2>
            <h2 className="vehicle_seat"><img src={peopleIcon} alt="Seat"/>{seat}</h2>
            <h3 className="vehicle_fare">${seat*seatRate}</h3>
            
        </div>
    );
};

export default DestinationCard;