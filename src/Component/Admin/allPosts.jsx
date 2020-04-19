import React, { Component } from 'react';
import { getPosts } from '../../Service/postService'
import { paginate } from '../../Utils/paginate';
import Pagination from '../Pagination';

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
                                        onClick=""
                                    >
                                        ویرایش
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick=""
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
