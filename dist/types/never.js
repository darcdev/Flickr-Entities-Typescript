/**
 * Never
 */
function handleError(code, message) {
    // Process your code
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (_a) {
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10);
