import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="list-container">
      {blogsList.map(eachBlog => (
        <BlogItem blog={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
