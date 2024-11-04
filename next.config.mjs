import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

export default withNextra({
  output: 'export',
  basePath: '',
  output: 'export',
  trailingSlash: true,
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  assetPrefix: 'http://localhost:3000',

  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
})