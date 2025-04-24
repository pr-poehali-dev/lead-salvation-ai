import { Button } from "@/components/ui/button";

const IntegrationSection = () => {
  return (
    <section id="integration" className="py-20 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Простая интеграция с любой системой</h2>
            <p className="text-lg text-gray-600 mb-6">
              Благодаря открытому API наше решение легко интегрируется с любой CRM-системой, 
              телефонией или другими инструментами продаж. Нет необходимости использовать 
              дополнительные интерфейсы или менять привычные процессы работы.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-brand-primary/20 p-1 rounded-full mt-1">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-brand-primary"
                  >
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <p className="text-gray-700">Интеграция через REST API с документацией</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-primary/20 p-1 rounded-full mt-1">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-brand-primary"
                  >
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <p className="text-gray-700">Готовые коннекторы для популярных CRM-систем</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-primary/20 p-1 rounded-full mt-1">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-brand-primary"
                  >
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <p className="text-gray-700">Доступный интерфейс через Telegram бота</p>
              </div>
            </div>

            <Button className="bg-brand-primary hover:bg-brand-secondary">
              Запросить документацию API
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-400">api-request.js</div>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                <code>
{`// Пример интеграции через API
const leadRescueAPI = {
  async reactivateLead(leadData) {
    const response = await fetch(
      'https://api.leadrescue.ai/v1/reactivate',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify(leadData)
      }
    );
    
    return await response.json();
  }
};

// Пример использования
const result = await leadRescueAPI.reactivateLead({
  client_id: '12345',
  name: 'Иван Петров',
  email: 'ivan@example.com',
  phone: '+7 (900) 123-45-67',
  last_interaction: '2023-10-15',
  status: 'rejected',
  reason: 'high_price'
});

console.log('AI response:', result.ai_message);
console.log('Recommended actions:', result.actions);`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
