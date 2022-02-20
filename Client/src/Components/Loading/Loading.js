import React from 'react';
import { HashLoader } from 'react-spinners';


const Loading = () => {

    return (
        <div className="d-flex justify-content-center align-items-center my-3 py-5">
            <HashLoader size={100} />
        </div>

    );
};

export default Loading;