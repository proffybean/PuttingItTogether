import PersonCard from './components/PersonCard';
import './App.css';

function App() {

  const people = []
  people.push({ firstName:'Jane', lastName:'Doe', age:45, hairColor:'Black' })
  people.push({ firstName:'John', lastName:'Smith', age:88, hairColor:'Brown' })
  people.push({ firstName:'Millard', lastName:'Fillmore', age:50, hairColor:'Brown' })
  people.push({ firstName:'Maria', lastName:'Smith', age:62, hairColor:'Brown' })


  return (
    <div className="App">
      {
          people.map( (person, index) => (
            <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>
          ))
      }
    </div>
  );
}

export default App;
