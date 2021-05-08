// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class BlogItem extends Component {
  render() {
    const {blogData} = this.props
    const {id, imageUrl, topic, title, avatarUrl, author} = blogData
    return (
      <Link className="item-link" to={`/blogs/${id}`}>
        <div className="item-container">
          <img className="item-image" src={imageUrl} alt={`item${id}`} />

          <div className="item-info">
            <p className="item-topic">{topic}</p>

            <p className="item-title">{title}</p>
            <div className="author-info">
              <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem
