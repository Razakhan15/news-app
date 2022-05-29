import React from 'react'

const NewsItem = (props) => {
  let { title, description, ImageUrl, newsUrl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card" >
        <img style={{ height: "10rem" }} src={ImageUrl ? ImageUrl : "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="badge rounded-pill bg-dark my-1">{source}</span>
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} || On {new Date(date).toGMTString()}</small></p>
          <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem