document.getElementById('getFactButton').addEventListener('click', async function() {
    const number = document.getElementById('numberInput').value;
    const factDisplay = document.getElementById('factDisplay');

    if (number) {
        factDisplay.innerText = 'Loading...';
        try {
            // Using the api.math.tool endpoint
            const response = await fetch(`https://api.math.tool/number/fact/${number}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    // Add authorization if needed
                    // 'Authorization': 'Bearer YOUR_API_KEY'
                }
            });
            
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Unauthorized. Please check your API key.');
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            }
            
            const data = await response.json();
            // Adjust the next line based on the actual structure of the response
            factDisplay.innerText = data.result || data.fact || JSON.stringify(data);
        } catch (error) {
            factDisplay.innerText = 'Error fetching fact. Please try again.';
            console.error('Error fetching fact:', error);
        }
    } else {
        factDisplay.innerText = 'Please enter a number.';
    }
});
