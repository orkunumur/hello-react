import logo from './logo.svg';
import './App.css';
import Header from './header'

const name = "Mehmet";
const surname= "ASDFGH";
const isloggedin = true; 


function App() {
  return (

    <div className="App">
      <Header />
      {/* <h1>{name} {surname}</h1> */}
      {/* <h2> {isloggedin && `Benim adim ${name}, soyadim ${surname}`}</h2>
      <h2> {!isloggedin && `HATALI GIRIS YAPTINIZ`}</h2> */}
      <h2> {isloggedin ? `Benim adim ${name}, soyadim ${surname}`: `HATALI GIRIS YAPTINIZ`}</h2>
      Hello World

    </div>
  );
}

export default App;
