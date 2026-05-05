import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Снижение веса",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Система создаёт комфортный дефицит калорий без голода и срывов. Вы теряете вес стабильно, сохраняя
            мышечную массу и энергию для активной жизни.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Минус 3–5 кг в первый месяц
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Без изнурительных диет и голодания
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Сохранение результата надолго
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Набор мышечной массы",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Точный расчёт белков и нутриентов для роста мышц. Система синхронизируется с вашим тренировочным
            графиком и подбирает питание под нагрузки.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Оптимальный белок под каждую тренировку
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Питание для восстановления и роста
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Планы для любого типа тренинга
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Здоровье и энергия",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Питание, которое заряжает энергией с утра и держит вас в тонусе весь день. Никакого упадка сил
            после обеда и усталости к вечеру.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Стабильный уровень энергии весь день
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Улучшение сна и восстановления
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Поддержка иммунитета и самочувствия
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Под любую цель</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            NutriPlan Pro подстраивается под вашу цель — будь то снижение веса, рост мышц или просто
            желание чувствовать себя лучше каждый день.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
