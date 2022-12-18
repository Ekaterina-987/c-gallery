const newFoto = document.querySelector('#file-upload');
const preview = document.querySelector('.add-post-modal__step-1');
const postTextFoto = document.querySelector('.add-post-modal__step-2');
const modalFooter = document.querySelector('.modal__footer');


function updateImageDisplay() {
    const curFiles = newFoto.files;

    for (const file of curFiles) {
        const listItem = document.querySelector('#uploaded-photo');
        if (validFileType(file)) {
            const image = document.createElement('img');
            image.src = URL.createObjectURL(file);
            listItem.appendChild(image);
        }
    }
    preview.classList.add('hidden');
    postTextFoto.classList.remove('hidden');
    modalFooter.classList.remove('hidden');
}

const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
];

function validFileType(file) {
    return fileTypes.includes(file.type);
}

export { updateImageDisplay, newFoto }