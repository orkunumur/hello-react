import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import User from './components/User'

const friends = [
  {
    name: "Ali",
    id: 1
  },
  {
    name: "Mehmet",
    id: 2
  },
  {
    name: "Fatma",
    id: 3
  }
]


function App() {
  return (

    <div className="App">
      <User 
      name= "Orkun" 
      surname="UZUNDERE" 
      isLoggedin= {true} 
      age={'30'} 
      friends={friends}
      adress = {{
        title: 'Bayrakli / Izmir',
        zip: 35535
      }}/>
    </div>
  );
}

export default App;
 