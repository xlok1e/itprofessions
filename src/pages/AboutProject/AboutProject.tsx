import { motion } from 'framer-motion';
import github from '@/components/assets/github-mark.svg';

const textAnimation = {
    hidden: {
        opacity: 0,
        y: -7,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: custom * 0.2,
            duration: 0.3,
            ease: 'easeInOut',
        },
    }),
};

const AboutProject = () => {
    return (
        <div className=" flex items-center text-white h-[calc(100vh)] bg-gradient-to-br from-[#0E0C0A] to-[#26211B]">
            <div className="container flex flex-col gap-[50px] max-w-[1440px] mt-[50px]">
                <motion.div
                    custom={2}
                    variants={textAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    <h1
                        className="text-[52px] font-bold
                        max-[1000px]:text-[36px]
                    max-[650px]:text-[24px]"
                    >
                        Об авторах
                    </h1>
                    <p
                        className="flex flex-col text-[24px] w-[88%] font-regular
                    max-[1000px]:text-[18px]
                    max-[650px]:text-[14px]
                    max-[650px]:w-[100%]
                    max-[400px]:w-[115%]
                    max-[400px]:text-[12px] "
                    >
                        Сайт разработан студентами 1 карса колледжа ВятГУ
                        Киселевым Егором Дмитриевичем и Ложкиной Софьей
                        Дмитриевной в рамках проекта ”Разработка информационного
                        веб-сайта “Профессии в сфере IT” ” в 2024 году
                    </p>
                </motion.div>
                <motion.div
                    custom={4}
                    variants={textAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    <h1
                        className="text-[52px] font-bold
                    max-[1000px]:text-[36px]
                    max-[650px]:text-[24px]"
                    >
                        О проекте
                    </h1>
                    <p
                        className="flex flex-col text-[24px] w-[88%] font-regular
                    max-[1000px]:text-[18px]
                    max-[650px]:text-[14px]
                    max-[650px]:w-[100%]
                    max-[400px]:w-[115%]
                    max-[400px]:text-[12px]"
                    >
                        Наш проект направлен на предоставление информации о
                        различных профессиях в сфере IT. Мы собрали максимум
                        полезной информации, чтобы помочь пользователям выбрать
                        подходящую карьеру в области информационных технологий
                    </p>
                </motion.div>
                <motion.a
                    custom={6}
                    variants={textAnimation}
                    initial="hidden"
                    animate="visible"
                    href="https://github.com/xlok1e/itprofessions"
                    target="_blank"
                >
                    <div className="flex items-center gap-[16px] cursor-pointer">
                        <img
                            src={github}
                            color="white"
                            alt="github_logo"
                            className="w-[70px] max-[650px]:w-[40px]"
                        />
                        <p className="font-bold text-[20px] max-[650px]:text-[16px]">
                            Репозиторий на GitHub
                        </p>
                    </div>
                </motion.a>
            </div>
        </div>
    );
};

export default AboutProject;
