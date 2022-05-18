import React from 'react'
import './article.css'

const Article = ({ imgUrl, date, title }) => {
    return (
        <div className='template__blog-articles__article'>
            <div className='template__blog-articles__article-image'>
                <img src={imgUrl} alt="blog" />
            </div>
            <div className='template__blog-articles__article-content'>
                <div>
                    <p>{date}</p>
                    <h1>{title}</h1>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article
