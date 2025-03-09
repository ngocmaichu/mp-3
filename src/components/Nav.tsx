import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.nav`
    width: 30%;
    min-width: 250px;
    background-color: chocolate;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 750px) {
        width: 100%;
        flex-direction: row;
    }
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    @media (max-width: 750px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;

const NavItem = styled.li`
    font-size: calc(3px + 2vw);
    text-align: center;
    background-color: orange;
    padding: 2vh;
    margin: 2vh auto;
    width: 90%;
    border-radius: 5px;

    @media (max-width: 750px) {
        font-size: calc(2px + 1.5vw);
        padding: 1vh;
        margin: 1vh 0.5vw;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: block;
`;

export default function Nav() {
    return (
        <NavWrapper>
            <NavList>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/education">Education</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/employment">Employment</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/achievements">Achievements</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/references">References</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/documents">Documents</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/projects">Projects</NavLink>
                </NavItem>
            </NavList>
        </NavWrapper>
    );
}