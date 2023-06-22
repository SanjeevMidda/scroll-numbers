import './index.css';

function App() {

  let numbers = [];

  for (let index = 0; index < 100; index++) {
    
    numbers.push(index);
  }

  console.log(numbers);

  return (
    <div className="App">
      <div className="line"></div>
     {
      numbers.map((item, index) => <h1 key={index}>{item}</h1>)
     }
    </div>
  );
}

export default App;
