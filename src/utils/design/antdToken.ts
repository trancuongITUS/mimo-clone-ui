import { ThemeConfig, theme } from "antd";

const antdToken: ThemeConfig = {
  token: {},
  components: {
    Modal: {
      contentBg: "#242746",
      headerBg: "#242746",
    },
  },
  algorithm: theme.darkAlgorithm,
};

export default antdToken;
