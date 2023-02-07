import styled from "@emotion/styled";

type ButtonProps = {
  colors?: {
    body: string;
  };
  spacing?: {
    unit: number;
  };
};

const Button = styled("button")<ButtonProps>`
  background-color: ${(props) => props.theme.colors.body};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.text};
  margin-top: ${(props) => props.theme.spacing.unit * 10}px;
  margin-right: ${(props) => props.theme.spacing.unit}px;
  padding: ${(props) => props.theme.spacing.unit}px
    ${(props) => props.theme.spacing.unit * 3}px;
  &:active {
    background-color: ${(props) => props.theme.colors.highlight};
  }
`;

export default Button;
