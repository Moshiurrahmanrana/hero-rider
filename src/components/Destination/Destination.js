import React, { useState } from 'react';
import { useParams } from 'react-router';
import './Destination.css';
import vehicleData from '../../vehiclesData.json';
import DestinationCard from '../DestinationCard/DestinationCard';

const Destination = () => {
    const [searchVisible, setSearchVisible] = useState(true);
    const [pickFrom, setPickFrom] = useState('Mirpur 1');
    const [pickTo, setPickTo] = useState('Dhanmondi');
    const {id} = useParams();
    const currentVehicle = vehicleData.find(vehicle => vehicle.id == +id);

    const handleSearch = () =>{
        setSearchVisible(false);
    }
    return (
       <section className="destination">
           <div className="container">
               <div className="destination_content">
                   <div className="destionation_search">
                        {
                            searchVisible && <from className="destination_from">
                            <div className="input_group">
                                <label htmlFor="pickFrom">Pick From</label>
                                <input onChange={(e) => setPickFrom(e.target.value)} type="text" placeholder="Mirpur 1" id="pickFrom"/>
                            </div>
                            <div className="input_group">
                                <label htmlFor="pickTo">Pick To</label>
                                <input onChange={(e) => setPickTo(e.target.value)} type="text" placeholder="Dhanmondi" id="pickTo"/>
                            </div>
                            <input className="btn_primary" onClick={handleSearch} type="submit" value="Search"/>
                        </from>
                        }
                        {
                            !searchVisible && <div className="location">
                                <div className="location_wrapper">
                                    <h2 className="location_from">{pickFrom}</h2>
                                    <h2 className="location_to">{pickTo}</h2>
                                    {
                                        currentVehicle.seat.map((seat, ind) => <DestinationCard key={ind} vehicle={currentVehicle} seat={seat}/>)
                                    }
                                    <button onClick={() => setSearchVisible(true)} className="btn_primary">Back</button>
                                </div>
                            </div>
                        }
                   </div>
                   <div className="destination_map-box">
                   <iframe className="destination_map" title="Murpur 1" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58421.60764921822!2d90.33117937251251!3d23.770530803405677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1617899624979!5m2!1sen!2sbd" allowFullScreen="" ></iframe>
                   </div>
               </div>
           </div>

       </section>
    );
};

export default Destination;