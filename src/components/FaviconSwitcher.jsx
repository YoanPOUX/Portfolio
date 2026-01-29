import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function FaviconSwitcher() {
  const { pathname } = useLocation();

  useEffect(() => {
    const linkSelector = "link[rel*='icon']";
    let link = document.querySelector(linkSelector);
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'icon');
      document.head.appendChild(link);
    }

    const getFavicon = (path) => {
      if (path === '/' || path === '') return '/favicon-home.svg';
      if (path.startsWith('/skills')) return '/favicon-skills.svg';
      if (path.startsWith('/projects')) return '/favicon-projects.svg';
      return '/favicon-home.svg';
    };

    const href = getFavicon(pathname);
    if (link.href && link.href.endsWith(href)) return; // no change
    link.setAttribute('type', 'image/svg+xml');
    link.setAttribute('href', href);

    // small hack to force reload in some browsers
    const img = document.createElement('img');
    img.src = href;
  }, [pathname]);

  return null;
}
