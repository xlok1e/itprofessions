import { Zap } from 'lucide-react';
import { FC } from 'react';
import { ProfessionCardInterface } from '@/entities/Professions/ui/ProfessionCard/types.ts';
import { motion } from 'framer-motion';

const ProfessionCard: FC<ProfessionCardInterface> = ({
    title,
    level,
    salary,
    style,
    onClick,
}) => {
    // const animation = {
    //     hidden: {
    //         opacity: 0,
    //     },
    //     visible: (custom: number) => ({
    //         opacity: 1,
    //         transition: {
    //             delay: custom * 0.2,
    //             duration: 0.3,
    //         },
    //     }),
    // };

    return (
        <motion.div
            // variants={animation}
            // custom={3}
            // initial="hidden"
            // animate="visible"
            onClick={onClick}
            className={`${style} flex flex-col justify-between w-[49%] h-[200px] border-white/40 bg-gray-400/5 border-[0.5px] rounded-[11px] p-[18px]
            max-[1000px]:w-[100%]`}
        >
            <p
                className="font-bold text-[22px] text-start text-white
            max-[1295px]:text-[20px]
            max-[660px]:text-[18px]
            max-[500px]:text-[16px]
            max-[450px]:text-[14px]
            max-[450px]:max-w-[70%]
            max-[411px]:text-[12px]"
            >
                {title}
            </p>
            <div className="flex flex-col gap-[5px]">
                <p
                    className="text-white text-[16px] flex-1 text-start
                max-[450px]:text-[14px]
                max-[411px]:text-[12px]"
                >
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
                <div className="flex flex-col text-white items-end">
                    <p className="font-medium text-[16px] max-[411px]:text-[14px]">
                        Средняя зарплата:
                    </p>
                    <p className="text-[14px] max-[411px]:text-[12px]">
                        {salary}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export { ProfessionCard };
