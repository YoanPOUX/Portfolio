export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gray-50 text-center">
      <img
        src="/photo.jpg"
        alt="Yoan"
        className="w-32 h-32 mx-auto rounded-full border-4 border-blue-600 mb-4"
      />
      <h1 className="text-3xl font-bold">Yoan POUX--BORIES</h1>
      <p className="text-blue-600 font-medium mt-2">
        Développeur d’applications
      </p>
      <p className="max-w-xl mx-auto mt-4 text-gray-600">
        Étudiant en informatique passionné par le développement logiciel et web.
        J’aime concevoir des solutions concrètes et utiles, du besoin jusqu’à la mise en production.
      </p>
      <div className="mt-6 space-x-4">
        <a href="#projects" className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700">
          Voir mes projets
        </a>
        <a href="/cv.pdf" className="border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-50">
          Télécharger CV
        </a>
      </div>
    </section>
  );
}
