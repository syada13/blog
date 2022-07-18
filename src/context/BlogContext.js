import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    return <BlogContext.Provider value={"Hello Suresh ,how r u feeling??"}>{children}</BlogContext.Provider>;

};

export default BlogContext;

