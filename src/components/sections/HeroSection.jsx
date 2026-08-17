import Button from "../ui/Button";
import sphereWhiteGlossyBlur from "../../assets/sphere-white-glossy-blur.png";
import rocket from "../../assets/icons/rocket.png";
import cup from "../../assets/icons/cup.png";

const FEATURES = [
  {
    icon: rocket,
    text: "Знаем, как решить вашу задачу оптимальным способом",
  },
  {
    icon: cup,
    text: "Подберем подходящее решение с учетом целей и возможностей",
  },
];

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-[#5A8CF0] via-[#3E70E8] to-[#1E4FC7]">
      {/* анимация */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: floatSlow 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatSlow 4s ease-in-out 2s infinite;
        }
        .animate-float-fast {
          animation: floatFast 3s ease-in-out 1s infinite;
        }
      `}</style>

      {/* декоративная изометрическая сетка справа */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[65%] [mask-image:linear-gradient(to_left,black,transparent)]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(60deg, rgba(255,255,255,.18) 0, rgba(255,255,255,.18) 1px, transparent 1px, transparent 56px), repeating-linear-gradient(-60deg, rgba(255,255,255,.18) 0, rgba(255,255,255,.18) 1px, transparent 1px, transparent 56px)",
        }}
      />
      {/* декоративные ромбы слева */}
      <div className="pointer-events-none absolute top-0 -left-24 h-full w-[520px] opacity-20">
        <div className="absolute top-10 left-10 h-64 w-64 rotate-45 rounded-3xl border border-white" />
        <div className="absolute top-56 left-40 h-40 w-40 rotate-45 rounded-2xl border border-white" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1288px] gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:items-center lg:py-24">
        {/* колонка с текстом */}
        <div>
          <h1 className="max-w-[580px] text-5xl leading-[1.12] font-semibold tracking-tight text-center text-white sm:text-[42px] lg:text-[48px]">
            Разработка мобильных приложений и сервисов
          </h1>

          <ul className="mt-10 flex flex-col gap-6">
            {FEATURES.map(({ icon, text }) => (
              <li key={text} className="flex items-center gap-4">
                <img
                  src={icon}
                  alt=""
                  className="h-8 w-8 shrink-0 object-contain brightness-0 invert"
                />
                <span className="text-[16px] leading-[1.3] font-normal text-white sm:text-[18px]">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button
              href="#request"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Заказать приложение
            </Button>
            <Button
              href="#consult"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Онлайн-консультация
            </Button>
          </div>
        </div>

        {/* колонка с иллюстрацией */}
        <div className="relative mx-auto h-[230px] w-full sm:h-[320px] lg:mx-0 lg:h-[520px] lg:w-auto">
          <div className="absolute top-0 left-1/2 h-[520px] w-[620px] origin-top -translate-x-1/2 scale-[0.44] sm:scale-[0.61] lg:left-0 lg:translate-x-0 lg:scale-100">
            {/* левый синий шар (анимация плавного парения) */}
            <div className="animate-float absolute top-[190px] left-[10px] h-16 w-16 rounded-full bg-[radial-gradient(circle_at_32%_28%,#dff0ff,#4f8cf0_55%,#1c3f9c)] shadow-[0_18px_30px_rgba(10,30,90,0.4)]" />

            {/* правый верхний малый шар (анимация с задержкой) */}
            <div className="animate-float-fast absolute top-[170px] right-[70px] h-9 w-9 rounded-full bg-[radial-gradient(circle_at_32%_28%,#dff0ff,#4f8cf0_55%,#1c3f9c)] shadow-[0_10px_18px_rgba(10,30,90,0.4)]" />

            {/* нижний размытый белый шар */}
            <img
              src={sphereWhiteGlossyBlur}
              alt=""
              className="animate-float-delayed absolute bottom-[-40px] right-[20px] h-44 w-44 object-contain"
            />

            {/* главная картинка макета (парит чуть более плавно) */}
            <img
              src="/app.png"
              alt="Иллюстрация мобильного приложения"
              className="animate-float absolute top-0 right-[10px] h-[520px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;