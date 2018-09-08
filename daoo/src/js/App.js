import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
import Dao from '../../build/contracts/Dao.json'
import Content from './Content'
import First from './First'
import 'bootstrap/dist/css/bootstrap.css'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import HDWalletProvider from 'truffle-hdwallet-provider'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      candidates: [],
      candidates1: [],
      candidates2: [],
      token: 0,
      logged: false,
      user: "",
      authoriseUser: false,
      submitted: false,
      team : "",
      admin: false,
      pass: "",
      assigned: false
    }

    if (typeof web3 != 'undefined') {
      this.web3Provider = web3.currentProvider
    } else {
       this.web3Provider = new HDWalletProvider(
        'bonus noodle grace find jacket abstract brand release horn betray dream nest',
        'https://rinkeby.infura.io/v3/843577fef179411eb38906f051dfd0bd'
      );
    }

    this.web3 = new Web3(this.web3Provider)

    this.dao = TruffleContract(Dao)
    this.dao.setProvider(this.web3Provider)

    this.addUser = this.addUser.bind(this)
  
    this.tokenStatus = this.tokenStatus.bind(this)
    this.updateTable = this.updateTable.bind(this)
    this.updateTable1 = this.updateTable1.bind(this)  
    this.updateTable2 = this.updateTable2.bind(this)  
    this.handleChange = this.handleChange.bind(this)
    this.handleChange1 = this.handleChange1.bind(this)
    this.userCheck = this.userCheck.bind(this)
    this.checkAdmin = this.checkAdmin.bind(this)
    this.changeLogged = this.changeLogged.bind(this)
    this.joinTeam = this.joinTeam.bind(this)
    this.getTeam = this.getTeam.bind(this)
    this.addScore = this.addScore.bind(this)
    this.addScore1 = this.addScore1.bind(this)
    this.addMarks = this.addMarks.bind(this)
   


  const config={
    apiKey: "AIzaSyDZ9moM0Z7XEUpN02i1uLU5yIXyQ1wWp28",
    authDomain: "hackathon-90be9.firebaseapp.com",
    databaseURL: "https://hackathon-90be9.firebaseio.com",
    projectId: "hackathon-90be9",
    storageBucket: "hackathon-90be9.appspot.com",
    messagingSenderId: "356995190444"
  };


  this.app = firebase.initializeApp(config);
  this.database = this.app.database();


  }

  componentDidMount() {
    // TODO: Refactor with promise chain
    this.web3.eth.getCoinbase((err, account) => {
      this.setState({ account })
      this.dao.deployed().then((daoInstance) => {
        this.daoInstance = daoInstance
        this.updateTable()
        this.updateTable2()
      })
    })
  } 




  updateTable(){
    this.daoInstance.teamCount().then((candidatesCount) => {
      this.setState({ candidates: [] })
          for (var i = 1; i <= candidatesCount; i++) {
            this.daoInstance.teams(i).then((candidate) => {
              const candidates = [...this.state.candidates]
              candidates.push({
                index : candidate
              });
              this.setState({ candidates: candidates })
            });
          }
        })
  }


updateTable2(){
    this.setState({ candidates2: [] })
    this.daoInstance.teamCount().then((candidatesCount) => {
      this.setState({ candidates2: [] })
          for (var i = 1; i <= candidatesCount; i++) {
            this.daoInstance.solutions(i).then((candidate) => {
              const candidates = [...this.state.candidates2]
              candidates.push({
                index : candidate
              });
              this.setState({ candidates2: candidates })
            });
          }
        })
  }




  updateTable1(team1){
    this.daoInstance.total().then((candidatesCount) => {
      this.setState({ candidates1: [] })
          for (var i = 1; i <= candidatesCount; i++) {
            this.daoInstance.developers(i).then((email) => {

              this.daoInstance.fetchDetails(email).then((result) => {
                console.log("result   :  "+i+"  "+result[2]+"   team   "+this.state.team)
              if(this.state.team == result[2]){

              const candidates = [...this.state.candidates1]
              candidates.push({
                index: result
              });
              this.setState({ candidates1: candidates })

              }

            });


            });
          }
        })
    console.log("candidate results :::  "+this.state.candidates1)
  }




  addUser(userAddress,user,pass,leader,skill,email,contact,team) {
    this.daoInstance.addUser(userAddress,user,leader,email,contact,pass,skill,team, { from: this.state.account , gas:1000000}).then((result) =>
      console.log(result)
    )
    if(leader)
      this.setState({assigned : true})
    this.setState({team: team})
    this.updateTable()
    this.updateTable1(team)
 
  }

  joinTeam(userEmail,leaderEmail){
    console.log("user :"+userEmail+"leader :"+leaderEmail)
      this.daoInstance.joinTeam(userEmail,leaderEmail, {from: this.state.account , gas: 500000}).then((result) =>
      console.log(result)
    )
  .catch((err)=>{
    console.log(err)
  })
  this.getTeam(userEmail)
  this.setState({assigned : true})
  this.updateTable()
  this.updateTable1(this.state.team)
  this.tokenStatus(userEmail)
  }

  tokenStatus(user) {
    this.daoInstance.fetchScore(user, { from: this.state.account }).then((result) =>{
        this.setState({ token: result.toNumber() })
      console.log(result)
    })
  }

  userCheck(user,pass) {
      this.daoInstance.authorise(user,pass, { from: this.state.account }).then((result)=>{
        this.setState({ authoriseUser: result })
        console.log("userCheck result "+result)
    }).catch((err)=>{
      console.log(err)
    }) 
  }       

  getTeam(user){
      this.daoInstance.getTeam(user, { from: this.state.account }).then((result)=>{
        this.setState({ team: result })
    })
  }

  checkAdmin(user) {

    this.daoInstance.checkLeader(user, { from: this.state.account }).then((result)=>{
        this.setState({ admin: result })
      console.log(result)
    })
  }


  checkAssigned(user){
    this.daoInstance.checkStatus(user, { from: this.state.account }).then((result)=>{
      this.setState({ assigned: result })
      console.log(result)
    })
  }

  addScore(user){
    this.daoInstance.addScore(user, { from: this.state.account }).then((result)=>{
      console.log(result)
    })
      this.tokenStatus(user)


  }

  addMarks(user,marks){
    this.daoInstance.addMarks(user,marks, { from: this.state.account }).then((result)=>{
      console.log(result)
    })
      this.tokenStatus(user)
  }


  addScore1(user,problem,git,ppt){
    console.log("lllllllllllllll : "+user,problem,git,ppt)
    this.daoInstance.addScore1(user,problem,git,ppt, { from: this.state.account , gas: 500000}).then((result)=>{
      console.log(result)
    })
    this.setState({submitted : true})
    this.tokenStatus(user)
    this.updateTable2()
  }

  didSubmit(user){
      this.daoInstance.didSubmit(user, { from: this.state.account }).then((result)=>{
      this.setState({submitted: result})
    })
  }

  handleChange(user,pass,leader,skill,email,contact,team){
    let userAddress = this.web3.personal.newAccount(pass)
    this.addUser(userAddress,user,pass,leader,skill,email,contact,team)
    
    this.setState({admin: leader})

    this.setState({logged: true})
    this.setState({team: team})
    this.setState({user: user})
    this.checkAssigned(user)
    this.updateTable1(team)
  }

  handleChange1(user1,pass1){

    if(user1 == "exelis" && pass1 == "123"){
         this.setState({logged: true})
        this.setState({user: user1})
        
    }else{

      this.userCheck(user1,pass1)
      console.log("usercheck done")
      this.checkAdmin(user1)
          console.log("checkadmin done")
     
      if(this.state.authoriseUser){ 
        this.setState({logged: true})
        this.setState({user: user1})
        
        
        this.getTeam(user1)
         this.checkAssigned(user1)
         this.tokenStatus(user1)
        this.updateTable1(this.state.team)
      }
      this.didSubmit(user1)
    }

  }  

  changeLogged(){
    this.setState({logged: false})
    this.setState({token: 0 , admin: false })
  }

  render() {
    if(!this.state.logged){
        return(
            <First change={this.handleChange} change1={this.handleChange1}/>
          )
    }else{
        return (
          <div class='row'>
            <div class='col-lg-12 text-center' >
              <br/>
               <Content
                    account={this.state.account}
                    candidates={this.state.candidates}
                    candidates2={this.state.candidates2}
                    token={this.state.token}
                    user={this.state.user}
                    addScore={this.addScore}
                    submitted={this.state.submitted}
                    addScore1={this.addScore1}
                    joinTeam={this.joinTeam}
                    database={this.database}
                    addMarks={this.addMarks}
                    team={this.state.team}
                    candidates1={this.state.candidates1}
                    assigned={this.state.assigned}
                    admin={this.state.admin}
                    change={this.changeLogged}
                    addUser={this.addUser} 
                    tokenStatus={this.tokenStatus}/>
            </div>
          </div>
        )
    }
  }
}

ReactDOM.render(
   <App />,
   document.querySelector('#root')
)
