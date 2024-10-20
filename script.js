// Register
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const inviteCode = document.getElementById('inviteCode').value;

    try {
        const response = await fetch('https://your-api-url/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, inviteCode })
        });

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

// Login
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('https://your-api-url/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        alert(data.message);
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

// Create Post
document.getElementById('post-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = document.getElementById('content').value;

    try {
        const response = await fetch('https://your-api-url/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        });

        const data = await response.json();
        alert(data.message);
        loadPosts(); // Reload posts after creating a new one
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

// Load Posts
async function loadPosts() {
    try {
        const response = await fetch('https://your-api-url/posts');
        const posts = await response.json();

        const postsDiv = document.getElementById('posts');
        postsDiv.innerHTML = ''; // Clear previous content
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.innerHTML = `<p>${post.author}: ${post.content}</p>`;
            postsDiv.appendChild(postDiv);
        });
    } catch (error) {
        alert('Error loading posts');
    }
}

// Load posts on page load
loadPosts();
