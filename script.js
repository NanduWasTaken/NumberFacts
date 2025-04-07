document.getElementById('getFactButton').addEventListener('click', function() {
    const number = document.getElementById('numberInput').value;
    const factDisplay = document.getElementById('factDisplay');

    if (number) {
        factDisplay.innerText = 'Loading...';
        
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`http://numbersapi.com/${number}?default=You+are+not+even+that+interesting%2C+how+do+you+expect+a+number+to+be%3F`)}`)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                factDisplay.innerText = data.contents;
            })
            .catch(error => {
                factDisplay.innerText = 'Error fetching fact. Please try again.';
                console.error('Error fetching fact:', error);
            });
    } else {
        factDisplay.innerText = 'Please enter a number.';
    }
});
