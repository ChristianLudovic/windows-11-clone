//open the start menu on click 

const windowsIcon = document.querySelector('.windows-icon');
const startMenu = document.querySelector('.start-menu');

export function openStartMenu() {
    windowsIcon.addEventListener('click', () => {
        startMenu.classList.add('active');
    });
}
