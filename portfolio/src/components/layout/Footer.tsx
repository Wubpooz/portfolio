import './Footer.css';

export default function FooterSection() {
  return (
  <footer className="flex flex-row w-full bg-(--surface) justify-around items-center px-4 py-10">
    <div className="flex gap-4">
      <p className="page-link"> Home </p>
      <p className="page-link"> Projects </p>
      <p> Blog </p>
    </div>
    <a href="https://github.com/Wubpooz/portfolio"> Source code</a>
    <p>Copyright © 2026 Mathieu Waharte. All rights reserved.</p>
    {/* lighter gray */}
    <a href="https://www.apple.com/legal/intellectual-property/">Licence</a>
  </footer>
  );
}
