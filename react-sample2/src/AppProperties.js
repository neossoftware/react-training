
// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)
import reactImg from './assets/react-core-concepts.png';

import { CORE_CONCEPTS , reactDescriptions} from './data';


function genRandomInt(max)  { return Math.floor(Math.random() * (max+1)); }

function CoreConcept({image,title, description}) {
  return(
    <li> 
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}  </p>

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

function AppProperties() {
  return (
      <div>
          <Header />

          <main><section id="core-concepts">
              <h2>Time to get started!</h2>
              <ul >
                  <CoreConcept title={CORE_CONCEPTS[0].title}
                      description={CORE_CONCEPTS[0].description}
                      image={CORE_CONCEPTS[0].image}></CoreConcept>

                  <CoreConcept title={CORE_CONCEPTS[1].title}
                      description={CORE_CONCEPTS[1].description}
                      image={CORE_CONCEPTS[1].image}></CoreConcept>

                  <CoreConcept title={CORE_CONCEPTS[2].title}
                      description={CORE_CONCEPTS[2].description}
                      image={CORE_CONCEPTS[2].image}></CoreConcept>

              </ul>
          </section>
          </main>



          <footer>
              <table>
                  <thead>
                      <tr>
                          <th>Column 1</th>
                          <th>Column 2</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Row 1, Cell 1</td>
                          <td>Row 1, Cell 2</td>
                      </tr>
                      <tr>
                          <td>Row 2, Cell 1</td>
                          <td>Row 2, Cell 2</td>
                      </tr>
                      <tr>
                          <td>Row 3, Cell 1</td>
                          <td>Row 3, Cell 2</td>
                      </tr>
                  </tbody>
              </table>
          </footer>
      </div>
  );
}

export default AppProperties;
