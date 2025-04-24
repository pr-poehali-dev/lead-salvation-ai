import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 border-b bg-white/95 backdrop-blur-sm fixed top-0 z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-purple-dark flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-7 h-7 text-brand-primary"
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
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-brand-primary transition-colors">
            Преимущества
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-brand-primary transition-colors">
            Как это работает
          </a>
          <a href="#integration" className="text-gray-700 hover:text-brand-primary transition-colors">
            Интеграция
          </a>
          <Button className="bg-brand-primary hover:bg-brand-secondary">
            Демонстрация
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2"
        >
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
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12"/>
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16"/>
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 md:hidden animate-fade-in">
            <div className="container flex flex-col gap-4">
              <a href="#features" className="text-gray-700 hover:text-brand-primary transition-colors py-2">
                Преимущества
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-brand-primary transition-colors py-2">
                Как это работает
              </a>
              <a href="#integration" className="text-gray-700 hover:text-brand-primary transition-colors py-2">
                Интеграция
              </a>
              <Button className="bg-brand-primary hover:bg-brand-secondary mt-2 w-full">
                Демонстрация
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
