/* eslint-disable react-hooks/exhaustive-deps */
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow-down.svg";
import { ref, push } from "firebase/database";
import { db } from "../FirebaseConfig";
import { useState, useContext, ChangeEvent } from "react";
import { User, UserType } from "../Context/User";

export default function LastPage() {
  let navigate = useNavigate();
  const [text, setText] = useState("");
  const { docId, user } = useContext(User) as UserType;

  const handleChange = (e: any): void => {
    setText(e.target.value);
  };

  const sendMessage = () => {
    const messagesListRef = ref(db, "messages/" + docId);
    push(messagesListRef, {
      createdAt: Date.now(),
      uid: docId,
      user: user.email,
      content: text,
    })
      .then(() => {
        setText("");
      })
      .catch(() => {
        setText("");
      });
  };

  return (
    <div className="screen">
      <ToastContainer />
      <div className="app-container">
        <div className="app-content">
          <p className="title">حاجة كمان..</p>
          <p className="sub-title-last">
            دي رسالة شكر وتعبير مننا بالامتنان لكل واحد لسة مستني أولز يرجع
            وعنده أمل وبعتلنا كتير ، وكل دا عشان أولز حقيقي فرق في حياته زمان،
            ودا السبب الاساسي ورا إننا نرجع نحط إهتمام أكتر في الشغل على الآبب.
            محتاجين دعمكم يكمّل معانا عشان تساعدونا بآرائكم واللي محتاجينه
            الفترة الجاية من أولز، تقدر تشاركنا برسالة منك اكتب فيها اللي يجي
            على بالك، ولو حابب تشاركنا في أولز التجريبي اللي هيرجع قريب، إكتب
            حاجة نقدر نوصلك من خلالها: واتساب، ديسكورد، ماسنجر، تيليجرام أو حتى
            ايميلك.
          </p>
          <p className="package-title">أكتب رسالتك هنا..</p>
          <div className="row">
            <div className="text-area">
              <textarea onInput={handleChange} value={text}></textarea>
              <button onClick={sendMessage} className="login-button">
                ابعت
              </button>
            </div>
            <img
              onClick={() => navigate("/package", { state: 3 })}
              alt="test"
              className="owls"
              src={require("./../assets/1.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
