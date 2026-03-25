async function run() {
    try {


        console.log('I am');
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data);
        console.log('YES!');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
run();
