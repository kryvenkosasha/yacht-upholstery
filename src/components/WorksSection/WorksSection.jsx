


export default function Works(){
  const works = [
    {
      id: 1,
      image: "/images/yacht.jpg",
      description: "Kompleksowe wnętrze jachtu",
    },
    {
      id: 2,
      image: "/images/car.jpg",
      description: "Luksusowe fotele samochodowe",
    },
    {
      id: 3,
      image: "/images/yacht2.jpg",
      description: "Zamówione poduszki jachtowe",
    },
  ];

  return (
    <section id="works" aria-labelledby="works-heading">
      <h3 id="works-heading">Nasze prace</h3>
      <div className="works-gallery">
        {works.map((work) => (
          <figure key={work.id}>
            <img src={work.image} alt={work.description} />
            <figcaption>{work.description}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};