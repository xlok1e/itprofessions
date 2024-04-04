// Импорт необходимых компонентов и функций
import { ProfessionCard } from '@/entities/Professions/ui/ProfessionCard/ProfessionCard.tsx';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import { useEffect, useState } from 'react';
import { CategoryInterface } from '@/entities/Professions/api/types.ts';
import { fetchCategories } from '@/entities/Professions/api/api.ts';
import { ProfessionModal } from '@/widgets/ProfessionModal/ProfessionModal.tsx';

// Пользовательский CSS стиль для эффекта свечения
const glowStyle = 'glow:border-[#eab308] glow:bg-[#eab308]/10';

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

    return (
        <div className="bg-gradient-to-br from-[#0E0C0A] to-[#26211B]">
            <GlowCapture>
                <Glow className="pb-[26px] mt-[60px] ">
                    <div className="container max-w-[1440px] max-[660px]:px-[30px] ">
                        {isLoading ? (
                            // UI для состояния загрузки
                            <div className="flex h-screen items-center justify-center">
                                <div className="h-10 w-10 animate-spin rounded-full border-[5px] border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                            </div>
                        ) : (
                            <div>
                                {categories.map((category, index) => (
                                    <Glow
                                        className="flex flex-col "
                                        key={index}
                                    >
                                        <div id={category.category}></div>
                                        <div
                                            className={`flex sticky top-[65px] bg-[#0E0C0A]/80 backdrop-blur text-white border-[1px] border-[white]/80 rounded-[7px] items-center justify-center max-h-[50px] mt-[26px] pointer-events-none select-none`}
                                        >
                                            <h1 className="text-[22px] font-medium">
                                                {category.category}
                                            </h1>
                                        </div>
                                        <div className="flex gap-y-[25px] justify-between pt-[26px] flex-1 flex-wrap ">
                                            {category.professions.map(
                                                (profession) => (
                                                    <>
                                                        <ProfessionCard
                                                            key={profession.id}
                                                            style={glowStyle}
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
                                    </Glow>
                                ))}
                            </div>
                        )}
                    </div>
                </Glow>
            </GlowCapture>
            <ProfessionModal
                id={clickedProfession}
                close={handleCloseProfessionModal}
            />
        </div>
    );
};

export default Professions;
