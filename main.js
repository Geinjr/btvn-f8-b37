const mainImage = document.querySelector(".main-img");
const overlay = mainImage.querySelector(".overlay");
const subImage = document.querySelector(".sub-img");

mainImage.addEventListener("mousemove", function (e) {
    overlay.style.display = "block";
    subImage.style.display = "block";
    subImage.style.backgroundImage = mainImage.style.backgroundImage;
    const rect = mainImage.getBoundingClientRect();
    let mouseX = e.clientX - rect.left - overlay.offsetWidth / 2;
    let mouseY = e.clientY - rect.top - overlay.offsetHeight / 2;
    if (mouseX < 0) {
        mouseX = 0;
    }
    if (mouseY < 0) {
        mouseY = 0;
    }
    if (mouseX + overlay.offsetWidth > mainImage.offsetWidth) {
        mouseX = mainImage.offsetWidth - overlay.offsetWidth;
    }
    if (mouseY + overlay.offsetHeight > mainImage.offsetHeight) {
        mouseY = mainImage.offsetHeight - overlay.offsetHeight;
    }

    console.log(mouseX, mouseY);

    overlay.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    let zoomX = ((e.clientX - rect.left) / mainImage.offsetWidth) * 100;
    let zoomY = ((e.clientY - rect.top) / mainImage.offsetHeight) * 100;
    subImage.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
});

mainImage.addEventListener("mouseup", function (e) {
    overlay.style.display = "none";
    subImage.style.display = "none";
});
