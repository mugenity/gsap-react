import { TimelineMax } from "gsap";

const tlm = new TimelineMax();

export const openMenuAnim = (openMenu, closeMenu, menuOpens) => {
  tlm.reverse();
  tlm.to(openMenu.current, 1.6, {
    opacity: 0,
    rotation: 180,
  });
  tlm.to(
    closeMenu.current,
    1.6,
    {
      opacity: 1,
      rotation: 180,
    },
    "-=.9"
  );
  tlm.to(
    menuOpens.current,
    1.6,
    {
      scale: 1,
    },
    "-=1"
  );
};
