import React, { Component } from 'react';
import { toast } from "react-toastify"
import { createPost, getCategory } from "../../Service/postService"
import DatePicker from 'react-datepicker2';

class CreatePost extends Component {
    state = {
        user_id: 1,
        title: "",
        created_date: "",
        category_id: "",
        body: "",
        is_deleted: false,
        image_url: '',
        getCategory: []
    };
    async componentDidMount() {
        const { data } = await getCategory();
        this.setState({ getCategory: data.newscategory })
    }
    handleOptionCategory = event => {

        event.preventDefault()
        const x = document.getElementById("categoryNews")
        const category_id = x.options[x.selectedIndex].index;
        this.setState({ category_id })
    }
    handleSubmit = async e => {
        e.preventDefault();
        const { user_id, title, created_date, body, category_id, image_url, is_deleted } = this.state
        const newpost = {
            user_id,
            title,
            created_date,
            body,
            category_id,
            image_url,
            is_deleted
        }
        if (title === "" && created_date === "" && image_url === "" && body === "") toast.warning("لطفا اطلاعات اجباری را وارد کنید")
        else
            try {
                const result = await createPost(
                    JSON.parse(JSON.stringify(newpost))
                );
                if (result.status === 200) {
                    toast.success('پست با موفقیت ساخته شد');
                    this.setState({
                        title: "",
                        created_date: "",
                        category_id: "",
                        body: "",
                        is_deleted: false,
                        image_url: '',
                    })
                }
            } catch (ex) {
                if (ex.response && ex.response.status === 400)
                    toast.error('لطفا کلیه موارد را پر کنید');
            }


    };

    render() {
        const { getCategory } = this.state
        return (
            <form
                className="form-group bg-light border rounded m-2 shadow p-5"
                onSubmit={this.handleSubmit}
            >
                <label className="col-md-4 control-label" htmlFor="txtTitle">
                    عنوان پست
                </label>
                <input
                    autoComplete="off"
                    id="txtTitle"
                    name="title"
                    type="text"
                    placeholder="عنوان"
                    className="form-control input-md m-2"
                    value={this.state.title}
                    onChange={e => this.setState({ title: e.target.value })}
                />
                <div className="row">
                    <div className="col-7 row">
                        <div className="col-5">
                            <label className="m-3 control-label">تاریخ ایجاد پست :</label>
                        </div>
                        <div className="col-7">
                            {/* <CalendarJalali /> */}
                            <DatePicker
                                isGregorian={false}
                                className="form-control input-md m-2"
                                onChange={value => this.setState({ created_date: value.format("YYYY/MM/DD") })}
                                value={this.state.value}
                            />

                        </div>
                    </div>
                    <div className="col-5 row">
                        <div className="col-5">
                            <label className="m-3 control-label">نوع خبر :</label>
                        </div>
                        <div className="col-7">
                            <select id="categoryNews" className="custom-select m-2" onChange={this.handleOptionCategory}>
                                <option selected value="نوع اخبار ">
                                    انواع اخبار
                                </option>
                                {getCategory.map(node => {
                                    return (
                                        <option value={node.value} key={node.id}>{node.title}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>

                </div >
                <input
                    autoComplete="off"
                    id="txtImageUrl"
                    name="image_url"
                    type="text"
                    placeholder="لینک عکس فقط از URL اینترنتی باشد"
                    className="form-control input-md m-2"
                    value={this.state.image_url}
                    onChange={e =>
                        this.setState({ image_url: e.target.value })
                    }
                />

                <textarea
                    autoComplete="off"
                    name="body"
                    className="form-control m-2"
                    rows="5"
                    placeholder="متن پست"
                    value={this.state.body}
                    onChange={e =>
                        this.setState({ body: e.target.value })
                    }
                />
                {/* 
                <label className="col-md-4 control-label" htmlFor="txtTags">
                    برچسب ها
                </label>

                <input
                    id="txtTags"
                    name="postTags"
                    type="text"
                    placeholder="برچسب را با (,) از هم جدا کنید"
                    className="form-control input-md m-2"
                    value={this.state.tags}
                    onChange={e =>
                        this.setState({
                            postTags: _.split(e.target.value, ',')
                        })
                    }
                /> */}

                <button className="btn btn-success m-5">ساخت پست جدید</button>
            </form >
        );
    }
}

export default CreatePost;
