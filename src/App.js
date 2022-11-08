// import logo from './logo.svg';
import './App.css';

function App() {
  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long"});
  const morning = time.getHours() >= 6 && time.getHours() <= 11;
  let dayMessage;

// console.log(`${day}`);

  if(day.toLowerCase() === "monday"){
    dayMessage = `Happy ${day}`;
  } else if (day.toLowerCase() === "tuesday"){
    dayMessage = `${day}, four days to go`;
  } else if (day.toLowerCase === "wednesday"){
    dayMessage = `${day}, half way there`;
  } else if (day.toLowerCase === "thursday"){
    dayMessage = `${day}, start planning the weekend`;
  }else if (day.toLowerCase === "friday"){
    dayMessage = `Woo - hoo, the weekend is coming!`;
  }else {
    dayMessage = "Saty calm and keep having fun";
  }
  return (
    <div className="App">
      <h1>{dayMessage}</h1>
    
    {morning ? <h2>Have you had breakfast yet?</h2> : ''}
    </div>
  );
}

export default App;
