# Parallel_Iteration_and_Parallel_Mapping

1. Parallel asynchronous iteration. There are some messages in array, which will be sent in parallel. After they all finished, callback function will be called at the end. 

cd eachAsync 
node client.js

2. Parallel asynchronous mapping. It is exactly same as the one above, except the send function will return value to callback function, and the callback function will print them out. 

cd mapAsync
node client.js


