import { useQuery } from "@tanstack/react-query";

export const useGetProfile = () => {
  return useQuery<{ user: any; message: string }>({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/profile", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.json() as any;
    },
  });
};
