import { ProfessionDescriptionInterface } from '@/widgets/ProfessionModal/types.ts';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Zap } from 'lucide-react';
import { FC, useEffect, useState } from 'react';
import { fetchCategories } from '@/entities/Professions/api/api.ts';
import { CategoryInterface } from '@/entities/Professions/api/types.ts';
import { Glow, GlowCapture } from '@codaworks/react-glow';

const ProfessionModal: FC<ProfessionDescriptionInterface> = ({ id, close }) => {
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

    return (
        <Dialog open={id > 0} onOpenChange={close}>
            {filteredData && (
                <DialogContent
                    className="max-w-[calc(100vw-200px)] overflow-y-scroll max-h-[calc(100vh-100px)]
                max-[900px]:max-w-full max-[900px]:max-h-full max-[900px]:rounded-[0px] max-[900px]:border-none"
                >
                    <DialogHeader>
                        <DialogTitle className="text-[30px] text-white text-left">
                            {filteredData.name}
                        </DialogTitle>
                    </DialogHeader>

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
                                title="Где работают:"
                                content={filteredData.work}
                            />
                            <InfoSection
                                title="На кого учиться:"
                                content={filteredData.learn}
                            />
                            <InfoSection
                                title="Заработная плата:"
                                content={filteredData.salaryText}
                            />
                        </div>
                        <GlowCapture>
                            <Glow>
                                <div className="flex flex-col gap-[23px] ">
                                    <StatSection title="Восстребованность" />
                                    <StatSection title="Порог входа" />
                                    <div className="flex flex-col text-white gap-[5px]">
                                        <p className="text-[23px]">Зарплата</p>
                                        <div className="flex gap-[9px] items-center justify-center w-[260px] h-[90px] border border-white rounded-[18px]">
                                            <p className="text-[30px]">
                                                {filteredData.salary}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Glow>
                        </GlowCapture>
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

const StatSection: FC<{ title: string }> = ({ title }) => (
    <div className="flex flex-col text-white gap-[5px]">
        <p className="text-[23px]">{title}</p>
        <div className="flex gap-[9px] items-center justify-center w-[260px] h-[90px] border border-white rounded-[18px]">
            <Zap size={50} />
            <Zap size={50} />
            <Zap size={50} />
        </div>
    </div>
);

export { ProfessionModal };
