import React from 'react'
import { Link } from 'react-router-dom'
// import getPostLinks from '../../Service/fakeposts'
import { getPosts, getUser } from '../../Service/postService'



class Navigation extends React.Component {
    state = {
        posts: [],
        users: []
    }
    componentDidMount = async () => {
        this.allpost()
        this.allUsers()

    }
    allpost = async () => {
        const res = await getPosts()
        this.setState({ posts: res.data.news })
    }
    allUsers = async () => {
        const result = await getUser()
        debugger
        this.setState({ users: result.data.users })

    }
    // getcounterposts = () => {
    //     const { posts: allposts } = this.state
    //     return {
    //         totalcount: allposts.length
    //     }
    // }
    render() {
        const totalcount = this.state.posts.length
        const totlaUsers = this.state.users.length
        return (
            <nav className="nav navbar-dark flex-md-row flex-sm-row flex-wrap bg-dark text-light p-1 sticky-top position-sticky rtl" >
                <div className="nav navbar-dark bg-dark col-11">
                    <span to="/" className="nav-link text-light bg-dark-gray rounded text-nowrap font-title col-5">خوش آمدید</span>
                    <div className="row ">
                        <span className="nav-item nav-link mx-auto">تعداد خبرهای سایت : <span className="ml-1 badge-pill badge-warning font-link" >{totalcount}</span></span>
                        <span className="nav-item nav-link mx-auto">تعداد کاربران ثبت نام شده  : <span className="ml-1 badge-pill badge-warning font-link" >{totlaUsers}</span></span>
                    </div>
                </div>
                <Link to="/" className="ml-lg-auto ml-md-auto ml-sm-auto m-auto  nav-item nav-link text-light bg-success rounded  font-title ">خروج</Link>
            </nav>
        )
    }
}
export default Navigation

