module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Nunito Sans', 'sans-serif'],
      body: ['EB Garamond', 'sans-serif'],
    },
    extend: {
      colors: {
        darkBlue: '#1a0236',
        blue: '#122df3',
        purple: '#5f00d0',
        orange: '#ffbc09',
        green: '#00f9cd',
        lightGrey: '#eeeeee',
        grey: '#cccccc',
        black: '#171717',
        yellow: '#FFCC00'
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}
