import { Card } from "antd";
import Header from "components/Header";
import { YOGA_ARTICLES } from "../../constants/blogs";

export default function Yogablog() {
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <div className="flex gap-8 flex-col flex-1 items-start my-6 w-full">
          <div className="w-full">
            <h3 className="text-2xl font-medium text-blue-500 text-center">
              YOGA Blog
            </h3>
          </div>
          <div className="grid gap-6">
            {YOGA_ARTICLES.map((item) => (
              <Card
                key={item.id}
                title={<h3 className="text-lg font-medium">{item.name}</h3>}
                className="flex flex-col border-gray-400"
              >
                <p className="text-base">{item.description}</p>
                <a
                  href={item.link}
                  target="blank"
                  rel="noopener"
                  className="text-blue-600 mt-4 block font-medium"
                >
                  Link to article
                </a>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
