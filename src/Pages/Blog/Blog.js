import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='py-4'>
                <h1 className='text-center text-4xl font-bold text-orange-500'>Difference between SQL and NoSQL?</h1>
                <p className='py-5'>

                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.

                    There are five practical differences between SQL and NoSQL:

                    1/Language
                    2/Scalability
                    3/Structure
                    4/Properties
                    5/Support and communities
                </p>
            </div>
        </div>
    );
};

export default Blog;