export default function Footer() {
  return (
    <footer className="text-parchment-100 flex flex-row items-center justify-between border-t px-8 py-4">
      <p className="font-fredoka bg-parchment-100 text-rosy-copper-500 flex items-center gap-2 rounded-full px-4 py-2 font-medium tracking-wide">
        <img
          src="/icon.svg"
          alt="Wunderbox Logo"
          className="inline-block h-8"
        ></img>
        wunderbox.games
      </p>
      <p className="font-nunito font-semibold">&copy; 2026 wunderbox.games</p>
    </footer>
  );
}
