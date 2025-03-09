import styled from 'styled-components';

const MainTitle = styled.h1`
    font-size: 2rem; /* Changed to match Achievements.tsx */
    color: maroon;
    text-align: center;
    margin-bottom: 1rem;

    @media (max-width: 1000px) {
        font-size: 1.8rem; /* Adjusted for 1000px screens */
    }

    @media (max-width: 750px) {
        font-size: 1.5rem; /* Adjusted for 750px screens */
    }
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
`;

export default function Home() {
    return (
        <>
            <MainTitle>Home</MainTitle>
            <MainContent>
                <MainText>
                    <p>
                        My name is Mai Chu, and I am a Computer Science and Economics major at Boston University.
                        I am a highly motivated self-starter with 10+ years of cross-cultural education in Europe, Asia, and North America.
                        I am eager to contribute a wide array of skill sets in Market Analytics, FP&A, and Internal Communications.
                    </p>
                    <p>
                        Welcome to my website! Here you will find my <strong><em><u>Educational</u></em></strong> and <strong><em><u>Employment</u></em></strong> history, 
                        as well as other useful information about my personal profile.
                    </p>
                </MainText>
                <br></br>
                <MainImage>
                    <ProfileImage src="maichu.jpeg" alt="Mai Chu" />
                </MainImage>
            </MainContent>
        </>
    );
}