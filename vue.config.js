module.exports = {
  indexPath: '../index.html',
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/gakki_vue_website/dist/'
    : './'
}