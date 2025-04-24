import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-primary w-7 h-7"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Автоматическая реактивация лидов",
    description: "Система анализирует причины отказов и автоматически возвращает потерянных клиентов в воронку продаж."
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-primary w-7 h-7"
      >
        <path d="M20.2 16.4A4 4 0 0 0 20 12V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h4c.7 0 1.3-.4 1.7-.9" />
        <path d="M15.5 20a2.5 2.5 0 0 1-2.5-2.5V16h5v1.5a2.5 2.5 0 0 1-2.5 2.5Z" />
        <path d="M12 12H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4.5" />
        <path d="M11 16H7a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h4" />
        <path d="M12 5h.5" />
        <path d="M12 8h.5" />
        <path d="M15 5h.5" />
        <path d="M15 8h.5" />
        <path d="M15 11h.5" />
      </svg>
    ),
    title: "Анализ возражений клиентов",
    description: "ИИ определяет и категоризирует возражения, создавая эффективные стратегии для их преодоления."
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-primary w-7 h-7"
      >
        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
        <path d="M10 2c1 .5 2 2 2 5" />
      </svg>
    ),
    title: "Персонализированная коммуникация",
    description: "ИИ автоматически подготавливает персональные сообщения для каждого клиента на основе их интересов и возражений."
  }
];

const stats = [
  { value: "6-13%", label: "Увеличение конверсии" },
  { value: "1", label: "Сделка для окупаемости" },
  { value: "24/7", label: "Работа с клиентами" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нашу систему?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Служба спасения лидов помогает автоматизировать работу с упущенными клиентами 
            и вернуть их в воронку продаж благодаря умным алгоритмам и искусственному интеллекту.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="bg-cyan-light/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-primary mb-2">{stat.value}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
