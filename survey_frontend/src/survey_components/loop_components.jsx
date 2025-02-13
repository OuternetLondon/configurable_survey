import Survey from "./survey";

function Loop_components(components) {
  return (
    <>
      {components.map((component) => {
        if (component.type === "box") {
          return null;
        }
        if (component.type === "survey") {
          console.log("survey");
          return <Survey survey={component} key={component.name}></Survey>;
        }
        return null;
      })}
    </>
  );
}

export default Loop_components;
