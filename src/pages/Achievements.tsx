import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2rem;
    color: maroon;
    text-align: center;
    margin-bottom: 1rem; /* Added margin for spacing */
`;

const Description = styled.p`
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: 2rem; /* Added margin for spacing */
`;

const List = styled.ul`
    list-style-position: inside;
    margin-left: 2vw;
    padding-left: 0; /* Remove default padding */

    @media (max-width: 750px) {
        margin-left: 5vw;
    }
`;

export default function Achievements() {
    return (
        <>
            <Title>Achievements</Title>
            <Description>
                Here are some of my notable achievements in my academic and professional journey.
            </Description>
            <List>
                <li>CS 103: Intro to Web Development</li>
                <li>QM 221: Probabilistic and Statistical Management</li>
                <li>CS 132 and CS 131: Combinatoric Structures and Geometric Algorithms</li>
                <li>EC 403: Game Theory</li>
                <li>LA 245: Intro to Business Law</li>
                <li>CS 506: Data Science Tools and Applications</li>
                <li>AC 221: Managerial Accounting</li>
                <li>SM 132: Intro to Finance</li>
            </List>
        </>
    );
}