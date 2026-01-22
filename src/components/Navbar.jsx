export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-lg">Yoan POUX--BORIES</span>
        <div className="space-x-4 text-sm">
          <a href="#home" className="hover:text-blue-600">Accueil</a>
          <a href="#about" className="hover:text-blue-600">À propos</a>
          <a href="#projects" className="hover:text-blue-600">Projets</a>
          <a href="#skills" className="hover:text-blue-600">Compétences</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
