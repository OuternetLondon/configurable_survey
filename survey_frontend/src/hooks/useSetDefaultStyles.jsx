import chroma from "chroma-js";

const useSetDefaultStyles = (JSON) => {
  //set colors
  const colors = JSON.default_colors;
  const darken = [
    { darken: 0.5, end: 600 },
    { darken: 1.5, end: 700 },
    { darken: 2.5, end: 800 },
    { darken: 3.5, end: 900 },
    { darken: 4.5, end: 950 },
  ];
  const lighten = [
    { lighten: 0.5, end: 400 },
    { lighten: 1, end: 300 },
    { lighten: 2, end: 200 },
    { lighten: 2.5, end: 100 },
    { lighten: 3, end: 50 },
  ];

  colors.forEach((color) => {
    document.documentElement.style.setProperty(
      `--${color.color}-500`,
      `${color.hex}`
    );
    darken.forEach((darken) => {
      const chroma_color = chroma(color.hex).darken(darken.darken).hex();
      document.documentElement.style.setProperty(
        `--${color.color}-${darken.end}`,
        `${chroma_color}`
      );
    });
    lighten.forEach((lighten) => {
      const chroma_color = chroma(color.hex).brighten(lighten.lighten).hex();
      document.documentElement.style.setProperty(
        `--${color.color}-${lighten.end}`,
        `${chroma_color}`
      );
    });
  });

  return;
};

export default useSetDefaultStyles;
