import {
    Navbar,
    Typography,
  } from "@material-tailwind/react";
  import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
  
  const MainNav = () => {
    const [clickMenu, setclickMenu] = useState(""); // 클릭한 메뉴를 문자열로 저장
  

    const handleMenuClick = (menu) => {
      setclickMenu(menu); // 클릭한 메뉴를 상태에 저장
    };
  
    const navList = (
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color={clickMenu === "pages" ? "blue" : "blue-gray"} // 클릭한 메뉴에 따라 색상 변경
          className="p-1 font-normal lg:justify-center" // lg:justify-center 클래스 추가
        >
          <Link
            to="/board/list"
            className="flex items-center"
            onClick={() => handleMenuClick("pages")} // 메뉴 클릭 시 해당 메뉴 이름을 전달
          >
            Board
          </Link>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color={clickMenu === "account" ? "blue" : "blue-gray"} // 클릭한 메뉴에 따라 색상 변경
          className="p-1 font-normal lg:justify-center" // lg:justify-center 클래스 추가
        >
          <a
            href="#"
            className="flex items-center"
            onClick={() => handleMenuClick("account")} // 메뉴 클릭 시 해당 메뉴 이름을 전달
          >
            Account
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color={clickMenu === "blocks" ? "blue" : "blue-gray"} // 클릭한 메뉴에 따라 색상 변경
          className="p-1 font-normal"
        >
          <a
            href="#"
            className="flex items-center"
            onClick={() => handleMenuClick("blocks")} // 메뉴 클릭 시 해당 메뉴 이름을 전달
          >
            Blocks
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color={clickMenu === "docs" ? "blue" : "blue-gray"} // 클릭한 메뉴에 따라 색상 변경
          className="p-1 font-normal"
        >
          <a
            href="#"
            className="flex items-center"
            onClick={() => handleMenuClick("docs")} // 메뉴 클릭 시 해당 메뉴 이름을 전달
          >
            Docs
          </a>
        </Typography>
      </ul>
    );
  
    return (
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 mb-4">
        <div className="container mx-auto flex items-center justify-center text-blue-gray-900">
          <div className="hidden lg:block">{navList}</div>
        </div>
      </Navbar>
    );
  };
  
  export default MainNav;