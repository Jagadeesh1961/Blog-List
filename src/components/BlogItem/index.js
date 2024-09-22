import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog
  return (
    <li className="list-item">
      <div className="title-date-container">
        <h1 className="item-name">{title}</h1>
        <p className="item-date">{publishedDate}</p>
      </div>
      <p className="item-description">{description}</p>
    </li>
  )
}

export default BlogItem
