import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-light/20 to-blue-light/20">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Готовы спасать больше лидов?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Начните использовать нашу систему уже сегодня и увеличьте конверсию в сделки. 
          Первые результаты вы увидите в течение недели после интеграции.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-brand-primary hover:bg-cyan-dark text-lg">
            Попробовать бесплатно
          </Button>
          <Button size="lg" variant="outline" className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary/10 text-lg">
            Заказать демонстрацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
