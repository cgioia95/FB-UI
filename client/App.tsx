// client/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
    return <div> Home</div>
}

const About = () => {
    return <div> About</div>
}
const App: React.FC = () => {
    return (
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default App;
