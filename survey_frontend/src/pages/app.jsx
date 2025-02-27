import chroma from "chroma-js";
import useSetDefaultStyles from "../hooks/useSetDefaultStyles";
import useMobileFriendly from "../hooks/useMobileFriendly";
import { Children, use, useEffect, useRef } from "react";
import "../index.css";
import { useState } from "react";
import Logo from "../survey_components/logo_svg";
import Restart_symbol from "../survey_components/restart_symbol";
import Select_metaphor from "./Select_metaphor";
import Question_page from "./Question_page";
import Final from "./final_page";
import { CSSTransition } from "react-transition-group";

function App() {
  const [selectedValue, setSelectedValue] = useState("");
  const [clickedButton, setClickedButton] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState("questionOne");

  useEffect(() => {
    console.log("selectedValue", selectedValue);
    console.log("clickedButton", clickedButton);
    console.log("currentQuestion", currentQuestion);
  }, [selectedValue, clickedButton, currentQuestion]);

  const nodeRefOne = useRef(null);
  const nodeRefTwo = useRef(null);
  const nodeRefThree = useRef(null);

  //useMobileFriendly();

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
      image: "/images/BACKGROUND_SKODA_3.png",
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
      minWidth: "375px",
      borderRadius: "100px",
      borderWidth: "3px",
      color: "white",
      background: "transparent",
      backdropFilter: "blur(20px)",
      lineHeight: "1.15",
      selectedStyle: {
        transform: "scale(1.2)",
        opacity: 0.85,
        transition: "transform 0.3s ease-out",
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
        question: "What is the link between a Chipmunk and a Skoda Elroq?",
        answers: ["Teeth", "Cheeks", "Speed", "Paws"],
      },
      RACOON: {
        question: "What is the link between a Racoon and a Skoda Elroq?",
        answers: ["Fur", "Storage", "Sight", "Tail"],
      },
      CLOUDS: {
        question: "What is the link between a Cloud and a Skoda Elroq?",
        answers: ["Wetness", "Weight", "Height", "Inspiration"],
      },
      "SNOW DROP": {
        question: "What is the link between a Snow Drop and a Skoda Elroq?",
        answers: ["Pollen", "Petals", "Speed", "Roots"],
      },
      HUMMINGBIRD: {
        question: "What is the link between a Hummingbird and a Skoda Elroq?",
        answers: ["Speed", "Beak", "Feathers"],
      },
      FINAL: {
        question: "Look up!",
        answers: [""],
      },
    },
  };

  const metaphorValues = {};

  JSON_data.questionList.questionOne?.answers.forEach((answer, index) => {
    metaphorValues[answer] = JSON_data.questionList.questionOne?.values[index];
  });

  console.log("metaphorValues", metaphorValues);

  const sendData = async (selection) => {
    const response = await fetch(
      `http://${document.location.host}/survey_data`,
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

  function submitResponse() {
    if (metaphorValues.hasOwnProperty(selectedValue)) {
      sendData(metaphorValues[selectedValue]);
      setCurrentQuestion("FINAL");

      return;
    }
  }

  function restart() {
    setCurrentQuestion("transition");
    setTimeout(() => {
      setCurrentQuestion("questionOne");
      setSelectedValue("");
      setClickedButton("");
    }, 350);
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(/images/BACKGROUND_SKODA_3.png)`,
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
            bottom: "2%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            width: "100%",
          }}
        >
          <Logo
            color={added_colors["skoda-light"]}
            styles={{ marginTop: "20px", marginLeft: "20px" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "2%",
            right: "0px",
          }}
          onClick={() => restart()}
        >
          <Restart_symbol />
        </div>
        <CSSTransition
          in={currentQuestion === "questionOne"}
          timeout={350}
          classNames="fade"
          unmountOnExit
          nodeRef={nodeRefOne}
        >
          <Select_metaphor
            ref={nodeRefOne}
            nodeRefOne={nodeRefOne}
            JSON_data={JSON_data}
            currentQuestion={currentQuestion}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setCurrentQuestion={setCurrentQuestion}
            submitResponse={submitResponse}
            clickedButton={clickedButton}
            setClickedButton={setClickedButton}
          ></Select_metaphor>
        </CSSTransition>
        <CSSTransition
          in={currentQuestion === "questionTwo"}
          timeout={350}
          classNames="fade"
          unmountOnExit
          nodeRef={nodeRefTwo}
        >
          <Question_page
            ref={nodeRefTwo}
            nodeRefTwo={nodeRefTwo}
            JSON_data={JSON_data}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            selectedValue={selectedValue}
            submitResponse={submitResponse}
            clickedButton={clickedButton}
            setClickedButton={setClickedButton}
          ></Question_page>
        </CSSTransition>

        <CSSTransition
          in={currentQuestion === "FINAL"}
          timeout={350}
          classNames="fade"
          unmountOnExit
          nodeRef={nodeRefThree}
        >
          <Final
            ref={nodeRefThree}
            nodeRefThree={nodeRefThree}
            JSON_data={JSON_data}
            currentQuestion={currentQuestion}
            selectedValue={selectedValue}
            submitResponse={submitResponse}
          ></Final>
        </CSSTransition>
      </div>
    </>
  );
}

export default App;
