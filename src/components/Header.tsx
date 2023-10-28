import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import { Link, useLocation } from "react-router-dom";

type HeaderType = {
  headerStyle?: string;
};

export default function Header({ headerStyle = "" }: HeaderType) {
  const { pathname } = useLocation();
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["isLoggedIn"],
    queryFn: () => localStorage.getItem("isLoggedIn"),
  });
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
          <Link to="/fitness">
            <li
              className={`hover:text-orange-500 transition-colors delay-100 py-4 ${
                pathname.includes("fitness") ? "text-orange-500" : ""
              }`}
            >
              FITNESS
            </li>
          </Link>
          <Link to="/nutrition">
            <li
              className={`hover:text-orange-500 transition-colors delay-100 py-4 ${
                pathname.includes("nutrition") ? "text-orange-500" : ""
              }`}
            >
              NUTRITION
            </li>
          </Link>
          <li className="hover:text-orange-500">SPORTS</li>
          <li className="hover:text-orange-500">YOGA</li>
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
