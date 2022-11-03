import React, { useState, useEffect, useRef } from "react";

function CoffeeList(props) {
  const coffeeUrl = "https://api.sampleapis.com/coffee/hot/";

  const [coffeeList, setCoffeeList] = useState([]);
  const [isDetailed, setIsDetailed] = useState(false);
  const buttonText = useRef("Show");

  useEffect(
    function printAllCoffee() {
      console.log(coffeeList);
    },
    [coffeeList]
  );

  function buttonAdd() {
    async function fetchCoffee() {
      const randomCoffeeUrl =
        coffeeUrl + String(Math.round(Math.random() * 20));
      const response = await fetch(randomCoffeeUrl);
      const textResponse = await response.json();

      setCoffeeList([...coffeeList, textResponse]);
      console.log(textResponse);
    }

    fetchCoffee();
  }

  function renderCoffee() {
    if (isDetailed) {
      return coffeeList.map((eachCoffee) => {
        return (
          <div>
            <h3>{eachCoffee.title}</h3>
            <p>Description: {eachCoffee.description}</p>
            <img src={eachCoffee.image} alt="coffee" style={{ width: "50%" }} />
          </div>
        );
      });
    } else {
      return coffeeList.map((eachCoffee) => {
        return (
          <div>
            <h3>{eachCoffee.title}</h3>
          </div>
        );
      });
    }
  }

  function removeCoffee() {
    coffeeList.pop();
    setCoffeeList([...coffeeList]);
  }

  function showDetail() {
    if (isDetailed) {
      //if we are already showing details, we need to not show them anymore!
      buttonText.current = "Show";
      setIsDetailed(false);
    } else {
      //if we are not showing details, we need to show them!
      buttonText.current = "Hide";
      setIsDetailed(true);
    }
  }

  return (
    <div>
      {renderCoffee()}
      <button className="button-33" onClick={buttonAdd}>
        Add coffee!
      </button>
      <br />
      <button className="button-33" onClick={removeCoffee}>
        Remove coffee!
      </button>
      <br />
      <button className="button-33" onClick={showDetail}>
        {buttonText.current} details of coffee!
      </button>
      <br />
    </div>
  );
}

export { CoffeeList };
