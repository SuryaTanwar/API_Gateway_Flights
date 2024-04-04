We use bcrypt js package in order to hash the password before saving to the User table. 

Bcrypt is a hashing based algorithm -> from the cipher text, we can't decode back the plain text.

We use triggers (known as hooks in Sequelize), to compute the hash of the password before inserting the record into the table.

Authentication: verifying the identity from the request vs Authorization: checking what all permissions someone has

For authentication, there are many third party packages available like Passport, however we'll be using custom JWT based authentication in our service. Using custom JWT based authentication has more learning than just using Passport.

The API gateway facilitates authentication, routing requests to the appropriate microservices, rate limiting, and reverse proxy.

NGINX is also one of the industry used load balancer and acts as a reverse proxy.

We are using the 'npm-express-limit' package in order to ensure rate limiting in our project. Rate limiting allows us to set a limit on the maximum number of requests than can be made from an IP in a specific duration of time.

We used the 'http-proxy-middleware' package in order to implement API routing within our project.

**Non-persistent connection**

A non-persistent connection, also known as a “short-lived connection”, is a connection that is closed after a single request-response cycle is completed. In a non-persistent connection, each request requires a new connection to be established between the client and server. This means that the client must repeatedly establish a connection and send a new request to the server for each resource it needs, resulting in more overhead and slower performance. 

**Persistent connection**
On the other hand, a persistent connection, also known as a “keep-alive connection”, is a connection that remains open for multiple request-response cycles. In a persistent connection, multiple requests can be sent over the same connection without the need to repeatedly establish a new connection. This can result in faster performance and less overhead. Example: in chatting and gaming applications.

Have a look at some of the 'magical' functions provided by Sequelise which aid us in writing the queries in object oriented fashion: [Explore the magical functions](https://medium.com/@jsmney/a-more-in-depth-look-at-sequelizes-magic-methods-428928c70d58#:~:text=Magic%20methods%20are%20generated%20by,rows%20in%20a%20relational%20database.)