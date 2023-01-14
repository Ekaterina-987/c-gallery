import { newPost, bodyOverlay } from './newPost.js';
import { postStep1, postStep2, modalFooter } from './newFoto.js';

function closeModal() {
    bodyOverlay.addEventListener('click', function() {
        newPost.classList.remove('active');
        postStep1.classList.remove('hidden');
        postStep2.classList.add('hidden');
        modalFooter.classList.add('hidden');
        document.body.classList.remove('with-overlay');
        bodyOverlay.classList.remove('active');
        clearContent();
    })

    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 27) {
            newPost.classList.remove('active');
            postStep1.classList.remove('hidden');
            postStep2.classList.add('hidden');
            modalFooter.classList.add('hidden');
            document.body.classList.remove('with-overlay');
            bodyOverlay.classList.remove('active');
            clearContent();
        }
    })
}

function clearContent() {
    document.getElementById('uploaded-photo').src = '';
    document.getElementById('post-text').value = '';
    document.getElementById('post-hashtags').value = '';
    document.querySelector('input[type=file]').value = '';
}

export { closeModal, clearContent }