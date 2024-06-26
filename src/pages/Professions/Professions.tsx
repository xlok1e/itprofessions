// Импорт необходимых компонентов и функций
import { ProfessionCard } from '@/entities/Professions/ui/ProfessionCard/ProfessionCard.tsx';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import React, { useEffect, useState } from 'react';
import { CategoryInterface } from '@/entities/Professions/api/types.ts';
import { fetchCategories } from '@/entities/Professions/api/api.ts';
import { ProfessionModal } from '@/widgets/ProfessionModal/ProfessionModal.tsx';
import { motion } from 'framer-motion';

// Пользовательский CSS стиль для эффекта свечения
const glowStyle =
    'glow:border-[#eab308] glow:bg-[#eab308]/10 max-[1000px]:glow:border-none max-[1000px]:glow:bg-transparent';

const animation = {
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

// Функциональный компонент для отображения профессий
const Professions = () => {
    // Состояния для данных категорий и статуса загрузки
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [clickedProfession, setClickedProfession] = useState(0);

    // Получение данных категорий при монтировании компонента
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        // Вызов функции fetchData, обработка успешного выполнения и ошибок
        fetchData()
            .then(() => {
                console.log('Данные успешно загружены');
            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
                setIsLoading(false);
            });
    }, []);

    const handleOpenProfessionModal = (id: number) => {
        setClickedProfession(id);
    };

    const handleCloseProfessionModal = () => {
        setClickedProfession(0);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'ArrowRight' && clickedProfession !== 0) {
            setClickedProfession((prevState) => prevState + 1);
        } else if (event.key === 'ArrowLeft' && clickedProfession !== 0) {
            setClickedProfession((prevState) => prevState - 1);
        }
    };

    return (
        <div
            className="bg-gradient-to-br from-[#0E0C0A] to-[#26211B] overflow-hidden"
            onKeyDown={handleKeyDown}
        >
            <GlowCapture>
                <Glow>
                    <div className="pb-[26px] mt-[60px]">
                        <div className="container max-w-[1440px] max-[660px]:px-[30px]">
                            {isLoading ? (
                                // UI для состояния загрузки
                                <div className="flex h-screen items-center justify-center">
                                    <div className="h-10 w-10 animate-spin rounded-full border-[5px] border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                                </div>
                            ) : (
                                <div>
                                    {categories.map((category, index) => (
                                        <div
                                            className="flex flex-col"
                                            key={index}
                                        >
                                            <div id={category.category}></div>
                                            <motion.div
                                                variants={animation}
                                                custom={1}
                                                initial="hidden"
                                                animate="visible"
                                                className={`flex sticky top-[65px] bg-[#0E0C0A]/80 backdrop-blur text-white border-[1px] border-[white]/80 rounded-[7px] items-center justify-center max-h-[50px] mt-[26px] pointer-events-none select-none`}
                                            >
                                                <h1 className="text-[22px] font-medium">
                                                    {category.category}
                                                </h1>
                                            </motion.div>
                                            <div className="flex gap-y-[25px] justify-between pt-[26px] flex-1 flex-wrap ">
                                                {category.professions.map(
                                                    (profession) => (
                                                        <>
                                                            <ProfessionCard
                                                                key={
                                                                    profession.id
                                                                }
                                                                style={`${glowStyle} w-[49%] cursor-pointer`}
                                                                title={
                                                                    profession.name
                                                                }
                                                                level={
                                                                    profession.level
                                                                }
                                                                salary={
                                                                    profession.salary
                                                                }
                                                                onClick={() =>
                                                                    handleOpenProfessionModal(
                                                                        profession.id
                                                                    )
                                                                }
                                                            />
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </Glow>
            </GlowCapture>
            <ProfessionModal
                id={clickedProfession}
                close={handleCloseProfessionModal}
                setClickedProfession={setClickedProfession}
            />
        </div>
    );
};

export default Professions;
