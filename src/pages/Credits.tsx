import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2rem;
    color: maroon;
`;

const Description = styled.p`
    font-size: 1.2rem;
`;

export default function Credits() {
    return (
        <>
            <Title>Credits</Title>
            <Description>
                This page is creative intelligence belonging to Mai Chu &copy;
            </Description>
            <p>
                Citations: <a href="https://shortpixel.com/blog/wp-content/uploads/2023/12/jimmy-wink.webp"> GIF </a> and <a href="https://www.bu.edu/articles/2024/bu-working-groups-seek-common-ground/"> BU image.</a>
            </p>
        </>
    );
}