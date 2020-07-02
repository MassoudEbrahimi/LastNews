import React, { Component, useContext } from 'react';
import { getPosts, deletePost } from '../../Service/postService'
import { paginate } from '../../Utils/paginate';
import Pagination from '../Pagination';
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

class AllPosts extends Component {
    state = {
        posts: [],
        currentPage: 1,
        pageSize: 5,
        deleted: false
    };

    async componentDidMount() {
        const { data } = await getPosts();
        console.log(data.news)
        this.setState({ posts: data.news })
    }
    handleDeletePost = async (data,) => {
        await Swal.fire({
            title: `<span>ایا از حذف رکورد <strong>${data.id}<strong> مطمئن هستید ؟ </span>`,
            // text: "You won't be able to revert this!",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله',
            cancelButtonText: 'خیر',
            width: "auto",
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then((result) => {
            if (result.value)
                this.setState({ deleted: true })
            else
                this.setState({ deleted: false })
        })
        const originalPost = this.state.posts
        const posts = this.state.posts.filter(p => data.id !== p.id)
        this.setState({ posts })

        data.is_deleted = 1

        const newData = {
            is_deleted: 1,
            id: data.id
        }
        // data.foreach(node => {
        //     if (node.is_deleted)
        //         node.is_deleted = 1
        // })
        if (this.state.deleted === true)
            try {
                const result = await deletePost(newData)
                if (result.state === 200) {
                    toast.success("با موفقیت حذف گردید")
                }
            } catch (ex) {
                if (ex.response && ex.response.status === 404)
                    toast.error('پستی با این مشخصات یافت نشد')
                this.setState({ posts: originalPost })
            }
    }
    handleRedirect = posts => {

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
                                        onClick={() => this.handleDeletePost(post)}
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
