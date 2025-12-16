import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Author {
  id: number;
  name: string;
  rating: number;
  articles: number;
  specialty: string;
  avatar: string;
}

interface Article {
  id: number;
  title: string;
  views: number;
  category: string;
  author: string;
  readTime: string;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const topAuthors: Author[] = [
    { id: 1, name: 'Анна Петрова', rating: 4.9, articles: 156, specialty: 'История', avatar: 'https://cdn.poehali.dev/projects/816cdb5f-6330-4d57-9512-11283dd5a36a/files/0037541c-1dc0-4c5b-8844-6fe226804216.jpg' },
    { id: 2, name: 'Дмитрий Соколов', rating: 4.8, articles: 142, specialty: 'Наука', avatar: 'https://cdn.poehali.dev/projects/816cdb5f-6330-4d57-9512-11283dd5a36a/files/0037541c-1dc0-4c5b-8844-6fe226804216.jpg' },
    { id: 3, name: 'Елена Волкова', rating: 4.7, articles: 128, specialty: 'Культура', avatar: 'https://cdn.poehali.dev/projects/816cdb5f-6330-4d57-9512-11283dd5a36a/files/0037541c-1dc0-4c5b-8844-6fe226804216.jpg' },
    { id: 4, name: 'Михаил Козлов', rating: 4.6, articles: 115, specialty: 'Технологии', avatar: 'https://cdn.poehali.dev/projects/816cdb5f-6330-4d57-9512-11283dd5a36a/files/0037541c-1dc0-4c5b-8844-6fe226804216.jpg' },
  ];

  const popularArticles: Article[] = [
    { id: 1, title: 'Квантовая физика для начинающих', views: 12450, category: 'Наука', author: 'Д. Соколов', readTime: '8 мин' },
    { id: 2, title: 'История Древнего Рима', views: 10230, category: 'История', author: 'А. Петрова', readTime: '12 мин' },
    { id: 3, title: 'Искусственный интеллект в 2025', views: 9870, category: 'Технологии', author: 'М. Козлов', readTime: '10 мин' },
    { id: 4, title: 'Эволюция мировой культуры', views: 8640, category: 'Культура', author: 'Е. Волкова', readTime: '15 мин' },
    { id: 5, title: 'Теория относительности Эйнштейна', views: 7920, category: 'Наука', author: 'Д. Соколов', readTime: '11 мин' },
    { id: 6, title: 'Архитектура эпохи Возрождения', views: 7340, category: 'Культура', author: 'Е. Волкова', readTime: '9 мин' },
  ];

  const categories = ['История', 'Наука', 'Культура', 'Технологии', 'География', 'Искусство'];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Icon name="BookOpen" size={32} className="text-primary" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Энциклопедия
              </h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Icon name="User" size={18} />
                <span className="ml-2">Войти</span>
              </Button>
            </div>
          </div>
          
          <div className="relative max-w-2xl mx-auto">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по энциклопедии..."
              className="pl-10 h-12 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Мир знаний <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  в одном месте
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Современная энциклопедия с рейтингом авторов и популярными статьями. 
                Изучайте мир через призму экспертного контента.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="Sparkles" size={20} />
                  Начать изучение
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Популярное
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/816cdb5f-6330-4d57-9512-11283dd5a36a/files/23b43bee-ff0f-461f-b062-7cb98f3bd9bb.jpg" 
                alt="Knowledge" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="TrendingUp" size={28} className="text-secondary" />
            <h2 className="text-3xl font-bold">Популярные статьи</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Icon name="Eye" size={16} />
                      <span className="text-sm">{article.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="User" size={16} />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Award" size={28} className="text-primary" />
            <h2 className="text-3xl font-bold">Топ авторов</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topAuthors.map((author, index) => (
              <Card key={author.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="absolute top-3 right-3 bg-gradient-to-br from-primary to-secondary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <CardHeader className="text-center">
                  <img 
                    src={author.avatar} 
                    alt={author.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-primary/20"
                  />
                  <CardTitle>{author.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2">{author.specialty}</Badge>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-1">
                    <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-lg">{author.rating}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Icon name="FileText" size={16} />
                    <span>{author.articles} статей</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white p-12 text-center">
            <Icon name="Edit" size={48} className="mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Стань автором</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Делись своими знаниями с миром. Пиши статьи, набирай рейтинг и становись лучшим автором энциклопедии.
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              <Icon name="PenTool" size={20} />
              Начать писать
            </Button>
          </Card>
        </div>
      </section>

      <footer className="border-t py-8 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="BookOpen" size={24} className="text-primary" />
              <span className="font-semibold">Энциклопедия © 2025</span>
            </div>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">О проекте</a>
              <a href="#" className="hover:text-primary transition-colors">Авторам</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
