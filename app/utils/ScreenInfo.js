import React from 'react';

const ScreenInfo = ({ albums, albumInfo}) => {

    return (
        <div className="row dev-info">
            <div className="small-12 columns">
                <p className="show-for-small-only float-left"><span className="label">Small screen</span></p>
                <p className="show-for-medium-only float-left"><span className="label">Medium screen</span></p>
                <p className="show-for-large float-left"><span className="label">Large+ screen</span></p>
                <p className="show-for-landscape float-left"><span className="label success">Landscape orientation</span></p>
                <p className="show-for-portrait float-left"><span className="label success">Portrait orientation</span></p>
            </div>
        </div>
    )
};

export default ScreenInfo;