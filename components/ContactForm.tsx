export default function ContactForm() {
  return (
    <section id="contact" className="px-6 py-16 sm:px-8 lg:px-12" aria-label="Contact form">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Start a Project Conversation
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Request Structural Steel Detailing Support
          </h2>
          <p className="mt-4 max-w-xl text-slate-300">
            Share your project scope and desired timeline. This form is ready to
            connect with Formspree, Vercel Actions, or your preferred intake workflow.
          </p>
        </div>

        <form
          className="rounded-xl border border-slate-800 bg-slate-800/70 p-6 sm:p-8"
          action="#"
          method="post"
          aria-label="Project inquiry form"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                placeholder="Jane Doe"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                Work Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                placeholder="you@company.com"
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-200">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                placeholder="Fabricator or GC name"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                placeholder="Tell us about tonnage, scope, and required deadlines."
                aria-required="true"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              aria-label="Submit project inquiry"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
