import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2rem;
    color: maroon;

    @media (max-width: 750px) {
        font-size: 1.5rem;
    }
`;

const JobTitle = styled.h3`
    color: maroon;
    margin-top: 2vh;
    margin-bottom: 1vh;

    @media (max-width: 750px) {
        font-size: 1.2rem;
    }
`;

const List = styled.ul`
    list-style-position: inside;
    margin-left: 2vw;

    @media (max-width: 750px) {
        margin-left: 5vw;
    }
`;

const Duration = styled.p`
    font-style: italic;
    color: #555;
    margin-bottom: 1vh;
`;

export default function Employment() {
    return (
        <>
            <Title>Employment</Title>

            <JobTitle>Permedica S.p.A - Market Research Analyst</JobTitle>
            <Duration>June 2022 - Present</Duration>
            <List>
                <li>Analyzed market trends for Osseointegration solutions.</li>
                <li>Developed strategic insights using competitor benchmarking.</li>
                <li>Increased market share by 10% through targeted strategies.</li>
            </List>

            <JobTitle>EVN Genco 1 - Financial Analyst Intern</JobTitle>
            <Duration>May 2021 - August 2021</Duration>
            <List>
                <li>Tracked budget execution for multiple projects.</li>
                <li>Reduced operational department spending by 15%.</li>
            </List>

            <JobTitle>Nam Ha Medical JSC - Business Development Intern</JobTitle>
            <Duration>January 2021 - April 2021</Duration>
            <List>
                <li>Streamlined the budget projection model for an International Wetlab Conference.</li>
                <li>Managed training modules and created presentation materials.</li>
            </List>
        </>
    );
}