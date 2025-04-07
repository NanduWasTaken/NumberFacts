document.getElementById('getFactButton').addEventListener('click', function() {
    const number = document.getElementById('numberInput').value;
    if (number) {
        fetch(`http://numbersapi.com/${number}`)
            .then(response => response.text())
            .then(fact => {
                document.getElementById('factDisplay').innerText = fact;
            })
            .catch(error => {
                document.getElementById('factDisplay').innerText = 'Error fetching fact. Please try again.';
                console.error('Error fetching fact:', error);
            });
    } else {
        document.getElementById('factDisplay').innerText = 'Please enter a number.';
    }
});
