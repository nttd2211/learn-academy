import React, { Component } from 'react';

class IndexNavbar extends Component {
    render() {
        return (
                <div className="row">
                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 thuyduyen" style={{backgroundColor:'green'}}>Icon</div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2" style={{backgroundColor:'red'}}>content</div>
                </div>
        );
    }
}

export default IndexNavbar;