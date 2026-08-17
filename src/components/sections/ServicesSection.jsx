import mobileAppDesign from "../../assets/icons/mobile-app-design.png";
import mobile from "../../assets/icons/mobile.png";
import webDevelopment from "../../assets/icons/web-development.png";

const servicesData = [
  {
    id: "mobile",
    title: "Разработка мобильных приложений",
    tags: ["iOS", "Android"],
    description: null,
    icon: (
      <div className="relative w-16 h-24 flex items-center justify-center bg-white">
        <img src={mobile} alt="Mobile" />
      </div>
    ),
  },
  {
    id: "web",
    title: "Web разработка",
    tags: ["Frontend", "Backend"],
    description: [
      "Разрабатываем сайты персонально под ваш бизнес. Анализируем рынок и целевую аудиторию в соответствии с задачами, которые вы хотите решить с помощью веб-сайта.",
      "Создаём web-сервисы для любого направления бизнеса: продажи, коммуникации, управление, серверную часть и API, гибкие административные инструменты для управления приложениями и сбора статистики.",
      "Вы получаете продукт, привлекательный для пользователей и функциональный для вас.",
    ],
    icon: (
      <div className="w-24 h-24 flex items-center justify-center bg-white">
        <img src={webDevelopment} alt="Web Development" />
      </div>
    ),
  },
  {
    id: "design",
    title: "Проектирование мобильного приложения",
    tags: ["Дизайн", "ТЗ"],
    description: null,
    icon: (
      <div className="relative flex items-center justify-center w-36 h-32">
        <img
          src={mobileAppDesign}
          alt="Mobile App Design"
          className="w-full h-full object-contain"
        />
      </div>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section className="relative w-full bg-[#FAF8FF] py-20 px-6 md:px-12 overflow-hidden">
      {/* код C++ как задний фон (правый нижний угол) */}
      <div className="absolute right-4 lg:-right-16 -bottom-40 w-[450px] pointer-events-none select-none opacity-70 font-mono text-[11px] leading-relaxed text-slate-600 z-0 hidden lg:block">
        <pre className="whitespace-pre">
          <span className="text-[#7F7ADA]">int main() {"{\n"}</span>
          {"  "}
          int num, originalNum, remainder, result ={" "}
          <span className="text-amber-600">0</span>;{"\n"}
          {"  "}cout &lt;&lt;{" "}
          <span className="text-emerald-600">
            "Enter a three-digit integer: "
          </span>
          ;{"\n"}
          {"  "}cin &gt;&gt; num;{"\n"}
          {"  "}originalNum = num;{"\n\n"}
          {"  "}
          <span className="text-[#F2C94C]">while</span> (originalNum !={" "}
          <span className="text-amber-600">0</span>) {"{\n"}
          {"    "}
          <span className="text-slate-400">
            // remainder contains the last digit
          </span>
          {"\n"}
          {"    "}remainder = originalNum %{" "}
          <span className="text-amber-600">10</span>;{"\n"}
          {"    "}result += remainder * remainder * remainder;{"\n"}
          {"    "}
          <span className="text-slate-400">
            // removing last digit from the original number
          </span>
          {"\n"}
          {"    "}originalNum /= <span className="text-amber-600">10</span>;
          {"\n"}
          {"  "}
          {"}\n\n"}
          {"  "}
          <span className="text-purple-600">if</span> (result == num){"\n"}
          {"    "}cout &lt;&lt; num &lt;&lt;{" "}
          <span className="text-emerald-600">" is an Armstrong number."</span>;
          {"\n"}
          {"  "}
          <span className="text-purple-600">else</span>
          {"\n"}
          {"    "}cout &lt;&lt; num &lt;&lt;{" "}
          <span className="text-emerald-600">
            " is not an Armstrong number."
          </span>
          ;{"\n\n"}
          {"  "}
          <span className="text-purple-600">return</span>{" "}
          <span className="text-amber-600">0</span>;{"\n"}
          {"}"}
        </pre>
      </div>

      <div className="max-w-full mx-auto relative z-10">
        <div className="flex flex-col text-center md:text-start md:flex-row md:items-center gap-6 mb-12">
          <h2 className="text-4xl shrink-0 md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Наши услуги
          </h2>
          <p className="text-slate-500 md:max-w-md">
            Разработка мобильных приложений и веб-проектов для бизнеса и
            стартапов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center relative border border-slate-100 min-h-[220px] justify-between"
            >
              <div className="my-6 flex items-center justify-center h-28">
                {service.icon}
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-900 mb-4 px-4">
                  {service.title}
                </h3>

                {service.description && (
                  <div className="text-slate-500 text-xs leading-relaxed space-y-3 text-left mb-6 px-2 hidden lg:block">
                    {service.description.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3 justify-center mt-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-6 py-2 rounded-full border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
