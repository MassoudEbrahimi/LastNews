import React from 'react'
import { Link } from 'react-router-dom'
import getPostLinks from '../../Service/fakeposts'



class Navigation extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        const posts = getPostLinks()
        this.setState({ posts })
    }
    // getcounterposts = () => {
    //     const { posts: allposts } = this.state
    //     return {
    //         totalcount: allposts.length
    //     }
    // }
    render() {
        const totalcount = this.state.posts.length
        return (
            <nav className="nav navbar-dark flex-md-row flex-sm-row flex-wrap bg-dark text-light p-1 sticky-top position-sticky rtl" >
                <div className="nav navbar-dark bg-dark">
                    <span to="/" className="nav-link text-light bg-dark-gray rounded text-nowrap font-title">خوش آمدید</span>
                    <span className="nav-item nav-link ml-auto mr-auto">تعداد خبرهای سایت : <span className="ml-1 badge-pill badge-warning font-link" >{totalcount}</span></span>
                </div>
                <Link to="/" className="ml-lg-auto ml-md-auto ml-sm-auto m-auto  nav-item nav-link text-light bg-success rounded  font-title">خروج</Link>
            </nav>
        )
    }
}
export default Navigation

