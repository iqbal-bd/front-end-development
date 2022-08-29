fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => setPosts(data))

const setPosts = (posts) =>{
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add("post");
        postDiv.innerHTML = `
            <h1>User ID: ${post.userId}</h1>
            <h2>User Post Number: ${post.id}</h2>
            <h3>Title: ${post.title}</h3>
            <p>Comment: ${post.body}</p>
            `
        postContainer.appendChild(postDiv);
        
    }
}