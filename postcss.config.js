module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'page-banner': "url('/images/page-banner.png')",
        'cta-banner': "url('/images/cta-bg.png')",
        footerBg: "url('/images/footer-bg.png')",
        megaBg: "url('/images/mega-menu-bg-1.jpg')",
      },
      boxShadow: {
        sh: '0px 0px 25px -15px rgb(105 105 105 / 50%)',
        shl: '0px -2px 20px -14px rgb(105 105 105 / 50%)',
        inpShadow: 'inset 0 0 0 1px rgb(0 0 0 / 10%)',
        teamShadow: '0px 0px 20px -5px rgb(0 0 0 / 10%) ',
      },
    },
  },
  plugins: [],
};
