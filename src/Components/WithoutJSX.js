import React from "react";

const WithoutJSX = () =>{
    return React.createElement(
        'div',
        {id:'hello', className:'dummyclass'},
        React.createElement(
            'h1',
             null,
             'WithoutJSX'))
}

export default WithoutJSX