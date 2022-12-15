# GRPC Demo


This branch consists of two folders for GRpc testing,

- grpc-demo-server
- grpc-demo-client

### grpc-demo-server
- start the dev server with `yarn start:dev`
- it consists of two routes, one for REST API & other for GRPC,
- the path for both is `/rest-add` & `/grpc-add` respectively.


### grpc-demo-client
- start the dev server with `yarn start:dev`
- it consists of three routes, one for REST API, other for GRPC, and normal add route,
- the path for those routes are `/rest-add`, `/grpc-add` & `/add`.
- The `/rest-add`, `/grpc-add` internally calls the API of `grpc-demo-server`

To test the benchmark report for the `/rest-add`, `/grpc-add` endpoints,
Install Autocannon with `npm i autocannon -g` and run the commands in the terminal to see the results, make sure both the servers are on :- 
- `autocannon localhost:3000/add -c 10 -d 5`
- `autocannon localhost:3000/rest-add -c 10 -d 5`
- `autocannon localhost:3000/grpc-add -c 10 -d 5`