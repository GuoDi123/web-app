const api = require('../api')
// 获取电影
const getFilmsList = () => {
    return api.request({ url: '/ajax/movieOnInfoList?token=' })
}

module.exports = {
    getFilmsList
}
