import { useMutation } from "@tanstack/react-query";
import { Button, Card, Form, Input, Modal, Select, Spin } from "antd";
import Header from "components/Header";
import { Link, useNavigate } from "react-router-dom";
import Create from "./_components/Create";
import { useEffect, useState } from "react";
import useFitnessStore from "../../store/fitness";
import { useGetFitnessTips } from "hooks/fitness";
import ReactPlayer from "react-player";

export default function Fitness() {
  const navigate = useNavigate();
  const [contentType, setContentType] = useState("text");
  const setNewTipForm = useFitnessStore((store) => store.setNewTipForm);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const { data, isLoading } = useGetFitnessTips(contentType);
  useEffect(() => {
    if (data?.message === "Unauthorized") {
      Modal.error({
        title: "Not Logged In",
        content: "Please Login to see fitness tips",
        okButtonProps: {
          className: "bg-blue-500 mt-6",
        },
        okText: "Click here to Login",
        onOk: () => {
          navigate("/login", { replace: true });
        },
        centered: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.message]);
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <section className="flex items-center justify-between py-6 sticky bg-white top-16 z-10">
          <h3 className="text-3xl font-bold">Best Fitness tips</h3>
          {isLoggedIn && (
            <div className="flex flex-col items-end gap-y-4">
              <Create />
              <Select
                size="large"
                placeholder="Select type"
                style={{ width: 200 }}
                defaultValue="text"
                onChange={setContentType}
                options={[
                  {
                    value: "text",
                    label: "Text Tips",
                  },
                  {
                    value: "videos",
                    label: "Video Tips",
                  },
                ]}
              />
            </div>
          )}
        </section>
        {isLoggedIn ? (
          <div className="flex flex-col gap-y-6">
            {isLoading ? (
              <Spin size="large" className="mt-24" />
            ) : contentType === "text" ? (
              <section className="grid gap-5 grid-cols-2">
                {data?.results?.map((item: any) => (
                  <div className="grid gap-5" key={item._id}>
                    <Card
                      title={
                        <div className="flex justify-between items-center">
                          <p>{item.title}</p>
                          <p className="font-light text-xs">
                            Tips Count: {item.tips.length}
                          </p>
                        </div>
                      }
                      className="flex flex-col border-gray-400"
                    >
                      <div className="flex flex-col h-full">
                        {item.tips.length > 0 ? (
                          <ol className="list-decimal pl-4 flex-1">
                            {item.tips.slice(0, 2).map((tip: any) => (
                              <li key={tip._id}>
                                <p className="mb-2">{tip.text}</p>
                              </li>
                            ))}
                          </ol>
                        ) : (
                          <p>No Tips found</p>
                        )}
                        <div className="flex-1 flex items-end justify-between mt-6">
                          <button
                            className="border p-1 rounded-md text-xs font-medium border-gray-700"
                            onClick={() => setNewTipForm(item._id)}
                          >
                            Add new Tip
                          </button>
                          {item.tips.length > 0 && (
                            <Link
                              to={`/fitness/${item._id}`}
                              className="block text-right text-blue-400 font-semibold"
                            >
                              Read More
                            </Link>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </section>
            ) : (
              <div className="grid gap-5 grid-cols-2">
                {data?.results.map((item) => (
                  <div key={item._id}>
                    <div className="rounded-lg overflow-hidden">
                      <ReactPlayer url={item.link} height="340px" controls />
                    </div>
                    <p className="text-lg mt-4">{item.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center flex-col justify-center h-full">
            <h3 className="text-3xl font-medium">You are not Logged In</h3>
            <p className="text-lg font-medium">Login in to view all Tips</p>
            <Link to="/login">Click here to Login</Link>
          </div>
        )}
      </main>
      <NewTipForm />
    </>
  );
}

type NewTipFormFieldType = {
  text?: string;
};

const NewTipForm = () => {
  const { refetch } = useGetFitnessTips();
  const newTipForm = useFitnessStore((store) => store.newTipForm);
  const setNewTipForm = useFitnessStore((store) => store.setNewTipForm);
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await fetch(
        `http://localhost:3000/api/fitness/${newTipForm}/tips`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        }
      );
      return response.json();
    },
    onSuccess: () => {
      refetch();
      setNewTipForm(0);
      Modal.success({
        content: "Successfully added new Tip",
        centered: true,
        okButtonProps: {
          className: "bg-blue-500",
        },
      });
    },
  });
  const onFinish = async (values: any) => {
    await mutation.mutateAsync(values);
  };
  return (
    <Modal
      title="Add New Tip"
      open={!!newTipForm}
      onCancel={() => setNewTipForm(0)}
      centered
      footer={null}
      key={+newTipForm}
    >
      <Form
        autoComplete="off"
        layout="vertical"
        className="mt-6 flex flex-col"
        onFinish={onFinish}
      >
        <Form.Item<NewTipFormFieldType>
          label="Tip"
          name="text"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item className="mb-0 self-end">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-500"
            loading={mutation.isPending}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
