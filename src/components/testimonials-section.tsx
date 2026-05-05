import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Анна Смирнова",
    role: "Минус 8 кг за 2 месяца",
    avatar: "/professional-woman-scientist.png",
    content:
      "Наконец-то система, которая не требует постоянно считать калории вручную. За 2 месяца я сбросила 8 кг и при этом не голодала ни дня.",
  },
  {
    name: "Дмитрий Волков",
    role: "Набрал 4 кг мышц за 3 месяца",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Тренируюсь 4 года, но только с NutriPlan Pro начал по-настоящему прогрессировать. Питание стало точным инструментом, а не угадайкой.",
  },
  {
    name: "Мария Ким",
    role: "Спортсменка-любитель",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Уровень энергии просто другой. Раньше падала после обеда, сейчас тренируюсь вечером и чувствую себя отлично. Рекомендую всем активным людям.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Реальные результаты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Люди, которые уже изменили своё тело и самочувствие с нашей системой питания
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
