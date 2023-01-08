const fileUpload = document.querySelector('#file-upload');
const preview = document.querySelector('.add-post-modal__step-1');
const postStep2 = document.querySelector('.add-post-modal__step-2');
const modalFooter = document.querySelector('.modal__footer');
const img = document.querySelector('#uploaded-photo');
const postText = document.querySelector('#post-text')
const postHastags = document.querySelector('#post-hashtags')

function updateImageDisplay() {

    fileUpload.addEventListener("change", () => {
        let file = fileUpload.files[0];
        img.src = URL.createObjectURL(file);
    });

    preview.classList.add('hidden');
    postStep2.classList.remove('hidden');
    modalFooter.classList.remove('hidden');
}


export { updateImageDisplay, fileUpload, postText, postHastags }