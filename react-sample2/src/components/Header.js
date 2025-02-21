import reactImg from '../assets/react-core-concepts.png';

import {  reactDescriptions} from '../data';


function genRandomInt(max)  { return Math.floor(Math.random() * (max+1)); }


export default function Header(){

    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {reactDescriptions[genRandomInt(reactDescriptions.length-1)]} , 
            Fundamental React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    );
  
  }
  