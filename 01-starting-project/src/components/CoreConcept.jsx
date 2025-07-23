export default function CoreConcept(props) //object destructuring can also be used here by replacing props with  {title, image, description}    Although this will also mean we need to remove props. from the internal code of this component, since we can directly call the values now.
{

  return (<li>
    <img src={props.image} alt={props.title}/>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>);
}