import { Card } from "antd";
import Header from "components/Header";
import { NUTRITION_RECIPES } from "../../constants/blogs";

export default function NutritionRecipes() {
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <div className="flex gap-8 flex-col flex-1 items-start my-6 w-full">
          <div className="w-full">
            <h3 className="text-2xl font-medium text-blue-500 text-center">
              NUTRITION RECIPES
            </h3>
          </div>
          <div className="grid gap-6 w-full grid-cols-2">
            {NUTRITION_RECIPES.map((item) => (
              <Card
                key={item.id}
                title={<h3 className="text-lg font-medium">{item.name}</h3>}
                className="flex flex-col border-gray-400"
              >
                <pre className="my-4 whitespace-pre-wrap text-sm w-full">
                  {item.how_to_make_recipe}
                </pre>
                <p className="text-base">
                  <strong>Calories:</strong>
                  <span className="text-orange-500 font-bold ml-4">
                    {item.calories}
                  </span>
                </p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
