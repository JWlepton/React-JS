import React, { useState, useEffect } from 'react';
import '../App.css';

function Hora() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString('es-ES', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  });

  const formattedDate = time.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className='Hora'>
      <b>
      <p class="italic"> Hora actual: {formattedTime}</p>
      <p class="italic"> Fecha actual: {formattedDate}</p>
      </b>
    </div>
  );
}

export default Hora;