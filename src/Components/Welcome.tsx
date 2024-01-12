import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { User, UserType } from "../Context/User";
import { useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";

export const Welcome = () => {
  const { docId } = useContext(User) as UserType;

  let navigate = useNavigate();
  useEffect(() => {
    if (!docId) {
      navigate("/login");
    } else {
      navigate("/welcome");
    }
  }, [docId]);

  return <div className="background"></div>;
};
