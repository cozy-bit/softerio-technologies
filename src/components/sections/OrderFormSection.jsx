import { useState } from "react";
import Input from "../ui/Input";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { BUDGET_OPTIONS } from "../../data/budgetData";

function OrderFormSection() {
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_OPTIONS[0].id);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // отправка формы с данными: { ...formData, budgetId: selectedBudget }
  };

  return (
    <section id="request" className="bg-[#fff8ff] py-16 md:py-12">
      <div className="mx-auto max-w-[1288px] px-6 md:px-10">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-text sm:text-4xl">
          Заказать приложение
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto grid max-w-5xl gap-10 rounded-3xl bg-surface p-6 shadow-card md:p-10 lg:grid-cols-2 lg:gap-16"
        >
          {/* Блок выбора бюджета */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-text">Бюджет проекта</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {BUDGET_OPTIONS.map((item) => (
                <Badge
                  key={item.id}
                  label={item.label}
                  isSelected={selectedBudget === item.id}
                  onClick={() => setSelectedBudget(item.id)}
                />
              ))}
            </div>
          </div>

          {/* Блок контактных данных */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-text">Контакты</h3>
            
            <Input
              type="text"
              placeholder="Ваше имя или название компании"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <Input
              type="text"
              placeholder="Телефон, Telegram или Email"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            />

            <div className="flex flex-col gap-1.5 w-full">
              <textarea
                placeholder="Опишите ваш проект или задачу"
                rows={4}
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                className="w-full rounded-xl border border-border bg-surface p-4 text-text outline-none resize-none transition-colors focus:border-primary"
              />
            </div>

            <Button type="submit" variant="primary" className="mt-2 w-full">
              Отправить заявку
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default OrderFormSection;