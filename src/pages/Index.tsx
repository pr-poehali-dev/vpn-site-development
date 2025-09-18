import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [speedTest, setSpeedTest] = useState({ progress: 0, speed: 0, isRunning: false });

  const startSpeedTest = () => {
    setSpeedTest({ progress: 0, speed: 0, isRunning: true });
    const interval = setInterval(() => {
      setSpeedTest(prev => {
        const newProgress = prev.progress + 2;
        const newSpeed = Math.floor(Math.random() * 50 + 80); // 80-130 Mbps
        
        if (newProgress >= 100) {
          clearInterval(interval);
          return { progress: 100, speed: newSpeed, isRunning: false };
        }
        
        return { progress: newProgress, speed: newSpeed, isRunning: prev.isRunning };
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center animate-pulse-glow">
                <Icon name="Shield" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold gradient-text">VPN Security</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
              <a href="#security" className="text-gray-700 hover:text-primary transition-colors">Безопасность</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            
            <Button className="gradient-bg hover:opacity-90 transition-opacity">
              Попробовать бесплатно
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Защити свой
                <span className="gradient-text block">интернет</span>
                прямо сейчас
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Максимальная скорость, полная анонимность и защита данных. 
                Протестируй скорость наших серверов и убедись сам!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity text-lg px-8 py-4">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Начать защиту
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 hover-scale">
                  <Icon name="Play" className="mr-2" size={20} />
                  Как это работает
                </Button>
              </div>
            </div>
            
            {/* Speed Test Widget */}
            <div className="animate-scale-in">
              <Card className="p-8 glass-effect border-0 shadow-2xl hover-scale">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 gradient-text">Тест скорости</h3>
                  <p className="text-gray-600">Проверь скорость наших серверов</p>
                </div>
                
                <div className="space-y-6">
                  <div className="relative">
                    <div className="w-32 h-32 mx-auto relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-spin" 
                           style={{ animationDuration: speedTest.isRunning ? '1s' : '0s' }}>
                      </div>
                      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold gradient-text">
                            {speedTest.speed}
                          </div>
                          <div className="text-sm text-gray-600">Mbps</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Progress value={speedTest.progress} className="h-3" />
                  
                  <Button 
                    onClick={startSpeedTest} 
                    disabled={speedTest.isRunning}
                    className="w-full gradient-bg hover:opacity-90 transition-opacity"
                    size="lg"
                  >
                    {speedTest.isRunning ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                        Тестирование...
                      </>
                    ) : (
                      <>
                        <Icon name="Zap" className="mr-2" size={20} />
                        Запустить тест
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предоставляем лучшие VPN-решения с фокусом на скорость, безопасность и простоту использования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Zap',
                title: 'Максимальная скорость',
                description: 'Серверы нового поколения обеспечивают скорость до 1 Гбит/с без потери качества',
                color: 'from-yellow-400 to-orange-500'
              },
              {
                icon: 'Shield',
                title: 'Военный уровень защиты',
                description: 'AES-256 шифрование и протокол WireGuard для максимальной безопасности данных',
                color: 'from-blue-500 to-purple-600'
              },
              {
                icon: 'Globe',
                title: '50+ стран',
                description: 'Серверы в 50+ странах мира для доступа к любому контенту без ограничений',
                color: 'from-green-400 to-blue-500'
              },
              {
                icon: 'Eye',
                title: 'Полная анонимность',
                description: 'Никаких логов, полное скрытие IP-адреса и защита от утечек DNS',
                color: 'from-purple-500 to-pink-600'
              },
              {
                icon: 'Smartphone',
                title: 'Все устройства',
                description: 'Windows, Mac, iOS, Android, Linux - защити все свои устройства одной подпиской',
                color: 'from-indigo-500 to-purple-600'
              },
              {
                icon: 'Clock',
                title: '24/7 поддержка',
                description: 'Техническая поддержка на русском языке работает круглосуточно без выходных',
                color: 'from-pink-500 to-red-500'
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover-scale transition-all duration-300 border-0 shadow-lg hover:shadow-xl group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 animate-float`}>
                  <Icon name={feature.icon as any} className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
                Безопасность на первом месте
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Мы используем самые современные технологии шифрования и протоколы безопасности, 
                чтобы ваши данные всегда оставались защищенными.
              </p>
              
              <div className="space-y-6">
                {[
                  { label: 'AES-256 шифрование', value: 100 },
                  { label: 'Защита от утечек DNS', value: 100 },
                  { label: 'Kill Switch защита', value: 100 },
                  { label: 'Zero-log политика', value: 100 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{item.label}</span>
                      <span className="text-accent font-bold">{item.value}%</span>
                    </div>
                    <Progress value={item.value} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-scale-in">
              <Card className="p-8 glass-effect border-0 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 gradient-bg rounded-full mx-auto flex items-center justify-center animate-pulse-glow">
                    <Icon name="ShieldCheck" className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Ваша защита активна</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Icon name="CheckCircle" className="text-green-500 mx-auto mb-2" size={24} />
                      <div className="text-sm font-medium">IP скрыт</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Icon name="CheckCircle" className="text-green-500 mx-auto mb-2" size={24} />
                      <div className="text-sm font-medium">DNS защищен</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Icon name="CheckCircle" className="text-green-500 mx-auto mb-2" size={24} />
                      <div className="text-sm font-medium">Трафик зашифрован</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Icon name="CheckCircle" className="text-green-500 mx-auto mb-2" size={24} />
                      <div className="text-sm font-medium">Анонимность 100%</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Готов защитить свой интернет?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйся к миллионам пользователей, которые уже защищают свою приватность
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-primary hover:bg-gray-100">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать приложение
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 text-sm opacity-75">
            <div className="flex items-center">
              <Icon name="Mail" className="mr-2" size={16} />
              support@vpnsecurity.ru
            </div>
            <div className="flex items-center">
              <Icon name="Phone" className="mr-2" size={16} />
              +7 (800) 123-45-67
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <Icon name="Shield" className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold">VPN Security</span>
          </div>
          <p className="text-gray-400">
            © 2024 VPN Security. Все права защищены. Ваша приватность - наш приоритет.
          </p>
        </div>
      </footer>
    </div>
  );
}