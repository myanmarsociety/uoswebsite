// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})
document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/logs')
        .then(response => response.json())
        .then(data => {
            console.log("Fetched logs:", data);
            // Display logs on the page (optional)
            document.getElementById("log-container").innerHTML =
                `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error("Error fetching logs:", error));
});
