import React from 'react';
import imgder from '../images/imgder.jpg'
import '../App.css';

function Centro() {
    return (
        <section className="Centro">
            <div className='Textis'>
                 <h2>Conoce lugares sorprendentes</h2>
                    <br/>
                    <p>
                     Contrary to popular belief, Lorem Ipsum is not simply 
                     random text. It has roots in a piece of classical Latin literature 
                     from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
                     professor at Hampden-Sydney College in Virginia, looked up one of the more 
                     obscure Latin words, consectetur.
                    </p>
            </div>
            <div className='imgder'>
            <img src= {imgder} alt="" />
            </div>
        </section>
    );
}

export default Centro;