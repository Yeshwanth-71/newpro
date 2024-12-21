import React from 'react';
import { Telugu } from '../Data/Telugu';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

function Mobile() {
    return (
        <div className='car'>
            <Header /><br /><br />
            <center><h1 style={{ color: "white" }}>Popular Movies</h1></center>
            <br />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {Telugu.map((item) => (
                    <Link to={`/telmovie/${item.id}`} key={item.id} style={{ textDecoration: "none" }}>
                        <div className='move' style={{ padding: "10px", textAlign: "center", width: '200px' }}>
                            <img src={item.image} alt={item.title} style={{ height: "200px", width: "200px", objectFit: "cover", borderRadius: "8px" }} />
                            <p style={{ color: "white" }}>{item.title}</p>
                            <p style={{ color: "white" }}>{item.rating}</p>
                        </div>
                    </Link>
                ))}
            </div>

           
        </div>
    );
}

export default Mobile;
