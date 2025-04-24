const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold flex items-center gap-2 mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6 text-brand-primary"
              >
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
              <span>Служба спасения лидов</span>
            </div>
            <p className="text-gray-400 mb-4">
              Автоматическая реактивация лидов и возврат их в воронку продаж с помощью искусственного интеллекта
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Возможности</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">Как это работает</a></li>
              <li><a href="#integration" className="text-gray-400 hover:text-white transition-colors">Интеграция</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Цены</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Блог</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Документация API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Кейсы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li><a href="mailto:info@leadrescue.ai" className="text-gray-400 hover:text-white transition-colors">info@leadrescue.ai</a></li>
              <li><a href="tel:+74951234567" className="text-gray-400 hover:text-white transition-colors">+7 (495) 123-45-67</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Telegram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <div className="text-gray-500 mb-4 md:mb-0">
            © 2023 Служба спасения лидов AI. Все права защищены.
          </div>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
