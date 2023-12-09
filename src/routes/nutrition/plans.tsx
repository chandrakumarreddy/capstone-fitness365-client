import { Card } from "antd";
import Header from "components/Header";
import { NUTRITION_PLANS } from "../../constants/blogs";

export default function NutritionRecipes() {
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <div className="flex gap-8 flex-col flex-1 items-start my-6 w-full">
          <div className="w-full">
            <h3 className="text-2xl font-medium text-blue-500 text-center">
              NUTRITION Plans
            </h3>
          </div>
          <div className="grid gap-6 w-full grid-cols-2">
            {NUTRITION_PLANS.map((item) => (
              <Card
                key={item.id}
                title={<h3 className="text-lg font-medium">{item.name}</h3>}
                className="flex flex-col border-gray-400"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt="plan"
                    width={150}
                    className="rounded-lg"
                  />
                  <p className="my-4 whitespace-pre-wrap text-sm w-full">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
