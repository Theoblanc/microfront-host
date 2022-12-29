import { useState } from "react";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Button from "./components/Button";
import Main from "./components/Main";
import { light } from "./themes";
import Label from "./components/Label";
import Badge from "./components/Badge";

function App() {
  const [theme, setTheme] = useState(light);
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  return (
    <Container theme={theme}>
      <Label theme={theme}>host</Label>
      <Nav theme={theme}>
        <h3>
          Menu <Badge theme={theme}>{counter}</Badge>
        </h3>
        {/* <Link to="/">Fragment</Link> */}
        <br />
        <Button
          theme={theme}
          onClick={incrementCounter}
          colors={{
            body: "",
          }}
          spacing={{
            unit: 0,
          }}
        >
          Increment
        </Button>
      </Nav>
      <Main>
        {/* <Route
            exact
            path="/"
            component={(props) => (
              <MyFragment
                counter={counter}
                onIncrementCounter={incrementCounter}
                theme={theme}
                {...props}
              />
            )}
          /> */}
      </Main>
    </Container>
  );
}

export default App;
