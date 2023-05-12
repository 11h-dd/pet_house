var position = new Promise(function (resolve, reject) {
    window.AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new window.AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
            // 查询成功，result即为当前所在城市信息
            if (status === 'complete' && result.info === 'OK') {
                resolve(result.city)
            } else {
                console.log('定位城市失败')
                reject('定位失败')
            }
        })
    })
})
const getCity = () => {
    return position
}
export default getCity
