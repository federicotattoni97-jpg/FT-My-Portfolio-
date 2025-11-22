// CONFIG CLOUDINARY (le immagini sono nella root)
const images = [
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790399/photo_1_s1rt3j.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790417/photo_2_qqvekx.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790425/photo_3_sdbwrt.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790435/photo_4_loaodr.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790429/photo_5_yevx9y.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790430/photo_6_ukixyg.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790453/photo_7_yhlgjd.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790453/photo_8_ydac9i.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790454/photo_9_owlg1x.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790400/photo_10_io2stk.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790401/photo_11_tciz3g.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790424/photo_12_pjz4pl.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790404/photo_13_iib6ed.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790407/photo_14_jmvlwq.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790406/photo_15_nw0f67.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790408/photo_16_bzmoi1.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790413/photo_17_zusoyn.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790416/photo_18_k0kjax.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790416/photo_19_npxqtr.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790419/photo_20_qmny14.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790420/photo_21_p6y395.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790423/photo_22_kt6usq.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790423/photo_23_rogwde.jpg",
    "https://res.cloudinary.com/dosqmq1bf/image/upload/v1763790424/photo_24_jidjsn.jpg"
];

// CAROUSEL (prime 6 foto)
const carousel = document.getElementById("carousel");
if (carousel) {
    images.slice(0, 6).forEach(url => {
        const img = document.createElement("img");
        img.loading = "lazy";
        img.src = url;
        img.alt = "Highlight photo";
        carousel.appendChild(img);
    });
}

// GALLERY (foto dalla 7 in poi)
const gallery = document.getElementById("gallery");
if (gallery) {
    images.slice(6).forEach((url, i) => {
        const img = document.createElement("img");
        img.src = url;
        img.alt = `Gallery photo ${i + 7}`;
        img.classList.add("gallery-photo");
        img.loading = "lazy";
        gallery.appendChild(img);
    });
}

// LIGHTBOX FULLSCREEN
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

document.addEventListener("click", e => {
    if (e.target.classList.contains("gallery-photo") || e.target.parentElement?.classList.contains("carousel")) {
        lightbox.style.display = "flex";
        lightboxImg.src = e.target.src;
    }
});

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

if (lightbox) {
    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) lightbox.style.display = "none";
    });
}
