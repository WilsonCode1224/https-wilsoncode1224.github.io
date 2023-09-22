import React from "react";
import Footer from "./Footer";

export default function ShopList() {
  return (
    <>
      <div className="shopList">
        <div className="subTitle-c">
          <h2 className="subTitle">限時熱賣</h2>
        </div>
        <div className="shop-List">
          <div className="mg shopItem top">
            <div className="buyButton">
              <a href="#">
                <h2 className="shopInfo">坦克綠套裝</h2>
                <span className="shopInfoPrice">$1000</span>
              </a>
            </div>
          </div>
          {/* 2 */}
          <div className="mg shopItem girlsTop">
            <div className="buyButton">
              <a href="#">
                <h2 className="shopInfo">悍將背心(女)</h2>
                <span className="shopInfoPrice">$800</span>
              </a>
            </div>
          </div>
          {/* 3 */}
          <div className="mg shopItem shoes">
            <div className="buyButton">
              <a href="#">
                <h2 className="shopInfo">鞋款聯名系列</h2>
                <span className="shopInfoPrice">$1500</span>
              </a>
            </div>
          </div>
          {/* 4 */}
          <div className="mg shopItem tannis">
            <div className="buyButton">
              <a href="#">
                <h2 className="shopInfo">運動套裝(女)</h2>
                <span className="shopInfoPrice">$888</span>
              </a>
            </div>
          </div>
        </div>
        <div className="viewAll">
          <a href="#">檢視全部</a>
        </div>
      </div>
      <Footer />
    </>
  );
}
