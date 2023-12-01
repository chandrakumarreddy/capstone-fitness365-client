import Header from "components/Header";
import YogaPoses from "./exerciseType";

export default function Exercises() {
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <div className="flex gap-12 flex-1 items-start my-6">
          <YogaPoses />
        </div>
      </main>
    </>
  );
}
