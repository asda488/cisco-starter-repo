import './App.css';
import { Children } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Exhibit>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Exhibit>
    </div>
  );
}

function Header(){
  return <div className="Header"><h1>Cisco Sextant</h1></div>;
}

function Card({title = "Title", content = "Lorem Ipsum"}){
  return (
  <div className="Card">
    <h2 className="Content">{title}</h2>
    <p className="Content">{content}</p>
    </div>
  );
}

function Exhibit(props){
  return <div className="Exhibit">{props.children}</div>

}

export default App;
