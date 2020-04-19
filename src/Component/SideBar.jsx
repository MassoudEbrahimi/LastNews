import React, { Component } from 'react'
import { getPosts } from "../Service/postService"

class Sidebar extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        const { data } = await getPosts();
        this.setState({ posts: data.news })
    }
    render() {
        const { posts } = this.state
        return (
            <nav className="col-md-3 d-none d-md-block bg-light sidebar">
                <div className="header">
                    <span className="fa fa-newspaper-o m-2" /><span className="p-1 text-danger">اخبارها </span>
                </div>
                <div className="sidebar-sticky">
                    {posts.map(post => (
                        <ul className="nav flex-column" key={post.id} >
                            <li className="nav-item" >
                                <img src={post.image_url} alt="" className="float-right img-fluid img-thumbnail m-1 " style={{ width: "75px", height: "75px" }} />
                                <a href="./" className="nav-link content text-justify p-1">{post.body}</a>
                            </li>
                            <hr className="shadow-lg m-1" />
                        </ul>
                    ))}
                </div>
            </nav>
        )
    }
}
export default Sidebar