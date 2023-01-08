const newPost = document.querySelector('.add-post-modal');
const bodyOverlay = document.querySelector('.body-overlay');

function addPostModal() {
    newPost.classList.add('active');
    document.body.classList.add('with-overlay');
    bodyOverlay.classList.add('active');
}

export { addPostModal, newPost, bodyOverlay }