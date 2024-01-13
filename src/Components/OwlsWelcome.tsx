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
          <p className="sub-title">-“هو أولز راجع؟” .. </p>
          <p className="sub-title">
            -أيوة! أولز آبب هيرجع يفتح تاني، وهنضيف شوية حاجات جديدة الفترة اللي
            جاية..{" "}
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
            <img alt="" src={arrow} />
          </div>
          <div className="images-container">
            <img
              onClick={() => navigate("/package", { state: 0 })}
              alt="test"
              src={require("./../assets/3.png")}
            />
            <img
              onClick={() => navigate("/package", { state: 1 })}
              alt="test"
              src={require("./../assets/4.png")}
            />
            <img
              onClick={() => navigate("/package", { state: 2 })}
              alt="test"
              src={require("./../assets/2.png")}
            />
            <img
              onClick={() => navigate("/package", { state: 3 })}
              alt="test"
              src={require("./../assets/1.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
