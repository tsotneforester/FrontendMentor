import "./style.css";
import data from "./data";
import Person from "./Person";

function Demo() {
  return data.map((e) => {
    return <Person {...e} />;
  });
}

export default Demo;
