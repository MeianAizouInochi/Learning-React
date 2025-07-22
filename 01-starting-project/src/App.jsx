import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import {CORE_CONCEPTS} from  './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max)
{
  return Math.floor(Math.random() * (max + 1));
}

//First Custom Component
function Header()
{
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function CoreConcept(props) //object destructuring can also be used here by replacing props with  {title, image, description}    Although this will also mean we need to remove props. from the internal code of this component, since we can directly call the values now.
{

  return (<li>
    <img src={props.image} alt={props.title}/>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>);
}
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
