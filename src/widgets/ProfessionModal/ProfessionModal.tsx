import { ProfessionDescriptionInterface } from '@/widgets/ProfessionModal/types.ts';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Zap } from 'lucide-react';
import { FC } from 'react';

const ProfessionModal: FC<ProfessionDescriptionInterface> = ({
    trigger,
    id,
    name,
    enter,
    learn,
    level,
    salary,
    skills,
    work,
    description,
    category,
    salaryText,
}) => {
    return (
        <Dialog>
            <DialogTrigger className="outline-none">{trigger}</DialogTrigger>
            <DialogContent className="max-w-[calc(100vw-200px)] overflow-y-scroll max-h-[calc(100vh-100px)]">
                <DialogHeader>
                    <DialogTitle className="text-[30px] text-white">
                        {name}
                    </DialogTitle>
                    <DialogDescription className="text-[18px] text-gray-400">
                        {category}
                    </DialogDescription>
                </DialogHeader>

                <div className="flex gap-[140px] justify-between text-[18px]">
                    <div className="flex flex-col gap-[20px] text-white leading-[165%]">
                        <p>{description}</p>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-[20px]">
                                Необходимые знания:
                            </p>
                            <p className="whitespace-pre-wrap">{skills}</p>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-[20px]">
                                Где работают:
                            </p>
                            <p className="whitespace-pre-wrap">{work}</p>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-[20px]">
                                На кого учиться:
                            </p>
                            <p className="whitespace-pre-wrap">{learn}</p>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-[20px]">
                                Заработная плата:
                            </p>
                            <p className="whitespace-pre-wrap">{salaryText}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[23px] ">
                        <div className="flex flex-col text-white gap-[5px]">
                            <p className="text-[23px]">Восстребованность</p>
                            <div className="flex gap-[9px] items-center justify-center w-[260px] h-[90px] bg-gradient-to-br from-[#EAB308]/50 to-[#271E00]/40 rounded-[18px]">
                                <Zap size={50} />
                                <Zap size={50} />
                                <Zap size={50} />
                            </div>
                        </div>
                        <div className="flex flex-col text-white gap-[5px]">
                            <p className="text-[23px]">Порог входа</p>
                            <div className="flex gap-[9px] items-center justify-center w-[260px] h-[90px] bg-gradient-to-br from-[#EAB308]/50 to-[#271E00]/40 rounded-[18px]">
                                <Zap size={50} />
                                <Zap size={50} />
                                <Zap size={50} />
                            </div>
                        </div>
                        <div className="flex flex-col text-white gap-[5px]">
                            <p className="text-[23px]">Зарплата</p>
                            <div className="flex gap-[9px] items-center justify-center w-[260px] h-[90px] bg-gradient-to-br from-[#EAB308]/50 to-[#271E00]/40 rounded-[18px]">
                                <p className="text-[30px]">{salary}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export { ProfessionModal };
