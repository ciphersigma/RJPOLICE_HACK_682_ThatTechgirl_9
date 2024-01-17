function submitPost() {
    const username = document.getElementById('username').value;
    const postContent = document.getElementById('postContent').value;

    const postContainer = document.getElementById('postContainer');

    const postBox = document.createElement('div');
    postBox.className = 'postBox';
    postBox.innerHTML = `<strong>${username}</strong>: ${postContent}`;

    postContainer.appendChild(postBox);

    // Clear input fields
    document.getElementById('username').value = '';
    document.getElementById('postContent').value = '';
}

function goBack() {
    window.history.back();
  }
  