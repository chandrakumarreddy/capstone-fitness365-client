import Header from "../../components/Header";

export default function NutritionRecipes() {
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <div className="flex gap-8 flex-col flex-1 items-start my-6 w-full">
          <div className="w-full">
            <h3 className="text-2xl font-medium text-blue-500 text-center">
              Coming soon...
            </h3>
          </div>
        </div>
      </main>
    </>
  );
}
