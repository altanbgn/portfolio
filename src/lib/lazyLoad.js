// See how the options work here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
}

export default (image, src) => {
  const loaded = () => {
    image.classList.add('visible')
  }
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      image.src = src

      if (image.complete) {
        loaded()
      } else {
        image.addEventListener('load', loaded)
      }
    }
  }, options)

  observer.observe(image)

  return {
    destroy() {
      image.removeEventListener('load', loaded)
    }
  }
}
