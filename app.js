document.querySelectorAll(".content-img").forEach((e) => {
  const imgs = e.querySelectorAll("img");
  new hoverEffect({
    parent: e,
    intensity1: 0.3,
    intensity2: 0.5,
    image1: imgs[0].getAttribute("src"),
    image2: imgs[1].getAttribute("src"),
    displacementImage: imgs[2].getAttribute("src"),
  });
});

AOS.init();
