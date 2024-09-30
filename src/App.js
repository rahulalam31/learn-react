import React, { useState } from "react";
import "./App.css";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";

function App() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter+1);
  };

  const handleSub = () => {
    if (counter === 0) {
      return 0;
    } else {
      setCounter(counter-1);
    }
  };

  const handleReset = () => {
    setCounter(0)
  };
  return (
    <div className="app">
      <div className="container">
        <div
          className="total_amount_card"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(253, 230, 90, 100%), rgba(204, 254, 87, 100%))`,
          }}
        >
          <div className="right">
            <svg
              onClick={handleReset}
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="17"
              height="17"
            >
              <path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z" />
            </svg>
          </div>

          <div className="card_text">
            <h3 className="total_amount_heading">{counter}</h3>
          </div>
        </div>

        {/* <form onSubmit={handleForm}> */}
          <div className="button_collection">
            {/* <Stack spacing={2} direction="row">
              <Button variant="text">Text</Button>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
            </Stack> */}
            <button className="btn_one" onClick={handleAdd}>
              +
            </button>
            <button className="btn_two" onClick={handleSub}>
              -
            </button>
          </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default App;
