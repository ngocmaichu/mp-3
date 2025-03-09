import { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
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

const CalculatorContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    text-align: center;
    font-size: 1.2em;
    border: 2px solid maroon;
    border-radius: 5px;

    @media (max-width: 750px) {
        height: 50px;
        font-size: 1.5em;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    width: 100%;
`;

const Button = styled.button`
    background-color: orange;
    border: none;
    padding: 12px;
    width: auto;
    min-width: 50px;
    height: 50px;
    border-radius: 25px;
    font-size: 1.5em;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: chocolate;
    }

    @media (max-width: 750px) {
        width: auto;
        min-width: 60px;
        height: 60px;
        font-size: 1.8em;
    }
`;

const Output = styled.h3<{ isNegative: boolean }>`
    color: ${(props) => (props.isNegative ? 'red' : 'black')};
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 10px;
`;

export default function Projects() {
    const [firstNumber, setFirstNumber] = useState<string>('');
    const [secondNumber, setSecondNumber] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [isNegative, setIsNegative] = useState<boolean>(false);

    const handleAddition = () => {
        const result = Number(firstNumber) + Number(secondNumber);
        setResult(result.toString());
        setIsNegative(result < 0);
    };

    const handleSubtraction = () => {
        const result = Number(firstNumber) - Number(secondNumber);
        setResult(result.toString());
        setIsNegative(result < 0);
    };

    const handleMultiplication = () => {
        const result = Number(firstNumber) * Number(secondNumber);
        setResult(result.toString());
        setIsNegative(result < 0);
    };

    const handleDivision = () => {
        const result = Number(firstNumber) / Number(secondNumber);
        setResult(result.toString());
        setIsNegative(result < 0);
    };

    const handlePower = () => {
        let result = 1;
        for (let i = 0; i < Number(secondNumber); i++) {
            result *= Number(firstNumber);
        }
        setResult(result.toString());
        setIsNegative(result < 0);
    };

    const handleClear = () => {
        setFirstNumber('');
        setSecondNumber('');
        setResult('');
        setIsNegative(false);
    };

    return (
        <>
            <Title>Calculator</Title>
            <CalculatorContainer>
                <Input
                    type="number"
                    value={firstNumber}
                    onChange={(e) => setFirstNumber(e.target.value)}
                    placeholder="First Number"
                />
                <Input
                    type="number"
                    value={secondNumber}
                    onChange={(e) => setSecondNumber(e.target.value)}
                    placeholder="Second Number"
                />
                <Buttons>
                    <Button onClick={handleAddition}>+</Button>
                    <Button onClick={handleSubtraction}>-</Button>
                    <Button onClick={handleMultiplication}>x</Button>
                    <Button onClick={handleDivision}>/</Button>
                    <Button onClick={handlePower}>^</Button>
                    <Button onClick={handleClear}>Clear</Button>
                </Buttons>
                <Output isNegative={isNegative}>{result}</Output>
                <img
                    src="https://shortpixel.com/blog/wp-content/uploads/2023/12/jimmy-wink.webp"
                    alt="funny guy"
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', marginTop: '20px' }}
                />
            </CalculatorContainer>
        </>
    );
}