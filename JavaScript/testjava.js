const uploadCard = document.getElementById("uploadCard");
const videoInput = document.getElementById("videoInput");
const browseBtn = document.getElementById("browseBtn");
const videoPreview = document.getElementById("videoPreview");
const videoTag = videoPreview.querySelector("video");
const progressBar = document.getElementById("progressBar");

uploadCard.addEventListener("click", () => videoInput.click());
browseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  videoInput.click();
});

videoInput.addEventListener("change", () => {
  handleFile(videoInput.files[0]);
});

uploadCard.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadCard.style.borderColor = "#3ea6ff";
});

uploadCard.addEventListener("dragleave", () => {
  uploadCard.style.borderColor = "#3e3e3e";
});

uploadCard.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadCard.style.borderColor = "#3e3e3e";
  handleFile(e.dataTransfer.files[0]);
});

function handleFile(file) {
  if (file && file.type.startsWith("video/")) {
    const url = URL.createObjectURL(file);
    uploadCard.style.display = "none";
    videoPreview.style.display = "block";
    videoTag.src = url;
    simulateUpload();
  }
}

function simulateUpload() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 5;
    progressBar.style.width = progress + "%";
    if (progress >= 100) clearInterval(interval);
  }, 150);
}
