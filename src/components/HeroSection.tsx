import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="pt-28 pb-16 bg-gradient-to-b from-purple-light/50 to-white">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Спасаем <span className="text-brand-primary">лиды</span> <br />
              с помощью искусственного интеллекта
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Автоматическая реактивация лидов и возврат их в воронку продаж. 
              Увеличение конверсии в сделку на 6-13%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-secondary text-lg">
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary/10 text-lg">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
              <div className="flex items-start mb-4 gap-3">
                <div className="bg-purple-light rounded-full p-2">
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
                    className="text-brand-primary w-6 h-6"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                <div className="bg-purple-light/30 rounded-lg p-3 flex-1">
                  <p className="font-medium">Здравствуйте! Я помощник Службы спасения лидов.</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Заметил, что вы интересовались нашим предложением, но не завершили сделку. Могу ли я узнать, что помешало?
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-4 justify-end">
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Меня смутила стоимость и я не уверен, что это то, что нам нужно</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-light rounded-full p-2">
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
                    className="text-brand-primary w-6 h-6"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                </div>
                <div className="bg-purple-light/30 rounded-lg p-3 flex-1">
                  <p className="text-sm">
                    Понимаю ваши сомнения. Наше решение окупается с первой заключенной сделки, 
                    и мы можем предложить персональные условия. Могу организовать демонстрацию 
                    с учетом специфики вашего бизнеса?
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -right-4 -top-4 w-full h-full bg-brand-primary/20 rounded-xl"></div>
            <div className="absolute -z-10 right-4 top-4 w-full h-full bg-brand-accent/50 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
