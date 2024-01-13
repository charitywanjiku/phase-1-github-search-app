
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('github-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        showGithubUserProfile();
    });

    function showGithubUserProfile() {
        let username = document.getElementById("search").value;
        console.log('Username:', username);

        let url = 'https://api.github.com/users/' + username;
        console.log('API URL:', url);

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log('GitHub API Response:', data);

                if (data.message) {
                    document.getElementById('main').innerHTML = `
                        <h3>Oops! Profile Not Found</h3>
                    `;
                } else {
                    document.getElementById('main').innerHTML = `
                        <img src="${data.avatar_url}" style="width:20%">
                        <p>Username:${data.name}</p>  
                       <p>Name: (${data.login})</p>
                        <p> Bio:${data.bio}</p>
                        <p>Public Repositories: ${data.public_repos}</p>
                    `;
                }
            })
            .catch(e => {
                console.error('Fetch error:', e);
            });
    }
});

