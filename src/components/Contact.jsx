export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Vous pouvez me contacter via ce formulaire ou par email.</p>
      <form>
        <input placeholder="Nom" />
        <input placeholder="Email" />
        <textarea placeholder="Message" rows="4" />
        <button type="submit">Envoyer</button>
      </form>
      <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '1rem' }}>
        Email : yoan.pouxbories@gmail.com
      </p>
    </section>
  );
}
