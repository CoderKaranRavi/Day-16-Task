(function startCountdown(callback) {
    countdown(10, function() {
        countdown(9, function() {
            countdown(8, function() {
                countdown(7, function() {
                    countdown(6, function() {
                        countdown(5, function() {
                            countdown(4, function() {
                                countdown(3, function() {
                                    countdown(2, function() {
                                        countdown(1, function() {
                                            displayMessage("Happy Independence Day");
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
})();

function countdown(num, callback) {
    setTimeout(function() {
        console.log(num);
        callback();
    }, 1000);
}

function displayMessage(message) {
    console.log(message);
}