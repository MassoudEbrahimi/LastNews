import React from 'react'
import { paginate } from '../Utils/paginate'
import Pagination from './Pagination'
// import getPostLinks from '../Service/fakeposts'
import { getPosts } from '../Service/postService'
// import Likepost from './LikePost'

class Posts extends React.Component {
    state = {
        posts: [],
        currentpage: 1,
        pagesize: 5
    }
    async componentDidMount() {
        const { data } = await getPosts();
        console.log(data.news)
        this.setState({ posts: data.news })
    }
    getpagedata() {
        const { posts: allposts, currentpage, pagesize } = this.state
        const posts = paginate(allposts, currentpage, pagesize)
        return {
            totalcount: allposts.length,
            data: posts
        }
    }
    onHandlePage = (page) => {
        this.setState({ currentpage: page })
    }

    render() {
        const { pagesize, currentpage } = this.state
        const { data, totalcount } = this.getpagedata()
        return (
            <React.Fragment>
                <i id="top-page"></i>
                {data.map(post => (
                    <div className="container-fluid" key={post.id}>
                        <div className="card shadow-lg bg-light m-1">
                            <article className="p-3">
                                <div className="card-header mb-2" >
                                    <h3 className="card-title">
                                        <a href="./">{post.title}</a>
                                    </h3>
                                    <span className="card-subtitle">
                                        <span className="fa fa-calendar m-1" aria-hidden="true" />
                                        {post.create_date}
                                        <p className="d-inline ml-4 ">
                                            نوع خبر :
                                            <span className={post.categoryname===null ? "m-1 p-2": " m-1 bg-warning rounded-pill p-2"}>
                                                {post.categoryname}
                                            </span>
                                        </p>
                                    </span>

                                    <img src={post.image_url} alt="" className="card-img mt-3" />
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-justify">
                                        {post.body}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <ul className="list-inline float-right">
                                        <li className="list-inline-item m-1">
                                            <span className="fa fa-tags" />برچسب ها :
                                    </li>
                                        <li className="list-inline-item m-1">
                                            <a href="./">{post.postTags}</a>
                                        </li>
                                    </ul>
                                    {/* <Likepost post={post} /> */}
                                </div>
                            </article>
                        </div>
                    </div>
                ))}
                <a href="#top-page" className="fa fa-arrow-circle-up text-warning text-decoration-none float-right m-1 p-1" style={{ fontSize: "35px" }}> </a>
                <Pagination
                    pagesize={pagesize}
                    currentpage={currentpage}
                    totalcount={totalcount}
                    handlepage={this.onHandlePage} />
            </React.Fragment >
        )
    }
}
export default Posts 