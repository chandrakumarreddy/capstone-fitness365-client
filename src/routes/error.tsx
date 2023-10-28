import Header from "components/Header";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as any;
  return (
    <div className="flex flex-col min-h-screen">
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col flex-1 max-w-7xl mx-auto py-24 px-4 gap-y-2 justify-center">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p className="text-2xl font-medium">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
    </div>
  );
}
