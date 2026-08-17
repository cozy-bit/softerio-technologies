import { RocketIcon, TrophyIcon, GridBadgeIcon, SearchIcon, CodeIcon } from '../../assets/icons'
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

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#request" variant="primary">
              Заказать приложение
            </Button>
            <Button href="#consult" variant="secondary">
              Онлайн-консультация
            </Button>
          </div>
        </div>

        {/* Illustration column */}
        <div className="relative hidden h-[520px] lg:block">
          {/* glossy spheres */}
          <div className="absolute top-[190px] left-[10px] h-16 w-16 rounded-full bg-[radial-gradient(circle_at_32%_28%,#dff0ff,#4f8cf0_55%,#1c3f9c)] shadow-[0_18px_30px_rgba(10,30,90,0.4)]" />
          <div className="absolute top-[170px] right-[70px] h-9 w-9 rounded-full bg-[radial-gradient(circle_at_32%_28%,#dff0ff,#4f8cf0_55%,#1c3f9c)] shadow-[0_10px_18px_rgba(10,30,90,0.4)]" />
          <div className="absolute bottom-[-40px] right-[40px] h-40 w-40 rounded-full bg-[radial-gradient(circle_at_34%_28%,#ffffff,#cfe6e2_55%,#9fc9c2)] shadow-[0_25px_40px_rgba(10,30,90,0.35)]" />

          {/* rotated card stack */}
          <div
            className="absolute top-0 right-[40px] h-[500px] w-[340px]"
            style={{ transform: 'rotate(15deg) skewX(-10deg)' }}
          >
            {/* phone outline */}
            <div className="absolute bottom-0 h-[430px] w-[300px] rounded-[36px] border-2 border-white/40" />

            {/* translucent grid card behind */}
            <div className="absolute bottom-6 left-3 h-[400px] w-[290px] rounded-[28px] bg-white/10 backdrop-blur-sm" />

            {/* bottom app icon row */}
            <div className="absolute bottom-[70px] left-9 flex gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/25" />
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#1E4FC7]">
                <CodeIcon />
              </div>
              <div className="h-10 w-10 rounded-xl bg-white/25" />
              <div className="h-10 w-10 rounded-xl bg-white/25" />
            </div>
            <div className="absolute bottom-14 left-9 h-1.5 w-24 rounded-full bg-white/40" />

            {/* pink card */}
            <div className="absolute top-[150px] left-9 h-[220px] w-[220px] rounded-2xl bg-[#F3D9EC]/90 shadow-xl">
              <span className="absolute top-3 left-4 font-mono text-[10px] tracking-wide text-[#1E4FC7]/70 uppercase">
                основной_скрипт
              </span>
              {/* torn-paper ribbon */}
              <div
                className="absolute top-9 left-4 h-[130px] w-[188px] bg-[#3E70E8]"
                style={{
                  clipPath:
                    'polygon(0 0,100% 0,100% 82%,90% 100%,80% 82%,70% 100%,60% 82%,50% 100%,40% 82%,30% 100%,20% 82%,10% 100%,0 82%)',
                }}
              />
            </div>

            {/* search bar / поисковой модуль */}
            <div className="absolute top-[105px] left-6 flex h-11 w-[240px] items-center justify-between rounded-full bg-white/15 pr-1 pl-4 backdrop-blur-sm">
              <span className="font-mono text-[10px] tracking-wide text-white uppercase">
                поисковой_модуль
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#1E4FC7]">
                <SearchIcon />
              </span>
            </div>

            {/* small lavender card with toggle */}
            <div className="absolute top-[55px] left-[110px] h-16 w-24 rounded-xl bg-[#F3D9EC]/80" />
            <div className="absolute top-[80px] left-[122px] flex h-6 w-11 items-center rounded-full bg-white/70 px-0.5">
              <div className="h-5 w-5 rounded-full bg-white shadow" />
            </div>

            {/* grid badge */}
            <div className="absolute top-0 left-[95px] flex h-11 w-11 items-center justify-center rounded-xl bg-primary-dark text-white shadow-lg">
              <GridBadgeIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
