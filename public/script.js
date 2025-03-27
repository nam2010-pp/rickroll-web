document.getElementById("rickroll-btn").addEventListener("click", function () {
    document.getElementById("rickroll-btn").style.display = "none"; // Ẩn nút
    document.getElementById("video-container").style.display = "block"; // Hiện video
    document.getElementById("rickroll-video").play(); // Tự động phát video
});
