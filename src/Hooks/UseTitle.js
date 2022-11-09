import { React, useEffect } from 'react';

const UseTitle = title => {
    useEffect(() => {

        document.title = `${title} -foodBar`


    }, [title])
};

export default UseTitle;