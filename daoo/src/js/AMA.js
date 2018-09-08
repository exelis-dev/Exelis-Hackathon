import React from 'react'
import ThreadDisplay from './ThreadDisplay'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'bootstrap/dist/css/bootstrap.css'

class AMA extends React.Component {

 constructor(props){
  super(props);

  this.state = {
      newPostBody: '',
      posts: [],
    };

    this.handlePostEditorInputChage = this.handlePostEditorInputChage.bind(this);
    this.createPost = this.createPost.bind(this);

    this.databaseRef = this.props.database.ref().child('post');


    this.updateLocalState = this.updateLocalState.bind(this);

 }


componentWillMount(){
    const {updateLocalState} = this;
    this.databaseRef.on('child_added',snapshot => {
      const response = snapshot.val();
      updateLocalState(response);
    });
  }

createPost(){
    this.databaseRef.push().set(this.state.newPostBody);
  this.setState({
      newPostBody: ''
    }); 
}

 updateLocalState(response){
    const posts = this.state.posts;
    console.log("firebaase response  "+response);
    const brokenDownPost = response;
    posts.push(brokenDownPost);
    this.setState({
      posts: posts
    })
  }

handlePostEditorInputChage(ev){
    this.setState({
      newPostBody: ev.target.value
    });
}



  render() {
    return (<div>


                 {
                  this.state.posts.map((postBody,idx)=>{
                   return (

                      <div class="accordion" id="accordionExample">
                    
                    <div class="card">
                      <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                          <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              {postBody}
                          </button>
                        </h5>
                      </div>
                      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                          <ThreadDisplay name={postBody} addScore={this.props.addScore} user={this.props.user} database={this.props.database} />
                        </div>
                      </div>
                    </div>
                  </div>

                    ) 
                  })
                 }



                  

                    



                  <div className="panel panel-default post-editor">
                    <div className="panel-body">

                    <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.handlePostEditorInputChage} />
                    <button className="btn btn-success post-editor-button" onClick={this.createPost}>POST </button>

                    </div> 

                  </div>      



        </div>
    )
  }
}



export default AMA
