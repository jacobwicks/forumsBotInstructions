import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import { Container } from 'semantic-ui-react';
import Instructions from './components/Instructions';
import { InstructionsProvider } from './services/InstructionsContext';

const App = () => (
    <InstructionsProvider>
        <TopBar />
        <Container text>
            <Instructions />
        </Container>
    </InstructionsProvider>
);

export default App;
