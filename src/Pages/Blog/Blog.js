import React from 'react';
import UseTitle from '../../Hooks/UseTitle';

const Blog = () => {
    UseTitle('blog')
    return (
        <div>

            <div className="mt-32 mb-20">

                <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Difference between SQL and NoSQL
                    </div>
                    <div className="collapse-content">
                        <strong> The five critical differences between SQL vs NoSQL are:</strong>
                        <ol class="list-decimal ml-6">
                            <li> SQL databases are relational, NoSQL databases are non-relational. </li>
                            <li>  SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                            <li>  SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. </li>
                            <li>  SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. </li>
                            <li> SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                                this is wosome ideas.
                            </li>
                        </ol>
                    </div>
                </div>

                <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is JWT, and how does it work?
                    </div>
                    <div className="collapse-content">
                        <ol class="list-disc ml-6">
                            <li>
                                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. </li>
                            <li>
                                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                            </li>
                        </ol>
                    </div>
                </div>

                <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is the difference between javascript and NodeJS?
                    </div>
                    <div className="collapse-content">

                        <ol class="list-decimal ml-6">
                            <li>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.</li>

                            <li>JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.</li>

                            <li>JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.</li>

                            <li>JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development.</li>

                            <li>JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser. </li>

                            <li>JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.</li>

                        </ol>
                    </div>
                </div>
                <div tabIndex={4} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does NodeJS handle multiple requests at the same time?
                    </div>
                    <div className="collapse-content">
                        <ol class="list-disc ml-6">
                            <ul>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                            </ul>
                            <ul> <strong>Example </strong> If your system has 8 CPU then 8 NodeJS instances will be created and every instance has its own independent event loop. Now NodeJS can process all request parallelly. They are all share same port (PORT 3000) but not state. The master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.
                            </ul>
                        </ol>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Blog;