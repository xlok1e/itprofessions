import { ProfessionCard } from '@/entities/Professions/ui/ProfessionCard/ProfessionCard.tsx';
import { motion } from 'framer-motion';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchCategories } from '@/entities/Professions/api/api.ts';
import {
    CategoryInterface,
    ProfessionInterface,
} from '@/entities/Professions/api/types.ts';
import { ProfessionModal } from '@/widgets/ProfessionModal/ProfessionModal.tsx';
import { CategoryData } from '@/pages/ProfessionsTop/types.ts';

const ProfessionsTop = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [professions, setProfessions] = useState<CategoryData[]>([]);
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    const [findProfessions, setFindProfessions] = useState<
        ProfessionInterface[]
    >([]);
    const [clickedProfession, setClickedProfession] = useState(0);

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

    useEffect(() => {
        const fetchTop = async () => {
            try {
                const response = await axios.get(
                    'https://api.npoint.io/c6efdfdbd5249743f899'
                );
                setProfessions(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        // Вызов функции fetchData, обработка успешного выполнения и ошибок
        fetchTop()
            .then(() => {
                console.log('Данные успешно загружены');
            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
                setIsLoading(false);
            });

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

    const getTitle = professions.map((i) => i.title);
    const getIds = professions.map((i) => i.professions);

    const findAndSetProfessionsByIds = async () => {
        // Подготовка массива идентификаторов всех профессий
        const allIds = getIds.flatMap((ids) => ids);

        try {
            const loadedProfessions =
                await Promise.all<ProfessionInterface | null>(
                    allIds.map(async (id) => {
                        for (const category of categories) {
                            const matchingProfession =
                                category.professions.find(
                                    (profession) => profession.id === id
                                );
                            if (matchingProfession) {
                                return matchingProfession;
                            }
                        }
                        return null;
                    })
                );

            const filteredProfessions = loadedProfessions.filter(
                (profession): profession is ProfessionInterface =>
                    profession !== null
            );

            setFindProfessions(filteredProfessions);
        } catch (error) {
            console.error('Ошибка при загрузке профессий:', error);
        }
    };

    const handleOpenProfessionModal = (id: number) => {
        setClickedProfession(id);
    };

    const handleCloseProfessionModal = () => {
        setClickedProfession(0);
    };

    useEffect(() => {
        findAndSetProfessionsByIds();
    }, [professions, categories]);

    return (
        <div className="bg-gradient-to-br from-[#0E0C0A] to-[#26211B]">
            <GlowCapture>
                <Glow>
                    <div className="pb-[26px] mt-[60px]">
                        <div className="container max-w-[1440px] max-[660px]:px-[30px] ">
                            {isLoading && findProfessions.length === 0 ? (
                                // UI для состояния загрузки
                                <div className="flex h-screen items-center justify-center">
                                    <div
                                        className={`h-10 w-10 animate-spin rounded-full border-[5px] border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
                                    ></div>
                                </div>
                            ) : (
                                <div>
                                    {getTitle.map((item, index) => (
                                        <div
                                            className="flex flex-col "
                                            key={index}
                                        >
                                            <motion.div
                                                variants={animation}
                                                custom={1}
                                                initial="hidden"
                                                animate="visible"
                                                className={`flex sticky top-[65px] bg-[#0E0C0A]/80 backdrop-blur text-white border-[1px] border-[white]/80 rounded-[7px] items-center justify-center max-h-[50px] mt-[26px] pointer-events-none select-none`}
                                            >
                                                <h1 className="text-[22px] font-medium max-[560px]:text-[18px] max-[420px]:text-[16px]">
                                                    {item}
                                                </h1>
                                            </motion.div>
                                            <div className="flex justify-between max-[1430px]:flex-col">
                                                {findProfessions
                                                    .slice(
                                                        index * 3,
                                                        index * 3 + 3
                                                    )
                                                    .map((profession, key) => (
                                                        <div className="flex gap-[5px] mt-[26px] max-[550px]:flex-col">
                                                            <div
                                                                className={`${glowStyle} flex w-[60px] h-[200px] border-white/40 border-[0.5px] rounded-[7px] bg-gray-400/5 text-white text-[15px] items-center justify-center
                                                                max-[550px]:w-[100%] max-[550px]:h-[35px]`}
                                                            >
                                                                {key + 1}
                                                            </div>
                                                            <ProfessionCard
                                                                title={
                                                                    profession.name
                                                                }
                                                                level={
                                                                    profession.level
                                                                }
                                                                style={`${glowStyle} w-[340px] cursor-pointer max-[1430px]:w-[100%]`}
                                                                titleStyle="text-nowrap truncate"
                                                                salary={
                                                                    profession.salary
                                                                }
                                                                onClick={() =>
                                                                    handleOpenProfessionModal(
                                                                        profession.id
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    ))}
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
                disableArrow={true}
                id={clickedProfession}
                close={handleCloseProfessionModal}
                setClickedProfession={setClickedProfession}
            />
        </div>
    );
};

export default ProfessionsTop;
