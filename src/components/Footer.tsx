import styled from 'styled-components';

const FooterWrapper = styled.footer`
    background-color: brown;
    color: bisque;
    text-align: center;
    padding: 1vh;
    display: flex;
    justify-content: center;
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <p>All Rights Reserved by Mai Chu <a href="/credits">Credits</a> &copy;</p>
        </FooterWrapper>
    );
}