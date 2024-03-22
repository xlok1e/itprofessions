import { Zap } from 'lucide-react';
import { FC } from 'react';
import { ProfessionCardInterface } from '@/entities/Professions/ui/ProfessionCard/types.ts';

const ProfessionCard: FC<ProfessionCardInterface> = ({
    title,
    level,
    salary,
    style,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className={`${style} flex w-[370px] h-[200px] border-white/40 bg-gray-400/5 border-[0.5px] rounded-[11px] p-[18px]`}
        >
            <div className="flex flex-col justify-between w-full">
                <div className="flex flex-col gap-[5px]">
                    <p className="text-white text-[16px] flex-1 text-start">
                        Востребованность на рынке
                    </p>
                    <div className="flex gap-[5px] flex-1">
                        {level === 1 && (
                            <>
                                <Zap
                                    color="white"
                                    fill="green"
                                    size={30}
                                    strokeWidth={1}
                                />
                                <Zap color="white" size={30} strokeWidth={1} />
                                <Zap color="white" size={30} strokeWidth={1} />
                            </>
                        )}
                        {level === 2 && (
                            <>
                                <Zap
                                    color="white"
                                    fill="green"
                                    size={30}
                                    strokeWidth={1}
                                />
                                <Zap
                                    color="white"
                                    fill="yellow"
                                    size={30}
                                    strokeWidth={1}
                                />
                                <Zap color="white" size={30} strokeWidth={1} />
                            </>
                        )}
                        {level === 3 && (
                            <>
                                <Zap
                                    color="white"
                                    fill="green"
                                    size={30}
                                    strokeWidth={1}
                                />
                                <Zap
                                    color="white"
                                    fill="yellow"
                                    size={30}
                                    strokeWidth={1}
                                />
                                <Zap
                                    color="white"
                                    fill="red"
                                    size={30}
                                    strokeWidth={1}
                                />
                            </>
                        )}
                    </div>
                </div>
                <div className="flex text-white items-end justify-between">
                    <p className="font-bold text-[16px] w-[70%] text-start">
                        {title}
                    </p>
                    <div className="text-end">
                        <p className="font-medium">Зарплата:</p>
                        <p className="text-[14px]">{salary}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ProfessionCard };
