export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Sembada. All rights reserved.</p>
        <p className="text-slate-500">US Structural Steel Detailing Services • Remote Delivery</p>
      </div>
    </footer>
  );
}
