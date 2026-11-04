document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const resultDiv = document.getElementById('result');

    searchButton.addEventListener('click', () => {
        // Sanitize user input by trimming whitespace and escaping potentially dangerous HTML entities
        const query = sanitizeInput(searchInput.value.trim());

        // Construct query parameter string
        const url = `superheroes.php?query=${encodeURIComponent(query)}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                // Update the #result div with the response from superheroes.php
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                resultDiv.innerHTML = '<p class="not-found">An error occurred while processing your request.</p>';
            });
    });

    /**
     * Helper function to sanitize input strings against XSS attacks
     */
    function sanitizeInput(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }
});