import { Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { useCallback, useEffect, useState } from "react";
import { Alert, Button, Checkbox, Form, Input, Modal } from "antd";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

function SignInForm() {
  const queryClient = useQueryClient();
  const [error, setError] = useState("");
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const response = await fetch(
        "https://capstone-fitness.up.railway.app/api/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      return response.json();
    },
    onSuccess: () => {
      queryClient.clear();
      queryClient.cancelQueries();
    },
  });

  const onFinish = useCallback(
    async (values: any) => {
      try {
        setError("");
        const response = await mutation.mutateAsync(values);
        if (response.message === "success") {
          localStorage.setItem("token", response.token);
          localStorage.setItem("isLoggedIn", "true");
          Modal.success({
            content: "SuccessFully Logged In",
            centered: true,
            onOk: () => {
              window.location.replace("/");
            },
            okButtonProps: {
              className: "bg-blue-500",
            },
          });
        } else {
          // do something
          setError("Invalid Credentials");
        }
      } catch (error) {
        setError("Invalid Credentials");
      }
    },
    [mutation]
  );

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      autoComplete="off"
      autoCorrect="false"
      className="w-[464px]"
      layout="vertical"
    >
      <h1 className="text-4xl mb-16 font-bold">Welcome back</h1>
      {error && (
        <Alert message={error} type="error" showIcon className="!mb-8" />
      )}
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input className="h-10 rounded-lg" placeholder="Email" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password className="h-10" placeholder="Password" />
      </Form.Item>
      <Form.Item<FieldType> name="remember" valuePropName="checked">
        <Checkbox defaultChecked={false}>Remember me</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full bg-sky-500 !h-10"
          loading={mutation.isPending}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

function Login() {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["isLoggedIn"],
    queryFn: () => localStorage.getItem("isLoggedIn"),
  });
  useEffect(() => {
    if (data) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  if (isLoading) {
    return (
      <>
        <Spin />
      </>
    );
  }
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full h-16 flex items-center bg-black text-base">
        <nav className="mx-auto h-full w-[1280px] flex items-center justify-between">
          <Link to="/">
            <img src="/logo-white.png" alt="logo" width="84" height="56" />
          </Link>
          <ul className="flex gap-x-10 text-white font-bold">
            <li>
              <Link to="/login">Signin</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex h-full flex-col items-center justify-center flex-1 w-9/12 mx-auto">
        <div className="flex items-center gap-y-12 justify-between w-full h-full min-h-[600px]">
          <div className="h-[500px] flex items-center">
            <img
              src="/login-form.svg"
              alt="login form"
              width="500"
              height="200"
            />
          </div>
          <SignInForm />
        </div>
      </main>
    </div>
  );
}

export default Login;
