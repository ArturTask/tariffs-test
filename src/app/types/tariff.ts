export default interface Tariff {
    id: string
    genId?: string
    period: string
    price: number
    full_price: number
    is_best: boolean
    text: string
    selected?: boolean
}

export async function fetchTariffs(): Promise<Tariff[]> {
  try {
    const res = await fetch("https://t-core.fit-hub.pro/Test/GetTariffs", {
      // По умолчанию в Next.js — cache: 'force-cache'
      // Если нужно всегда свежие данные:
      // next: { revalidate: 0 } // или cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: Tariff[] = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch tariffs:", error);
    // Возвращаем fallback, если нужно
    return getDefaultTariffs();
  }
}

export function getDefaultTariffs():Tariff[] {
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
