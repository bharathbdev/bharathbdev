https://livecodestream.dev/post/how-to-work-with-worker-threads-in-nodejs/
https://www.digitalocean.com/community/tutorials/node-js-architecture-single-threaded-event-loop#node-js-architecture



    cluster
will create a mutiple process and share same server port to handle incoming request
ecah process run on separate cpu core

use when scalibility is required
pm2 is an example
he cluster module simplifies the creation and management of a cluster of Node.js processes.
    It provides an easy way to spawn child processes, balance incoming connections across the processes, and
handle inter-process communication.





worker
will create a single process but multiple thread executing paraallely
cpu intensive task








Child processes are suitable for running independent tasks,
    whereas clusters are designed to distribute the workload across multiple processes within a single application.





child process


In Node.js, a child process is a separate executable or script that can be spawned and executed independently
from the main Node.js process. Child processes are useful when you need to run external programs or scripts,
    perform CPU-intensive tasks, or take advantage of multiple CPU cores.




fork is special instance of spawn

exec
This function is used to execute a command in a shell and buffers the output for you to access
is for small data 200kb it will return taht tooo in buffer


execfile
This function is similar to exec(), but it allows you to execute a file directly instead of using a shell.




    spawn
This function is used to spawn a new process and allows for streaming data between the parent and child processes.
used for large data in stream
it will run on differnet process but smae v8 engine



fork
This function is specifically designed for creating child processes that run Node.js modules.
it will run on differnt v8 engine











In summary, workers in a cluster are instances of your Node.js application that run independently to handle tasks or requests concurrently. The cluster module facilitates the creation and management of a cluster of workers, providing load balancing, process management, and inter-process communication features. Child processes, on the other hand, are spawned from the main Node.js process and can execute different code or scripts independently, making them suitable for running external programs or performing CPU-intensive tasks.









As of my understanding, given below is an analogy to understand the concept easily.

Imagine you're running a busy restaurant, and you need to manage the kitchen efficiently to handle various orders. Your restaurant represents your Node.js application, and the kitchen represents the backend processing tasks that your application needs to perform.

Single Thread:
Think of your kitchen as having only one chef. This chef can handle one order at a time. If the chef is busy cooking a steak, they can't simultaneously start preparing a salad. Similarly, in a single-threaded Node.js application, tasks are handled sequentially. If one task is taking a long time to complete (like cooking a complicated dish), it can block the entire process, leading to slower performance for other tasks.

Child Processes:

Now, let's say your restaurant becomes extremely busy, and one chef isn't enough to handle all the orders efficiently. You decide to hire additional chefs to help in the kitchen. Each additional chef represents a child process. These chefs can work independently of each other, allowing multiple orders to be prepared simultaneously. For example, one chef can focus on grilling steaks while another chef prepares salads. Similarly, in Node.js, child processes enable parallel execution of tasks by spawning additional instances of the Node.js runtime. Each child process operates independently, improving performance by utilizing multiple CPU cores.

Worker Threads:

Imagine that instead of hiring entirely new chefs, you provide the existing chef with assistants to help with certain tasks. These assistants represent worker threads. They can help chop vegetables, prepare ingredients, or handle other tasks that can be done concurrently with the chef's main cooking activities. Similarly, worker threads in Node.js enable parallel execution of tasks within a single Node.js process. They share memory with the main thread and can assist in performing CPU-intensive tasks, thereby improving performance without the overhead of spawning separate processes.

Clusters:

Finally, let's consider the concept of clusters. Suppose your restaurant becomes extremely popular, and you decide to open additional branches in different locations to handle the high demand. Each branch operates independently, with its own kitchen and staff. Each branch represents a cluster in Node.js. In a clustered Node.js application, multiple instances of the application (each running on its own server) are created to distribute the workload across different machines. This allows your application to handle a larger number of concurrent requests by utilizing the combined resources of multiple servers.






https://alvinlal.netlify.app/blog/single-thread-vs-child-process-vs-worker-threads-vs-cluster-in-nodejs





