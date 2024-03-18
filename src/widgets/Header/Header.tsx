import { Input } from '@/components/ui/input.tsx'
import { NavigationMenu } from '@/components/ui/navigation-menu.tsx'
import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

const Header = () => {
    return (
        <div className="bg-[#0F0E0B] border-b-[1px] border-[white]/10 sticky top-0">
            <div className="container flex justify-between items-center pt-[17px] pb-[17px] h-[60px] gap-[20px]">
                <div className="text-white text-[30px] font-bold">LOGO</div>
                <nav className="text-white">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-9">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="p-[5px]">
                                    Профессии
                                </NavigationMenuTrigger>

                                <NavigationMenuContent className="flex flex-col w-fit h-fit p-[16px] text-[18px]">
                                    <NavigationMenuLink>
                                        Разработка
                                    </NavigationMenuLink>
                                    <NavigationMenuLink>
                                        Менеджмент
                                    </NavigationMenuLink>
                                    <NavigationMenuLink>
                                        Дизайн
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <li className="text-[18px]">Главная</li>
                            <li className="text-[18px]">Топ профессий</li>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>
                <Input
                    placeholder="Поиск профессий"
                    className="w-[290px] h-[36px]"
                />
            </div>
        </div>
    )
}

export { Header }
