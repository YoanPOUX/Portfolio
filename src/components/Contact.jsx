export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600 mb-6">
          Tu peux me contacter via ce formulaire ou par email.
        </p>

        <form className="grid gap-4">
          <input className="border p-3 rounded" placeholder="Nom" />
          <input className="border p-3 rounded" placeholder="Email" />
          <textarea className="border p-3 rounded" placeholder="Message" rows="4" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Envoyer
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Email : yoan.pouxbories@gmail.com
        </p>
      </div>
    </section>
  );
}
