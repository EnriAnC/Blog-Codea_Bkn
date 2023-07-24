export default (blogs, n) => {

    const filter = Object.values(blogs).map(({likes, id})=>([likes, id])),
        sortedBlogs = filter.sort();
    const choosedBlogs = [],
        ids = []
    
    const chargeChoosedBlogs = function() {
        for (let i = 1; i <= n; i++) {
            const id = (sortedBlogs.pop())[1]
            ids.push(id)
            choosedBlogs.push(blogs[id])
        }
    }

    return function() {
        if (choosedBlogs.length > 0) return choosedBlogs
        chargeChoosedBlogs()
        return choosedBlogs
    }()

}