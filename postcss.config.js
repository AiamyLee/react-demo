// tailwinds 的配置文件
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
};
