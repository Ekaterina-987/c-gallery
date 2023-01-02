const fileUpload = document.querySelector('#file-upload');
const preview = document.querySelector('.add-post-modal__step-1');
const postStep2 = document.querySelector('.add-post-modal__step-2');
const modalFooter = document.querySelector('.modal__footer');
const img = document.querySelector('#uploaded-photo');
//const postInputsWrapper = document.querySelector('.add-post-modal__inputs-wrapper');
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


/*let f = newFoto.files[0];
    if (f) {
        image.src = URL.createObjectURL(f);
        localStorage.setItem('myImage', image.src)
    }*/

/*function updateImageDisplay() {
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
}*/

export { updateImageDisplay, fileUpload, img, postText, postHastags }