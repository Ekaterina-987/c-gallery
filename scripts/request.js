import { postText, postHastags, fileUpload, postStep1, postStep2, modalFooter } from './newFoto.js';
import { newPost, bodyOverlay } from './newPost.js';
import { clearContent } from './closure.js';

const alertSuccess = document.querySelector('#alert-success');
const alertFail = document.querySelector('#alert-fail');
const URL = "https://c-gallery.polinashneider.space/api/v1/posts/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3MTc3MTYzLCJpYXQiOjE2NzIzMzg3NjMsImp0aSI6IjU4YWFhMGRjMDEwNDQ0NDc4YTk1ZWQ2NmFkN2RiNTFlIiwidXNlcl9pZCI6MjZ9.q_cjugFIBSy4xsGbj_kN1DokdBqrNpwxJxHOdzquUsM";
let success;

function sendRequest() {
    const data = new FormData();
    data.append('image', fileUpload.files[0]);
    data.append('text', postText.value);
    data.append('tags', postHastags.value);
    fetch(URL, {

            method: "POST",
            headers: {
                Authorization: token,
            },
            body: data,

        })
        .then((result) => {
            showSuccess();
            setTimeout(function() {
                document.querySelector('.alert--success').style.display = 'none';
            }, 2000);
        })
        .catch((error) => {
            showError();
            setTimeout(function() {
                document.querySelector('.alert--error').style.display = 'none';
            }, 2000);
        })

    newPost.classList.remove('active');
    bodyOverlay.classList.remove('active');
    document.body.classList.remove('with-overlay');
    postStep1.classList.remove('hidden');
    postStep2.classList.add('hidden');
    modalFooter.classList.add('hidden');
    clearContent();

}

function showSuccess() {
    success = alertSuccess.content.cloneNode(true);
    document.body.append(success);
}

function showError() {
    const fail = alertFail.content.cloneNode(true);
    document.body.append(fail);
}
export { sendRequest }