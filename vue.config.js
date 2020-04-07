module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].app_name = process.env.APP_NAME;
        args[0].app_version = process.env.APP_VERSION;
        args[0].app_theme_color = process.env.APP_THEME_COLOR;
        return args;
      });
  }
};
