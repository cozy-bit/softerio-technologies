import sphereImage from "../../assets/sphere-white-glossy.png";
import step1 from "../../assets/steps/step-1.png";
import step2 from "../../assets/steps/step-2.png";
import step3 from "../../assets/steps/step-3.png";
import step4 from "../../assets/steps/step-4-1.png";
import step4_2 from "../../assets/steps/step-4-2.png";
import step5 from "../../assets/steps/step-5.png";
import step6 from "../../assets/steps/step-6-1.png";
import step6_2 from "../../assets/steps/step-6-2.png";
import step7 from "../../assets/steps/step-7-1.png";
import step7_2 from "../../assets/steps/step-7-2.png";

const stepsData = [
  {
    number: 1,
    title: "Сбор требований",
    description:
      "Детальное изучение требований, ресурсов и исходной информации по проекту и формирование технического задания на разработку ПО.",
    image: step1,
  },
  {
    number: 2,
    title: "UI/UX Дизайн",
    description:
      "Разработка современного функционального и удобного дизайна с применением новейших инструментов.",
    image: step2,
  },
  {
    number: 3,
    title: "Прототип (MVP)",
    description:
      "В результате проектирования формируется прототип и отправляется для разработки продукта",
    image: step3,
  },
  {
    number: 4,
    title: "Разработка",
    description:
      "Процесс разработки системы интеллектуального учета, мобильного приложения или веб-сайта в режиме максимальной прозрачности.",
    image: step4,
  },
  {
    number: 5,
    title: "Тестирование",
    description:
      "В ходе тестовых запусков обеспечиваем полную отказоустойчивость продукта.",
    image: step5,
  },
  {
    number: 6,
    title: "Развертывание",
    description: "Запуск готового продукта в работу (ИСУ, сайта, приложения).",
    image: step6,
  },
  {
    number: 7,
    title: "Поддержка и обслуживание",
    description:
      "Обеспечиваем полную техническую поддержку и сопровождение по всем вопросам, возникающим после развертывания.",
    image: step7,
  },
];

const StepsSection = () => {
  return (
    <section className="relative w-full bg-[#3B82F6] rounded-[40px] px-6 py-16 md:px-12 md:py-20 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
          Этапы разработки
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepsData.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="relative mb-5">
                {/* шарик для карточки №1 */}
                {step.number === 1 && (
                  <img
                    src={sphereImage}
                    alt="decor sphere"
                    className="absolute -top-12 -right-3 w-32 h-32 pointer-events-none z-20 drop-shadow-md"
                  />
                )}

                {/* символ </> для карточки №4 */}
                {step.number === 4 && (
                  <img
                    src={step4_2}
                    alt="decor code icon"
                    className="absolute -top-14 left-4 md:left-1 w-56 h-36 pointer-events-none z-20 drop-shadow-lg"
                  />
                )}

                {/* ракета для карточки №6 */}
                {step.number === 6 && (
                  <img
                    src={step6_2}
                    alt="decor code icon"
                    className="absolute -top-12 -left-3 w-36 h-36 pointer-events-none z-20 drop-shadow-lg"
                  />
                )}

                {/* шестерёнка для карточки №7 */}
                {step.number === 7 && (
                  <img
                    src={step7_2}
                    alt="decor code icon"
                    className="absolute -top-18 -right-12 xl:-right-6  w-42 h-36 pointer-events-none z-20 drop-shadow-lg"
                  />
                )}

                {/* Контейнер самой картинки */}
                <div className="w-full h-36 bg-blue-400/30 rounded-2xl overflow-hidden relative flex items-center justify-center border border-white/10 z-10">
                  {step.image ? (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-white/40 font-mono text-xs">
                      Превью {step.number}
                    </div>
                  )}
                </div>
              </div>

              {/* Номер и Заголовок */}
              <div className="flex items-center gap-3 mb-3">
                <span className="w-7 h-7 rounded-full bg-blue-900/40 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {step.number}
                </span>
                <h3 className="font-bold text-lg leading-snug">{step.title}</h3>
              </div>

              {/* Описание */}
              <p className="text-white/80 text-xs leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}

          {/* Кнопка заявки */}
          <div className="flex items-start justify-center min-h-[220px] lg:min-h-full">
            <button className="w-full h-full max-h-[140px] bg-[#EF4444] hover:bg-red-600 transition-colors text-white font-semibold text-lg rounded-2xl shadow-lg shadow-red-500/30 flex items-center justify-center p-6 text-center">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
