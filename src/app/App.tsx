import { Header } from '@/widgets/Header/Header.tsx';
import { Routes, Route } from 'react-router-dom';
import MainPage from '@/pages/MainPage/MainPage.tsx';
import Professions from '@/pages/Professions/Professions.tsx';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/professions" element={<Professions />} />
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </>
    );
}

export default App;
