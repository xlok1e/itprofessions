import { ProfessionCard } from '@/widgets/ProfessionCard/ProfessionCard.tsx';
import { Glow, GlowCapture } from '@codaworks/react-glow';
import { useEffect, useState } from 'react';
import { ProfessionsInterface } from '@/pages/Professions/types.ts';
import axios, { AxiosResponse } from 'axios';

const glowStyle = 'glow:border-[#eab308] glow:bg-[#eab308]/10';

const Professions = () => {
    const [professions, setProfessions] = useState<ProfessionsInterface[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<ProfessionsInterface[]> =
                    await axios.get(
                        'https://api.npoint.io/3856745656625b952b48'
                    );
                setProfessions(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData()
            .then(() => {
                console.log('Data fetched successfully'); // Добавляем обработку промиса с помощью then
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="bg-gradient-to-br from-[#0E0C0A] to-[#26211B]">
            <div className="container">
                <GlowCapture>
                    <Glow className="pl-[30px] pr-[30px] pb-[20px]">
                        <div
                            className={`${glowStyle} flex text-white border-[1px] border-[white]/80 rounded-[7px] items-center justify-center max-h-[50px] mt-[26px]`}
                        >
                            <h1 className="text-[22px] font-medium">
                                Категория
                            </h1>
                        </div>
                        <div className="flex gap-[38px] pt-[26px] flex-1 flex-wrap">
                            {professions.map((profession, index) => (
                                <ProfessionCard
                                    key={index}
                                    style={glowStyle}
                                    title={profession.name}
                                    level={profession.level}
                                    salary={profession.salary}
                                    onClick={() => console.log(profession)}
                                />
                            ))}
                        </div>
                    </Glow>
                </GlowCapture>
            </div>
        </div>
    );
};

export default Professions;
