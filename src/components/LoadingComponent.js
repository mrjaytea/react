import React from 'react';

const Loading = () => {
    return(
        <div className="col-12 loading">
            {/* fa-pulse to make it spin, fa-3x to make it spin 3x speed and fa-spin to make it spin forward */}
            <i className="fa fa-spinner fa-3x fa-spin fa-primary mb-1"></i>
            <h3>Loading...</h3>
        </div>
    );
};

export default Loading;