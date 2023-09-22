import React from "react";
import ShopList from "./ShopList";
import { BsFillBusFrontFill } from "react-icons/bs";
import { BsFillCCircleFill } from "react-icons/bs";
import { BsBalloonHeartFill } from "react-icons/bs";
import { AiOutlineAudio } from "react-icons/ai";
import { BsFillLightbulbFill } from "react-icons/bs";
export default function Focus() {
  return (
    <>
      <div className="onSales">
        <div className="subTitle-c">
          <h2 className="subTitle">消費情報</h2>
        </div>

        <ul className="onSalesList">
          <li>
            <a className="onSalesList-item" href="#">
              <div className="onSalesList-item-c">
                <BsFillBusFrontFill />
              </div>
              滿額免運
            </a>
          </li>
          <li>
            <a className="onSalesList-item" href="#">
              <div className="onSalesList-item-c">
                <BsFillCCircleFill />
              </div>
              點數回饋
            </a>
          </li>
          <li>
            <a className="onSalesList-item" href="#">
              <div className="onSalesList-item-c">
                <BsBalloonHeartFill />
              </div>
              日日抽
            </a>
          </li>
          <li>
            <a className="onSalesList-item" href="#">
              <div className="onSalesList-item-c">
                <AiOutlineAudio />
              </div>
              直播特賣
            </a>
          </li>
          <li>
            <a className="onSalesList-item" href="#">
              <div className="onSalesList-item-c">
                <BsFillLightbulbFill />
              </div>
              瞭解更多
            </a>
          </li>
        </ul>
      </div>
      <ShopList />
    </>
  );
}
