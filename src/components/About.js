import User from './User';
import UserClass from './UserClass';
import React from 'react';
// const About = () => {
//     return (
//         <div>
//             about us
//             <User name={"shubham kant"}/>
//             <UserClass name={"shubham"} />

//             </div>
//     );
// };
class About extends React.Component {
    constructor(props) {
        super(props);
        console.log('parent const.');
    }
    //will use it to fetch data via API, it is called after component is loaded i.e. after the render method.
    componentDidMount() {
        console.log('parent compoentDidmount');
    }
    render() {
        console.log('preant render');
        return (
            <div>
                about us
                <User name={"shubham 1"}/>
                <UserClass name={"shubham 2"} />
                {/* <UserClass name={"megha 1"} /> */}
                </div>
        );
    }
}

export default About;