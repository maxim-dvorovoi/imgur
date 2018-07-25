export const articleItem = (id) => {
    return fetch(
        `https://api.imgur.com/3/gallery/hot/viral/0.json`,
        {
            method: 'GET'
        }
    )
}
