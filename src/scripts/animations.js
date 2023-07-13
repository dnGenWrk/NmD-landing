const chooseAnimation = function (listClasses) {
  for (let val of listClasses) {
    if (val.includes("from-left-animation")) {
      console.log("HAS CLASS from-left-animation");
      return "animation_fade-from-left";
    }
    if (val.includes("from-right-animation")) {
      console.log("HAS CLASS from-right-animation");
      return "animation_fade-from-right";
    }

    if (val.includes("from-top-animation")) {
      console.log("HAS CLASS from-top-animation");
      return "animation_fade-from-top";
    }
    if (val.includes("from-bottom-animation")) {
      console.log("HAS CLASS from-bottom-animation");
      return "animation_fade-from-bottom";
    }
  }
};
const callback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      let trgtLists = entry.target.classList;
      let selectedAnimation = chooseAnimation(trgtLists);
      for (let val of trgtLists) {
        if (!val.includes(selectedAnimation)) {
          trgtLists.add(selectedAnimation);
        }
      }
    } else {
      //entry.target.classList.remove("animation_fade");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".animation-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});
