import { ArrowRightOutlined } from "@ant-design/icons";
import { List } from "antd";
import Header from "components/Header";
import PremiumBanner from "components/PremiumBanner";
import { Link, Outlet, useParams } from "react-router-dom";

const data = [
  {
    key: "aerobic",
    title: "Aerobic exercise",
    link: "/fitness/exercises/aerobic",
  },
  {
    key: "anaerobic",
    title: "Anaerobic exercise",
    link: "/fitness/exercises/anaerobic",
  },
  {
    key: "functional",
    title: "Functional fitness",
    link: "/fitness/exercises/functional",
  },
  {
    key: "balance-training",
    title: "Balance training ",
    link: "/fitness/exercises/balance-training",
  },
  {
    key: "flexibility-training",
    title: "Flexibility training ",
    link: "/fitness/exercises/flexibility-training",
  },
  {
    key: "strength-training",
    title: "Strength training ",
    link: "/fitness/exercises/strength-training",
  },
];

export default function Exercises() {
  const { exerciseType = "" } = useParams();
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <PremiumBanner />
        <div className="flex gap-12 flex-1 items-start my-6">
          <div className="flex flex-col gap-6">
            <List
              size="large"
              header={null}
              footer={null}
              bordered
              className="w-64"
              style={{ minWidth: 256 }}
              dataSource={data}
              renderItem={(item) => {
                const isActive = item.key === exerciseType;
                return (
                  <List.Item>
                    <Link
                      to={item.link}
                      className={`w-full flex justify-between${
                        isActive ? " text-orange-400 font-bold" : ""
                      }`}
                    >
                      {item.title}
                      {isActive && <ArrowRightOutlined size={24} />}
                    </Link>
                  </List.Item>
                );
              }}
            />
            <div className="border-2 border-blue-300 relative h-80 rounded-lg rotating-border cursor-pointer">
              <Link to="/apply-coach">
                <div className="flex flex-col justify-between h-full p-4 font-normal text-base w-64 gap-4 absolute">
                  <p className="text-orange-600 font-bold">
                    Become Fintness coach
                  </p>
                  <img
                    src="/become-trainer.png"
                    alt="Become trainer"
                    className="rounded-lg h-full"
                  />
                </div>
              </Link>
            </div>
          </div>
          <Outlet />
        </div>
      </main>
    </>
  );
}
