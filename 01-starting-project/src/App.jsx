import componentsImg from './assets/components.png';
import {CORE_CONCEPTS} from  './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
        <section id='examples'>
          <h2>
            Examples
          </h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>Components</TabButton>
            <TabButton>Components</TabButton>
            <TabButton>Components</TabButton>
            
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
