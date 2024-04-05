import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Input } from '@/components/ui/input.tsx';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu.tsx';
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
import { fetchCategories } from '@/entities/Professions/api/api.ts';
import { CategoryInterface } from '@/entities/Professions/api/types.ts';

const Header = () => {
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, []);

    const toggleBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    return (
        <>
            <div className="bg-[#0F0E0B]/90 border-b-[1px] border-[white]/10 fixed w-full z-[1] backdrop-blur">
                <div className="container max-w-[1440px] max-[540px]:px-[30px] flex justify-between items-center pt-[17px] pb-[17px] h-[60px] gap-[20px]">
                    <Link to={`/`}>
                        <div className="text-white text-[26px] font-bold">
                            LOGO
                        </div>
                    </Link>
                    <nav className="text-white">
                        <NavigationMenu className="max-[1130px]:hidden">
                            <NavigationMenuList className="flex gap-9">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="p-[5px]">
                                        <Link to={`/professions`}>
                                            Профессии
                                        </Link>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="flex flex-col w-fit h-fit p-[16px] text-[18px]">
                                        {categories.map((category) => (
                                            <NavigationMenuLink className="p-[5px] hover:bg-gray-200 rounded-[5px] w-[200px]">
                                                <HashLink
                                                    smooth
                                                    to={`/professions#${category.category}`}
                                                >
                                                    {category.category}
                                                </HashLink>
                                            </NavigationMenuLink>
                                        ))}
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
                        <Sheet
                            onOpenChange={toggleBurgerMenu}
                            open={isBurgerOpen}
                        >
                            <SheetTrigger className="min-[1130px]:hidden">
                                <Menu color="white" />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <h2 className="flex text-white text-[30px] font-bold items-center justify-center mt-[15px]">
                                        LOGO
                                    </h2>
                                </SheetHeader>
                                <div className="flex flex-col mt-[30px]">
                                    <Link
                                        to={`/`}
                                        className="text-white text-[20px] items-end"
                                        onClick={toggleBurgerMenu}
                                    >
                                        Главная
                                    </Link>
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger className="text-white text-[20px]">
                                                Профессии
                                            </AccordionTrigger>
                                            <AccordionContent className="text-white">
                                                <div
                                                    className="flex flex-col gap-[15px] text-[18px]"
                                                    onClick={toggleBurgerMenu}
                                                >
                                                    {categories.map(
                                                        (category) => (
                                                            <HashLink
                                                                smooth
                                                                to={`/professions#${category.category}`}
                                                            >
                                                                {
                                                                    category.category
                                                                }
                                                            </HashLink>
                                                        )
                                                    )}
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
        </>
    );
};

export { Header };
