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
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/components/ui/sheet.tsx';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Menu } from 'lucide-react';

const Header = () => {
    return (
        <div className="bg-[#0F0E0B]/90 border-b-[1px] border-[white]/10 fixed w-full z-[1] backdrop-blur">
            <div className="container max-w-[1440px] max-[540px]:px-[30px] flex justify-between items-center pt-[17px] pb-[17px] h-[60px] gap-[20px]">
                <Link to={`/`}>
                    <div className="text-white text-[30px] font-bold">LOGO</div>
                </Link>
                <nav className="text-white">
                    <NavigationMenu className="max-[1130px]:hidden">
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
                <div className="flex gap-[20px]">
                    <Input
                        placeholder="Поиск профессий"
                        className="w-[290px] h-[36px] bg-[#26211B] border-[1px] border-white text-white rounded-[10px] px-4 max-[812px]:hidden"
                    />
                    <Sheet>
                        <SheetTrigger className="min-[1130px]:hidden">
                            <Menu color="white" />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader></SheetHeader>
                            <div className="flex flex-col mt-[30px]">
                                <Link
                                    to={`#`}
                                    className="text-white text-[20px] items-end"
                                >
                                    Главная
                                </Link>
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="text-white text-[20px]">
                                            Профессии
                                        </AccordionTrigger>
                                        <AccordionContent className="text-white">
                                            <div className="flex flex-col gap-[15px] text-[18px]">
                                                <Link to={`#`}>
                                                    Профессия 1
                                                </Link>
                                                <Link to={`#`}>
                                                    Профессия 2
                                                </Link>
                                                <Link to={`#`}>
                                                    Профессия 3
                                                </Link>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Link
                                    to={`#`}
                                    className="text-white text-[20px]"
                                >
                                    Топ профессий
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
};

export { Header };
