document.getElementById('getFactButton').addEventListener('click', async function() {
    const number = document.getElementById('numberInput').value;
    const factDisplay = document.getElementById('factDisplay');

    if (number) {
        try {
            const response = await fetch(`http://numbersapi.com/${number}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const fact = await response.text();
            factDisplay.innerText = fact;
        } catch (error) {
            factDisplay.innerText = 'Error fetching fact. Please try again.';
            console.error('Error fetching fact:', error);
        }
    } else {
        factDisplay.innerText = 'Please enter a number.';
    }
});
