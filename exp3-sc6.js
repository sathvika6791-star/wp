fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        console.log("Data fetched successfully:", data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });