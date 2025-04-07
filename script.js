document.getElementById('getFactButton').addEventListener('click', function() {
    const number = document.getElementById('numberInput').value;
    const factDisplay = document.getElementById('factDisplay');

    if (number) {
        factDisplay.innerText = 'Loading...';
        
        // Create a script element for JSONP
        const script = document.createElement('script');
        script.src = `http://numbersapi.com/${number}?callback=showNumberFact`;
        document.body.appendChild(script);
        
        // Remove the script element after execution
        script.onload = function() {
            document.body.removeChild(script);
        };
        
        // Error handling
        script.onerror = function() {
            factDisplay.innerText = 'Error fetching fact. Please try again.';
            document.body.removeChild(script);
        };
    } else {
        factDisplay.innerText = 'Please enter a number.';
    }
});

// Callback function for JSONP
function showNumberFact(data) {
    document.getElementById('factDisplay').innerText = data;
}
