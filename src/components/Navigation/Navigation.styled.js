import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
text-decoration: none;
font-size: 20px;
color: tomato;
&.active {
    color: aqua;
}`