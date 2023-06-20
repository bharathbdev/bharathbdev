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
