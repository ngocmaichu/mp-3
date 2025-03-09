import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2rem;
    color: maroon;
    text-align: center;
    margin-bottom: 1rem;
`;

const Description = styled.p`
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: 2rem;
`;

const MainContent = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 2vw;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const MainText = styled.div`
    width: 60%;
    text-align: left;
    font-size: calc(2px + 1.5vw);

    @media (max-width: 750px) {
        width: 100%;
    }
`;

const MainImage = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;

    @media (max-width: 750px) {
        width: 100%;
    }
`;

const ProfileImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 10px;
`;

export default function Education() {
    return (
        <>
            <Title>Education</Title>
            <MainContent>
                <MainText>
                    <Description>
                        I am currently pursuing Computer Science and Economics with a minor in Business Administration. The College of Arts and Sciences is my second home. I started in Jan 2022 and will be expected to graduate in May 2025. Here are some courses that I have taken:
                    </Description>
                </MainText>
                <br></br>
                <MainImage>
                    <ProfileImage
                        src="https://www.bu.edu/files/2024/10/24-1301-CDSEXTERIOR-073-feat-1024x684.jpg"
                        alt="Boston University"
                    />
                </MainImage>
            </MainContent>
        </>
    );
}