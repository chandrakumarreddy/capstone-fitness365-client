import { useQuery } from "@tanstack/react-query";
import { List, Space, Spin } from "antd";
import Header from "components/Header";
import { Link, useParams } from "react-router-dom";
import {
  LeftCircleTwoTone,
  LikeTwoTone,
  DislikeTwoTone,
} from "@ant-design/icons";
import React from "react";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function FitnessTip() {
  const params = useParams();
  const id = params.id;
  const { data, isLoading } = useQuery<{ result: any }>({
    queryKey: ["fitness-tips"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/fitness/${id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.json() as any;
    },
  });
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-24 pl-4 pr-24">
        <div className="mb-8">
          <LeftCircleTwoTone />
          <Link
            to="/fitness"
            className="text-sm text-blue-500 font-medium ml-2"
          >
            Go Back
          </Link>
        </div>
        {isLoading ? (
          <Spin size="large" className="mt-24" />
        ) : (
          <>
            <List.Item.Meta
              title={
                <p className="text-4xl font-medium">{data?.result?.title}</p>
              }
            />
            <List
              className="demo-loadmore-list"
              loading={isLoading}
              itemLayout="vertical"
              dataSource={data?.result?.tips ?? []}
              renderItem={(item: any) => (
                <List.Item
                  actions={[
                    <button
                      key="existing-comment"
                      className="text-xs text-blue-500"
                    >
                      {`Comments (${item.comments.length})`}
                    </button>,
                    <button key="add-comment" className="text-black text-xs">
                      New Comment
                    </button>,
                    <IconText
                      icon={LikeTwoTone}
                      text={item.likes}
                      key="list-vertical-like"
                    />,
                    <IconText
                      icon={DislikeTwoTone}
                      text={item.dislikes}
                      key="list-vertical-dislike"
                    />,
                  ]}
                >
                  <p className="text-md mb-4 font-medium mt-4">{item.text}</p>
                </List.Item>
              )}
            />
          </>
        )}
      </main>
    </>
  );
}
