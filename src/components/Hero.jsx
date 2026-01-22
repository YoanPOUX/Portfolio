export default function Hero() {
  return (
    <section id="home">
      <img src="/photo.jpg" alt="Yoan" />
      <h1>Yoan POUX--BORIES</h1>
      <p>Développeur d’applications</p>
      <p>Étudiant en informatique passionné par le développement logiciel et web. J’aime concevoir des solutions concrètes et utiles, du besoin jusqu’à la mise en production.</p>
      <div className="buttons">
        <a href="#projects" className="primary">Voir mes projets</a>
        <a href="/cv.pdf" className="secondary" target="_blank">Télécharger CV</a>
      </div>
    </section>
  );
}
