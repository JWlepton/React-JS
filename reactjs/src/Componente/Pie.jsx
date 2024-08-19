import React from 'react';
import '../App.css';

function Pie() {
    return (
        <footer className="Pie">
            <ul>
                <a href="https://iziperu.com/?gad_source=1&gclid=Cj0KCQjw2ou2BhCCARIsANAwM2FxADbnwCz3Cqn7cC0iMqSfm7JFzKaN7Gae45NeiuXYLooD1dqceJ4aAh-bEALw_wcB" target='blank' >Perú Travel</a>
                <a href="https://gestion.pe/noticias/tripadvisor/" target='blank' >Tripadvisor Perú</a>
                <a href="https://infoperu.com/" target='blank' >Info Perú</a>
                <a href="https://www.latamairlinesgroup.net/" target='blank' >Latam Airlines</a>
            </ul>
            <div className='rellenito'>
            </div>
        </footer>
    );
}

export default Pie;