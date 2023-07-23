export default (blogs, n) => {
    const ids = Object.values(blogs).map(blog=>blog.id),
        min = Math.min(...ids),
        max = Math.max(...ids)
    const randomBlogs = [],
        randomIds = []
    for (let i = 1; i <= n; i++) {
        let randomId = Math.floor(Math.random() * (max - min + 1) + min)
        while (randomIds.includes(randomId)) {
            randomId = Math.floor(Math.random() * (max - min + 1) + min)
        }
        randomIds.push(randomId)
        randomBlogs.push(blogs[randomId])
    }
    return randomBlogs
}