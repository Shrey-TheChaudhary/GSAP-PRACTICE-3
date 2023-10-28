gsap.registerPlugin(ScrollTrigger);

gsap.to(".arrow-down", {ScrollTrigger:".arrow-down", y: 10, repeat: -1, yoyo: true });
gsap.to(".arrow-up", {ScrollTrigger:".arrow-up", y: 10, repeat:-10, repeat: -1, yoyo: true });

const listItems = Array.from(document.getElementsByClassName("list__item"));

listItems.forEach((item, index) => {
  gsap.set(item, { opacity: 0, x: index % 2 ? 100 : -100 });

  gsap.to(item, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
      end: "bottom 10%", // Adjusted the end point
      toggleActions: "play reverse play reverse",
    }
  });
});
