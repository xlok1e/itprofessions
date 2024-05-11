import { ProfessionDescriptionInterface } from '@/widgets/ProfessionModal/types.ts';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Zap, X } from 'lucide-react';
import { FC, useEffect, useState } from 'react';
import { fetchCategories } from '@/entities/Professions/api/api.ts';
import { CategoryInterface } from '@/entities/Professions/api/types.ts';

const ProfessionModal: FC<ProfessionDescriptionInterface> = ({
    id,
    close,
    setClickedProfession,
}) => {
    const [categories, setCategories] = useState<CategoryInterface[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        // Вызов функции fetchData, обработка успешного выполнения и ошибок
        fetchData();
    }, []);

    const filteredData = categories
        .flatMap((category) => category.professions)
        .find((profession) => profession.id === id);

    const handleCloseModal = () => {
        setClickedProfession!(0);
    };

    return (
        <Dialog open={id > 0} onOpenChange={close}>
            {filteredData && (
                <DialogContent
                    className="max-w-[calc(100vw-200px)] overflow-y-scroll max-h-[calc(100vh-100px)]
                max-[900px]:max-w-full max-[900px]:max-h-full max-[900px]:rounded-[0px] max-[900px]:border-none"
                >
                    <X
                        color="white"
                        className="sticky ml-auto top-0 cursor-pointer"
                        onClick={handleCloseModal}
                    />
                    <h2 className="text-[30px] font-bold text-white text-left mt-[-35px] mr-[10px]">
                        {filteredData.name}
                    </h2>
                    <div
                        className="flex gap-[140px] justify-between text-[18px]
                    max-[1130px]:flex-col max-[1130px]:gap-[20px] whitespace-pre-wrap"
                    >
                        <div className="flex flex-col gap-[20px] text-white leading-[165%]">
                            <p>{filteredData.description}</p>
                            <InfoSection
                                title="Необходимые знания:"
                                content={filteredData.skills}
                            />
                            <InfoSection
                                title="Места работы:"
                                content={filteredData.work}
                            />
                            <InfoSection
                                title="Специальности:"
                                content={filteredData.learn}
                            />
                            <InfoSection
                                title="Заработная плата:"
                                content={filteredData.salaryText}
                            />
                        </div>

                        <div className="flex flex-col gap-[23px] mr-[40px]">
                            <div className="flex flex-col text-white gap-[5px]">
                                <p className="text-[23px]">Востребованность</p>
                                <div className="flex gap-[9px] items-center justify-center w-[260px] h-[90px] border border-white rounded-[18px]">
                                    {filteredData.level === 1 && (
                                        <>
                                            <Zap
                                                color="white"
                                                fill="green"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                            <Zap
                                                color="white"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                            <Zap
                                                color="white"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                        </>
                                    )}
                                    {filteredData.level === 2 && (
                                        <>
                                            <Zap
                                                color="white"
                                                fill="green"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                            <Zap
                                                color="white"
                                                fill="yellow"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                            <Zap
                                                color="white"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                        </>
                                    )}
                                    {filteredData.level === 3 && (
                                        <>
                                            <Zap
                                                color="white"
                                                fill="green"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                            <Zap
                                                color="white"
                                                fill="yellow"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                            <Zap
                                                color="white"
                                                fill="red"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col text-white gap-[5px]">
                                <p className="text-[23px]">Порог вхождения:</p>
                                <div className="flex gap-[9px] items-center justify-center w-[260px] h-[90px] border border-white rounded-[18px]">
                                    {filteredData.enter === 1 && (
                                        <>
                                            <Zap
                                                color="white"
                                                fill="green"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                            <Zap
                                                color="white"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                            <Zap
                                                color="white"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                        </>
                                    )}
                                    {filteredData.enter === 2 && (
                                        <>
                                            <Zap
                                                color="white"
                                                fill="green"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                            <Zap
                                                color="white"
                                                fill="yellow"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                            <Zap
                                                color="white"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                        </>
                                    )}
                                    {filteredData.enter === 3 && (
                                        <>
                                            <Zap
                                                color="white"
                                                fill="green"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                            <Zap
                                                color="white"
                                                fill="yellow"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                            <Zap
                                                color="white"
                                                fill="red"
                                                size={50}
                                                strokeWidth={1}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col text-white gap-[5px]">
                                <p className="text-[23px]">Зарплата</p>
                                <div className="flex gap-[9px] items-center justify-center w-[260px] h-[90px] border border-white rounded-[18px]">
                                    <p className="text-[30px]">
                                        {filteredData.salary}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            )}
        </Dialog>
    );
};

const InfoSection: FC<{
    title: string | undefined;
    content: string | undefined;
}> = ({ title, content }) => (
    <div className="flex flex-col gap-[5px]">
        <p className="font-bold text-[20px] whitespace-pre-wrap">{title}</p>
        <p className="whitespace-pre-wrap">{content}</p>
    </div>
);

export { ProfessionModal };
