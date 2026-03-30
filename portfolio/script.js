const carousel = document.getElementById("carousel");

// Hover vào → dừng
carousel.addEventListener("mouseover", function () {
    carousel.style.animationPlayState = "paused";
});

// Rời chuột → chạy tiếp
carousel.addEventListener("mouseout", function () {
    carousel.style.animationPlayState = "running";
});