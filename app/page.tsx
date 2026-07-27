import Image from "next/image";
import Link from "next/link";
import ExternalEmbed from "./components/ExternalEmbed";
import { songs } from "./lyrics/data";

const streamingLinks = {
  spotify:
    "https://open.spotify.com/intl-de/artist/7h1Y9T0a3rAB9rEof8esqy?si=8mjqzoL6T5OGtXDanZ-6uQ",
  amazon:
    "https://music.amazon.de/artists/B0H9PC22SJ/alex-c-turner?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_7cpzuRk08b0h8plv6fXSdBvJL",
};

const navigation = [
  { label: "Music", href: "#music" },
  { label: "The Story", href: "#story" },
  { label: "The Band", href: "#band" },
  { label: "Gallery", href: "#gallery" },
  { label: "Lyrics", href: "/lyrics" },
];

const storyChapters = [
  {
    number: "01",
    title: "Raised in Virginia",
    text: "Alex grew up among the forests, mountain roads, and working communities of Virginia. The Blue Ridge Mountains became both a compass and a constant presence in his songs.",
  },
  {
    number: "02",
    title: "Building a Life",
    text: "He chose carpentry over college and spent years learning that honest work shapes more than wood. Later, he built much of his own home with the same patience.",
  },
  {
    number: "03",
    title: "The Band Years",
    text: "Long before stepping into the spotlight, Alex played lead guitar and sang background vocals across bars, clubs, honky-tonks, and regional festivals.",
  },
  {
    number: "04",
    title: "Coming Home",
    text: "When the band years ended, the stories became his own. Coming Home marks the beginning of a solo career built around family, responsibility, memory, and second chances.",
  },
];

const gallery = [
  {
    src: "/images/about/alex-ranch.png",
    alt: "Alex C. Turner leaning against a wooden fence at sunset",
    className: "sm:col-span-2 sm:row-span-2",
    imageClassName: "object-top",
  },
  {
    src: "/images/gallery/alex-motorcycle.png",
    alt: "Alex C. Turner on a motorcycle in the mountains",
    className: "",
    imageClassName: "object-center",
  },
  {
    src: "/images/about/alex-and-dog.png",
    alt: "Alex C. Turner with his Australian Shepherd",
    className: "",
    imageClassName: "object-top",
  },
  {
    src: "/images/live/alex-live-closeup.png",
    alt: "Alex C. Turner singing live on stage",
    className: "",
    imageClassName: "object-top",
  },
  {
    src: "/images/live/alex-dancehall.png",
    alt: "Alex C. Turner in a lively dance hall",
    className: "",
    imageClassName: "object-top",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141312] text-[#f5f2ec]">
      <section
        id="home"
        className="hero relative isolate flex min-h-[100svh] flex-col overflow-hidden"
      >
        <div className="hero-image absolute inset-0 -z-30" aria-hidden="true" />
        <div
          className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(10,9,8,0.72)_0%,rgba(10,9,8,0.08)_35%,rgba(10,9,8,0.48)_65%,rgba(10,9,8,0.98)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_35%,transparent_0%,rgba(10,9,8,0.18)_42%,rgba(10,9,8,0.78)_100%)]"
          aria-hidden="true"
        />

        <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="font-serif text-lg tracking-[0.12em] transition-colors hover:text-[#d39a50]"
            aria-label="Alex C. Turner – Home"
          >
            HOME
          </a>

          <nav
            className="hidden items-center gap-7 text-[0.68rem] font-semibold uppercase tracking-[0.2em] md:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#eee9df]/80 transition-colors hover:text-[#d39a50]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <details className="group relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] [&::-webkit-details-marker]:hidden">
              Menu
              <span className="relative block h-3.5 w-5" aria-hidden="true">
                <span className="absolute left-0 top-0 h-px w-5 bg-current transition-transform group-open:translate-y-[6px] group-open:rotate-45" />
                <span className="absolute bottom-0 left-0 h-px w-5 bg-current transition-transform group-open:-translate-y-[7px] group-open:-rotate-45" />
              </span>
            </summary>
            <nav
              className="absolute right-0 top-9 z-20 w-52 border border-white/10 bg-[#141312]/95 p-2 shadow-2xl backdrop-blur-xl"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-sm tracking-[0.12em] text-[#eee9df]/85 transition-colors hover:bg-white/5 hover:text-[#d39a50]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </header>

        <div className="mx-auto flex w-full max-w-[1440px] flex-1 items-end px-5 pb-16 pt-24 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-[#d39a50] sm:text-xs">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              Modern Country Rock
            </p>
            <h1 className="font-serif text-6xl leading-[0.84] tracking-[-0.045em] text-[#f7f3eb] sm:text-8xl lg:text-[8.6rem]">
              Alex C.
              <span className="block italic text-[#d9c9b5]">Turner</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#eee9df]/78 sm:text-lg sm:leading-8">
              Honest stories about family, freedom, second chances, and the road
              that always leads home.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#music"
                className="inline-flex min-h-12 items-center justify-center bg-[#b87731] px-7 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#ca8b45] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d39a50]"
              >
                Explore Coming Home
              </a>
              <a
                href="#story"
                className="inline-flex min-h-12 items-center justify-center border border-white/35 px-7 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Discover the Story
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#1b1917] px-5 py-20 sm:px-8 sm:py-24">
        <blockquote className="mx-auto max-w-5xl text-center font-serif text-3xl leading-tight text-[#eee9df] sm:text-5xl">
          “Alex C. Turner doesn&apos;t write songs about country life. He writes
          about people finding their way home.”
        </blockquote>
      </section>

      <section
        id="music"
        className="scroll-mt-8 overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto aspect-square w-full max-w-xl overflow-hidden bg-[#24201c] shadow-2xl shadow-black/40">
            <Image
              src="/images/about/alex-mountain-trail.png"
              alt="Alex C. Turner in the mountains"
              fill
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0.05),rgba(12,10,9,0.78))]" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#d39a50]">
                Alex C. Turner
              </p>
              <p className="mt-2 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">
                Coming Home
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c78a3a]">
              The upcoming debut album
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
              Home is a feeling.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/58 sm:text-lg">
              Every song is a chapter from a life shaped by the Blue Ridge
              Mountains, long highways, hard work, family, and the people worth
              returning to.
            </p>
            <ol className="mt-10 border-t border-white/10">
              {songs.map((song) => (
                <li key={song.slug} className="border-b border-white/10">
                  <Link
                    href={`/lyrics/${song.slug}`}
                    className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-5"
                  >
                    <span className="text-[0.68rem] font-bold tracking-[0.15em] text-white/30">
                      {song.number}
                    </span>
                    <span className="font-serif text-xl transition-colors group-hover:text-[#d39a50] sm:text-2xl">
                      {song.title}
                    </span>
                    <span
                      className="text-white/30 transition-all group-hover:translate-x-1 group-hover:text-[#d39a50]"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
            <Link
              href="/lyrics"
              className="mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d39a50] transition-colors hover:text-[#e0ad6b]"
            >
              Read all lyrics <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-24 grid max-w-7xl gap-10 border-t border-white/10 pt-16 sm:mt-32 sm:pt-20 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c78a3a]">
              Listen now
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-6xl">
              Find Alex on your favorite service.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
              Follow the official artist profile for current releases and
              everything still to come.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={streamingLinks.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-[#1ed760] px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#07150b] transition-colors hover:bg-[#35e273] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1ed760]"
              >
                Open Spotify
              </a>
              <a
                href={streamingLinks.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-white/60 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Open Amazon Music
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-[#24201c] shadow-2xl shadow-black/30">
            <ExternalEmbed
              provider="Spotify"
              title="Alex C. Turner on Spotify"
              src="https://open.spotify.com/embed/artist/7h1Y9T0a3rAB9rEof8esqy?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              containerClassName="h-[352px] w-full"
              iframeClassName="block h-[352px] w-full border-0"
            />
          </div>
        </div>
      </section>

      <section id="story" className="scroll-mt-8 bg-[#e9e0d3] text-[#221f1b]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[70vh] lg:min-h-full">
            <Image
              src="/images/about/alex-barn-portrait.png"
              alt="Alex C. Turner beside an old barn"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div className="px-5 py-20 sm:px-10 sm:py-28 lg:px-16 xl:px-24">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#9a632d]">
              The story
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
              Built by the road behind him.
            </h2>
            <div className="mt-14">
              {storyChapters.map((chapter) => (
                <article
                  key={chapter.number}
                  className="grid gap-4 border-t border-black/15 py-7 sm:grid-cols-[3rem_1fr]"
                >
                  <span className="pt-1 text-[0.68rem] font-bold tracking-[0.18em] text-[#9a632d]">
                    {chapter.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl">
                      {chapter.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
                      {chapter.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="band"
        className="scroll-mt-8 px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c78a3a]">
                On the road
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
                Meet the band.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/55 lg:justify-self-end">
              Alex remains the songwriter and voice at the center. On stage, a
              close-knit band gives the songs their weight: electric guitars,
              hard-driving drums, deep bass, and roots that show through every
              note.
            </p>
          </div>

          <div className="relative mt-14 aspect-[16/9] overflow-hidden sm:mt-20">
            <Image
              src="/images/band/full-band-live.png"
              alt="Alex C. Turner and his band performing live"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.25em] text-white/75 sm:bottom-8 sm:left-8">
              Country rock · Live and loud
            </p>
          </div>

          <div className="mt-px grid gap-px bg-white/10 sm:grid-cols-3">
            {[
              {
                name: "Hank",
                role: "Rhythm Guitar · Harmonica · Keyboards",
                image: "/images/band/lead-guitar-harmonica.png",
              },
              {
                name: "Wade",
                role: "Bass",
                image: "/images/band/bass-player.png",
              },
              {
                name: "Tyler “Ty”",
                role: "Drums",
                image: "/images/band/drummer.png",
              },
            ].map((member) => (
              <article key={member.name} className="bg-[#141312]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}, in Alex C. Turner's band`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-top grayscale-[20%] transition duration-700 hover:scale-[1.025] hover:grayscale-0"
                  />
                </div>
                <div className="border-t border-white/10 px-5 py-5">
                  <h3 className="font-serif text-2xl">{member.name}</h3>
                  <p className="mt-2 text-[0.65rem] font-bold uppercase leading-5 tracking-[0.18em] text-[#c78a3a]">
                    {member.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="scroll-mt-8 bg-[#1b1917] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c78a3a]">
                Life between the songs
              </p>
              <h2 className="mt-5 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">
                In pictures.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/48">
              Mountains, open roads, live rooms, and quiet moments back home.
            </p>
          </div>

          <div className="mt-14 grid auto-rows-[22rem] gap-2 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((image) => (
              <figure
                key={image.src}
                className={`relative overflow-hidden bg-[#24201c] ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover transition duration-700 hover:scale-[1.025] ${image.imageClassName}`}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 sm:items-end">
          <div>
            <p className="font-serif text-4xl tracking-[-0.03em]">
              Alex C. Turner
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c78a3a]">
              Modern Country Rock
            </p>
          </div>
          <div className="sm:text-right">
            <Link
              href="/lyrics"
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-[#d39a50]"
            >
              Lyrics
            </Link>
            <p className="mt-6 text-xs text-white/30">
              © 2026 Alex Turow Records. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
