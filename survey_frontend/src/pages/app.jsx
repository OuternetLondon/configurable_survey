import Loop_JSON from "../survey_components/loop_JSON";
import chroma from "chroma-js";
import useSetDefaultStyles from "../hooks/useSetDefaultStyles";
import useMobileFriendly from "../hooks/useMobileFriendly";
import { Children, use } from "react";
import "../index.css";
import { useState } from "react";
import Logo from "../survey_components/logo_svg";
import Restart_symbol from "../survey_components/restart_symbol";
import Select_metaphor from "./Select_metaphor";
import Question_page from "./Question_page";
import Final from "./final_page";

function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [clickedButton, setClickedButton] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState("questionOne");
  const [finalAnswer, setFinalAnswer] = useState(false);

  useMobileFriendly();
  console.log("selectedValue", selectedValue);
  console.log("currentQuestion", currentQuestion);
  let added_colors = {
    "skoda-light": "#9AF7B4",
    "skoda-dark": "#1B392F",
  };
  const JSON_data = {
    mainContainer: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      image: "/images/skoda_background.png",
    },
    questionOne: {
      fontSize: "60px",
      color: "white",
      fontFamily: "skoda_bold, sans-serif",
      textAlign: "center",
      width: "100%",
      marginBottom: "120px",
    },
    questionTwo: {
      fontSize: "40px",
      color: "white",
      fontFamily: "skoda_bold, sans-serif",
      textAlign: "center",
    },
    questionThree: {
      color: "white",
      fontFamily: "skoda_bold, sans-serif",
      textAlign: "center",
    },
    q1_buttonGroup: {
      padding_x_axis: "50px",
      contentStructure: "space-evenly",
      width: "100%",
      gap: "50px",
      direction: "horizontal",
      display: "flex",
    },
    q2_buttonGroup: {
      display: "flex",
      gap: "30px",
      flexDirection: "column",
    },
    q1_button: {
      height: "200px",
      width: "200px",
      selectedStyle: {
        backgroundColor: "skoda-light-500",
        outlineColor: "blue-500",
        outlineStyle: "solid",
        outlineWidth: "7px",
        size: "xl",
        height: "200px",
        width: "200px",
        borderRadius: "30px",
      },
      text: {
        fontSize: "3xl",
        fontStyle: "skoda_bold, sans-serif",
      },
    },
    q2_button: {
      borderColor: added_colors["skoda-light"],
      borderStyle: "solid",
      padding: "10px 40px",
      maxWidth: "500px",
      minWidth: "380px",
      borderRadius: "100px",
      borderWidth: "3px",
      color: "white",
      background: "transparent",
      backdropFilter: "blur(20px)",
      lineHeight: "1.15",
      selectedStyle: {
        transform: "scale(1.2)",
        opacity: 0.85,
        transition: "transform 0.5s ease-in-out",
        backgroundColor: "#9AF7B4",
        color: added_colors["skoda-dark"],
        borderColor: added_colors["skoda-dark"],
        borderStyle: "solid",
        lineHeight: "1.15",
        padding: "10px 40px",
        maxWidth: "600px",
        minWidth: "350px",
        borderRadius: "100px",
        borderWidth: "3px",
        fontSize: "40px",
      },
      text: {
        fontSize: "40px",
        fontFamily: "skoda_bold, sans-serif",
        padding: "0px",
        margin: "0px",
      },
    },
    confirmButton: {
      borderColor: "white",
      width: "15%",
      padding_y_axis: 30,
      borderRadius: "100px",
      backgroundColor: "skoda-light-500",
      text: {
        fontStyle: "skoda_bold, sans-serif",
        fontSize: "2xl",
        color: "black",
      },
    },
    questionList: {
      questionOne: {
        question: "Select to play",
        answers: ["CHIPMUNK", "RACOON", "CLOUDS", "SNOW DROP", "HUMMINGBIRD"],
        values: ["Chipmunk", "Racoon", "Clouds", "SnowDrop", "Hummingbird"],
      },
      CHIPMUNK: {
        question: "Chipmunk question",
        answers: [
          "Chipmunk answer 1",
          "Chipmunk answer 2",
          "Chipmunk answer 3",
        ],
      },
      RACOON: {
        question: "What is the link between a Racoon and a Skoda Elroq?",
        answers: ["Fur", "Storage", "Sight", "Tail"],
      },
      CLOUDS: {
        question: "Clouds question",
        answers: ["Clouds answer 1", "Clouds answer 2", "Clouds answer 3"],
      },
      "SNOW DROP": {
        question: "Snow Drop question",
        answers: [
          "Snow Drop answer 1",
          "Snow Drop answer 2",
          "Snow Drop answer 3",
        ],
      },
      HUMMINGBIRD: {
        question: "Hummingbird question",
        answers: [
          "Hummingbird Answer 1",
          "Hummingbird Answer 2",
          "Hummingbird Answer 3",
        ],
      },
      FINAL: {
        question: "Look up!",
        answers: [""],
      },
    },
  };

  const sendData = async (selection) => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/survey_data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selection }),
      }
    );
    const result = await response.json();
    console.log("result", result);
  };

  const metaphorResponse = new Map();
  for (let i = 0; i < JSON_data.questionList.questionOne.answers.length; i++) {
    metaphorResponse.set(
      JSON_data.questionList.questionOne.answers[i],
      JSON_data.questionList.questionOne.values[i]
    );
  }

  function submitResponse() {
    if (metaphorResponse.has(selectedValue)) {
      sendData(metaphorResponse.get(selectedValue));
      setCurrentQuestion("FINAL");
      // setValueSelected(false);
      return;
    }
  }

  function restart() {
    setCurrentQuestion("questionOne");
    setSelectedValue("");
    setClickedButton("");
    // setValueSelected("");
    setFinalAnswer(false);
  }

  let mainContainer = Loop_JSON({ JSON: JSON_data.mainContainer });

  return (
    <>
      <div
        style={{
          backgroundImage: `url(/images/skoda_background.png)`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            width: "100%",
          }}
        >
          <Logo
            color={"#9AF7B4"}
            styles={{ marginTop: "20px", marginLeft: "20px" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            color: "var(--skoda-logo-400)",
          }}
          onClick={() => restart()}
        >
          <Restart_symbol />
        </div>
        {currentQuestion === "questionOne" && (
          <Select_metaphor
            JSON_data={JSON_data}
            currentQuestion={currentQuestion}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setCurrentQuestion={setCurrentQuestion}
            submitResponse={submitResponse}
            clickedButton={clickedButton}
            setClickedButton={setClickedButton}
          ></Select_metaphor>
        )}
        {currentQuestion !== "questionOne" && currentQuestion !== "FINAL" && (
          <Question_page
            JSON_data={JSON_data}
            currentQuestion={currentQuestion}
            selectedValue={selectedValue}
            submitResponse={submitResponse}
            clickedButton={clickedButton}
            setClickedButton={setClickedButton}
          ></Question_page>
        )}
        {currentQuestion === "FINAL" && (
          <Final
            JSON_data={JSON_data}
            currentQuestion={currentQuestion}
            selectedValue={selectedValue}
            submitResponse={submitResponse}
          ></Final>
        )}
      </div>
    </>
  );
}

export default App;
