export const intersection = {
  inserted(el, bindings, vnode) {
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries.length && entries[0].isIntersecting) {
        vnode.elm.dispatchEvent(
          new CustomEvent("intersects", { detail: bindings.value })
        );
        if (bindings.value) observer.unobserve(el);
      }
    });
    observer.observe(el);
  }
};
