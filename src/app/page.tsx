import MainPage from "@/app/components/main-page/main-page";
import Tariff, { fetchTariffs } from "./types/tariff";

export default async function Home() {
  const tariffs = await fetchTariffs();

  return (
      <div className="bg-background">
          <MainPage tariffs={tariffs} />
      </div>
  );
}

