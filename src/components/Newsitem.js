import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let {title, description, imgurl, newsurl, date, source} = this.props;
        return (
            <div className='container '>
                
                <div className="card ">
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '80%', zIndex:"1"}}>
                {source}
                <span class="visually-hidden"></span>
                </span>
                <img src={!imgurl?"https://cdn.ndtv.com/common/images/ogndtv.png": imgurl} className="card-img-top" alt="img"/>
                <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p class="card-text"><small class="text-danger">Last updated at {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} target="_blank" className="btn btn-warning" rel="noreferrer" >Read more</a>
                </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
