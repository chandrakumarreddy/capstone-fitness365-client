import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Dropdown, MenuProps, Modal } from "antd";
import { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type HeaderType = {
  headerStyle?: string;
};

export default function Header({ headerStyle = "" }: HeaderType) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["isLoggedIn"],
    queryFn: () => localStorage.getItem("isLoggedIn"),
  });
  const fitnessItems: MenuProps["items"] = useMemo(
    () => [
      {
        label: "Exercises",
        key: "1",
        onClick: () => navigate("/fitness/exercises/aerobic"),
      },
      {
        label: "Fintess Tips",
        key: "2",
        onClick: () => navigate("/fitness/tips"),
      },
      {
        label: "Blog",
        key: "2",
        onClick: () => navigate("/fitness/blog"),
      },
    ],
    []
  );
  const yogaItems: MenuProps["items"] = useMemo(
    () => [
      {
        label: "Yoga Poses",
        key: "1",
        onClick: () => navigate("/yoga/poses"),
      },
      {
        label: "Articles and Blog",
        key: "2",
        onClick: () => navigate("/yoga/blog"),
      },
    ],
    []
  );
  const nutritionItems: MenuProps["items"] = useMemo(
    () => [
      {
        label: "Articles and Blogs",
        key: "1",
        onClick: () => navigate("/nutrition/blog"),
      },
      {
        label: "Nutrition Plans",
        key: "2",
        onClick: () => navigate("/nutrition/plans"),
      },
      {
        label: "Recipes",
        key: "3",
        onClick: () => navigate("/nutrition/recipes"),
      },
      {
        label: "Calorie and Macronutrient Calculator",
        key: "4",
        onClick: () => navigate("/nutrition/calculator"),
      },
    ],
    []
  );
  const onClickLogout = () => {
    Modal.warning({
      maskClosable: false,
      title: "Are you sure you want to Logout",
      centered: true,
      okText: "Logout",
      onOk: () => {
        queryClient.clear();
        queryClient.removeQueries();
        localStorage.clear();
        window.location.replace("/");
      },
      okButtonProps: {
        className: "bg-orange-500",
      },
      closable: true,
    });
  };
  return (
    <header
      className={`bg-transparent bg-gradient-header h-16 fixed z-20 w-full ${headerStyle}`}
    >
      <nav className="h-full flex items-center max-w-7xl mx-auto justify-between text-base font-medium text-gray-700 tracking-wide px-4">
        <ul className="flex items-center gap-x-10 text-white font-bold">
          <Link to="/">
            <li className="mr-20">
              <img src="/logo-white.png" alt="logo" width="84" height="56" />
            </li>
          </Link>
          <Dropdown
            menu={{ items: fitnessItems }}
            className="cursor-pointer"
            arrow
          >
            <li
              className={`hover:text-orange-500 transition-colors delay-100 py-4 ${
                pathname.includes("fitness") ? "text-orange-500" : ""
              }`}
            >
              FITNESS
            </li>
          </Dropdown>
          <Dropdown
            menu={{ items: nutritionItems }}
            className="cursor-pointer"
            arrow
          >
            <li
              className={`hover:text-orange-500 transition-colors delay-100 py-4 ${
                pathname.includes("nutrition") ? "text-orange-500" : ""
              }`}
            >
              NUTRITION
            </li>
          </Dropdown>
          <li className="hover:text-orange-500">SPORTS</li>
          <Dropdown
            menu={{ items: yogaItems }}
            className="cursor-pointer"
            arrow
          >
            <li
              className={`hover:text-orange-500 transition-colors delay-100 py-4 ${
                pathname.includes("yoga") ? "text-orange-500" : ""
              }`}
            >
              YOGA
            </li>
          </Dropdown>
          <li className="hover:text-orange-500">CARE</li>
        </ul>

        <ul className="flex gap-x-10 text-white font-bold">
          {data ? (
            <>
              <Link to="/dashboard/profile" className="hover:text-orange-500">
                <li>Profile</li>
              </Link>
              <li>
                <button
                  onClick={onClickLogout}
                  className="hover:text-orange-500"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Signin</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
