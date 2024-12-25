// Initialize like count from local storage
document.addEventListener('DOMContentLoaded', () => {
    const likeCountElement = document.getElementById('likecountcomment');
    const savedLikes = localStorage.getItem('likeCount') || 0;
    likeCountElement.textContent = savedLikes;
  });
  
  function likecomment() {
    const likeCountElement = document.getElementById('likecountcomment');
    let currentLikes = parseInt(likeCountElement.textContent, 10) || 0;
  
    // Toggle like/dislike
    if (likeCountElement.classList.contains('liked')) {
      currentLikes--; // Dislike
      likeCountElement.classList.remove('liked');
    } else {
      currentLikes++; // Like
      likeCountElement.classList.add('liked');
    }
  
    // Update the display and save to local storage
    likeCountElement.textContent = currentLikes;
    localStorage.setItem('likeCount', currentLikes);
  }

  //likecommentA

  document.addEventListener('DOMContentLoaded', () => {
    const likeCountElement = document.getElementById('likecountcommenta');
    const savedLikes = localStorage.getItem('likeCount') || 0;
    likeCountElement.textContent = savedLikes;
  });
  
  function likecommenta() {
    const likeCountElement = document.getElementById('likecountcommenta');
    let currentLikes = parseInt(likeCountElement.textContent, 10) || 0;
  
    // Toggle like/dislike
    if (likeCountElement.classList.contains('liked')) {
      currentLikes--; // Dislike
      likeCountElement.classList.remove('liked');
    } else {
      currentLikes++; // Like
      likeCountElement.classList.add('liked');
    }
  
    // Update the display and save to local storage
    likeCountElement.textContent = currentLikes;
    localStorage.setItem('likeCount', currentLikes);
  }
  