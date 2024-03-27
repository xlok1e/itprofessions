import { Input } from '@/components/ui/input.tsx';
import { NavigationMenu } from '@/components/ui/navigation-menu.tsx';
import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-[#0F0E0B]/90 border-b-[1px] border-[white]/10 fixed w-full z-[1] backdrop-blur">
            <div className="container max-w-[1440px] flex justify-between items-center pt-[17px] pb-[17px] h-[60px] gap-[20px]">
                <Link to={`/`}>
                    <div className="text-white text-[30px] font-bold">LOGO</div>
                </Link>
                <nav className="text-white">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-9">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="p-[5px]">
                                    Профессии
                                </NavigationMenuTrigger>

                                <NavigationMenuContent className="flex flex-col w-fit h-fit p-[16px] text-[18px]">
                                    <NavigationMenuLink className="p-[5px] hover:bg-gray-200 rounded-[5px]">
                                        Разработка
                                    </NavigationMenuLink>
                                    <NavigationMenuLink className="p-[5px] hover:bg-gray-200 rounded-[5px]">
                                        Менеджмент
                                    </NavigationMenuLink>
                                    <NavigationMenuLink className="p-[5px] hover:bg-gray-200 rounded-[5px]">
                                        Дизайн
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <Link
                                to={`/`}
                                className="text-[18px] hover:text-[#FACC15]"
                            >
                                Главная
                            </Link>
                            <li className="text-[18px] hover:text-[#FACC15]">
                                Топ профессий
                            </li>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>
                <Input
                    placeholder="Поиск профессий"
                    className="w-[290px] h-[36px] bg-[#26211B] border-[1px] border-white text-white rounded-[10px] px-4"
                />
            </div>
        </div>
    );
};

export { Header };
