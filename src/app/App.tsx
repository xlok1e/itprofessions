import { Header } from '@/widgets/Header/Header.tsx';
import { Routes, Route } from 'react-router-dom';
import MainPage from '@/pages/MainPage/MainPage.tsx';
import Professions from '@/pages/Professions/Professions.tsx';
import { Helmet } from 'react-helmet';
import ProfessionsTop from '@/pages/ProfessionsTop/ProfessionsTop.tsx';
import AboutProject from '@/pages/AboutProject/AboutProject.tsx';

function App() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
                />
                <meta name="color-scheme" content="#000" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="#000"
                />
                <title>Проофесси в IT</title>
            </Helmet>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/professions" element={<Professions />} />
                <Route path="/professionsTop" element={<ProfessionsTop />} />
                <Route path="/about" element={<AboutProject />} />
                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
        </>
    );
}

export default App;
