module.exports = {

  apps : [
    {
      name      : "my-money-app",
      script    : "./src/app.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    },
  ]  
}
