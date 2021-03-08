module.exports = {
  images: {
    domains: ['unsplash.com'],
  },
}

const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public'
    }
})
