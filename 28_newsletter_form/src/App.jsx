import React from "react";
import { useContext } from "react";
import Thanks from "./components/Thanks";
import Form from "./components/Form";
import { DataContext } from "./Context";

function App() {
  const { formSubmitted } = useContext(DataContext);

  return <>{formSubmitted ? <Thanks /> : <Form />}</>;
}

export default App;
