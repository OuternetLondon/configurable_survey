import { chakra } from "@chakra-ui/react";

function Loop_JSON({ JSON }) {
  let chakra_object = {};

  if (JSON.height) {
    chakra_object.h = JSON.height;
  }
  if (JSON.width) {
    chakra_object.w = JSON.width;
  }
  if (JSON.direction) {
    if (JSON.direction === "horizontal") {
      chakra_object.direction = "row";
    }
    if (JSON.direction === "vertical") {
      chakra_object.direction = "column";
    }
  }
  if (JSON.contentStructure) {
    chakra_object.justifyContent = JSON.contentStructure;
  }
  if (JSON.itemsCentered) {
    chakra_object.alignItems = "center";
  }
  if (JSON.image) {
    chakra_object.bgImage = `url(${JSON.image})`;
    chakra_object.bgSize = "cover";
    chakra_object.backgroundPosition = "center";
  }
  if (JSON.fontSize) {
    chakra_object.fontSize = JSON.fontSize;
  }
  if (JSON.visibility) {
    chakra_object.visibility = JSON.visibility;
  }
  if (JSON.color) {
    chakra_object.color = JSON.color;
  }
  if (JSON.fontStyle) {
    chakra_object.fontFamily = JSON.fontStyle;
  }
  if (JSON.width) {
    chakra_object.w = JSON.width;
  }
  if (JSON.gap) {
    chakra_object.gap = JSON.gap;
  }
  if (JSON.padding_y_axis) {
    chakra_object.py = JSON.padding_y_axis;
  }
  if (JSON.padding_x_axis) {
    chakra_object.px = JSON.padding_x_axis;
  }
  if (JSON.rounded) {
    chakra_object.borderRadius = "full";
  }
  if (JSON.borderStyle === "solid") {
    chakra_object.borderStyle = "solid";
    chakra_object.borderWidth = JSON.borderWidth;
    chakra_object.borderColor = `var(--${JSON.borderColor})`;
  }
  if (JSON.backgroundColor) {
    chakra_object.bg = `var(--${JSON.backgroundColor})`;
  }
  return chakra_object;
}

export default Loop_JSON;
