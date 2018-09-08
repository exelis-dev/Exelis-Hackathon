import React,{Component} from 'react';
import Post from './Post'
import PostEditor from './PostEditor'



class ThreadDisplay extends Component{


constructor(props){
    super(props);
    this.state = {
      posts: [],
    }

    this.databaseRef = this.props.database.ref().child(this.props.name);

    this.addPost = this.addPost.bind(this);

    this.updateLocalState = this.updateLocalState.bind(this);
    
  }

  componentWillMount(){
    const {updateLocalState} = this;
    this.databaseRef.on('child_added',snapshot => {
      const response = snapshot.val();
      updateLocalState(response);
    });
  }

  addPost(postBody){
    const postToSave = {postBody};
    this.databaseRef.push().set(postToSave);
  }

  updateLocalState(response){
    const posts = this.state.posts;
    const brokenDownPost = response.postBody.split(/[\r\\n]/g);
    posts.push(brokenDownPost);
    this.setState({
      posts: posts
    })
  }

render() {

return(
	<div>
        {
        	this.state.posts.map((postBody,idx)=>{
         	 return ( 
              <Post key={idx} postBody={postBody}/>
            ) 
        	})
        }
        
        <PostEditor addPost={this.addPost} addScore={this.props.addScore} user={this.props.user} />
    </div>

);
}    
}

export default ThreadDisplay;
