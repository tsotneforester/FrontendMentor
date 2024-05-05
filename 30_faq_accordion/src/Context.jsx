import { GlobalStyles } from "./styled";

function Context({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}

export { Context };
