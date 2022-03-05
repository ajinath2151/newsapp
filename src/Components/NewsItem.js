import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="my-4">
        <div className="card">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
            {/* <span className="visually-hidden">unread messages</span> */}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">

          {/* used for style stickey */}
          {/* <div className="sticky"> */}
            {!this.title?title:"Untitled"}...
            <h6>
              <span className="badge bg-success my-1"> new</span>
            </h6>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              {/* <small className="text-muted"> */}
              <small className="text-danger">
                {" "}
                Author by : {!author ? "Unknown" : author} , On Date :{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="#" className="btn btn-sm btn-dark">
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
