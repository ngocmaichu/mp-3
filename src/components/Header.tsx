import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2vh 2vw;
    background-color: brown;
    color: bisque;
    text-align: left; 

    @media (max-width: 750px) {
        align-items: center; 
        text-align: center; 
    }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>Mai Chu</h1>
            <p>My Online Resume</p>
        </HeaderWrapper>
    );
}