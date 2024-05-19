import { ThemeConfig, theme } from "antd";

const antdToken: ThemeConfig = {
  token: {
    colorPrimary: "#885bde",
  },
  components: {
    Modal: {
      contentBg: "#242746",
      headerBg: "#242746",
    },
  },
  algorithm: theme.darkAlgorithm,
};

export default antdToken;
