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

    // Логирование данных категорий для отладки
    console.log(categories);

    return (
        <div className="bg-gradient-to-br from-[#0E0C0A] to-[#26211B]">
            <div className="container">
                {isLoading ? (
                    // UI для состояния загрузки
                    <div className="flex">
                        <p className="items-center justify-center">
                            Загрузка...
                        </p>
                    </div>
                ) : (
                    // Отображение категорий с эффектом свечения после загрузки данных
                    <GlowCapture>
                        <Glow className="pl-[30px] pr-[30px] pb-[26px] mt-[60px]">
                            {categories.map((category, index) => (
                                <Glow
                                    className="flex flex-col pl-[30px] pr-[30px]"
                                    key={index}
                                >
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
                                                // Отображение модального окна для каждой профессии
                                                <ProfessionModal
                                                    id={profession.id}
                                                    salaryText={
                                                        profession.salaryText
                                                    }
                                                    category={category.category}
                                                    name={profession.name}
                                                    description={
                                                        profession.description
                                                    }
                                                    learn={profession.learn}
                                                    skills={profession.skills}
                                                    work={profession.work}
                                                    level={profession.level}
                                                    enter={profession.enter}
                                                    salary={profession.salary}
                                                    trigger={
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
                                                        />
                                                    }
                                                />
                                            )
                                        )}
                                    </div>
                                </Glow>
                            ))}
                        </Glow>
                    </GlowCapture>
                )}
            </div>
        </div>
    );
};

export default Professions;
