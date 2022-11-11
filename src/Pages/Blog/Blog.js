import React from 'react';

const Blog = () => {
    return (
        <div>
              <div className="text-center">
       <h1 className="text-5xl font-bold">Blog</h1><br/>
         
       </div>
            <p className='font-bold'>
                Question: Difference between SQL and NoSQL?<br/>
            </p>
            <p>
               Answer: SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
            </p>
            <p className='font-bold'>
                Question: What is JWT, and how does it work?<br/>
            </p>
            <p>
               Answer: JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
            </p>
            <p className='font-bold'>
                Question: What is the difference between javascript and NodeJS?<br/>
            </p>
            <p>
               Answer: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
            </p>
            <p className='font-bold'>
                Question: How does NodeJS handle multiple requests at the same time?<br/>
            </p>
            <p>
               Answer: NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
            </p>
            
        </div>
    );
};

export default Blog;