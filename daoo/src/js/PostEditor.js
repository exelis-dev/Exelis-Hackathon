import React,{Component} from 'react';

class PostEditor extends Component{
	
	constructor(props){
		super(props);

		this.state = {
			newPostBody: '',
		};

		this.handlePostEditorInputChage = this.handlePostEditorInputChage.bind(this);
		this.createPost = this.createPost.bind(this);
	}


createPost(){
	this.props.addPost(this.state.newPostBody);
	this.setState({
      newPostBody: ''
    });	
    this.props.addScore(this.props.user)
}


handlePostEditorInputChage(ev){
    this.setState({
      newPostBody: ev.target.value
    });
  }

	render(){

	return(
		<div className="panel panel-default post-editor">
          <div className="panel-body">

            <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handlePostEditorInputChage} />
            <button className="btn btn-success post-editor-button" onClick={this.createPost}>POST </button>

          </div> 
        </div>

     );
	}
}



export default PostEditor;