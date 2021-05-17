function createWebserver() {
    function start() {
        console.log('> [webserver] Starting...');
        console.log('> [webserver] Waiting for port to be available...');
        console.log('> [webserver] Starting done!');
    }

    function stop() {
        console.log('> [database] Stopping...');
        console.log('> [database] Gracefully waiting for all clients...');
        console.log('> [database] Clossing all ports...');
        console.log('> [database] Stopping done!');
    }

    return {
        start,
        stop
    }
}

export default createWebserver;