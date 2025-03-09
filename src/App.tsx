import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Employment from './pages/Employment';
import Achievements from './pages/Achievements';
import References from './pages/References';
import Documents from './pages/Documents';
import Projects from './pages/Projects';
import Credits from './pages/Credits';
import styled from 'styled-components';

const PageWrapper = styled.div`
    width: 100vw;
    min-height: 100vh; /* Changed from height to min-height */
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    background-color: chocolate;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const MainContent = styled.main`
    width: 70%;
    background-color: burlywood;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2vw;
    min-height: 100vh; /* Changed from height to min-height */
    margin: 0 auto;

    @media (max-width: 1000px) {
        width: 90%;
    }

    @media (max-width: 750px) {
        width: 100%;
        padding: 1vw;
    }
`;

export default function App() {
    return (
        <Router>
            <PageWrapper>
                <Header />
                <Container>
                    <Nav />
                    <MainContent>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/employment" element={<Employment />} />
                            <Route path="/achievements" element={<Achievements />} />
                            <Route path="/references" element={<References />} />
                            <Route path="/documents" element={<Documents />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/credits" element={<Credits />} />
                        </Routes>
                    </MainContent>
                </Container>
                <Footer />
            </PageWrapper>
        </Router>
    );
}



