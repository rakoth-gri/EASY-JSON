class MyObserver {
  constructor(root, selector) {
    this.targets = document.querySelectorAll(selector);
    this.options = {
      root,
      rootMargin: "0px",
      threshold: 0.5,
    };
    this.observer = new IntersectionObserver(
      this.featuresObserverCallback,
      this.options
    );
    this.init(this.targets, this.observer);
    console.log(this);
  }

  featuresObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle('active');
        observer.unobserve(entry.target);
      }
    });
  };

  init(targets, observer) {
    targets.forEach((entity) => observer.observe(entity));
  }
}

export { MyObserver };
