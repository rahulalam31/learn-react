import React, { useState } from "react";
import "./App.css";

function App(){

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(``);
  const [message, setMessage] = useState(``);

  let calBmi = (e) => {
    e.preventDefault();
    if(weight===0 || height === 0) {
      alert('please enter a valid weight and height');
    }
    else {
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25) {
        setMessage('you are under weight')
      }
      else if(bmi>=25 && bmi <30) {
        setMessage('you are normal')
      }

      else {
        setMessage('you are over weight')
      }
    }

  }

  let reload = () => {
    window.location.reload()
  } 

    return (
      <div className="App">
        <div className="container">
          <form onSubmit={calBmi}>
            <div>
              <label>Weight (lbs)</label>
              <input
                type="text"
                placeholder="Enter your weight?"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label>Height (in)</label>
              <input
                type="text"
                placeholder="Enter your Height?"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div>
              <button className="btn" type="submit">
                Submit
              </button>
              <button className="btn" onClick={reload}>
                Reload
              </button>
            </div>
            <div>
              <h3>Your BMI is:{bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    );
  }


export default App;
