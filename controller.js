/**
 * Init checkbox, label and logo
 */
function init() {
    let checkboxMoodCom = document.getElementById("change-theme");
    checkboxMoodCom.checked = false;

    let labelLogoMoodCom = document.getElementById("label-logo-moodcom");
    labelLogoMoodCom.innerHTML = "Logo MoodCom - Light Mode";

    let logoMoodCom = document.getElementById("logo-moodcom");
    logoMoodCom.setAttribute('src', '../../assets/img/ptut-4a/logo_light.png');

    let logoLink = document.getElementById("logo-link");
    logoLink.setAttribute('href', '../../assets/img/ptut-4a/logo_light.png');
}

/**
 * Change logo, label and link with checkbox state
 */
function changeTheme() {
    let checkboxMoodCom = document.getElementById("change-theme");
    let labelLogoMoodCom = document.getElementById("label-logo-moodcom");
    let logoMoodCom = document.getElementById("logo-moodcom");
    let logoLink = document.getElementById("logo-link");
    if (checkboxMoodCom.checked == false){
        labelLogoMoodCom.innerHTML = "Logo MoodCom - Light Mode";
        logoMoodCom.setAttribute('src', '../../assets/img/ptut-4a/logo_light.png');
        logoLink.setAttribute('href', '../../assets/img/ptut-4a/logo_light.png');
    }
    else{
        labelLogoMoodCom.innerHTML = "Logo MoodCom - Dark Mode";
        logoMoodCom.setAttribute('src', '../../assets/img/ptut-4a/logo_dark.png');
        logoLink.setAttribute('href', '../../assets/img/ptut-4a/logo_dark.png');
    }
}