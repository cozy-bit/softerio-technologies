const tasks = [
  {
    number: "1",
    title: "Повысить лояльность",
    text: "Мобильное приложение работает намного быстрее сайта и многие функции доступны даже без интернета. Также здесь намного проще настроить push-уведомления, чтобы оформить заказ или отследить его статус. Все это создает положительный пользовательский опыт.",
  },
  {
    number: "2",
    title: "Автоматизировать продажи",
    text: "С приложением легче провести пользователя по каждому этапу воронки продаж. С помощью автоматизации внутри интерфейса можно показывать ценность продукта, рассказывать о новых функциях и напоминать о себе с помощью push-уведомлений.",
  },
  {
    number: "3",
    title: "Сократить издержки",
    text: "Мобильный сервис помогает сэкономить на рекламном бюджете и дополнительных ресурсах. Многие маркетинговые сообщения можно отправлять прямо в приложении и эффективно работать с отдельными пользовательскими сегментами.",
  },
  {
    number: "4",
    title: "Увеличить прибыль",
    text: "Повышение уровня клиентского сервиса, экономия на закупке рекламы и автоматизация процессов положительно скажутся на итоговой выручке. Вложения в разработку приложения быстро окупаются, если интерфейс хорошо справляется со своими задачами.",
  },
];

const NumberBadge = ({ number }) => (
  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1558C7] text-[12px] font-semibold text-white shadow-[0_4px_12px_rgba(21,88,199,0.25)]">
    {number}
  </div>
);

const TaskCard = ({ number, title, text }) => (
  <div className="group flex gap-4">
    <NumberBadge number={number} />

    <div className="min-w-0">
      <h3 className="text-[16px] font-semibold leading-[1.3] text-[#171A21] sm:text-[17px]">
        {title}
      </h3>

      <p className="mt-3 text-[12px] leading-[1.65] text-[#737983] sm:text-[13px]">
        {text}
      </p>
    </div>
  </div>
);

const CourseIcon = ({ type }) => {
  if (type === "python") {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="none">
        <path
          d="M16 4c-5 0-7 2-7 6v3h9v2H8c-4 0-5 2-5 6s2 7 6 7c5 0 7-2 7-6v-3H7v-2h10c4 0 7-2 7-7s-3-6-8-6Z"
          fill="currentColor"
        />
        <circle cx="12" cy="8" r="1.2" fill="#34D399" />
        <circle cx="20" cy="24" r="1.2" fill="#34D399" />
      </svg>
    );
  }

  if (type === "science") {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="none">
        <path
          d="M12 5h8M14 5v8l-7 11a3 3 0 0 0 2.5 4.5h13A3 3 0 0 0 25 24l-7-11V5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 21h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="none">
      <path
        d="M5 10 16 4l11 6-11 6L5 10Z"
        fill="currentColor"
      />
      <path
        d="M9 13v8c0 2 3 4 7 4s7-2 7-4v-8"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M27 10v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const CourseCard = ({
  color,
  type,
  title,
  description,
  progress,
  rating,
}) => (
  <div className="rounded-[13px] bg-white px-3 py-2.5 shadow-[0_3px_12px_rgba(15,23,42,0.07)]">
    <div className="flex gap-2.5">
      <div
        className={`flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-[11px] ${color}`}
      >
        <CourseIcon type={type} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[9px] font-bold text-[#182230]">
          {title}
        </p>

        <p className="mt-0.5 truncate text-[6.5px] text-[#98A0AA]">
          {description}
        </p>

        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-[7px] font-medium text-[#687280]">
            Price: $50
          </span>

          <span className="text-[7px] text-[#687280]">
            ★ {rating}
          </span>
        </div>

        <div className="mt-1.5 h-[3px] overflow-hidden rounded-full bg-[#E9EDF3]">
          <div
            className="h-full rounded-full bg-blue-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  </div>
);

const MobileScreen = () => {
  return (
    <div className="relative h-[550px] w-[275px] sm:h-[600px] sm:w-[300px]">
      <div className="absolute bottom-0 left-1/2 h-8 w-[190px] -translate-x-1/2 rounded-full bg-black/10 blur-xl" />

      <div className="relative h-full w-full rounded-[45px] border-[7px] border-[#D2D4D7] bg-[#F5F6F7] p-[5px] shadow-[0_25px_55px_rgba(15,23,42,0.2)]">
        <div className="absolute -left-[10px] top-[105px] h-[60px] w-[4px] rounded-l-full bg-[#C5C7CA]" />
        <div className="absolute -left-[10px] top-[180px] h-[35px] w-[4px] rounded-l-full bg-[#C5C7CA]" />
        <div className="absolute -right-[10px] top-[130px] h-[70px] w-[4px] rounded-r-full bg-[#C5C7CA]" />

        <div className="relative h-full overflow-hidden rounded-[37px] bg-[#F7F9FC]">
          <div className="absolute left-1/2 top-0 z-50 h-[25px] w-[105px] -translate-x-1/2 rounded-b-[18px] bg-black">
            <div className="absolute left-1/2 top-[8px] h-[5px] w-[28px] -translate-x-1/2 rounded-full bg-[#202020]" />
            <div className="absolute right-[17px] top-[7px] h-[7px] w-[7px] rounded-full bg-[#252525]" />
          </div>

          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-5 pb-1 pt-8 text-[8px] font-semibold text-[#111827]">
              <span>9:41</span>

              <div className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 20 12"
                  className="h-2.5 w-4"
                  fill="none"
                >
                  <path
                    d="M1 10c4-5 14-5 18 0M4 7c3-3 9-3 12 0M8 4c1.5-1 2.5-1 4 0"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="h-2.5 w-4 rounded-[2px] border border-current p-[1px]">
                  <div className="h-full w-[80%] rounded-[1px] bg-current" />
                </div>
              </div>
            </div>

            <div className="px-4 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-blue-500 text-[9px] font-bold text-white">
                    JL
                  </div>

                  <div>
                    <p className="text-[7px] text-gray-400">
                      Welcome back
                    </p>

                    <div className="flex items-center gap-1">
                      <p className="text-[9px] font-bold text-[#111827]">
                        John Lock
                      </p>

                      <span className="flex h-3 w-3 items-center justify-center rounded-full bg-blue-500 text-[6px] text-white">
                        ✓
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-[#475569]"
                    fill="none"
                  >
                    <path
                      d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>

                  <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-red-500" />
                </div>
              </div>
            </div>

            <div className="mx-3 mt-4 rounded-[18px] bg-gradient-to-br from-[#3282FF] to-[#1760E8] px-4 py-4 text-white shadow-[0_8px_20px_rgba(37,99,235,0.22)]">
              <div className="flex items-center justify-between">
                <span className="text-[7px] opacity-80">
                  Your progress in Courses
                </span>

                <span className="text-[9px]">•••</span>
              </div>

              <p className="mt-1.5 text-[14px] font-bold">
                Computer Science
              </p>

              <p className="mt-0.5 text-[7px] opacity-80">
                4.5 ★ · By Sarah Williams · All Level
              </p>

              <div className="mt-3 space-y-2">
                <div>
                  <div className="mb-1 flex justify-between text-[6px]">
                    <span>Math 101</span>
                    <span>60%</span>
                  </div>

                  <div className="h-[4px] rounded-full bg-white/30">
                    <div className="h-full w-[60%] rounded-full bg-yellow-300" />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-[6px]">
                    <span>Algorithm</span>
                    <span>80%</span>
                  </div>

                  <div className="h-[4px] rounded-full bg-white/30">
                    <div className="h-full w-[80%] rounded-full bg-red-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-3">
              <div className="h-px flex-1 bg-[#DDE2E8]" />
              <span className="text-[7px] text-[#8B949F]">
                Recommendation
              </span>
              <div className="h-px flex-1 bg-[#DDE2E8]" />
            </div>

            <div className="space-y-2 px-3">
              <CourseCard
                color="bg-orange-400"
                type="math"
                title="Math 102"
                description="Description: All can be perfect in math..."
                progress={70}
                rating="5.0"
              />

              <CourseCard
                color="bg-cyan-400"
                type="science"
                title="Computer Science 2"
                description="Description: All can be perfect in art..."
                progress={58}
                rating="3.9"
              />

              <CourseCard
                color="bg-emerald-400"
                type="python"
                title="Python 3"
                description="Description: All can be perfect in prog..."
                progress={84}
                rating="4.0"
              />
            </div>

            <div className="mt-auto border-t border-[#E1E5EA] bg-white px-5 pb-3 pt-3">
              <div className="flex items-center justify-between">
                {[
                  {
                    label: "Home",
                    active: true,
                    icon: (
                      <path
                        d="m4 10 8-6 8 6v9H4v-9Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    ),
                  },
                  {
                    label: "Search",
                    icon: (
                      <>
                        <circle
                          cx="10.5"
                          cy="10.5"
                          r="5.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="m15 15 4 4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </>
                    ),
                  },
                  {
                    label: "Courses",
                    icon: (
                      <>
                        <circle
                          cx="12"
                          cy="12"
                          r="8"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="m10 9 5 3-5 3V9Z"
                          fill="currentColor"
                        />
                      </>
                    ),
                  },
                  {
                    label: "Profile",
                    icon: (
                      <>
                        <circle
                          cx="12"
                          cy="8"
                          r="3.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="M5 20c.7-3.5 3-5.5 7-5.5s6.3 2 7 5.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </>
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex flex-col items-center gap-1 ${
                      item.active ? "text-blue-500" : "text-gray-400"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                    >
                      {item.icon}
                    </svg>

                    <span className="text-[6px] font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WichTasksSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#fff7ff] py-12 sm:py-16 lg:py-20">
      

      <div className="relative z-10 mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[20px] bg-white px-5 py-12 shadow-[0_10px_40px_rgba(17,24,39,0.04)] sm:px-10 sm:py-14 lg:px-14 lg:py-12">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.8px] text-[#111827] sm:text-[38px] lg:text-[42px]">
              Какие задачи поможет решить
              <br className="hidden sm:block" />
              запуск мобильного приложения
            </h2>

            <div className="mx-auto mt-2 h-[3px] w-[290px] rounded-full bg-blue-500 sm:w-[475px]" />
          </div>

          <div className="relative mx-auto mt-10 max-w-[1040px] lg:mt-12">
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#EEF3FC] lg:block" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[375px] w-[375px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7F9FD] lg:block" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_310px_1fr] lg:gap-12">
              <div className="order-2 space-y-12 lg:order-1 lg:space-y-20">
                <TaskCard {...tasks[0]} />
                <TaskCard {...tasks[1]} />
              </div>

              <div className="order-1 flex justify-center lg:order-2">
                <MobileScreen />
              </div>

              <div className="order-3 space-y-12 lg:space-y-20">
                <TaskCard {...tasks[2]} />
                <TaskCard {...tasks[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WichTasksSection;