export default {
  title: 'MUI Paginations',
  codeSandbox: false,
  typescript: true,
  menu: ['Getting Started', 'Components'],
  indexHtml: {
    production: 'docz/index.html',
  }[process.env.NODE_ENV],
  themeConfig: {
    showPlaygroundEditor: true,
  },
  filterComponents: files => files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },
};
