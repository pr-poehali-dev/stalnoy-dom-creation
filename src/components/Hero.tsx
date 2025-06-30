import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-zinc-900 to-zinc-800 py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-zinc-700/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 text-red-500">
              <Icon name="Swords" size={48} />
              <Icon name="Shield" size={48} />
              <Icon name="Hammer" size={48} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            СТАЛЬНОЙ ДОМ
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
            Мастерская по изготовлению холодного оружия и сувенирной продукции
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
            >
              <Icon name="Sword" size={20} className="mr-2" />
              Каталог оружия
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-600 text-zinc-300 hover:bg-zinc-700 px-8 py-4 text-lg"
            >
              <Icon name="Eye" size={20} className="mr-2" />
              Галерея работ
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-4 border border-zinc-700">
              <div className="text-3xl font-bold text-red-500 mb-2">15+</div>
              <div className="text-zinc-400 text-sm">Лет опыта</div>
            </div>
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-4 border border-zinc-700">
              <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-zinc-400 text-sm">Изделий</div>
            </div>
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-4 border border-zinc-700">
              <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-zinc-400 text-sm">Ручная работа</div>
            </div>
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-4 border border-zinc-700">
              <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-zinc-400 text-sm">Консультации</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
