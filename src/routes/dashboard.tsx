import { List } from "antd";
import Header from "components/Header";
import { Link, Outlet } from "react-router-dom";

const data = [
  { title: "Profile", link: "/dashboard/profile" },
  { title: "Bookmarks", link: "/dashboard/bookmarks" },
  { title: "Streaks", link: "/dashboard/streaks" },
];

export default function Dashboard() {
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto pt-24 pb-10 px-4 min-h-screen">
        <div className="flex gap-12 flex-1 items-start">
          <List
            size="large"
            header={null}
            footer={null}
            bordered
            className="w-64"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Link to={item.link}>{item.title}</Link>
              </List.Item>
            )}
          />
          <Outlet />
        </div>
      </main>
    </>
  );
}
