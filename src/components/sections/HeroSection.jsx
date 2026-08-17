import { RocketIcon, TrophyIcon } from '../../assets/icons'
import Button from '../ui/Button'

const FEATURES = [
  {
    icon: RocketIcon,
    text: 'Знаем, как решить вашу задачу оптимальным способом',
  },
  {
    icon: TrophyIcon,
    text: 'Подберем подходящее решение с учетом целей и возможностей',
  },
]

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-[#5A8CF0] via-[#3E70E8] to-[#1E4FC7]">
      {/* decorative isometric grid, right side */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[65%] [mask-image:linear-gradient(to_left,black,transparent)]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(60deg, rgba(255,255,255,.18) 0, rgba(255,255,255,.18) 1px, transparent 1px, transparent 56px), repeating-linear-gradient(-60deg, rgba(255,255,255,.18) 0, rgba(255,255,255,.18) 1px, transparent 1px, transparent 56px)',
        }}
      />
      {/* decorative outline diamonds, left side */}
      <div className="pointer-events-none absolute top-0 -left-24 h-full w-[520px] opacity-20">
        <div className="absolute top-10 left-10 h-64 w-64 rotate-45 rounded-3xl border border-white" />
        <div className="absolute top-56 left-40 h-40 w-40 rotate-45 rounded-2xl border border-white" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1288px] gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:items-center lg:py-24">
        {/* Text column */}
        <div>
          <h1 className="max-w-[560px] text-[30px] leading-[1.15] font-extrabold text-white sm:text-[38px] lg:text-[44px]">
            Разработка мобильных приложений и сервисов
          </h1>

          <ul className="mt-8 flex flex-col gap-5">
            {FEATURES.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <Icon className="mt-0.5 shrink-0 text-white/90" />
                <span className="text-[15px] leading-snug text-white/90 sm:text-base">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="#request" variant="primary" className="w-full sm:w-auto">
              Заказать приложение
            </Button>
            <Button href="#consult" variant="secondary" className="w-full sm:w-auto">
              Онлайн-консультация
            </Button>
          </div>
        </div>

        {/* Illustration column */}
        <div className="relative hidden h-[520px] lg:block">
          {/* glossy spheres */}
          <div className="absolute top-[190px] left-[10px] h-16 w-16 rounded-full bg-[radial-gradient(circle_at_32%_28%,#dff0ff,#4f8cf0_55%,#1c3f9c)] shadow-[0_18px_30px_rgba(10,30,90,0.4)]" />
          <div className="absolute top-[170px] right-[70px] h-9 w-9 rounded-full bg-[radial-gradient(circle_at_32%_28%,#dff0ff,#4f8cf0_55%,#1c3f9c)] shadow-[0_10px_18px_rgba(10,30,90,0.4)]" />
          <img
            src="/sphere-white-glossy.png"
            alt=""
            className="absolute bottom-[-40px] right-[20px] h-44 w-44 object-contain"
          />

          {/* phone / cards illustration */}
          <img
            src="/app.png"
            alt="Иллюстрация мобильного приложения"
            className="absolute top-0 right-[10px] h-[520px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
