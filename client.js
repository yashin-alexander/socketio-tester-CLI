var address = process.argv[2]
var events_to_listen = process.argv[3]
var event_name_for_close_view = process.argv[4]


process.stdout.write('Address: ' + address + '. Events to listen: ' + events_to_listen + 
    ' Event for close view: ' + event_name_for_close_view + '\n')

var socket = require('socket.io-client')(address);


socket.on(events_to_listen, function(data){
    if (data.name == event_name_for_close_view){
        process.stdout.write('                                          \r');
        process.stdout.write(JSON.stringify(data, null, 2) + '\n-------------------');

    } else {
        process.stdout.write('                                          \r');
        process.stdout.write("Last broadcast event: " + data.name + "\r");
    }
});


socket.on('connect', function(){
    process.stdout.write('Connection established\n');
});


socket.on('disconnect', function(){
    process.stdout.write('Connection down\n');
});
