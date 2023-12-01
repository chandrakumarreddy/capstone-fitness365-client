import { useMutation, useQuery } from "@tanstack/react-query";
import { List, Space, Spin } from "antd";
import Header from "components/Header";
import { Link, useParams } from "react-router-dom";
import {
  LeftCircleTwoTone,
  LikeTwoTone,
  DislikeTwoTone,
} from "@ant-design/icons";
import React from "react";

const IconText = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <Space>
    {icon}
    {text}
  </Space>
);

export default function FitnessTip() {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, refetch } = useQuery<{ result: any }>({
    queryKey: ["fitness-tips", id],
    queryFn: async () => {
      const response = await fetch(
        `https://capstone-fitness.up.railway.app/api/fitness/${id}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.json() as any;
    },
  });
  const likeMutation = useMutation({
    mutationFn: async ({ tipId, liked }: any) => {
      const response = await fetch(
        `https://capstone-fitness.up.railway.app/api/fitness/${id}/tips/${tipId}/like`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ liked: liked }),
        }
      );
      return response.json();
    },
    onSuccess: () => {
      refetch();
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
              loading={isLoading || likeMutation.isPending}
              itemLayout="vertical"
              size="large"
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
                      icon={
                        <LikeTwoTone
                          onClick={() =>
                            likeMutation.mutate({
                              liked: true,
                              tipId: item._id,
                            })
                          }
                        />
                      }
                      text={item.likes}
                      key="list-vertical-like"
                    />,
                    <IconText
                      icon={
                        <DislikeTwoTone
                          onClick={() =>
                            likeMutation.mutate({
                              liked: false,
                              tipId: item._id,
                            })
                          }
                        />
                      }
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
