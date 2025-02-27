import Loop_JSON from "../survey_components/loop_JSON";
import chroma from "chroma-js";
import useSetDefaultStyles from "../hooks/useSetDefaultStyles";
import { Children, use } from "react";
import "../index.css";
import { useState } from "react";
import { FaFontAwesome } from "react-icons/fa";
import Logo from "../survey_components/logo_svg";
import Restart_symbol from "../survey_components/restart_symbol";
//import bgImage from "../images/O_bty190_BG_REF_12x6_v3.1001.jpeg";

function Question_page({
  JSON_data,
  currentQuestion,
  setCurrentQuestion,
  selectedValue,
  submitResponse,
  clickedButton,
  setClickedButton,
  nodeRefTwo,
}) {
  const questionList = JSON_data.questionList;

  function clickButton(answer) {
    setClickedButton(answer);

    setTimeout(() => {
      setCurrentQuestion("transition");
      setTimeout(() => {
        submitResponse();
      }, 351);
    }, 200);
  }

  const imageMap = {
    CHIPMUNK: "/images/CHIPMUNK_HERO.png",
    "SNOW DROP": "/images/FLOWER_HERO_UPDATED.png",
    CLOUDS: "/images/CLOUD.png",
    HUMMINGBIRD: "/images/HUMMINGBIRD_HERO_TEST2.png",
    RACOON: "/images/RACCOON_HERO.png",
  };

  const imageStyles = {
    CLOUDS: {},
    HUMMINGBIRD: {
      marginBottom: "10%",
    },

    "SNOW DROP": {
      marginBottom: "7%",
    },

    RACOON: {
      marginBottom: "12%",
    },
    CHIPMUNK: {
      marginBottom: "14%",
      marginLeft: "8%",
    },
  };

  return (
    <>
      <div ref={nodeRefTwo} className="select_answer_container">
        <p className="select_answer_question">
          {questionList[selectedValue]?.question}
        </p>
        <div className="select_answer_center">
          <div
            className="select_answer_img"
            style={{
              backgroundImage: `url(${imageMap[selectedValue]})`,
              ...imageStyles[selectedValue],
            }}
          ></div>
          <div className="button_group">
            {questionList[selectedValue]?.answers?.map((answer) => (
              <button
                key={answer}
                className={
                  clickedButton === answer
                    ? "select_answer_button_click"
                    : "select_answer_button"
                }
                onClick={() => clickButton(answer)}
              >
                <p className="select_answer_button_text">{answer}</p>
              </button>
            ))}
          </div>
          <div className="select_answer_car_img"></div>
        </div>

        <p className="select_answer_invisible">
          {questionList[selectedValue]?.question}
        </p>
      </div>
    </>
  );
}

export default Question_page;
