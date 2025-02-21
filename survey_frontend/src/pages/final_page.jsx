import {
  Button,
  HStack,
  VStack,
  Stack,
  Input,
  ButtonGroup,
  Center,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import Loop_JSON from "@/survey_components/loop_JSON";
import chroma from "chroma-js";
import useSetDefaultStyles from "../hooks/useSetDefaultStyles";
import { Children, use } from "react";
import "../index.css";
import { useState } from "react";
import Loop_components from "@/survey_components/loop_components";
import { FaFontAwesome } from "react-icons/fa";
import Logo from "../survey_components/logo_svg";
import Restart_symbol from "@/survey_components/restart_symbol";

function Final({ JSON_data, selectedValue }) {
  const questionList = JSON_data.questionList;
  let flexStyles = Loop_JSON({ JSON: JSON_data.mainContainer });
  let questionThreeStyle = JSON_data.questionThree;
  let questionTwoStyle = Loop_JSON({ JSON: JSON_data.questionTwo });
  //let buttonGroupStyle = Loop_JSON({ JSON: JSON_data.buttonGroup });

  let confirmButtonStyle = Loop_JSON({ JSON: JSON_data.confirmButton });
  let confirmText = Loop_JSON({ JSON: JSON_data.confirmButton.text });

  const imageMap = {
    CHIPMUNK: "/images/CHIPMUNK_HERO_2.png",
    "SNOW DROP": "/images/FLOWER_HERO.png",
    CLOUDS: "/images/CLOUD_HERO_2.png",
    HUMMINGBIRD: "/images/HUMMINGBIRD_02.png",
    RACOON: "/images/RACCOON_HERO.png",
  };

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
        style={{
          display: "grid",
          gridTemplateRows: "1fr 2fr",
          height: "80vh",
          width: "80vw",
          marginBottom: "60px",
        }}
      >
        <p style={{ ...questionThreeStyle, fontSize: "200px", width: "100%" }}>
          {questionList["FINAL"].question}
        </p>
        <div
          style={{
            backgroundImage: "url(/images/CAR_HERO.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            marginLeft: "70px",
          }}
        ></div>
      </div>
    </>
  );
}

export default Final;
