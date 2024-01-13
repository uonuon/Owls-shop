import { signInWithEmailAndPassword } from "firebase/auth";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { auth, db } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import logo from "../assets/mobile.png";
export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>): void => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitSignup = () => {
    const createdAt = Date.now();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        set(ref(db, "users/" + res.user.uid), {
          displayName: "",
          email: data.email,
          uid: res.user.uid,
          createdAt,
        })
          .then(async () => {
            setData({
              email: "",
              password: "",
            });
            navigate("/package");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
          .then((res) => {
            setData({
              email: "",
              password: "",
            });
            toast.success("Login successfully");
            navigate("/package");
          })
          .catch((error) => toast.error(error.message));
      });
  };
  return (
    <div className="screen">
      <ToastContainer />
      <div className="login-container">
        <div className="login-image">
          <img className="logo" alt="logo" src={logo} />
        </div>
        <div className="login-content">
          <p className="title">سجّل وكمّل</p>
          <p className="sub-title">
            سجل دخولك أو إعمل أكونت جديد من هنا عشان تقدر تشوف البروفايل بتاعك
            الجديد من على الآبب في موبايلك{" "}
          </p>
          <div className="login-inputs">
            <input
              className="email"
              placeholder="weird@owls.app"
              type="text"
              autoComplete="off"
              autoCorrect="off"
              name="email"
              value={data.email}
              onChange={handleSubmit}
            />
            <input
              className="password"
              placeholder="*********"
              type="password"
              autoComplete="off"
              autoCorrect="off"
              name="password"
              value={data.password}
              onChange={handleSubmit}
            />

            <button className="login-button" onClick={submitSignup}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
