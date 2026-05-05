import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Подходит ли система для новичков?",
      answer:
        "Да, NutriPlan Pro разработан для людей с любым уровнем подготовки. Вам не нужно знать КБЖУ или разбираться в нутрициологии — система сделает всё за вас.",
    },
    {
      question: "Как быстро я увижу результат?",
      answer:
        "Большинство клиентов замечают улучшение самочувствия и энергии уже в первые 1–2 недели. Видимые изменения в теле — через 3–4 недели при соблюдении плана.",
    },
    {
      question: "Нужно ли покупать специальные продукты?",
      answer:
        "Нет. Все продукты из плана можно купить в обычном супермаркете. Мы не продаём спортивное питание и не требуем дорогих добавок.",
    },
    {
      question: "Что если у меня непереносимость продуктов?",
      answer:
        "При составлении плана вы указываете аллергии и исключения. Система автоматически подберёт замены, не нарушая баланс нутриентов.",
    },
    {
      question: "Можно ли совмещать с тренировками?",
      answer:
        "Конечно. Система учитывает ваш уровень активности и корректирует план под тренировочные и восстановительные дни.",
    },
    {
      question: "Как отменить подписку?",
      answer:
        "Отмена — в один клик в личном кабинете, без звонков и объяснений. Доступ сохраняется до конца оплаченного периода.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на самые популярные вопросы о системе питания NutriPlan Pro.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
