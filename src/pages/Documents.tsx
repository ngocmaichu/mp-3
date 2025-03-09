import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2rem;
    color: maroon;
`;

const List = styled.ul`
    list-style-position: inside;
    margin-left: 2vw;
`;

export default function Documents() {
    return (
        <>
            <Title>Documents</Title>
            <p>Please click on the links below to view more about me:</p>
            <List>
                <li><a href="https://dantri.com.vn/giao-duc/...">Newspaper Article</a></li>
                <li><a href="https://www.instagram.com/ngocmaichu/">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/mai-chu-660731251/">LinkedIn</a></li>
                <li><a href="https://www.chewy.com/...">Favorite Animal</a></li>
                <li><a href="https://www.sanse.vn/">High School Social Enterprise Project</a></li>
                <li><a href="https://www.youtube.com/watch?v=pmRFilPMJn8">Current Favorite Song</a></li>
            </List>
        </>
    );
}