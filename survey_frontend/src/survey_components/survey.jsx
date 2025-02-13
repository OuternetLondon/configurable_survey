import { useState } from "react";
import Loop_JSON from "./loop_JSON";
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
import Survey_question from "./survey_question";

function Survey({ survey }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [questionNumb, setQuestionNumb] = useState(0);
  let tree = [];
  console.log("survey in survey", survey);
  let chakra_object = Loop_JSON({ JSON: survey });
  return (
    <>
      {survey.format === "flex" && (
        <Flex {...chakra_object}>
          <Survey_question question={survey.children[questionNumb]}>
            {" "}
          </Survey_question>
        </Flex>
      )}
      <p>{JSON.stringify(chakra_object)}</p>
    </>
  );
}

export default Survey;
