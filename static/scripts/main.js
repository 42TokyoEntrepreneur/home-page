document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.querySelector(".btn-primary");
  const aboutSection = document.getElementById("about");

  if (scrollButton && aboutSection) {
    scrollButton.addEventListener("click", (e) => {
      e.preventDefault();
      smoothScrollTo(aboutSection.offsetTop, 800);
    });
  }
});

/**
 * スムーズスクロールを実現する関数
 * @param {number} targetY スクロール先のY座標
 * @param {number} duration アニメーションの持続時間（ミリ秒）
 */
function smoothScrollTo(targetY, duration) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * ease);

    if (elapsed < duration) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}

/**
 * イージング関数（easeInOutQuad）
 * @param {number} t 進捗率（0～1）
 * @returns {number} イージング後の値
 */
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
