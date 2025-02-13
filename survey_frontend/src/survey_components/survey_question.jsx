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

function Survey_question({ question }) {
  let question_styles = Loop_JSON({ JSON: question.children[0] });
  let selection_styles = Loop_JSON({ JSON: question.children[1] });
  let answer_confirmation = Loop_JSON({ JSON: question.children[2] });

  if (question.type === "tree") {
  }
  console.log("question", question[0]);
  return (
    <>
      {question.children.map((section) => {
        if (section.type === "question") {
          return <Text {...question_styles}>{section.content}</Text>;
        }
      })}
      {JSON.stringify(selection_styles)}
    </>
  );
}

export default Survey_question;
