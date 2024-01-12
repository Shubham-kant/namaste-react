import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            pref : 1,
            pref2 : 2,
            count:1,
            userInfo: {
                name: 'dummy',
                avatar:'dummy'
            }
        }
        console.log(this.props.name,'child constrcutor');
    }
    //will use it to fetch data via API, it is called after component is loaded i.e. after the render method.
    async componentDidMount() {
        console.log(this.props.name,'componentDidMount child');
        const data = await fetch('https://api.github.com/users/Shubham-kant');
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log(json);
    }
    //get called after update cycle
    componentDidUpdate(){
        console.log('component did update');
    }

    componentWillUnmount() {
        
    }
    render() {
        let {name, avatar_url } = this.state.userInfo;
        //console.log(this.props.name,'render child');
        //const {name} = this.props;
        // const {pref, pref2} = this.state;
        return(
        <div>
            {/* <h2>{name}</h2>
            <h3>
                I love sports</h3>        
                <p>{pref}st preference is Badminton</p>
                <p>{pref2}nd preference is Skating</p>
                <p>{this.state.count}</p>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1
                    })
                }}>
                    increment
                </button> */}
                <h1>{name}</h1>
                <img src={avatar_url}/>
            </div>

        )
    }
} 
export default UserClass;