<script src="/socket.io/socket.io.js"></script>
<script>
    
    function test(){
        var socket = io.connect('http://192.168.1.3:3000');
        socket.on('news', function (data) {
            console.log(data);
            socket.emit('my other event', {my: data });
        });
    };
</script>