import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$grey8",
  padding: "1rem",
});

export const ContainerLogin = styled("div", {
  width: "330px",
  height: "max-content",
  padding: "20px",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  backgroundColor: "$white",
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  "form > button": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 28px",
    background: "#4529E6",
    border: "none",
    color: "white",
    borderRadius: "0.5rem",
  },

  input: {
    height: "40px",
  },

  ".containerRegister": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "20px",
  },

  ".containerRegister > button": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 28px",
    background: "transparent",
    border: "1px solid black",
    color: "black",
    borderRadius: "0.5rem",
  },

  "button:hover": {
    opacity: ".7",
  },
});
