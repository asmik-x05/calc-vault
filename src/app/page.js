import Card from "@/components/Card";
import { calculatorCollection } from "@/data/calculatorList";
import Image from "next/image";

export default function Home() {
  const calculatorLists = calculatorCollection;

  return (
    <main className="dark:bg-gray-950 bg-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-center">
          {calculatorLists.map((calculator) => (
            <Card
              key={calculator.id}
              title={calculator.title}
              path={calculator.path}
              description={calculator.description}
              thumbnail={calculator.thumbnail}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
