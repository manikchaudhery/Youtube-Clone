//when we write react code, we're producing individual components/ views. These are snippets of code that produce html
//create a new component. This component should produce some html
//Take this component generated HTML and put it on the page (in the DOM)

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div> "Hi!" </div>;
};

ReactDOM.render(<App />, document.querySelector(".container"));
