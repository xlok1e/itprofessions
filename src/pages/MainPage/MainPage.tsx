import { Button } from '@/components/ui/button.tsx';
import { ArrowRight } from 'lucide-react';
import Wave1 from '@/components/assets/wave1.svg';
import Wave2 from '@/components/assets/wave2.svg';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <>
            <img
                src={Wave1}
                className="absolute top-[45%] left-[20px]"
                alt="Wave 1"
            />
            <img
                src={Wave2}
                className="absolute top-[20%] left-[60%]"
                alt="Wave 2"
            />
            <div className="absolute -z-1 m-auto top-0 left-0 bottom-0 right-0 w-[450px] h-[450px] rounded-full mix-blend-overlay bg-[#FACC15] opacity-[55%] blur-[105px]"></div>
            <div className="flex items-center justify-center h-[calc(100vh)] bg-gradient-to-br from-[#0E0C0A] to-[#26211B]">
                <div className="flex z-[1] flex-col items-center">
                    <h1 className="text-white font-bold text-[64px]">
                        Атлас IT-профессий
                    </h1>
                    <p className="text-white font-medium text-[28px] w-[700px] text-center mb-[25px]">
                        Ваш помощник в выборе профессии в сфере <br />
                        <span className="text-[#FACC15]">
                            информационных технологий
                        </span>
                    </p>
                    <Link to={`/professions`}>
                        <Button className="bg-transparent border-[1px] border-white text-white h-[68px] w-[325px] text-[24px] rounded-[10px] gap-[14px] hover:bg-white hover:text-black transition-colors duration-200">
                            Изучить профессии
                            <ArrowRight size={28} strokeWidth={2} />
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MainPage;
