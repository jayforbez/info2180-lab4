document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-btn');

    searchButton.addEventListener('click', () => {
        // Make AJAX request using fetch API to superheroes.php
        fetch('superheroes.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                // Display the raw HTML string response in a JavaScript alert box
                alert(data);
            })
            .catch(error => {
                console.error('Error fetching superheroes:', error);
            });
    });
});