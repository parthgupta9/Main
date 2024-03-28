import React, { useState, useEffect } from 'react';
import bg from '../assets/bg.jpg'
import mmil from '../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png'
import { Link } from 'react-router-dom';
import appbg from "../assets/bg-app.svg";

const App = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
          <img
         src={windowSize.width <= 900 ? appbg : bg}
        alt="Your Image"
        style={{
          width: windowSize.Width < 900 ? "100vw" : "100vw", // Adjust as needed
          height: windowSize.Width < 900 ? "100vh" : "100vh", // Adjust as needed
          objectFit: "cover", // Adjust as needed
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(to right, #666666,#4d4d4d, #262626, #1a1a1a, #0d0d0d)', // Adjust as needed
          opacity:'0.6',
          padding: '20px', // Adjust as needed
          borderRadius: '10px', // Adjust as needed
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Adjust as needed
        }}
      >
        {/* Your card content goes here */}
        <h2 style={{
            marginLeft:'70px',
            marginRight:'70px',
            fontSize:'3rem',
            height:'96px',
            color:'#ffffff',
            fontStyle:'Montserrat'

        }}>MMIL</h2>
        <p style={{
              marginLeft:'55px',
              marginRight:'70px',
              fontSize:'2rem',
              height:'96px',
              color:'white',
              fontStyle:'Montserrat',
              marginTop:'-20px',
        }}>LET'S START</p>
        <button style={{
            fontWeight: 'bold',
            backgroundColor: isHovering ? '#009A0F' : '#FFE454',
            height:'44px',
            width:'124px',
            marginLeft:'70px',
            marginTop:'-10px'
        }}><Link to="/Register" style={{textDecoration: 'none', color:'#000000', color: isHovering ? '#FFE454' : '#000000',}}  onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>START</Link></button>
           <img
          src={mmil}
          alt="Overlay Image"
          style={{
            position: 'absolute',
            marginTop:'-20%',
            top: '-20%',
            left: '24%',
            width: '66%',
            height: '38%',
            objectFit: 'cover', // Adjust as needed
            borderRadius: '10px', // Adjust as needed
            opacity: 1, // Adjust as needed
          }}
        />
      </div>
    </div>
  );
};

export default App;
