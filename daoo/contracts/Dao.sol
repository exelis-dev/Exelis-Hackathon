pragma solidity ^0.4.2;
contract Dao{

    address owner;

    constructor(){                
        owner=msg.sender;
    }
    
    struct Users{
        address user;
        string username;
        bool leader;
        string email;
        string contact;
        string pass;
        string skill;
        string team;
        uint teamId;
    }
    
    struct Team{
        string lead;
        string team;
        uint score;
        uint size;
        uint ama;
        bool submitted;
        mapping( uint => string ) members;
    }

    struct Solution{
        string team;
        uint num;
        string git;
        string ppt;
    }

    uint public teamCount;
    uint public total;

    mapping ( uint => string ) public developers;
    mapping ( string => Users ) userList;
    mapping ( uint => Solution ) public solutions;
    mapping ( uint => Team ) public teams;
    
    
    modifier isOwner(){               
        require(msg.sender==owner);
        _;
    }
    

    modifier isLeader(string id){               
        require(userList[id].leader == true);
        _;
    }
    
    
    function addUser(address user , string username , bool leader , string email , string contact , string pass , string skill , string team) isOwner{

        userList[email].user=user;
        userList[email].username=username;
        userList[email].leader=leader;
        userList[email].email=email;
        userList[email].contact=contact;
        userList[email].pass=pass;
        userList[email].skill=skill;
        total+=1;
        developers[total]=email;

        if(leader){
        userList[email].team=team;
        teamCount+=1;
        userList[email].teamId=teamCount;
        teams[teamCount].team=team;
        teams[teamCount].lead=email;
        teams[teamCount].size+=1;
        teams[teamCount].members[teams[teamCount].size]=email;

        }
    }

    function joinTeam(string userEmail , string leaderEmail) isLeader(leaderEmail) {
        userList[userEmail].team=userList[leaderEmail].team;
        userList[userEmail].teamId=userList[leaderEmail].teamId;
        teams[userList[leaderEmail].teamId].size+=1;
        teams[userList[leaderEmail].teamId].members[teams[userList[leaderEmail].teamId].size]=userEmail;
    }



    function fetchScore(string email) public view returns(uint){
        return teams[userList[email].teamId].score;
    }

    function authorise(string email,string pass) public view returns(bool){
        return keccak256(pass) == keccak256(userList[email].pass);
    }   

    function checkLeader(string email) public view returns(bool){
        return userList[email].leader;
    }
    
    function getMembers(string email,uint i) public view returns(string){
        return teams[userList[email].teamId].members[i];
    }

    function getTeam(string email) public view returns(string){
        return userList[email].team;
    }

    function fetchDetails(string email) public view returns(string,string,string){
       return ( userList[email].username , userList[email].skill , userList[email].team );
    }

    function checkStatus(string email) public view returns(bool){
       if(userList[email].teamId != 0)
        return true;
       else 
        return false;
    }    

    function addScore1(string email,uint problem ,string git, string ppt) isOwner{
        teams[userList[email].teamId].score+=10;     
        solutions[userList[email].teamId].team=userList[email].team;
        solutions[userList[email].teamId].num=problem;
        solutions[userList[email].teamId].git=git;
        solutions[userList[email].teamId].ppt=ppt;   
        teams[userList[email].teamId].submitted=true;

    }
    
    function addScore(string email) isOwner{
        teams[userList[email].teamId].ama+=1;   
    
        if(teams[userList[email].teamId].ama % 5 == 0)
            teams[userList[email].teamId].score+=2;     
    }

    function addMarks(string email,uint marks) isOwner{
        teams[userList[email].teamId].score+=marks;    
    }

    function didSubmit(string email) public view returns(bool){
        return teams[userList[email].teamId].submitted;
    }
}