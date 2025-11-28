const fullscreenBtn = document.getElementById("fullscreenBtn");
const videoFrame = document.getElementById("driveVideo");

fullscreenBtn.addEventListener("click", () => {
    if (videoFrame.requestFullscreen) {
        videoFrame.requestFullscreen();
    } else if (videoFrame.webkitRequestFullscreen) {
        videoFrame.webkitRequestFullscreen();
    } else if (videoFrame.msRequestFullscreen) {
        videoFrame.msRequestFullscreen();
    }
});
