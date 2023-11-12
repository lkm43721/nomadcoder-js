const img = [
    "https://i.pinimg.com/originals/7b/1b/b6/7b1bb67b642f2665a0709a26e57300e1.gif", 
    "https://art.pixilart.com/sr26cba67f65d0a.gif",
    "https://i.pinimg.com/originals/34/d7/a3/34d7a3bbe7ab056f213e66c7182dd57e.gif",
    "https://cdna.artstation.com/p/assets/images/images/025/249/366/original/lennart-butz-ukiyo2.gif?1585180234",

];

const randomImg = img[Math.floor(Math.random() * img.length)];

document.body.style.backgroundSize = "cover";
document.body.style.backgroundImage = `url(${randomImg})`; 