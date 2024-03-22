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


// dark mode

export function darkMode() {

    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const lightIcon = document.querySelector('.light-mode');
    const darkIcon = document.querySelector('.dark-mode');
    const taskbar = document.querySelector('.task-bar');
    const wifiLight = document.querySelector('.wifiLight-mode');
    const wifiDark = document.querySelector('.wifiDark-mode');
    const timeDate = document.querySelector('.time-date');
    const soundLight = document.querySelector('.sound-light');
    const soundDark = document.querySelector('.sound-dark');
    const notificationLight = document.querySelector('.notification-light');    
    const notificationDark = document.querySelector('.notification-dark');


    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            lightIcon.classList.toggle('light-mode-active');
            darkIcon.classList.toggle('dark-mode-active');
            taskbar.classList.toggle('task-bar-dark');
            wifiLight.classList.toggle('wifiLight-mode-active');
            wifiDark.classList.toggle('wifiDark-mode-active');
            timeDate.classList.toggle('time-date-active');
            soundLight.classList.toggle('sound-light-active');
            soundDark.classList.toggle('sound-dark-active');
            notificationLight.classList.toggle('notification-light-active');
            notificationDark.classList.toggle('notification-dark-active');
        });
    }
}



