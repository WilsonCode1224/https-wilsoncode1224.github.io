import React from "react";
import Focus from "./Focus";
export default function Contents() {
  return (
    <>
      <div className="banner">
        <p className="normal-color">你 / 妳需要的?</p>
        <h2 className="banner-subTitle banner-words">All in SwiftEdge</h2>
        <p className="best-choice">你的最佳選擇</p>
        <a className="bannerLogin" href="#">
          立即搶購
        </a>
      </div>
      <Focus />
    </>
  );
}
