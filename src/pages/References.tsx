import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2rem;
    color: maroon;
`;

const SectionTitle = styled.h2`
    margin-top: 2vh;
    margin-bottom: 1vh;
    font-size: calc(2px + 1.5vw);
    color: maroon;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2vh;
    background-color: bisque;
`;

const TableHeader = styled.th`
    border: 2px solid brown;
    padding: 1vh;
    font-size: calc(1px + 1.5vw);
    background-color: brown;
    color: bisque;
    font-weight: bold;
`;

const TableData = styled.td`
    border: 2px solid brown;
    padding: 1vh;
    font-size: calc(1px + 1.5vw);
`;

export default function References() {
    return (
        <>
            <Title>References</Title>
            <SectionTitle>Professional</SectionTitle>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Position</TableHeader>
                        <TableHeader>Contact</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TableData>Stefano C.</TableData>
                        <TableData>General Marketing Director</TableData>
                        <TableData>xxx-xxx-xxxx</TableData>
                    </tr>
                    <tr>
                        <TableData>Ryan Li</TableData>
                        <TableData>Colleague</TableData>
                        <TableData>xxx-xxx-xxxx</TableData>
                    </tr>
                </tbody>
            </Table>

            <SectionTitle>Personal</SectionTitle>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>Name</TableHeader>
                        <TableHeader>Relation</TableHeader>
                        <TableHeader>Contact</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TableData>An Chu</TableData>
                        <TableData>Father</TableData>
                        <TableData>xxx-xxx-xxxx</TableData>
                    </tr>
                    <tr>
                        <TableData>Donna T.</TableData>
                        <TableData>Mentor</TableData>
                        <TableData>xxx-xxx-xxxx</TableData>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}