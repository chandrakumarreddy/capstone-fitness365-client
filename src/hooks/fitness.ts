import { useQuery } from "@tanstack/react-query";

export const useGetFitnessTips = (contentType: string = "text") => {
  return useQuery<{ results: any[]; message: string }>({
    queryKey: ["fitness-tips", contentType],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/api/fitness?type=${contentType}`,
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
};
