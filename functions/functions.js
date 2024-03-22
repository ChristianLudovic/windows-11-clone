//open the start menu on click 

const windowsIcon = document.querySelector('.windows-icon');
const startMenu = document.querySelector('.start-menu');
 
let clickCount = 0;

export function openStartMenu() {

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

//close start menu on click outside 


export function closeStartMenu() {
    document.addEventListener('click', (e) => {
        if (!startMenu.contains(e.target) && !windowsIcon.contains(e.target)) {
            startMenu.classList.remove('active');
            windowsIcon.classList.remove('windows-icon-active');
            clickCount = 0;
        }
    });
}
