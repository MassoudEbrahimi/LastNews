import React, { Component, useContext } from 'react';
import { getPosts, deletePost } from '../../Service/postService'
import { paginate } from '../../Utils/paginate';
import Pagination from '../Pagination';
import { toast } from 'react-toastify'

class AllPosts extends Component {
    state = {
        posts: [],
        currentPage: 1,
        pageSize: 5
    };

    async componentDidMount() {
        const { data } = await getPosts();
        console.log(data.news)
        this.setState({ posts: data.news })
    }
    handleDeletePost = async (id) => {
        const originalPost = this.state.posts
        const posts = this.state.posts.filter(p => id !== p.id)
        this.setState({ posts })
        try {
            const result = await deletePost(id)
            if (result.state === 200) {
                toast.success("با موفقیت حذف گردید")
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                toast.error('پستی با این مشخصات یافت نشد')
            this.setState({ users: originalPost })
        }
    }
    handleRedirect = posts => {
        debugger
        this.props.history.push({
            pathname: '/admin/editPost',
            posts
        });
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    getPageData = () => {
        const { pageSize, currentPage, posts: allPosts } = this.state;
        const posts = paginate(allPosts, currentPage, pageSize);

        return {
            totalCount: allPosts.length,
            data: posts
        };
    };

    render() {
        const { pageSize, currentPage } = this.state;
        const { totalCount, data } = this.getPageData();

        return (
            <div className="bg-light m-3 p-4 border rounded">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>عنوان پست</th>
                            <th>تاریخ انتشار</th>
                            <th>نوع خبر</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(post => (
                            <tr key={post.id}>
                                <th scope="row">{post.id}</th>
                                <td>{post.title}</td>
                                <td>{post.create_date}</td>
                                <td>{post.categoryname}</td>
                                <td>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => this.handleRedirect(post)}
                                    >
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => this.handleDeletePost(post.id)}
                                    >
                                        حذف
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    totalcount={totalCount}
                    pagesize={pageSize}
                    currentpage={currentPage}
                    handlepage={this.handlePageChange}
                />
            </div>
        );
    }
}

export default AllPosts;
