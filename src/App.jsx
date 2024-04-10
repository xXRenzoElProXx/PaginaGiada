import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [btnNoStyle, setBtnNoStyle] = useState({});
  const [btnYesStyle, setBtnYesStyle] = useState({});
  const [btnSendStyle, setBtnSendStyle] = useState({});
  const [resultMessage, setResultMessage] = useState('');
  const [dates, setDates] = useState([]);

  const frasesGraciosas = [
    "¿Estás seguro de decir que no? ¡Quizás te arrepientas!",
    "Dame una oportunidad, ¡todos merecemos una segunda oportunidad!",
    "No te preocupes por sentir vergüenza, ¡el perdón es liberador!",
    "¿Y si es tu destino perdonar y dejar ir?",
    "Negarte a perdonar es fácil, ¡pero reconciliarte es mejor!",
    "El perdón es una puerta abierta a la paz y la armonía,",
    "Decir 'sí' al perdón podría ser el comienzo de una relación más comprensiva.",
    "No hay error tan grande que no pueda ser perdonado",
    "A veces, perdonar es la mejor forma de sanar y seguir adelante.",
    "¿Qué tal si le das una oportunidad al perdón? ",
    "Recuerda, el perdón no es para el otro, es para ti.",
    "¿Cómo sería si dejáramos el pasado atrás y comenzáramos de nuevo con una página limpia?",
    "No tengas miedo de perdonar, ¡es un acto de valentía y amor propio!"
  ];

  const handleNoClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    const blurValue = newClickCount / 3;
    setBtnNoStyle({ filter: `blur(${blurValue}px)` });

    const fontSize = parseInt(window.getComputedStyle(btnYes).fontSize);
    const paddingVert = parseInt(window.getComputedStyle(btnYes).paddingTop);
    const paddingHoriz = parseInt(window.getComputedStyle(btnYes).paddingRight);
    setBtnYesStyle({ fontSize: `${fontSize + 1}px`, padding: `${paddingVert + 1}px ${paddingHoriz + 3}px` });
    setBtnSendStyle({ fontSize: `${fontSize + 1}px`, padding: `${paddingVert + 1}px ${paddingHoriz + 3}px`, marginTop: `${fontSize - 500}px` });

    const randomIndex = Math.floor(Math.random() * frasesGraciosas.length);
    setResultMessage(frasesGraciosas[randomIndex]);

    const dateTime = new Date().toLocaleString();
    setDates(prevDates => [...prevDates, dateTime]);
  };

  const handleYesClick = () => {
    setDates([]);
    setClickCount(0);
    setResultMessage('Sabía que dirías que sí ❤️');
    for (let i = 0; i < 200; i++) {
      createHeart();
    }
  };

  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.addEventListener('animationend', function () {
      heart.remove();
    });
  }

  return (
    <div>
      <div className="container mt-5" id="container">
        <h1 className="title">David, ¿Me perdonas?</h1>
        <div className="icon-heart">
          <img src="/src/assets/heart.webp" alt="Heart" style={{ width: '120px' }} />
        </div>
        <div className="buttons-container">
          <div className="buttons-row">
            <button id="btnYes" style={btnYesStyle} className="btn">
              Sí
            </button>
            <button id="btnNo" style={btnNoStyle} className="btn" onClick={handleNoClick}>
              No
            </button>
          </div>
          <form className="send-form" action="https://formsubmit.co/renzocrisanto2021@gmail.com" method="POST">
            <textarea id="Mensaje" name="Mensaje" rows="4" cols="50" value={dates.join('\n')} style={{ display: 'none' }}></textarea>
            <button type='submit' className="btn-send" style={btnSendStyle}>Sí</button>

            <input type="hidden" name="_next" value="http://localhost:5173" />
            <input type="hidden" name="_cc" value="giada.az132@gmail.com" />
            <input type="hidden" name="_subject" value="Nueva Actividad" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
          </form>
        </div>
        <div id="result">
          <br />
          <div style={{ fontSize: '25px', fontWeight: 'bold' }} onClick={handleYesClick}>{resultMessage}</div>
        </div>
      </div>
    </div >
  );
};

export default App;