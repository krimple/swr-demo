# Sample SWR playground

This is a Next.JS React application, written using SWR, 
that queries a JSON resource server written in node.js.
It fails in two ways:

* when a json payload is incorrectly formed
* when a server-side error (500) condition exists

These happen randomly, along with a successful response
with a valid payload.

The URL for the server demo is `http://localhost:3000/demo`

To set up and run the Next.js app:

```bash
cd client
npm init
npm run dev
```

To set up and run the resource server

```bash 
cd server
npm init
npm start
```
