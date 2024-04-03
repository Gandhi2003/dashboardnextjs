'use client'
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
function Network() {
    const [isOffline, setIsOffline] = useState(false);
    function onOffline() {
        setIsOffline(true);
        toast.error('Sorry, you are offline ...');
        console.log("You are offline");

    }
    function onOnline() {
        setIsOffline(false);
        toast.success('You are Online');

    }
    useEffect(() => {
        window.addEventListener('offline', onOffline);
        window.addEventListener('online', onOnline);
        return () => {
            window.removeEventListener('offline', onOffline);
            window.removeEventListener('online', onOnline);
        };
    }, []);
    if (isOffline) {
        return (
            // <h1>Sorry, you are offline ...</h1>
            <ToastContainer autoClose={50000}
                hideProgressBar={true} />
        );
    }

    return (
        //   <h1>You are online!</h1>
        <ToastContainer autoClose={5000}
            hideProgressBar={false} />
    );
    //   toast.success("You are online");

}
export default Network;