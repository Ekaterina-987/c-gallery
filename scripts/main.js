import { addPostModal } from './newPost.js';
import { updateImageDisplay, newFoto } from './newFoto.js';

const buttonPublication = document.querySelector('#add-photo');
const buttonFirstPost = document.querySelector('#add-first-post');
const postText = document.querySelector('.add-post-modal__step-2');
const buttonPublish = document.querySelector('#post-publish');

buttonPublication.addEventListener('click', addPostModal);

buttonFirstPost.addEventListener('click', addPostModal);

newFoto.addEventListener('click', updateImageDisplay);

buttonPublish.addEventListener('click', function() {
    const data = new FormData();
    data.append('image', image)
    data.append('text', text)
    fetch('https://c-gallery.polinashneider.space/api/v1/posts/', {

        method: 'POST',
        headers: {
            'Authorization': 'Bearer <eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1ODAwNTgyLCJpYXQiOjE2NzA5NjIxODIsImp0aSI6IjkzYWE2ZDZmNmRlYjQyZjVhMGQ0NjB>',
        },
        body: data,
    })
})