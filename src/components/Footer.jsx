import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer ">
        <div className="footerBar">
          <div className="aboutUs pd">
            <h2>
              關於 <span className="font-bold">Swift&Edge</span>
            </h2>
            <div className="footer-Info">
              <p>
                來自台灣新竹的運動時尚品牌。 <br />
                「以 SwiftEdge，突破極限，超越期望。」
                <br />
                為品牌座右銘，滿足您對生活與時尚的搭配。
              </p>
            </div>
          </div>
          <div className="aboutUs pd addresMe">
            <h2>聯絡與協助</h2>
            <div className="footer-Info">
              <div>
                <p>電話: 0989-888-7777</p>
                <p>信箱: swiftedge@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="aboutUs pd">
            <h2>訂閱電子報</h2>
            <div className="footer-Info">
              <form action="">
                <input
                  className="sendEmailValue"
                  type="text"
                  placeholder="輸入您的信箱"
                />
                <br />
                <input className="emailSubmit" type="submit" value="送出" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
