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
                <div className="nav navbar-dark bg-dark col-12 ">
                    <span to="/" className="nav-link text-light bg-dark-gray rounded text-nowrap font-title col-5">خوش آمدید</span>
                    <div className="row ">
                        <span className="nav-item nav-link mx-auto">تعداد خبرهای سایت : <span className="ml-1 badge-pill badge-warning font-link" >{totalcount}</span></span>
                        <span className="nav-item nav-link mx-auto">تعداد کاربران ثبت نام شده  : <span className="ml-1 badge-pill badge-warning font-link" >{totlaUsers}</span></span>
                    </div>
                    <div className="row mx-auto mr-5">
                        <Link to="/" className=" align-self-end mr-2 nav-item nav-link text-light bg-success rounded  font-title ">صفحه اصلی</Link>
                        <Link to="/admin/logout"  className=" align-self-end mr-2 nav-item nav-link text-light bg-danger rounded  font-title ">خروج</Link>
                    </div>
                </div>

            </nav>
        )
    }
}
export default Navigation

