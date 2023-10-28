"use client";
import { useMutation } from "@tanstack/react-query";
import { Button, Form, Input, Modal } from "antd";
import { useGetFitnessTips } from "hooks/fitness";
import { useState } from "react";

export default function Create({ contentType }: { contentType: string }) {
  const isVideos = contentType === "videos";
  const [open, setOpen] = useState(false);
  const { refetch } = useGetFitnessTips(contentType);
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await fetch(
        `https://capstone-fitness.up.railway.app/api/fitness/?type=${contentType}`,
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
      setOpen(false);
      Modal.success({
        content: "Successfully added.",
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
        {isVideos ? "Add Fitness Video" : "Add Fitness Type"}
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
          {isVideos && (
            <Form.Item name="link" label="Link" rules={[{ required: true }]}>
              <Input className="h-10 rounded-md" placeholder="Add Link" />
            </Form.Item>
          )}
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
