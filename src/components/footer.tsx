export function Footer() {
  return (
    <footer className="container mt-10 flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
      <p className="text-center text-sm">© 2025 Recursive Studios, All Rights Reserved</p>
      <p className="text-center text-sm">
        with ❤️ from{" "}
        <img
          src="/images/talentlayer-raccoon-head.png"
          alt="icon"
          className="mx-1 inline-block size-4 align-text-bottom"
        />{" "}
      </p>
    </footer>
  );
}
