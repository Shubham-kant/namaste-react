import { useState } from "react";

const User = ({name}) => {
    const [pref, setPref] = useState(1);
    const [pref2, setPref2] = useState(2);
    return(
        <div>
            {/* <h2>
                Hello {name}
            </h2>
            <h3>
                I am Software engineer whi loves sports.
            </h3>
            <p>{pref}st preference is Badminton</p>
            <p>{pref2}nd preference is Skating</p> */}
        </div>
    )
}

export default User;