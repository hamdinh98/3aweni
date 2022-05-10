import styles from "./css/list.module.css";
import React,{Component, useState,useEffect} from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL:"https://aweni1-2022.herokuapp.com/getComments/624b0ed9f6b79446ac5f3639"
});


class Comments_List extends Component {

   /* constructor(props) {
        super(props);
        this.state = {
            id_user:'',
            parentId:'',
            content:''
        }
    }*/

    state = {
        comments:[],
        id_user:'1',
        parentId:'null',
        content:''
    }

constructor(props) {
    //super();
    super(props);
    api.get('/').then(res => {
        console.log(res.data)
        this.setState({ comments: res.data})
    })

}

deleteComment(id){
    if ( window.confirm('Are you sure you want to delete this ? '))
    {
        fetch("https://aweni1-2022.herokuapp.com/deletecomment/"+id,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json',
            'Content-Type': 'application/json'
        }
        }
        )
}}

changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value})
}

submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post('https://aweni1-2022.herokuapp.com/newcomment/624b0ed9f6b79446ac5f3639',this.state)
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })
}

render(){

    const {id_user, parentId, content} = this.state

    return (
        <div class="container mb-5 mt-5">
            <div className={styles.card}>
                <div className="row">
                    <div class="col-md-12">
                        <h3 class="text-center mb-5"> Comments </h3>
                        <div class="row">
                            <div class="col-md-12">
                                <div className={styles.media}>
                                    <div class="media-body">
                                    {this.state.comments.map(comments => 
<div class="media mt-4"> <a class="pr-3" href="#"><img class="rounded-circle" alt="Bootstrap Media Another Preview" src="/uploads/1652047998421206-2065509_tunisia-flag-icon-png-transparent-png.png" /></a>
                                            <div class="media-body">
                                                <div class="row">
                                                    <div class="col-12 d-flex">
                                                        <h5>SaifFF</h5>
                                                    </div>
                                                </div> {comments.content}
                                                <br></br>
                                                <button class="btn-delete" onClick={()=>this.deleteComment(comments._id)}>Delete</button>
                                            </div>
                                        </div>
					 )}
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div class="col-lg-15">
            <div class="contact-form">
                <form onSubmit={this.submitHandler}>
                    <h3 class="form-title">Comment</h3>
                    
                    <div class="row">
                        <div class="col-12">
                            <div class="form-field mb-20"><label for="message">Write
                                    Comment</label><input id="message"
                                    placeholder="Type your comment here " name="content" value={content} onChange={this.changeHandler}></input></div>
                        </div>
                        <div name="id_user" value='1'></div>
                        <div name="parentId" value="null"></div>
                        <div class="col-12">
                            <div class="form-field"><button class="main-btn" type="submit">Post comment <i
                                        class="far fa-arrow-right"></i></button></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
        
        
        
    )

    }

}
export default Comments_List