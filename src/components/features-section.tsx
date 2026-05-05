import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Персональный план питания",
    description: "Система подбирает рацион под ваши цели, параметры тела и образ жизни — без лишних усилий с вашей стороны.",
    icon: "brain",
    badge: "Персонально",
  },
  {
    title: "Только натуральные продукты",
    description: "Никаких добавок и заменителей — только реальная еда, которую можно купить в ближайшем магазине.",
    icon: "lock",
    badge: "Натурально",
  },
  {
    title: "Точный баланс КБЖУ",
    description: "Каждый приём пищи рассчитан по калориям, белкам, жирам и углеводам с точностью до грамма.",
    icon: "globe",
    badge: "Точность",
  },
  {
    title: "Умная адаптация",
    description: "Система отслеживает ваш прогресс и автоматически корректирует рацион для максимального результата.",
    icon: "zap",
    badge: "Умный",
  },
  {
    title: "Контроль здоровья",
    description: "Рекомендации учитывают самочувствие, уровень энергии и физические показатели.",
    icon: "link",
    badge: "Здоровье",
  },
  {
    title: "Готово к старту",
    description: "Получите полный план на неделю уже через несколько минут после регистрации — без сложных анкет.",
    icon: "target",
    badge: "Быстро",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Питание, которое работает</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Система, разработанная для тех, кто хочет реальных результатов — без диет и ограничений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "🥗"}
                    {feature.icon === "lock" && "🥦"}
                    {feature.icon === "globe" && "⚖️"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "link" && "💪"}
                    {feature.icon === "target" && "🎯"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
