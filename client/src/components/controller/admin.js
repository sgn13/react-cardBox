import React,{Component} from 'react';
import axios from 'axios';
import {} from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import {AuthContext} from '../contextapi/authContext'

class admin extends Component{
    
    constructor(props){
        super(props)
        this.state ={
            user:[],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentDidMount(){
        // console.log(this.context.user.user.id);
        // console.log(this.context.user.token);
        // const id = this.context.user.user.id
        // const token = this.context.user.token
        axios({
            url:`/api/auth/alluser`,
            method:"GET",
            // headers:{
            //     "Authorization": `Bearer ${token}`
            // }
        })
        .then(res=>
            {
                console.log(res);
                const user = res.data
                this.setState(
                    {user}
                )
            }
            )
    }
   
    handleSubmit(event){
        window.location.href='/deleteImg';
        console.log("changed");
        console.log()
       // axios.delete(`api/auth/${id}`)
    }
    // handleClick(id){
    //     console.log(id);
    //     <Link to={
    //         "/getanswer/:id"
    //     }
    //     />
    // }
    //<Link to={`/getanswer/${querylist.id}`} style={{textDecoration: "none"}} >
    render(){
        
        return(
            <div className="container p-4" >
                Click to delete
            <ul className="list-group" style={{textDecoration: 'none'}}>
                {this.state.user && this.state.user.map(userlist => 
                    <li className="list-group-item" key={userlist._id} ><Link to={`/delete/${userlist._id}`} style={{textDecoration: "none"}} >
                           
                            {userlist.name}
                        </Link>
                    
                    </li>
                    )
                }

            </ul>
            <button onClick={this.handleSubmit}>Delete Photo</button>
            </div>
        )
    }
}

export default admin