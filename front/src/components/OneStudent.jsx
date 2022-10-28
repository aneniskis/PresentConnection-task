import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useContext } from "react";
import { StudentsContext } from "../context/context";
import userAvatar from "../UserAvatar.png";
import "./oneStudent.scss";
import { BsFillPersonFill, BsGenderMale } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FaCity, FaBirthdayCake } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect } from "react";

const OneStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { students, currentProfile } = useContext(StudentsContext);

  const local = JSON.parse(window.localStorage.getItem("profile"));

  const oneStudent =
    students.length !== 0
      ? students.filter((student) => student._id === id)
      : local;

  useEffect(() => {
    if (!local || oneStudent !== local)
      window.localStorage.setItem("profile", JSON.stringify(currentProfile));
  }, []);
  return (
    <section className="card">
      <div className="card__top"></div>
      <div className="card__bottom">
        <img className="card__img" src={userAvatar} alt="avatar" />
        <div className="card__person">
          <h1>
            <BsFillPersonFill />
            {oneStudent[0].name} {oneStudent[0].surname}
          </h1>
        </div>
        <div className="card__details">
          <span>
            <FaCity />
            {oneStudent[0].city}
          </span>
          <span>
            <MdAlternateEmail />
            {oneStudent[0].email}
          </span>
        </div>
        <div className="card__details">
          <span>
            <BsGenderMale />
            {oneStudent[0].gender}
          </span>
          <span>
            <FaBirthdayCake /> {oneStudent[0].age} years
          </span>
        </div>
        <div className="card__button">
          <IoMdArrowRoundBack
            onClick={() => navigate("/")}
            className="card__back"
          >
            back
          </IoMdArrowRoundBack>
        </div>
      </div>
    </section>
  );
};

export default OneStudent;
