import React from 'react';
import vehiclesData from '../../vehiclesData.json';
import VehiclesCard from '../VehiclesCard/VehiclesCard';
import './Home.css';

const Home = () => {
    const vehicles = vehiclesData;
     
    return (
       <section className="home">
            <div className="container">
                <div className="vehicles">
                    {
                        vehicles.map(vl => <VehiclesCard key={vl.id} vehicles={vl}/>)
                    }
                </div>
            </div>
       </section>
    );
};

export default Home;