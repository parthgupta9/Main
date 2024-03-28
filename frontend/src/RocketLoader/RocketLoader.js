import React, { useEffect } from 'react';
import './RocketLoader.css'; 
import rocket from "../images/anim-rocket.png";

function App() {
//   const [isMoving, setIsMoving] = useState(false);

//   const moveRockets = () => {
//     setIsMoving(true);
//     setTimeout(() => setIsMoving(false), 1000);
//   };

  const moveRockets = () => {
    const rockets = document.querySelectorAll('.rocket');
    rockets.forEach(rocket => {
      if (rocket.classList.contains('rocket-left')) {
        rocket.classList.add('move-left');
      } else if (rocket.classList.contains('rocket-right')) {
        rocket.classList.add('move-right');
      }
    });

    
  setTimeout(() => {
    rockets.forEach(rocket => {
      rocket.classList.remove('move-left', 'move-right');
    });
  }, 500); // Adjust timing as needed
};

useEffect(() => {
    moveRockets();
  },[]);

  return (
    <>
      <img className={`rocket rocket-left`} src={rocket} alt="Rocket Left" />
      <img className={`rocket rocket-right`} src={rocket} alt="Rocket Right" />
      {/* <button onClick={moveRockets}>Move Rockets</button> */}
      </>
  );
}

export default App;
