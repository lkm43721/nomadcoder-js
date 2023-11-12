const youtubeIcon = document.querySelector("#i1");
const twitchIcon = document.querySelector("#i2");
const chromeIcon = document.querySelector("#i3");
const twitterIcon = document.querySelector("#i4");
const instaIcon = document.querySelector("#i5");

function youtube()  {
    window.location.href = 'https://www.youtube.com/'
}

function twitch()  {
    window.location.href = 'https://www.twitch.tv/'
}

function chrome()  {
    window.location.href = 'https://www.google.com/'
}

function twitter()  {
    window.location.href = "https://twitter.com/home?lang=ko";
}

function insta()  {
    window.location.href = "https://www.instagram.com/";
}

youtubeIcon.addEventListener("click", youtube);
twitchIcon.addEventListener("click", twitch);
chromeIcon.addEventListener("click", chrome);
twitterIcon.addEventListener("click", twitter);
instaIcon.addEventListener("click", insta);