module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '475px',
        '3xl': '1920px',
      },
      fontSize: {
        '2xs': ['0.625rem', '0.875rem'],
      },
      minHeight: {
        'inner-screen': 'calc(var(--vh, 1vh) * 100)',
      },
      colors: {
        base: {
          bg: 'var(--base-backgroud-color)',
          text: 'var(--base-text-color)',
          border: 'var(--base-border-color)',
        },
        th: {
          text: 'var(--th-text-color)',
          bg: 'var(--th-bg-color)',
          border: 'var(--th-border-color)',
          hovered: 'var(--th-hovered-color)',
          selected: 'var(--th-selected-color)',
        },
        td: {
          text: 'var(--td-text-color)',
          odd: 'var(--td-odd-color)',
          even: 'var(--td-even-color)',
          border: 'var(--td-border-color)',
          hovered: 'var(--td-hovered-color)',
          selected: 'var(--td-selected-color)',
        },
      },
    },
  },
  plugins: [],
};
