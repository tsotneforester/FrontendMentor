import Wrapper from "./components/Wrapper";
import Balance from "./components/Balance";
import Card from "./components/Card";
import { useContext } from "react";
import { AppContext } from "./Context";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const { loading } = useContext(AppContext);
  if (loading) {
    return <PropagateLoader color="#93867b" />;
  }

  return (
    <Wrapper>
      <Balance />
      <Card />
    </Wrapper>
  );
}

export default App;
