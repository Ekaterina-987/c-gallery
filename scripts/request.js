import { img, postText, postHastags } from './newFoto.js';

const alertSuccess = document.querySelector('#alert-success');
const alertFail = document.querySelector('#alert-fail');

function sendRequest() {
    const data = new FormData();
    data.append('image', img)
    data.append('text', postText)
    data.append('tags', postHastags)
    fetch('https://c-gallery.polinashneider.space/api/v1/posts/', {

            method: 'POST',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3MTc3MTYzLCJpYXQiOjE2NzIzMzg3NjMsImp0aSI6IjU4YWFhMGRjMDEwNDQ0NDc4YTk1ZWQ2NmFkN2RiNTFlIiwidXNlcl9pZCI6MjZ9.q_cjugFIBSy4xsGbj_kN1DokdBqrNpwxJxHOdzquUsM'
            },
            body: data,
        })
        .then((result) => {
            showSuccess;
        })
        .catch((error) => {
            showError;
        })
}

function showSuccess() {
    const success = alertSuccess.content.cloneNode(true);
    document.body.append(success);
    setTimeout(success.style.display = 'none', 2000);
    return success;
}

function showError() {
    const fail = alertFail.content.cloneNode(true);
    document.body.append(fail);
    setTimeout(fail.style.display = 'none', 2000);
    return fail;
}


export { sendRequest }