/* eslint-disable react-hooks/exhaustive-deps */
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow-down.svg";

export default function OwlsWelcome() {
  let navigate = useNavigate();

  return (
    <div className="screen">
      <ToastContainer />
      <div className="app-container">
        <div className="app-content">
          <p className="title">أهلاً بيك في أولز من تاني!</p>
          <p className="sub-title">
            هو أولز راجع؟ .. أيوة! أولز آبب هيرجع يشتغل تاني زي زمان، وزودنا
            حاجات جديدة كمان..
          </p>
          <p className="sub-list">
            <span>• الافاتارز:</span>
            &nbsp;زودنا اشكال جديدة تقدر تغير بيها الافاتار بتاعك!
          </p>
          <p className="sub-list">
            <span>• الهووت:</span>
            &nbsp; دلوقتي تقدر تغير شكل الهووت بتاعتك وتبقى مختلفة عن باقي
            الهوتس!
          </p>
          <p className="sub-list">
            <span>• البروفايل موود:</span>
            &nbsp;خلي الناس تعرف موودك من شكل بروفايلك!
          </p>
          <p className="sub-list">
            <span>• باقة البومة المميزة:</span>
            &nbsp;شوية مميزات حصرية فشخ الفشخ!
          </p>
        </div>
        <div className="flex-image">
          <div className="try">
            <p className="package-title">جرب من هنا</p>
            <img src={arrow} />
          </div>
          <div className="images-container">
            <img
              onClick={() => navigate("/package")}
              alt="test"
              src={require("./../assets/3.png")}
            />
            <img
              onClick={() => navigate("/package")}
              alt="test"
              src={require("./../assets/4.png")}
            />
            <img
              onClick={() => navigate("/package")}
              alt="test"
              src={require("./../assets/2.png")}
            />
            <img
              onClick={() => navigate("/package")}
              alt="test"
              src={require("./../assets/1.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
