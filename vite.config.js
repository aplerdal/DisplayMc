// vite.config.js
export default {
    // config options
    base: '/displaymc',
    build: {
        minify: 'esbuild'
    },
    server :{
        fs :{
            strict : "true"
        }
    }
  }