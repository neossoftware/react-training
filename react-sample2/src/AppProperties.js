
// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)

import Header from './components/Header';
import { CORE_CONCEPTS} from './data';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function AppProperties() {

    function myFunction(){
        console.log("Hello! I am an alert box!!");    
    }

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
          <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={myFunction}>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
          </menu> 
        </section>
          </main>

      </div>
  );
}

export default AppProperties;
