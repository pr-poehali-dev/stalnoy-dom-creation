import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-zinc-800 border-b border-zinc-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Hammer" size={32} className="text-red-500" />
            <h1 className="text-2xl font-bold text-white tracking-wide">
              СТАЛЬНОЙ ДОМ
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Холодное оружие
            </a>
            <a
              href="#"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Сувениры
            </a>
            <a
              href="#"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Галерея
            </a>
            <a
              href="#"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Контакты
            </a>
          </nav>

          <Button
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            Заказать
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
