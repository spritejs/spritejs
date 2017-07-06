
module.exports = {
  upload(file) {
    try {
      const qcdn = require('@q/qcdn')
      return qcdn.upload(file, {
        https: true,
        keepName: true
      })
    } catch (ex) {
      return Promise.reject(new Error('no cdn uploader specified!'))
    }
  }
}
