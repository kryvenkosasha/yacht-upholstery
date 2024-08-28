

export default function Reviews(){
  const reviews = [
    {
      name: "Jan K.",
      review:
        "Niesamowita praca! Mój jacht wygląda jak nowy dzięki ich niesamowitej dbałości o szczegóły.",
    },
    {
      name: "Sara M.",
      review:
        "Materiały najwyższej jakości i bezbłędne wykonanie. Mój samochód nigdy nie wyglądał lepiej!",
    },
    {
      name: "Michał B.",
      review:
        "Profesjonalna i niezawodna obsługa. Gorąco polecam każdemu, kto szuka tapicerki premium.",
    },
  ];

  return (
    <section id="reviews" aria-labelledby="reviews-heading">
      <h3 id="reviews-heading">Opinie klientów</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index} className="review-item">
            <h4>{review.name}</h4>
            <p>{review.review}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};