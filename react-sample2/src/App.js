
// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)
import reactImg from './assets/react-core-concepts.png';

import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

const reactDescriptions= [
  "React is a JavaScript library for building user interfaces",
  "React is declarative",
  "React is component-based",
  "React is learn once, write anywhere",
  "React is fast",
  "React is scalable",
  "React is popular",
  "React is open source"
];

function genRandomInt(max)  { return Math.floor(Math.random() * (max+1)); }

function CoreConcept(props) {
  return(
    <li> 
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}  </p>

    </li>
  )
}

function Header(){

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

function App() {
  return (
    <div>
     <Header />

      <main><section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul >
          <CoreConcept  title="Components"
             description="The core UI build block"
             image={componentsImg}></CoreConcept>

            <CoreConcept  title="Properties"
             description="Properties block"
             image={propsImg}></CoreConcept>
        </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
          </menu> 
        </section>
      </main>

    </div>
  );
}

export default App;
