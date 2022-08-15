import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setDarkMode] = useState("false")

  const darkModeHandler = ()=>{
    const lightMode = !isDarkMode
    setDarkMode(lightMode)
  } 

  return (
    <div className={"App " + (isDarkMode ? "light" : "dark")}>
      <Header isDarkMode = {isDarkMode} darkModeHandler = {darkModeHandler}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
