let svgDuration = 1000;
let jsSvg = document.querySelector(".js-svg");
jsSvg.addEventListener("mouseenter", () => {
  fillAnimation("btw", "0", "easeInCubic", svgDuration);
  fillAnimation("ytb", "0", "easeInCubic", svgDuration);
});

jsSvg.addEventListener("mouseleave", () => {
  fillAnimation("btw", "100", "easeInCubic", svgDuration);
  fillAnimation("ytb", "100", "easeInCubic", svgDuration);
});

jsSvg.addEventListener("touchstart", () => {
  fillAnimation("btw", "0", "easeInCubic", svgDuration);
  fillAnimation("ytb", "0", "easeInCubic", svgDuration);
});
jsSvg.addEventListener("touchend", () => {
  fillAnimation("btw", "0", "easeInCubic", svgDuration);
  fillAnimation("ytb", "0", "easeInCubic", svgDuration);
});

function fillAnimation(targetId, offset, easing, duration) {
  anime({
    targets: `#${targetId} stop`,
    offset: `${offset}%`,
    easing: easing,
    duration: duration,
  });
}
