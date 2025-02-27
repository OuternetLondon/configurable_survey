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
  let flexStyles = JSON_data.mainContainer;
  let questionTwoStyle = JSON_data.questionTwo;
  let buttonGroupStyle = JSON_data.q2_buttonGroup;
  let buttonStyle = JSON_data.q2_button;
  let buttonClick = JSON_data.q2_button.selectedStyle;
  let buttonTextStyle = JSON_data.q2_button.text;

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
    CLOUDS: {
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      //contain= dont need to specify height and width seperate
      height: "22vw",
      width: "22vw",
    },
    HUMMINGBIRD: {
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      //contain= dont need to specify height and width seperate
      height: "22vw",
      width: "22vw",
      marginBottom: "10%",
    },

    "SNOW DROP": {
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      //contain= dont need to specify height and width seperate
      height: "22vw",
      width: "22vw",
      marginBottom: "7%",
    },

    RACOON: {
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      //contain= dont need to specify height and width seperate
      height: "22vw",
      width: "22vw",
      marginBottom: "10%",
    },
    CHIPMUNK: {
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      //contain= dont need to specify height and width seperate
      height: "22vw",
      width: "22vw",
      marginBottom: "14%",
    },
  };

  /*let largeStyle = {};
  questionList[selectedValue].answers.forEach((answer) => {
    if (answer.length >= 18) {
      largeStyle = {
        //    padding: "12px 40px",
        lineHeight: "1.2",
      };
    }
  });*/

  return (
    <>
      <div ref={nodeRefTwo} className="select_answer_container">
        <p style={{ ...questionTwoStyle }}>
          {questionList[selectedValue]?.question}
        </p>
        <div
          /*  style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}*/
          style={{
            display: "grid",
            //gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",

            gridTemplateRows: "1fr ",
            width: "100%",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${imageMap[selectedValue]})`,
              ...imageStyles[selectedValue],
            }}
          ></div>
          <div style={{ ...buttonGroupStyle }}>
            {questionList[selectedValue]?.answers?.map((answer) => (
              <button
                key={answer}
                style={{
                  ...(clickedButton === answer ? buttonClick : buttonStyle),
                }}
                onClick={() => clickButton(answer)}
              >
                <p
                  style={{
                    ...buttonTextStyle,
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    textAlign: "center",
                  }}
                >
                  {answer}
                </p>
              </button>
            ))}
          </div>
          <div
            style={{
              backgroundImage:
                "url(/images/CAR_HERO_UPDATED_SHADOW_RESIZE3.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
              width: "500px",

              marginRight: "7%",
            }}
          ></div>
        </div>

        <p style={{ ...questionTwoStyle, visibility: "hidden" }}>
          {questionList[selectedValue]?.question}
        </p>
      </div>
    </>
  );
}

export default Question_page;
