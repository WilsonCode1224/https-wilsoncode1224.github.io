import React from "react";
import LogoImg from "../image/homepage.png";
import Contents from "./Contents";
import { HiOutlineArrowUp } from "react-icons/hi";

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="imgDiv">
            <a href="#">
              <img className="homeLogo" src={LogoImg} alt="" />
            </a>
          </div>

          <div className="header-bar">
            <ul className="headerList">
              <li>
                <a href="#">新品和精選</a>
              </li>
              <li>
                <a href="#">男款</a>
              </li>
              <li>
                <a href="#">女款</a>
              </li>
              <li>
                <a href="#">特惠商品</a>
              </li>
              <li>
                <a href="#">特殊聯名主題</a>
              </li>
            </ul>
            <ul className="accounts">
              <li>
                <a className="singIn" href="#">
                  登入
                </a>
              </li>
              <li>
                <a className="singUp" href="#">
                  註冊帳戶
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="backHome">
          <a href="#">
            <HiOutlineArrowUp />
          </a>
        </div>
      </div>
      <Contents />
    </>
  );
}
