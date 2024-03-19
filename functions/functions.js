//open the start menu on click 

const windowsIcon = document.querySelector('.windows-icon');
const startMenu = document.querySelector('.start-menu');

export function openStartMenu() {

    let clickCount = 0;

    if (windowsIcon) {
        windowsIcon.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 1) {
                startMenu.classList.add('active');
                windowsIcon.classList.add('windows-icon-active');
            } else if (clickCount === 2) {
                startMenu.classList.remove('active');
                windowsIcon.classList.remove('windows-icon-active');
                clickCount = 0;
            }
        });
    }


    
}
