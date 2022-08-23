module.exports = (api, { type }) => {
    require(`./${type}`)(api)
}