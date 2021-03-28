module.exports = {
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: ['./index.html', './src/**/*.svelte'],
      options: {
        defaultExtractor: content => [
          ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
          ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
        ],
      },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {
        ringColor: ['hover'],
        ringOffsetColor: ['hover'],
        ringOffsetWidth: ['hover'],
        ringOpacity: ['hover'],
        ringWidth: ['hover'],
        margin: ['last', 'first']
      },
    },
    plugins: [],
  }
  