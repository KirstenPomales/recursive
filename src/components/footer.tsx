export function Footer() {
  return (
    <footer className="container mt-10 flex flex-col items-center justify-between gap-6 py-10 sm:flex-row border-t-2 border-black">
      <p className="text-center text-sm font-bold text-black">© 2025 Recursive Studios, All Rights Reserved</p>
      <p className="text-center text-sm font-bold text-black">
        with ❤️ from{" "}
        <img
          src="/images/talentlayer-raccoon-head.png"
          alt="icon"
          className="mx-1 inline-block size-5 align-text-bottom filter grayscale hover:grayscale-0 transition-all"
        />{" "}
      </p>
    </footer>
  );
}
