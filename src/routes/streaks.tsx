import { RocketTwoTone } from "@ant-design/icons";
import { Alert, Spin } from "antd";
import dayjs from "dayjs";
import { useGetStreaks } from "hooks/user";

function Streaks() {
  const { data, isLoading, error } = useGetStreaks();

  if (isLoading) {
    return (
      <div className="mt-8 mx-auto w-full">
        <Spin />
      </div>
    );
  } else if (error) {
    return (
      <div className="mt-8 mx-auto w-full">
        <Alert type="error" message="Opps something went wrong" />
      </div>
    );
  }

  return (
    <div className="grid gap-6 w-full">
      <div className="flex flex-col bg-gradient-to-r from-purple-700 to-purple-500 rounded-lg p-8 text-white w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Current Streak</h2>
          <h1 className={`text-5xl font-extrabold`}>
            {data?.result.current_streak}
          </h1>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-xl font-bold">Longest Streak</h2>
          <h1 className="text-3xl font-extrabold">
            {data?.result.longest_streak}
          </h1>
        </div>
      </div>
      <div className="grid gap-6">
        <h3 className="text-2xl font-bold">Streak History</h3>
        <div>
          {data?.result.streak_history.map((item) => (
            <div
              key={item.date}
              className="flex justify-between border border-green-400 p-2 rounded-lg text-sm"
            >
              <div className="flex items-center gap-2">
                <RocketTwoTone />
                <p>Streak date</p>
              </div>
              <p>{dayjs(item.date).format("DD-MM-YYYY")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Streaks;
