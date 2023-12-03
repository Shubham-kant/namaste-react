import { useRouteError } from "react-router-dom";

const Error = () => {
    //useRouteError is hook which GIVES YOU MORE INFO ABOUT THE ERROR
    const err = useRouteError();
    console.log(err); 
    return (

        <div>
            <h1>{err.status}:{err.statusText}</h1>
            <h1>{err.error.message}</h1>
           <h1>
            Oopss!!! something went wrong!!
            </h1> 
        </div>
    )
}

export default Error;