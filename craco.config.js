const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@service": path.resolve(__dirname, "src", "service"),
      "@utils": path.resolve(__dirname, "src", "utils"),
      "@components": path.resolve(__dirname, "src", "components"),
      "@atomicComponents": path.resolve(__dirname, "src", "atomicComponents"),
      "@assets": path.resolve(__dirname, "src", "assets"),
    },
  },
};
