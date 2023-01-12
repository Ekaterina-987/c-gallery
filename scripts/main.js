import { addPostModal } from './newPost.js';
import { updateImageDisplay, fileUpload, postText, postHastags } from './newFoto.js';
import { sendRequest } from './request.js';
import { closeModal } from './closure.js';


const buttonPublication = document.querySelector('#add-photo');
const buttonFirstPost = document.querySelector('#add-first-post');
const buttonPublish = document.querySelector('#post-publish');

buttonPublication.addEventListener('click', addPostModal);

buttonFirstPost.addEventListener('click', addPostModal);

fileUpload.addEventListener('click', updateImageDisplay);

buttonPublish.addEventListener('click', sendRequest);

closeModal()