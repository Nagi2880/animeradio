import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Elements.module.css';
function Navbar() {
  //const used to call the function useNavigate
  const navigate = useNavigate();
  // Route for the button Sign in
  const SignInRoute = () =>{
    let path = "/Iniciar-Sesion";
    navigate(path);
  }
  // Route for the button Songs
  const SongsRoute = () =>{
    let path = "/Songs-list";
    navigate(path);
  }


  return (
    <div id={styles.HeaderNavbar}>
            <li id={styles.NavbuttonContainer}>
              <button id={styles.Navbutton}>IDIOMA</button>
            </li>
            <li id={styles.NavbuttonContainer}>
              <button id={styles.Navbutton} onClick={SongsRoute}>CANCIONES</button>
            </li>
            <li id={styles.NavbuttonContainer}>
              <button id={styles.NavbuttonSign} onClick={SignInRoute}>INICIAR SESION</button>
            </li> 
    </div>
    );
};

export default Navbar