import React, {Component} from 'react'

import {articleItem} from '../../api/article.js'
import Loader from '../../components/Loader'
import './styles.css'

class ArticleItem extends Component {
    state = {
        data: [],
        activeLoader: false,
        comments: []
    }

    componentWillMount () {
        this.setState({activeLoader: true})
    }

    componentDidMount () {
        var imgid = window.location.href.slice(-7) 
        var id = window.location.href.slice(-15) 
        id = id.slice(0,7)

        fetch (`https://api.imgur.com/3/image/${imgid}`,
            {
                method: 'GET',
                headers: {'Authorization': 'Client-ID 386ba9d7114e9e5'}
                
            }).then(res => {
                return res.json()
        }).then(response => {
            this.setState({
                data: response.data,
                activeLoader: false
            }) 
        })

        fetch (`https://api.imgur.com/3/gallery/${id}/comments`,
            {
                method: 'GET',
                headers: {'Authorization': 'Client-ID 386ba9d7114e9e5'}
                
            }).then(res => {
                return res.json()
        }).then(response => {
            this.setState({
                comments: response.data,
            }) 
        })
    }

    render () {
        const {data} = this.state
        const {comments} = this.state
        console.log(comments)
        if (data['type'] == "video/mp4") {
            return (

                <div className="Blocks">
                    <div className="Category"><p>Item: {data['type']} </p></div>

                    <div className="image">
                        <video controls>
                            <source src={data['link']} type="video/mp4"/>
                        </video>
                    </div>
                    <br/>
                    
                    <p>Comments: {comments.length}</p>
                    <br/>
                    {
                        comments.map((item) => {
                            if (item['comment']) {
                                return (
                                    <div className="comment">
                                        <div className="author">Author: {item['author']}</div>
                                        <p>{item['comment']}</p>
                                    </div>
                                )
                            } 
                        })                        
                    }
              
                </div>
            )
        } else  {
            return (
                <div className="Blocks">

                    <div className="Category"><p>Item: {data['type']} </p></div>
                    <div className="image">
                        <img src={data['link']} alt=""/>
                    </div>
                    <br/>
                    
                    <p>Comments: {comments.length}</p>
                    <br/>
                    {
                        comments.map((item) => {
                            if (item['comment']) {
                                return (
                                    <div className="comment">
                                        <div className="author">Author: {item['author']}</div>
                                        <p>{item['comment']}</p>
                                    </div>
                                )
                            } 
                        }) 
                    }
                    
                </div>
            )
        }
        
    }
}

export default ArticleItem
