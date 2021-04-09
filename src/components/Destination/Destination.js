import React, { useState } from 'react';
import './Destination.css';
const Destination = () => {
    const [searchVisible, setSearchVisible] = useState(true);

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
                                <input type="text" value="Mirpur 1" id="pickFrom"/>
                            </div>
                            <div className="input_group">
                                <label htmlFor="pickTo">Pick To</label>
                                <input type="text" value="Dhanmondi" id="pickTo"/>
                            </div>
                            <input className="btn_primary" onClick={handleSearch} type="submit" value="Search"/>
                        </from>
                        }
                        {
                            !searchVisible && <h3>Searched</h3>
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