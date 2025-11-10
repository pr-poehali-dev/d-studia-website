import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">Д</span>
              </div>
              <h1 className="text-2xl font-bold text-primary">Д-studia</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'production', label: 'Производство' },
                { id: 'clients', label: 'Клиенты' },
                { id: 'pricing', label: 'Прайс' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="min-h-[80vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
                Профессиональные рекламные решения для вашего бизнеса
              </h2>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
                Создаём стенды, вывески и рекламные конструкции под ключ. 
                Более 10 лет опыта работы с образовательными и коммерческими организациями
              </p>
              <div className="flex gap-4 justify-center animate-fade-in">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="bg-accent hover:bg-accent/90">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                  Наши работы
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">О компании</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Д-studia — рекламное агентство полного цикла, специализирующееся на разработке и производстве 
                рекламных конструкций для образовательных учреждений и коммерческих организаций.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: 'Award', title: '10+ лет', desc: 'на рынке рекламы' },
                  { icon: 'Users', title: '300+', desc: 'довольных клиентов' },
                  { icon: 'Briefcase', title: '500+', desc: 'реализованных проектов' },
                ].map((stat, idx) => (
                  <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4">
                        <Icon name={stat.icon as any} size={40} className="text-accent" />
                      </div>
                      <h3 className="text-3xl font-bold text-primary mb-2">{stat.title}</h3>
                      <p className="text-muted-foreground">{stat.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Портфолио</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  img: 'https://cdn.poehali.dev/projects/dde20b87-b8c1-4d5f-8d9a-cb2feac0bd9a/files/f3b9810e-a67d-4e04-9962-c89c7754f9a9.jpg',
                  title: 'Информационные стенды для школ',
                  desc: 'Разработка и установка современных стендов'
                },
                {
                  img: 'https://cdn.poehali.dev/projects/dde20b87-b8c1-4d5f-8d9a-cb2feac0bd9a/files/090d73e4-ed08-4f56-b351-566cf7518a54.jpg',
                  title: 'Наружная реклама',
                  desc: 'Билборды и вывески любой сложности'
                },
                {
                  img: 'https://cdn.poehali.dev/projects/dde20b87-b8c1-4d5f-8d9a-cb2feac0bd9a/files/26f99d88-3c41-4179-8f55-b37c462acd0e.jpg',
                  title: 'Выставочное оборудование',
                  desc: 'Roll-up, баннеры, промо-стойки'
                }
              ].map((project, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="production" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Производство</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-foreground mb-8 text-center">
                Собственное производство позволяет нам контролировать качество на каждом этапе 
                и предлагать конкурентные цены
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: 'Scissors', title: 'Резка и обработка материалов', desc: 'ПВХ, акрил, композит, дерево' },
                  { icon: 'Printer', title: 'Широкоформатная печать', desc: 'УФ-печать, сольвентная печать' },
                  { icon: 'Zap', title: 'Светодиодные системы', desc: 'Подсветка конструкций любой сложности' },
                  { icon: 'Settings', title: 'Монтаж и установка', desc: 'Профессиональная бригада монтажников' },
                ].map((service, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon name={service.icon as any} size={24} className="text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                        <p className="text-muted-foreground text-sm">{service.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Наши клиенты</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-foreground mb-8 text-center">
                Нам доверяют ведущие образовательные учреждения и коммерческие организации региона
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'Школа №15',
                  'Гимназия №7',
                  'Лицей "Прогресс"',
                  'Колледж №3',
                  'ТЦ "Центральный"',
                  'Спорткомплекс "Олимп"',
                  'Медцентр "Здоровье"',
                  'Ресторан "Премьер"'
                ].map((client, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <p className="font-medium text-primary">{client}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Прайс-лист</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {[
                  { service: 'Информационный стенд (А3)', price: 'от 3 500 ₽' },
                  { service: 'Стенд с карманами (А4)', price: 'от 5 000 ₽' },
                  { service: 'Вывеска световая (1м²)', price: 'от 15 000 ₽' },
                  { service: 'Баннер (широкоформатная печать)', price: 'от 500 ₽/м²' },
                  { service: 'Roll-up стандартный', price: 'от 2 500 ₽' },
                  { service: 'Табличка на дверь (акрил)', price: 'от 800 ₽' },
                ].map((item, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex justify-between items-center">
                      <span className="font-medium text-foreground">{item.service}</span>
                      <span className="text-xl font-bold text-accent">{item.price}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-8">
                * Цены указаны ориентировочно. Точная стоимость рассчитывается индивидуально
              </p>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="mt-1" />
                    <div>
                      <p className="font-medium">Телефон:</p>
                      <p>+7 (XXX) XXX-XX-XX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="mt-1" />
                    <div>
                      <p className="font-medium">Email:</p>
                      <p>info@d-studia.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="mt-1" />
                    <div>
                      <p className="font-medium">Адрес:</p>
                      <p>г. Город, ул. Улица, д. 00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="mt-1" />
                    <div>
                      <p className="font-medium">Режим работы:</p>
                      <p>Пн-Пт: 9:00 - 18:00</p>
                      <p>Сб-Вс: выходной</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white text-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Оставить заявку</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Телефон"
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Комментарий"
                        rows={3}
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Д-studia. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}