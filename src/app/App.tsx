import { Header } from '@/widgets/Header/Header.tsx';
// import MainPage from '@/pages/MainPage/MainPage.tsx';
import Professions from '@/pages/Professions/Professions.tsx';
import { ProfessionModal } from '@/widgets/ProfessionModal/ProfessionModal.tsx';

function App() {
    return (
        <>
            <Header />
            {/*<MainPage />*/}
            <Professions />
            {/*<ProfessionModal />*/}
        </>
    );
}

export default App;
