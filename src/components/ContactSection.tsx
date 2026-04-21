export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">Request Quote</p>
            <h2 className="section-heading mt-3">Start the conversation with a project-ready intake.</h2>
            <p className="body-copy mt-4 max-w-xl">
              Share enough detail for a practical first review. The form is sized and
              spaced for easy use on tablets in project offices, fabrication shops, and
              field trailers.
            </p>

            <div className="panel mt-8 p-6">
              <p className="meta-label">Typical inquiries</p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-200">
                <li>Commercial and industrial steel packages</li>
                <li>Fast-turn revisions or overflow detailing support</li>
                <li>BIM coordination and phased erection planning</li>
              </ul>
            </div>
          </div>

          <form className="panel p-6 sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  className="field-control"
                  placeholder="John Carter"
                />
              </label>

              <label className="block">
                <span className="field-label">Company</span>
                <input
                  type="text"
                  name="company"
                  className="field-control"
                  placeholder="Contractor or fabricator"
                />
              </label>

              <label className="block">
                <span className="field-label">Work Email</span>
                <input
                  type="email"
                  name="email"
                  className="field-control"
                  placeholder="estimating@company.com"
                />
              </label>

              <label className="block">
                <span className="field-label">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  className="field-control"
                  placeholder="(555) 123-4567"
                />
              </label>

              <label className="block">
                <span className="field-label">Project Type</span>
                <select className="field-control">
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Warehouse / Distribution</option>
                  <option>Retrofit / Expansion</option>
                </select>
              </label>

              <label className="block">
                <span className="field-label">Tonnage / Size</span>
                <input
                  type="text"
                  name="tonnage"
                  className="field-control"
                  placeholder="e.g. 350 tons / 120,000 SF"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="field-label">Project Details</span>
              <textarea
                name="details"
                rows={6}
                className="field-control rounded-[24px] py-3"
                placeholder="Share schedule expectations, drawing status, scope split, and any coordination constraints."
              />
            </label>

            <button type="submit" className="button-primary mt-6">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
