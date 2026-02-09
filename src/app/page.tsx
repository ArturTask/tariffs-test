import MainPage from "@/app/components/main-page/main-page";
import Tariff from "./types/tariff";

export default function Home() {
  const tariffs = getDefaultTariffs();

  return (
      <div className="bg-background">
          <MainPage tariffs={tariffs} />
      </div>
  );
}

function getDefaultTariffs():Tariff[] {
    return([{
    "id": "f347d050-073c-4969-ae91-7346f935cf70",
    "period": "1 неделя",
    "price": 149,
    "full_price": 999,
    "is_best": false,
    "text": "Чтобы просто начать",
    selected: false
  },
  {
    "id": "f347d050-073c-4969-ae91-7346f935cf71",
    "period": "1 месяц",
    "price": 399,
    "full_price": 1690,
    "is_best": false,
    "text": "Чтобы получить первые результаты",
     selected: false
  },
  {
    "id": "f347d050-073c-4969-ae91-7346f935cf72",
    "period": "3 месяца",
    "price": 990,
    "full_price": 3990,
    "is_best": false,
    "text": "Привести тело в порядок",
     selected: false
  },
  {
    "id": "f347d050-073c-4969-ae91-7346f935cf72",
    "period": "Навсегда",
    "price": 5990,
    "full_price": 18990,
    "is_best": true,
    "text": "Для тех, кто хочет всегда быть в форме и поддерживать здоровье",
     selected: false
  }]);
}
