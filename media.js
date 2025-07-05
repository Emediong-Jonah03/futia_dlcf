// media.js

document.addEventListener("DOMContentLoaded", () => {
    // === Audio List ===
    const audios = [
      { src: "audio/sermon1.mp3", title: "Sunday Message" },
      { src: "audio/sermon2.mp3", title: "Campus Revival" },
      { src: "audio/sermon3.mp3", title: "Prayer Night" },
      { src: "audio/sermon4.mp3", title: "Faith Teaching" }
    ];
  
    const audioList = document.getElementById("audio-list");
    if (audioList) {
      audios.forEach(audio => {
        const el = document.createElement("audio");
        el.controls = true;
        el.title = audio.title;
  
        const source = document.createElement("source");
        source.src = audio.src;
        source.type = "audio/mpeg";
  
        el.appendChild(source);
        audioList.appendChild(el);
      });
    }
  
    // === Video List ===
    const videos = [
      { src: "videos/retreat-highlight.mp4", title: "Retreat Highlights" },
      { src: "videos/crusade2024.mp4", title: "Crusade 2024" }
    ];
  
    const videoList = document.getElementById("video-list");
    if (videoList) {
      videos.forEach(video => {
        const el = document.createElement("video");
        el.controls = true;
        el.title = video.title;
  
        const source = document.createElement("source");
        source.src = video.src;
        source.type = "video/mp4";
        
        el.classList.add("fade-in");

        el.appendChild(source);
        videoList.appendChild(el);
      });
    }
  
    // === Gallery ===
    const images = [
      "assets/pic1.jpg",
      "assets/pic2.jpg",
      "assets/pic3.jpg",
      "assets/pic4.jpg"
    ];
  
    const gallery = document.getElementById("gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");
  
    if (gallery) {
      images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Gallery photo";
        img.addEventListener("click", () => {
          lightboxImage.src = src;
          lightbox.style.display = "flex";
        });
        gallery.appendChild(img);
      });
    }
  
    if (closeLightbox && lightbox) {
      closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
      });
    }
  
    // === Downloads ===
    const downloads = [
      { file: "downloads/bible-study-outline.pdf", label: "📘 Bible Study Outline" },
      { file: "downloads/campus-pearl-magazine.pdf", label: "📰 Campus Pearl Magazine" },
      { file: "downloads/event-flyer.pdf", label: "📄 Event Flyer" }
    ];
  
    const downloadList = document.getElementById("download-list");
    if (downloadList) {
      downloads.forEach(doc => {
        const link = document.createElement("a");
        link.href = doc.file;
        link.textContent = doc.label;
        link.download = "";
        link.classList.add("download-btn");
        downloadList.appendChild(link);
      });
    }
  
    // === Scroll To Top ===
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
      window.addEventListener("scroll", () => {
        scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
      });
  
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
  