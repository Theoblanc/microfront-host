import { FC } from "react";
import { Theme } from "../themes";
import Button from "./Button";

interface ThemeSwitcherProps {
  onSetDarkTheme: () => void;
  onSetLightTheme: () => void;
  theme: Theme;
}
const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
  onSetDarkTheme,
  onSetLightTheme,
  theme,
}) => {
  return (
    <div>
      <Button theme={theme} onClick={onSetLightTheme}>
        Light
      </Button>
      <Button theme={theme} onClick={onSetDarkTheme}>
        Dark
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
