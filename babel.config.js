module.exports = function (api) {
  api.cache(true);
  return {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
  //plugins: ["nativewind/babel"],
  };
};
