import CleanWebpackPlugin from "clean-webpack-plugin";

const fontRegex = /\.(eot|woff|woff2|ttf|svg)$/;

export default {
  entry: "./src",
  output: {
    path: "./dist",
    filename: "roboto-buffer.js",
    libraryTarget: "umd"
  },
  module: {
    loaders: [{
      test: fontRegex,
      loader: "buffer-loader"
    }]
  },
  node: {
    Buffer: false
  },
  externals: (context, request, done) => {
    if (!request.startsWith("./") && !fontRegex.test(request)) return done(null, request);
    done();
  },
  plugins: [
    new CleanWebpackPlugin(["dist"])
  ]
};
