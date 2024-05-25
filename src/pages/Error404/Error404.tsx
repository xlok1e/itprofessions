import giraffe from '@/components/assets/surprised-giraffe-in-full-height 1.svg';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="flex h-[calc(100vh)] bg-gradient-to-br from-[#0E0C0A] to-[#26211B]">
            <div className="mt-[150px]">
                <h1 className="text-[#FACC15] text-[150px] font-bold absolute right-[500px] top-[250px]">
                    404
                </h1>
                <p className="text-white text-[80px] w-[60%] font-medium absolute text-right right-[500px] top-[440px] leading-[100px]">
                    УПС... Кажется вы забрели куда-то не туда{' '}
                </p>
                <img
                    src={giraffe}
                    alt="surprised giraffe"
                    className="right-0 absolute"
                />
                <Link
                    to="/"
                    className="text-[#FACC15] text-[24px] font-bold absolute right-[500px] top-[680px]"
                >
                    На главную
                </Link>
            </div>
        </div>
    );
};

export default Error404;
