import React, {Component} from 'react'

import './styles.css'
import {Link} from 'react-router-dom'
import Loader from '../../components/Loader'
import InfiniteScroll from 'react-infinite-scroller'

class BlogList extends Component {
    state = {
        data: [],
        activeLoader: false,
        category: 'top',
        hasMoreItems: true
    }
    componentWillMount () {
        this.setState({activeLoader: true})
    }

    loadItems(page) {
        var self = this;

        fetch (`https://api.imgur.com/3/gallery/hot/top/day/0?showViral=true&mature=false&album_previews=true`,
            {
                method: 'GET',
                headers: {'Authorization': 'Client-ID 386ba9d7114e9e5'}
            }).then(res => {
                return res.json()
        }).then(response => {
            console.log(response)
            var datas = this.state.data
            response.data.map((i) => {
                datas.push(i)
            })
            this.setState({
                data: datas,
                activeLoader: false
            }) 
            
        })
    }
    
    render () {
        const loader = <div className="loader">Loading ...</div>

        console.log(this.state.data)
        var items = []
        
            this.state.data.map((item, index) => {
                if (item['images'] && item['images'][0]['type'] == "video/mp4") {
                    items.push (
                        <Link
                            to={`/${item.id}/${item.cover}`}
                            className="ItemBlock"
                            key={index}
                        >
                            <div className="crop">
                                <video>
                                    <source src={item['images'][0]['link']} type="video/mp4"/>
                                </video>
                                
                            </div>
                            
                            <div className="TextBlock">
                                {item['title']}
                            </div>
                            
                        </Link>
                    )
                } else if (item['images'] && item['images'][0]['link'] ) {
                    items.push (
                        <Link
                            to={`/${item.id}/${item.cover}`}
                            className="ItemBlock"
                            key={index}
                        >
                            <div className="crop">
                                <img src={item['images'][0]['link']} alt=""/>
                            </div>
                            
                            <div className="TextBlock">
                                {item['title']}
                            </div>
                            
                        </Link>
                    )
                } else if (item['type'] == "video/mp4" ) {
                    items.push (
                        <Link
                            to={`/${item.id}/${item.id}`}
                            className="ItemBlock"
                            key={index}
                        >
                            <div className="crop">
                                <video>
                                    <source src={item['link']} type="video/mp4"/>
                                </video>
                            </div>
                            
                            <div className="TextBlock">
                                {item['title']}
                            </div>
                            
                        </Link>
                    )
                } else {
                    items.push (
                        <Link
                            to={`/${item.id}/${item.id}`}
                            className="ItemBlock"
                            key={index}
                        >
                            <div className="crop">
                                <img src={item['link']} alt=""/>
                            </div>
                            
                            <div className="TextBlock">
                                {item['title']}
                            </div>
                            
                        </Link>
                    )
                }
            })
        

        return (
            <div className="BlogList">
                <div className="Category"><p>Current category: {this.state.category}</p></div>
                
                <div className="ListBlocks">

                    {this.state.activeLoader && <Loader/>}
                    
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadItems.bind(this)}
                        hasMore={this.state.hasMoreItems}
                    >
                        {items} 
                    </InfiniteScroll> 
                        
                    
                </div>
            </div>
        )
    }
}

export default BlogList
