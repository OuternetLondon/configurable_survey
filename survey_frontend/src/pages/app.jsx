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
      <div className="main_container">
        <div className="logo_wrapper">
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
