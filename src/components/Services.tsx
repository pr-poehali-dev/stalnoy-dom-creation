import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Hammer",
      title: "Ручная ковка",
      description:
        "Авторские работы на заказ с использованием традиционных технологий кузнечного дела",
      features: ["Индивидуальный дизайн", "Высокое качество", "Уникальность"],
    },
    {
      icon: "Shield",
      title: "Историческое оружие",
      description:
        "Точные реплики исторического оружия различных эпох и культур",
      features: ["Историческая точность", "Музейное качество", "Документация"],
    },
    {
      icon: "Sword",
      title: "Современные изделия",
      description:
        "Сертифицированное холодное оружие и современные авторские работы",
      features: ["Сертификация", "Гарантия качества", "Современный дизайн"],
    },
    {
      icon: "Crown",
      title: "Коллекционные экземпляры",
      description:
        "Эксклюзивные изделия для коллекционеров и ценителей мастерства",
      features: [
        "Ограниченные серии",
        "Эксклюзивность",
        "Инвестиционная ценность",
      ],
    },
  ];

  return (
    <section className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Наши направления
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Специализируемся на создании высококачественного холодного оружия и
            сувенирной продукции с многолетним опытом и традициями мастерства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border-zinc-700 hover:border-red-500/50 transition-all duration-300 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-red-600/10 rounded-full group-hover:bg-red-600/20 transition-colors">
                    <Icon
                      name={service.icon as any}
                      size={32}
                      className="text-red-500"
                    />
                  </div>
                </div>
                <CardTitle className="text-white text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-red-500 mr-2 flex-shrink-0"
                      />
                      <span className="text-zinc-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Почему выбирают нас?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon
                  name="Award"
                  size={24}
                  className="text-red-500 mx-auto mb-2"
                />
                <h4 className="font-semibold text-white mb-1">Мастерство</h4>
                <p className="text-zinc-400 text-sm">
                  15+ лет опыта в кузнечном деле
                </p>
              </div>
              <div>
                <Icon
                  name="ShieldCheck"
                  size={24}
                  className="text-red-500 mx-auto mb-2"
                />
                <h4 className="font-semibold text-white mb-1">Качество</h4>
                <p className="text-zinc-400 text-sm">
                  Только лучшие материалы и технологии
                </p>
              </div>
              <div>
                <Icon
                  name="Users"
                  size={24}
                  className="text-red-500 mx-auto mb-2"
                />
                <h4 className="font-semibold text-white mb-1">Доверие</h4>
                <p className="text-zinc-400 text-sm">500+ довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
