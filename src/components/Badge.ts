import { css } from "@emotion/css";
import styled from "@emotion/styled";

const Badge = styled("span")`
  ${({ theme }) => css`
    display: inline-block;
    background-color: ${theme.colors.highlight};
    padding: ${theme.spacing.unit / 2}px ${theme.spacing.unit * 2}px;
    color: ${theme.colors.body};
    border-radius: 10px;
    margin-left: ${theme.spacing.unit}px;
  `};
`;

export default Badge;
