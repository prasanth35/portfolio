module.exports = {
  apps : [{
    name : 'Portfolio',
    script: 'yarn',
    args : 'vite',
    env_production : {
      NODE_ENV: "prod"
    },
    error_file : "./pm2-error.log",
    out_file : "./pm2-out.log",
  }]
};
