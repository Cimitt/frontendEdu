import { animate, inView } from "motion-v";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("motion", {
    mounted(el, binding) {
      const options = binding.value || {};

      const from = options.from || { opacity: 0, y: 40 };
      const to = options.to || { opacity: 1, y: 0 };

      const duration = options.duration || 0.8;
      const delay = options.delay || 0;
      const easing = options.easing || "ease-out";

      inView(el, () => {
        animate(
          el,
          { ...from, ...to ,easing },
          { duration, delay, }
        );
      });
    }
  });
});
