import { useQuery } from "@tanstack/react-query";

export const useGetFitnessTips = (contentType: string = "text") => {
  return useQuery<{ results: any[]; message: string }>({
    queryKey: ["fitness-tips", contentType],
    queryFn: async () => {
      const response = await fetch(
        `https://capstone-fitness.up.railway.app/api/fitness?type=${contentType}`,
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

export const useGetTrainer = (id: number) => {
  return useQuery<{ result: { trainer: { slots: any[] } }; message: string }>({
    queryKey: ["trainer", id],
    queryFn: async () => {
      const response = await fetch(
        `https://capstone-fitness.up.railway.app/api/trainer/${id}`,
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
