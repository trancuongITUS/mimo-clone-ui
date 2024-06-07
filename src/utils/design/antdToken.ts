import { ThemeConfig, theme } from "antd";

const antdToken: ThemeConfig = {
  token: {
    colorPrimary: "#885bde",
    colorBgContainer: "rgb(141 96 226)",
    colorBgElevated: "#333661",
  },
  components: {
    Modal: {
      contentBg: "#242746",
      headerBg: "#242746",
    },
    Collapse: {
      colorBgContainer: "#333661",
    },
  },
  algorithm: theme.darkAlgorithm,
};

export default antdToken;
