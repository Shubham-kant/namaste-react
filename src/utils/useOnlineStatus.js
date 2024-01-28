import { useEffect, useState } from "react";
//custom hook for checking user online/offline status
useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    console.log('hello online status hook');
    useEffect(() => {
        console.log('online status useefect');
        
        window.addEventListener('offline',() => {
            console.log('offline...');
            setOnlineStatus(false);
        });
        window.addEventListener('online',() => {
            console.log('online');
            setOnlineStatus(true);
        });
         // Cleanup function (returned by useEffect)
        return () => {
            window.removeEventListener('online', () => {
                setOnlineStatus(true);
            });
            window.removeEventListener('offline', () => {
                setOnlineStatus(false);
            });
        };
    }, []);
    /**
     * we added the event listenders on initial render.
     * The empty dependency array ([]) is used to ensure that the event listeners 
     * are only added once when the component mounts and removed when the component unmounts.
     */
    return onlineStatus;

}


export default useOnlineStatus;