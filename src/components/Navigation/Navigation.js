import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavigationWrapper = styled.nav`
    position: absolute;
    top: 20px;
    left: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-strt;
    font-family: "Montserrat";

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Logo = styled.span`
    font-weight: 700;
    font-size: 20px;
    margin-right: 10px;
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
`;

const NavListItem = styled.li`
    font-weight: 600;
    font-size 15px;
    margin-left: 32px;
`;

const Navigation = () => (
    <NavigationWrapper>
        <Logo><Link to="/">HATTA</Link></Logo>
            <NavList>
                <NavListItem>
                    <Link to="/articles">articles</Link>
                </NavListItem>
                <NavListItem>
                    <Link to="/about">about</Link>
                </NavListItem>
                <NavListItem>
                    <Link to="/gallery">gallery</Link>
                </NavListItem>
                <NavListItem>
                    <Link to="/contact">contact</Link>
                </NavListItem>
            </NavList>
    </NavigationWrapper>
);

export default Navigation;