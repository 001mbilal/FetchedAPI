import React, { useEffect, useState, useCallback } from "react";
import "./App.css";

import CardImage from "./components/CardImage";
import CardInput from "./components/CardInput";

function App() {
  const [state, setState] = useState([]);
  const [tempState, setTempState] = useState([]);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);
  const [searchInputText, setSearchInputText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => {
        let response = res.json();
        return response;
      })
      .then((res) => {
        setState(res);
        setTempState(res);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setPending(false);
      });
  };

  const debounce = (func, timeout = 5000) => {
    let timer;
    return (...args) => {
      console.log(args);
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const handleChange = (e) => {
    console.log(e);
    let inputValue = e.target.value;
    console.log(inputValue);
    setSearchInputText(inputValue);
    console.log("Fetched!");

    const filteredResult = tempState.filter((item) =>
      item.author.toLowerCase().includes(inputValue.toLowerCase())
    );

    setState(filteredResult);
  };

  const processChange = debounce((e) => handleChange(e));

  return (
    <>
      <div className="main-div">
        {error && <div> {error} </div>}
        {pending && (
          <div>
            <p>..loading</p>
          </div>
        )}
        {/* make it a component */}
        <CardInput onChangeHandler={processChange} />
        <div>
          {state.map((value, ind) => {
            return (
              <div key={ind}>
                <CardImage
                  Images={value.download_url}
                  name={value.author}
                  key={value.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
