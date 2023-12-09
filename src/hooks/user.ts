import { useQuery } from "@tanstack/react-query";

export const useGetStreaks = () => {
  return useQuery<{
    result: {
      current_streak: number;
      longest_streak: number;
      streak_history: { date: string }[];
    };
    message: string;
  }>({
    queryKey: ["streaks"],
    queryFn: async () => {
      const response = await fetch(
        `https://capstone-fitness.up.railway.app/api/streaks`,
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

export const updateSteak = async () => {
  const response = await fetch(
    `https://capstone-fitness.up.railway.app/api/streaks`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.json() as any;
};
