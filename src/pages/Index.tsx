import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const topAuthors = [
    { id: 1, name: 'Анна Петрова', articles: 142, avatar: 'АП', rating: 98 },
    { id: 2, name: 'Дмитрий Козлов', articles: 128, avatar: 'ДК', rating: 95 },
    { id: 3, name: 'Елена Смирнова', articles: 115, avatar: 'ЕС', rating: 92 },
    { id: 4, name: 'Михаил Иванов', articles: 97, avatar: 'МИ', rating: 89 },
    { id: 5, name: 'Ольга Волкова', articles: 84, avatar: 'ОВ', rating: 85 },
  ];

  const popularArticles = [
    {
      id: 1,
      title: 'Искусственный интеллект в 2024 году',
      category: 'Технологии',
      views: 45230,
      author: 'Анна Петрова',
      excerpt: 'Обзор последних достижений в области искусственного интеллекта и машинного обучения...'
    },
    {
      id: 2,
      title: 'История космических исследований',
      category: 'Наука',
      views: 38940,
      author: 'Дмитрий Козлов',
      excerpt: 'От первого спутника до современных марсианских миссий...'
    },
    {
      id: 3,
      title: 'Квантовая физика для начинающих',
      category: 'Наука',
      views: 32150,
      author: 'Елена Смирнова',
      excerpt: 'Понятное объяснение основных принципов квантовой механики...'
    },
    {
      id: 4,
      title: 'Блокчейн и криптовалюты',
      category: 'Технологии',
      views: 28670,
      author: 'Михаил Иванов',
      excerpt: 'Как работают децентрализованные системы и цифровые валюты...'
    },
    {
      id: 5,
      title: 'Экология и изменение климата',
      category: 'Экология',
      views: 25480,
      author: 'Ольга Волкова',
      excerpt: 'Современные вызовы и пути решения экологических проблем...'
    },
    {
      id: 6,
      title: 'Нейробиология сознания',
      category: 'Медицина',
      views: 22390,
      author: 'Анна Петрова',
      excerpt: 'Что наука знает о работе человеческого мозга и сознании...'
    },
  ];

  const categories = [
    { name: 'Технологии', count: 1247, icon: 'Cpu' },
    { name: 'Наука', count: 892, icon: 'Microscope' },
    { name: 'История', count: 765, icon: 'BookOpen' },
    { name: 'Культура', count: 634, icon: 'Palette' },
    { name: 'Экология', count: 523, icon: 'Leaf' },
    { name: 'Медицина', count: 478, icon: 'HeartPulse' },
  ];

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="BookText" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold">Энциклопедия</h1>
            </div>
            <nav className="flex gap-6">
              <button className="text-foreground hover:text-primary transition-colors">Главная</button>
              <button className="text-muted-foreground hover:text-primary transition-colors">Статьи</button>
              <button className="text-muted-foreground hover:text-primary transition-colors">Авторы</button>
            </nav>
          </div>
          
          <div className="relative max-w-2xl">
            <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Поиск по энциклопедии..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg bg-background/50 border-border"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="TrendingUp" size={28} className="text-primary" />
            <h2 className="text-3xl font-bold">Популярные статьи</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="hover-scale cursor-pointer border-border bg-card hover:border-primary/50 transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Icon name="Eye" size={16} />
                      <span>{formatViews(article.views)}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-snug">{article.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="User" size={16} />
                    <span>{article.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Award" size={28} className="text-primary" />
            <h2 className="text-3xl font-bold">Рейтинг авторов</h2>
          </div>
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="space-y-6">
                {topAuthors.map((author, index) => (
                  <div 
                    key={author.id} 
                    className="flex items-center gap-6 p-4 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {index + 1}
                    </div>
                    <Avatar className="w-14 h-14 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/20 text-primary font-semibold text-lg">
                        {author.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{author.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="FileText" size={16} />
                          <span>{author.articles} статей</span>
                        </div>
                        <div className="flex items-center gap-2 flex-1 max-w-xs">
                          <span>Рейтинг:</span>
                          <Progress value={author.rating} className="h-2" />
                          <span className="font-semibold text-primary">{author.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Icon name="FolderOpen" size={28} className="text-primary" />
            <h2 className="text-3xl font-bold">Категории</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card 
                key={category.name} 
                className="hover-scale cursor-pointer border-border bg-card hover:border-primary/50 transition-all text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name={category.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} статей</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-20 py-12 bg-card/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="BookText" size={20} className="text-primary" />
            <span className="font-semibold text-foreground">Энциклопедия</span>
          </div>
          <p className="text-sm">Современная платформа знаний с открытым доступом</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
