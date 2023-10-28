"use client";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, Modal } from "antd";
import { useGetFitnessTips } from "hooks/fitness";
import { useState } from "react";

export default function Create() {
  const [open, setOpen] = useState(false);
  const { refetch } = useGetFitnessTips();
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await fetch(`http://localhost:3000/api/fitness/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });
      return response.json();
    },
    onSuccess: () => {
      refetch();
      setOpen(false);
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
    <>
      <Button
        type="primary"
        className="bg-blue-500 !h-10 w-fit"
        onClick={() => setOpen(true)}
      >
        Add Fitness Type
      </Button>
      <Modal
        key={+open}
        title="Add Fitness tip"
        centered
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <Form
          layout="vertical"
          className="w-full mt-6"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item name="title" label="Name" rules={[{ required: true }]}>
            <Input className="h-10 rounded-md" placeholder="Add new category" />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
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
    </>
  );
}
