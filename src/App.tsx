import { useState } from "react";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Button from "./components/Button";
import Main from "./components/Main";
import { dark, light } from "./themes";
import Label from "./components/Label";
import Badge from "./components/Badge";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Global } from "@emotion/react";
import globalStyles from "./global";

function App() {
  const [theme, setTheme] = useState(light);
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  function onSetLightTheme() {
    setTheme(light);
  }

  function onSetDarkTheme() {
    setTheme(dark);
  }

  return (
    <Container theme={theme}>
      <Label theme={theme}>host</Label>
      <Nav theme={theme}>
        <h3>
          Menu <Badge theme={theme}>{counter}</Badge>
        </h3>
        {/* <Link to="/">Fragment</Link> */}
        <br />
        <Button theme={theme} onClick={incrementCounter}>
          Increment
        </Button>

        <ThemeSwitcher
          theme={theme}
          onSetLightTheme={onSetLightTheme}
          onSetDarkTheme={onSetDarkTheme}
        />
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
      <Global styles={globalStyles} />
    </Container>
  );
}

export default App;
