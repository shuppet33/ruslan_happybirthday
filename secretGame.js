import {drawSecret} from "./index.js";
import {secret} from "./state.js";

export function secretModal() {
    const modalBox = document.getElementById('secret')
    const overlay = document.getElementById('overlay')
    const closeButton = modalBox.querySelector('.close')

    closeButton.removeEventListener('click', closeModal)

    modalBox.classList.remove('hidden')
    overlay.classList.remove('hidden')
    secret.modalSecret = true

    closeButton.addEventListener('click', closeModal)

    function closeModal(event) {
        modalBox.classList.add('hidden')
        overlay.classList.add('hidden')

        drawSecret();
    }
}