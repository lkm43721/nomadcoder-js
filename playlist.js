const playlist = document.querySelector("#playlist");

const Pl = [
    "https://www.youtube.com/embed/8p4e0URzGyE?si=QrkBMrVvQkp6ztKU",

    "https://www.youtube.com/embed/pvLHMw_Mm-k?si=jdjz2rpL10AAeTil",

    "https://www.youtube.com/embed/1s84rIhPuhk?si=Ri3u0KzHlcH1xI9t",

    "https://www.youtube.com/embed/cyQ_Th2wkoU?si=L4sOJsYXMGQOUFRm",

    "https://www.youtube.com/embed/-tKVN2mAKRI?si=OrDLVARqtMGbRnIV",

    "https://www.youtube.com/embed/5yb2N3pnztU?si=vOzQqmIkuiTRjwNK",

    "https://www.youtube.com/embed/CTmD3U48p7I?si=6qZG1RnInCNzdJ0q",

    "https://www.youtube.com/embed/WwmJBidyLJE?si=8PgRjUNSSTMe5r-9",

    "https://www.youtube.com/embed/Wgi0vWNWXjg?si=TAXLrV21UywNXcai",

    "https://www.youtube.com/embed/911WzKbgPXI?si=gPzTeAuElDO6Mb8a",

    "https://www.youtube.com/embed/EjgOD9vruTE?si=vQ5vkoi_P0j5JJ3Y",

    "https://www.youtube.com/embed/Mi9uNu35Gmk?si=EkOWidYfIfYP-pd6",

    "https://www.youtube.com/embed/dy90tA3TT1c?si=6qxcLyAM2cAtG8u4",

    "https://www.youtube.com/embed/prP9a1GHx4E?si=T0zqEAnTRO6yPAUL",

    "https://www.youtube.com/embed/aR2ZkMh_imw?si=XMT_bRbqlHwoWhN5",

    "https://www.youtube.com/embed/7_QqVvAwrPw?si=8MJzMd76nU0_QbnW",
];

const ranPl = Pl[Math.floor(Math.random() * Pl.length)];
playlist.src = ranPl;