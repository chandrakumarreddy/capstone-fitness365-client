import { Calendar, CalendarProps, Modal, Spin } from "antd";
import Header from "components/Header";
import { nutritionTrainers } from "../../../constants";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useGetTrainer } from "hooks/fitness";

export default function BookZumbaClass() {
  const searchParams = useSearchParams()[0];
  const id = searchParams.get("id") || "4002";
  const { data, isLoading, refetch } = useGetTrainer(+id);
  const slots = data?.result.trainer.slots?.map((item: string) =>
    dayjs(item).format("DD/MM/YYYY").toString()
  );
  const trainer = nutritionTrainers.find((trainer) => trainer.id === id);
  const [selectedValue, setSelectedValue] = useState(() => dayjs(new Date()));

  const onSelect = (newValue: Dayjs) => {
    setSelectedValue(newValue);
    Modal.confirm({
      title: `Are you sure you want to Hire ${trainer?.name}`,
      icon: <ExclamationCircleFilled />,
      content: (
        <div>
          <p>
            Trainer Fee per hour $
            <strong>{trainer?.trainingExperience.fitness}</strong>
          </p>
          <p className="my-8 font-bold text-blue-600">
            Upon successfully scheduling a trainer, you will receive an email
            confirmation.
          </p>
        </div>
      ),
      centered: true,
      okButtonProps: {
        className: "bg-blue-500",
      },
      async onOk() {
        await fetch(
          `https://capstone-fitness.up.railway.app/api/trainer/4002`,
          {
            method: "post",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              slot: newValue.toString(),
            }),
          }
        );
        refetch();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const dateCellRender = (value: Dayjs) => {
    // const listData = data(value);

    const isBooked = slots?.includes(value.format("DD/MM/YYYY").toString());
    if (isBooked)
      return (
        <ul className="bg-red-500 p-2 h-full w-full flex justify-center items-center text-white font-bold text-sm">
          <li>Slot Booked</li>
        </ul>
      );
    return null;
  };
  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <div className="flex gap-12 flex-1 items-start my-6">
          <div className="w-full ">
            <h3 className="pt-8 text-xl font-bold text-center">Zumba</h3>
            <h3 className="text-2xl font-medium text-center">
              Book Zumba class by selecting date from below Calendar
            </h3>
            {isLoading ? (
              <div className="flex items-center justify-center h-32">
                <Spin />
              </div>
            ) : (
              <Calendar
                value={selectedValue}
                cellRender={cellRender}
                onSelect={onSelect}
                disabledDate={(date) => {
                  if (
                    date < dayjs() ||
                    slots?.includes(date.format("DD/MM/YYYY").toString())
                  )
                    return true;
                  return false;
                }}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
