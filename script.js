document.getElementById('getFactButton').addEventListener('click', function() {
    const number = document.getElementById('numberInput').value;
    const factDisplay = document.getElementById('factDisplay');

    if (number) {
        // Remove any previously created script tags
        const oldScriptTag = document.getElementById('numberfact-script');
        if (oldScriptTag) {
            oldScriptTag.remove();
        }

        // Display loading message
        factDisplay.innerText = 'Loading...';

        // Create a global callback function
        window.showNumberFact = function(data) {
            factDisplay.innerText = data;
        };

        // Create and add the script tag
        const scriptTag = document.createElement('script');
        scriptTag.id = 'numberfact-script';
        scriptTag.src = `http://numbersapi.com/${number}?callback=showNumberFact`;
        document.body.appendChild(scriptTag);
    } else {
        factDisplay.innerText = 'Please enter a number.';
    }
});
