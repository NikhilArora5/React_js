import React from "react"


class UserClass extends React.Component{

    constructor(props){

        super(props)

       
        this.state={
            userInfo:{
                login:"",
                avatar_url:""
            }
        }

         console.log( "Contructour called")
    }

   async componentDidMount(){

        console.log(" component Did Mount")
        const data= await fetch(" https://api.github.com/users/NikhilArora5")

        let json=await data.json()
        // console.log("JSON USER API",json)

        if(json) this.setState({userInfo:json})
    }
   

    async componentDidUpdate(){
        console.log(" component Did update called")
    }
    render(){
        //  console.log(this.props.name+"Child Rendering  called")
        const {avatar_url,login,html_url}=this.state.userInfo
        if(!login){
              console.log("Rendering  called with Dummy Data State>>>",this.state.userInfo)
        }else{
            console.log("Rendering  called with Updated Data State>>>",this.state.userInfo)
        }

        return (

            <div className="user-card">
              <img src={avatar_url}/>
                <h2>{login}</h2>
                <a target="_blank" href={html_url} > Github  </a>

                
               
                

            </div>
        )
    }

}

export default UserClass