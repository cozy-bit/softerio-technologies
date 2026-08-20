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

const WichTasksSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#fff7ff] py-12 sm:py-16 lg:py-20">
      <div className="relative z-10 mx-auto max-w-full px-5 sm:px-8">
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

            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-93.75 w-[375px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7F9FD] lg:block" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_310px_1fr] lg:gap-12">
              <div className="order-2 space-y-12 lg:order-1 lg:space-y-20">
                <TaskCard {...tasks[0]} />
                <TaskCard {...tasks[1]} />
              </div>

              {/* мобильное приложение (фото) */}
              <div className="order-1 flex justify-center lg:order-2">
                <img
                  src="/mobile_app.png"
                  alt="Экран мобильного приложения"
                  className="w-[275px] max-w-full h-auto object-contain sm:w-[310px]"
                />
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