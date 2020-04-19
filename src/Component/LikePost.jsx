import React from 'react'


class Likepost extends React.Component {
    state = {
        post: this.props.post
    }
    handleLikeClick = post => {
        console.log("liked")
        const likedpost = { ...post }
        likedpost.postLike++;
        this.setState({ post: likedpost })
    }
    render() {
        const { post } = this.state
        return (
            <div
                className="fa fa-heart float-left"
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => this.handleLikeClick(post)}
            >
                <span className="badge-primary badge-pill m-1 font-link">
                    {post.postLike}
                </span>
            </div>
        )
    }
}
export default Likepost