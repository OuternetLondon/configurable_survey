import Loop_JSON from "../survey_components/loop_JSON";
import chroma from "chroma-js";
import useSetDefaultStyles from "../hooks/useSetDefaultStyles";
import { Children, use } from "react";
import "../index.css";
import { useState } from "react";
import { FaFontAwesome } from "react-icons/fa";
import Logo from "../survey_components/logo_svg";
import Restart_symbol from "../survey_components/restart_symbol";
function Final({ JSON_data, selectedValue, nodeRefThree }) {
  const questionList = JSON_data.questionList;
  let flexStyles = Loop_JSON({ JSON: JSON_data.mainContainer });
  let questionThreeStyle = JSON_data.questionThree;
  let questionTwoStyle = Loop_JSON({ JSON: JSON_data.questionTwo });
  //let buttonGroupStyle = Loop_JSON({ JSON: JSON_data.buttonGroup });
  let confirmButtonStyle = Loop_JSON({ JSON: JSON_data.confirmButton });
  let confirmText = Loop_JSON({ JSON: JSON_data.confirmButton.text });
  /*const imageMap = {
    CHIPMUNK: "/images/CHIPMUNK_HERO.png",
    "SNOW DROP": "/images/FLOWER_HERO.png",
    CLOUDS: "/images/CLOUD.png",
    HUMMINGBIRD: "/images/HUMMINGBIRD_02.png",
    RACOON: "/images/RACCOON_HERO.png",
  };*/
  const styleMap = {
    CHIPMUNK: { height: "45%", width: "650px" },
    "SNOW DROP": { height: "500px", width: "390px", left: "5%", bottom: "5%" },
    CLOUDS: { height: "400px", width: "100%", left: "0%", top: "5%" },
    HUMMINGBIRD: { height: "500px", width: "700px", bottom: "0%" },
    RACOON: { height: "400px", width: "400px" },
  };
  return (
    <>
      <div
        ref={nodeRefThree}
        style={{
          display: "grid",
          gridTemplateRows: "1fr 2fr",
          height: "80vh",
          width: "90vw",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              ...questionThreeStyle,
              margin: "0px",
              padding: "0px",
              fontSize: "14vw",
              whiteSpace: "nowrap",
            }}
          >
            {questionList["FINAL"]?.question}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              backgroundImage:
                "url(/images/CAR_HERO_UPDATED_SHADOW_RESIZE3.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "94%",
              width: "80%",
              marginRight: "2%",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
export default Final;
