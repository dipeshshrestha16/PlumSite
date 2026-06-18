const navLinks = ['Services', 'Why Choose Us', 'Reviews', 'Contact'];

const services = [
  {
    title: 'Leak Detection & Repair',
    body: 'Pinpoint hidden leaks fast and protect your walls, floors, and fixtures from costly water damage.',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
        <path d="M24 5s12 13.2 12 24A12 12 0 1 1 12 29C12 18.2 24 5 24 5Z" stroke="currentColor" strokeWidth="3" />
        <path d="M19 31c1.1 2.8 3.5 4.2 7 4.2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Pipe Installation & Fitting',
    body: 'Clean, code-ready pipework for remodels, replacements, upgrades, and new commercial buildouts.',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
        <path d="M8 17h19a6 6 0 0 1 6 6v2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M33 25v6h7v9H23v-9h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12v10M16 12v10M23 31v9M40 31v9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Water Heater Maintenance',
    body: 'Keep hot water reliable with flushing, diagnostics, safety checks, and high-efficiency replacements.',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
        <rect x="9" y="16" width="30" height="22" rx="4" stroke="currentColor" strokeWidth="3" />
        <path d="M17 16v-4a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 28h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="m28 25 5 5 3-3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Emergency Drain Cleaning',
    body: 'Restore flow quickly with professional clearing for sinks, tubs, floor drains, and main lines.',
    icon: (
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
        <path d="M24 5 43 39H5L24 5Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M24 17v10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 34h.01" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const features = [
  ['24/7 Emergency Support', 'Immediate response when a burst pipe, backed-up drain, or water heater failure cannot wait.'],
  ['Licensed Professionals', 'Your home is handled by trained plumbing specialists who respect code, schedule, and property.'],
  ['Transparent Pricing', 'You receive straightforward options and clear estimates before any repair begins.'],
  ['100% Satisfaction Guarantee', 'Every visit is backed by workmanship standards built for long-term confidence.'],
];

const testimonials = [
  ['FlowGuard arrived within the hour, found the leak behind our laundry wall, and fixed it without making a mess.', 'Maria R.'],
  ['The pricing was clear, the technician was sharp, and our restaurant had hot water again before dinner service.', 'Derrick L.'],
  ['Finally, a plumbing company that communicates well. They handled our drain emergency calmly and professionally.', 'Angela P.'],
  ['They replaced our old water heater the same day and left the utility room cleaner than they found it.', 'Kevin M.'],
  ['The drain line inspection was clear, honest, and fast. No upsell pressure, just the right fix.', 'Priya S.'],
  ['We use FlowGuard for our rental properties because they show up on time and document every repair.', 'Thomas B.'],
];

const testimonialTrack = [...testimonials, ...testimonials];

const heroProof = [
  ['4.9/5', 'Average customer rating'],
  ['2,800+', 'Repairs completed'],
  ['24/7', 'Emergency coverage'],
];

const heroChips = ['Leak repair', 'Drain rescue', 'Water heaters'];

function SectionHeader({ eyebrow, title, copy, inverted = false }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className={`mb-3 text-sm font-bold uppercase tracking-wide ${inverted ? 'text-white' : 'text-primary'}`}>{eyebrow}</p>
      <h2 className={`tight-title text-4xl font-extrabold md:text-[36px] md:leading-[44px] ${inverted ? 'text-white' : 'text-[#102A43]'}`}>
        {title}
      </h2>
      {copy ? <p className={`mt-4 text-lg leading-8 ${inverted ? 'text-white/85' : 'text-[#486581]'}`}>{copy}</p> : null}
    </div>
  );
}

function FeatureIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3" />
      <path d="m16 24 5 5 11-12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F1F8FC] text-[#102A43]">
      <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-container items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="FlowGuard Plumbing home">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-white">
              <i className="fa-solid fa-droplet text-lg" aria-hidden="true" />
            </span>
            <span className="text-xl font-extrabold tight-title">FlowGuard Plumbing</span>
          </a>
          <nav className="hidden items-center gap-8 text-base font-bold text-[#102A43] lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="transition hover:text-primary">
                {link}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="primary-gradient rounded-full px-5 py-3 text-sm font-extrabold text-white transition hover:scale-[1.02]"
          >
            Emergency Call
          </a>
        </div>
      </header>

      <section className="hero-water relative overflow-hidden bg-[#F1F8FC]">
        <div className="mx-auto grid w-full max-w-[1500px] items-center gap-8 px-4 py-10 md:px-8 md:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 xl:px-12">
          <div className="reveal-section">
            <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm">
              Licensed Local Plumbers in Austin, TX
            </p>
            <h1 className="tight-title max-w-4xl text-5xl font-extrabold leading-[52px] text-[#102A43] md:text-[64px] md:leading-[64px] xl:text-[68px] xl:leading-[68px]">
              Expert Plumbing Solutions for Your Home & Business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#486581]">
              Professional, reliable maintenance and emergency repairs in Austin. You get prompt service, clean workmanship,
              and lasting fixes for your property.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="primary-gradient rounded-full px-8 py-4 text-center font-extrabold text-white transition hover:scale-[1.02]">
                Book a Service
              </a>
              <a href="#services" className="rounded-full border border-primary/25 bg-white px-8 py-4 text-center font-extrabold text-primary transition hover:border-secondary hover:text-secondary">
                View Services
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroChips.map((chip) => (
                <span key={chip} className="rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-extrabold text-primary">
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8 grid max-w-3xl gap-3 rounded-xl border border-primary/10 bg-white/80 p-4 shadow-sm backdrop-blur sm:grid-cols-3">
              {heroProof.map(([value, label]) => (
                <div key={label} className="border-primary/10 sm:border-r sm:last:border-r-0">
                  <p className="text-2xl font-extrabold text-primary">{value}</p>
                  <p className="mt-1 text-sm font-bold text-[#486581]">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-section relative">
            <div className="float-badge absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-5 shadow-sm md:block">
              <p className="text-3xl font-extrabold text-primary">18 min</p>
              <p className="text-sm font-bold text-[#486581]">Average emergency dispatch</p>
            </div>
            <div className="float-badge-delayed absolute -right-5 top-8 hidden rounded-xl bg-primary px-5 py-4 text-white shadow-sm lg:block">
              <p className="text-sm font-bold text-white/85">Licensed & Insured</p>
              <p className="text-xl font-extrabold">Same-Day Help</p>
            </div>
            <div className="aspect-[16/11] overflow-hidden rounded-xl shadow-sm lg:aspect-[1.12/1]">
              <img
                src="https://sc-cms-prod103-cdn-dsb5cvath4adbgd0.z01.azurefd.net/-/media/images/aerotek/business-insights/plumbing_career_social-jpg.jpg?rev=d535c3705c67442fb68fe4404fae26d1"
                alt="Professional plumber adjusting pipework with a wrench"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="reveal-section bg-[#F1F8FC] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-container">
          <SectionHeader eyebrow="Services" title="Our Plumbing Expertise" copy="From precision repairs to urgent response, FlowGuard gives your home or business dependable plumbing support." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="reveal-card group rounded-lg bg-white p-7 shadow-sm">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#E0F4FA] text-primary transition duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="tight-title text-xl font-extrabold">{service.title}</h3>
                <p className="mt-3 leading-7 text-[#486581]">{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" className="reveal-section bg-[#D7F3FA] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-container">
          <SectionHeader eyebrow="Why FlowGuard" title="Plumbing Service Built Around Your Peace Of Mind" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map(([title, body]) => (
              <div key={title} className="reveal-card rounded-xl bg-white p-7 shadow-sm">
                <div className="mb-5 text-primary">
                  <FeatureIcon />
                </div>
                <h3 className="tight-title text-lg font-extrabold">{title}</h3>
                <p className="mt-3 leading-7 text-[#486581]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="reveal-section bg-[#F1F8FC] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-container">
          <SectionHeader
            eyebrow="Reviews"
            title="Trusted By Homeowners And Local Businesses"
            copy="Your plumbing problem deserves a team that keeps you informed from the first call through final cleanup."
          />
          <div className="review-marquee overflow-hidden py-2">
            <div className="review-track flex w-max gap-6">
              {testimonialTrack.map(([quote, name], testimonialIndex) => (
                <figure key={`${name}-${testimonialIndex}`} className="w-[330px] shrink-0 rounded-xl border border-primary/10 bg-white p-8 text-[#102A43] shadow-sm md:w-[390px]">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex gap-1 text-accent" aria-label="Five star rating">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <i key={index} className="fa-solid fa-star" aria-hidden="true" />
                      ))}
                    </div>
                    <i className="fa-solid fa-quote-right text-2xl text-secondary" aria-hidden="true" />
                  </div>
                  <blockquote className="text-lg font-semibold leading-8">"{quote}"</blockquote>
                  <figcaption className="mt-6 font-extrabold text-surface">{name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="reveal-section bg-[#F1F8FC] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-center text-sm font-bold uppercase tracking-wide text-primary">Schedule Service</p>
          <h2 className="tight-title text-center text-4xl font-extrabold text-[#102A43] md:text-[36px] md:leading-[44px]">Get A Fast Plumbing Estimate</h2>
          <form className="mt-8 grid gap-5 rounded-xl bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-[#102A43]">
                Name
                <input className="focus-field rounded-[12px] border border-[#d1d5db] bg-white px-4 py-3 text-base font-medium" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[#102A43]">
                Phone
                <input className="focus-field rounded-[12px] border border-[#d1d5db] bg-white px-4 py-3 text-base font-medium" placeholder="Your phone number" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-[#102A43]">
              Service Type
              <select className="focus-field rounded-[12px] border border-[#d1d5db] bg-white px-4 py-3 text-base font-medium">
                <option>Leak Detection & Repair</option>
                <option>Pipe Installation & Fitting</option>
                <option>Water Heater Maintenance</option>
                <option>Emergency Drain Cleaning</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#102A43]">
              Message
              <textarea className="focus-field min-h-32 rounded-[12px] border border-[#d1d5db] bg-white px-4 py-3 text-base font-medium" placeholder="Tell us what is happening at your property." />
            </label>
            <button type="button" className="primary-gradient rounded-full px-8 py-4 font-extrabold text-white transition hover:scale-[1.01]">
              Request Service
            </button>
          </form>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-surface px-5 pb-12 pt-32 text-white lg:px-8">
        <svg className="absolute left-0 top-0 h-32 w-full" viewBox="0 0 1440 150" preserveAspectRatio="none" aria-hidden="true">
          <path
            fill="#F1F8FC"
            d="M0,0H1440V74C1310,98 1190,90 1047,58C894,24 766,28 626,63C486,98 352,101 220,69C127,47 58,49 0,72V0Z"
          />
          <path
            fill="#0B4F8A"
            d="M0,91C128,61 248,72 379,101C521,132 654,130 802,95C942,62 1071,66 1212,96C1305,116 1380,113 1440,95V150H0V91Z"
          />
        </svg>
        <div className="reveal-section relative mx-auto grid max-w-container gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <h2 className="tight-title text-2xl font-extrabold">FlowGuard Plumbing</h2>
            <p className="mt-4 max-w-md leading-7 text-white/80">
              Dependable residential and commercial plumbing service with fast scheduling, professional diagnostics, and repairs built to last.
            </p>
          </div>
          <div>
            <h3 className="font-extrabold">Quick Links</h3>
            <div className="mt-4 grid gap-3 text-white/80">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} className="hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-extrabold">Contact Info</h3>
            <div className="mt-4 grid gap-3 text-white/80">
              <div className="flex gap-3">
                <i className="fa-solid fa-phone mt-1 text-secondary" aria-hidden="true" /> Telephone number
              </div>
              <a href="mailto:reach@bigroostech.com" className="flex gap-3 hover:text-white">
                <i className="fa-solid fa-envelope mt-1 text-secondary" aria-hidden="true" /> reach@bigroostech.com
              </a>
              <div className="flex gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-secondary" aria-hidden="true" /> 214 Riverside Drive, Austin, TX
              </div>
            </div>
            <h3 className="mt-8 font-extrabold">Follow Us</h3>
            <div className="mt-4 flex gap-3">
              {['facebook-f', 'instagram', 'x-twitter'].map((brand) => (
                <a key={brand} href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary" aria-label={brand}>
                  <i className={`fa-brands fa-${brand}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
