import { Button, Form, Input, Modal, Spin } from "antd";
import { useGetProfile } from "hooks/profile";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { updateSteak } from "hooks/user";
dayjs.extend(customParseFormat);

interface FieldType {
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

export default function Profile() {
  const { data, isLoading, refetch } = useGetProfile();
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await fetch(
        `https://capstone-fitness.up.railway.app/api/profile`,
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
      Modal.success({
        content: "Updated Sucessfully",
        centered: true,
        okButtonProps: {
          className: "bg-blue-500",
        },
      });
    },
  });
  const [form] = Form.useForm<FieldType>();
  const onFinish = async (values: any) => {
    await mutation.mutateAsync(values);
  };
  useEffect(() => {
    updateSteak();
  }, []);
  return (
    <section>
      <h3 className="text-2xl font-medium">Profile</h3>
      <div className="mt-6">
        {isLoading ? (
          <div className="flex items-center justify-center h-32">
            <Spin />
          </div>
        ) : (
          <Form
            layout="vertical"
            onFinish={onFinish}
            form={form}
            // onFinishFailed={onFinishFailed}
            initialValues={{
              ...data?.user,
              dateOfBirth: dayjs("2015-06-23", "YYYY-MM-DD"),
            }}
            autoComplete="off"
            className="w-96"
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input className="!h-10 rounded-md" disabled />
            </Form.Item>
            <Form.Item<FieldType>
              label="First name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your First Name!" },
              ]}
            >
              <Input className="!h-10 rounded-md" />
            </Form.Item>
            <Form.Item<FieldType>
              label="Last name"
              name="lastName"
              rules={[
                { required: true, message: "Please input your Last Name!" },
              ]}
            >
              <Input className="!h-10 rounded-md" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-500 !h-10 w-full"
                loading={mutation.isPending}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </section>
  );
}
