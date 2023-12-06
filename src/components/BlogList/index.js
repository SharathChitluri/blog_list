import BlogItem from '../BlogItem'

// Write your JS code here
const BlogList = props => {
  const {blogsList} = props

  return (
    <ul>
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
