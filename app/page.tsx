import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExternalEmbed from "./components/ExternalEmbed";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { localePath, type Locale } from "./i18n";
import { getSongs } from "./lyrics/data";

export const metadata: Metadata = {
  title: "Alex C. Turner | Modern Country Rock",
  description:
    "The official home of Alex C. Turner — modern country rock, honest stories, and the road that always leads home.",
  alternates: {
    languages: { en: "/", de: "/de", fr: "/fr", es: "/es" },
  },
};

const streamingLinks = {
  spotify:
    "https://open.spotify.com/intl-de/artist/7h1Y9T0a3rAB9rEof8esqy?si=8mjqzoL6T5OGtXDanZ-6uQ",
  amazon:
    "https://music.amazon.de/artists/B0H9PC22SJ/alex-c-turner?marketplaceId=A1PA6795UKMFR9&musicTerritory=DE&ref=dm_sh_7cpzuRk08b0h8plv6fXSdBvJL",
};

const homeCopy = {
  en: {
    home: "HOME", menu: "Menu", mainNav: "Main navigation", mobileNav: "Mobile navigation",
    navigation: [["Music", "#music"], ["The Story", "#story"], ["The Band", "#band"], ["Gallery", "#gallery"], ["Songs & Stories", "/lyrics"]],
    genre: "Modern Country Rock",
    intro: "Honest stories about family, freedom, second chances, and the road that always leads home.",
    explore: "Explore Coming Home", discover: "Discover the Story", songsButton: "Songs & Stories",
    quote: "“Alex C. Turner doesn’t write songs about country life. He writes about people finding their way home.”",
    debut: "The upcoming debut album", homeFeeling: "Home is a feeling.",
    albumIntro: "Every song is a chapter from a life shaped by the Blue Ridge Mountains, long highways, hard work, family, and the people worth returning to.",
    readStories: "Read the lyrics & stories",
    listen: "Listen now", services: "Find Alex on your favorite service.",
    servicesText: "Follow the official artist profile for current releases and everything still to come.",
    spotify: "Open Spotify", amazon: "Open Amazon Music",
    storyEyebrow: "The story", storyTitle: "Built by the road behind him.",
    chapters: [
      ["01", "Raised in Virginia", "Alex grew up among the forests, mountain roads, and working communities of Virginia. Like plenty of kids, he picked up a guitar at thirteen. What began as a teenage curiosity became a lifelong way of telling stories, with the Blue Ridge Mountains serving as both his compass and a constant presence in his songs."],
      ["02", "Building a Life", "He chose carpentry over college and spent years learning that honest work shapes more than wood. Later, he built much of his own home with the same patience."],
      ["03", "The Band Years", "Long before stepping into the spotlight, Alex played lead guitar and sang background vocals across bars, clubs, honky-tonks, and regional festivals."],
      ["04", "Coming Home", "When the band years ended, the stories became his own. Coming Home marks the beginning of a solo career built around family, responsibility, memory, and second chances."],
    ],
    road: "On the road", meetBand: "Meet the band.",
    bandIntro: "Alex remains the songwriter and voice at the center. On stage, a close-knit band gives the songs their weight: electric guitars, hard-driving drums, deep bass, and roots that show through every note.",
    live: "Country rock · Live and loud",
    roles: { hank: "Rhythm Guitar · Harmonica · Keyboards", wade: "Bass", ty: "Drums" },
    galleryEyebrow: "Life between the songs", galleryTitle: "In pictures.",
    galleryText: "Mountains, open roads, live rooms, and quiet moments back home.",
    footerStories: "Songs & Stories", rights: "All rights reserved.",
  },
  de: {
    home: "STARTSEITE", menu: "Menü", mainNav: "Hauptnavigation", mobileNav: "Mobile Navigation",
    navigation: [["Musik", "#music"], ["Seine Geschichte", "#story"], ["Die Band", "#band"], ["Galerie", "#gallery"], ["Songs & Geschichten", "/lyrics"]],
    genre: "Moderner Country Rock",
    intro: "Ehrliche Geschichten über Familie, Freiheit, zweite Chancen und den Weg, der immer wieder nach Hause führt.",
    explore: "Coming Home entdecken", discover: "Alex’ Geschichte", songsButton: "Songs & Geschichten",
    quote: "„Alex C. Turner schreibt keine Songs über das Landleben. Er schreibt über Menschen, die ihren Weg nach Hause suchen.“",
    debut: "Das kommende Debütalbum", homeFeeling: "Zuhause ist ein Gefühl.",
    albumIntro: "Jeder Song ist ein Kapitel aus einem Leben, geprägt von den Blue Ridge Mountains, langen Highways, harter Arbeit, Familie und den Menschen, für die sich jede Heimkehr lohnt.",
    readStories: "Lyrics & Geschichten lesen",
    listen: "Jetzt anhören", services: "Hör Alex bei deinem Lieblings-Musikdienst.",
    servicesText: "Folge dem offiziellen Künstlerprofil, damit du keine neue Veröffentlichung verpasst.",
    spotify: "Spotify öffnen", amazon: "Amazon Music öffnen",
    storyEyebrow: "Seine Geschichte", storyTitle: "Geprägt von dem Weg, der hinter ihm liegt.",
    chapters: [
      ["01", "Aufgewachsen in Virginia", "Alex wuchs zwischen Wäldern, Bergstraßen und den Arbeitergemeinden Virginias auf. Wie viele Jugendliche begann er mit dreizehn Jahren Gitarre zu spielen. Was als jugendliche Neugier begann, wurde zu seiner Art, Geschichten zu erzählen. Die Blue Ridge Mountains wurden dabei zu seinem inneren Kompass und sind bis heute in seinen Songs gegenwärtig."],
      ["02", "Ein Leben aufbauen", "Er entschied sich gegen das College und für eine Ausbildung zum Zimmermann. Dabei lernte er, dass ehrliche Arbeit nicht nur Holz formt, sondern auch den Menschen. Später baute er mit derselben Geduld einen großen Teil seines eigenen Hauses."],
      ["03", "Die Jahre mit der Band", "Lange bevor er selbst im Mittelpunkt stand, spielte Alex Leadgitarre und sang Background-Vocals in Bars, Clubs, Honky-Tonks und auf regionalen Festivals."],
      ["04", "Coming Home", "Nach dem Ende der Band begann Alex, seine eigenen Geschichten zu erzählen. Coming Home ist der Anfang einer Solokarriere, in deren Mittelpunkt Familie, Verantwortung, Erinnerungen und zweite Chancen stehen."],
    ],
    road: "Unterwegs", meetBand: "Die Band.",
    bandIntro: "Alex bleibt Songwriter, Frontmann und Stimme im Mittelpunkt. Auf der Bühne verleiht eine eingespielte Band den Songs ihr Gewicht: elektrische Gitarren, druckvolle Drums, ein tiefer Bass und hörbare musikalische Wurzeln.",
    live: "Country Rock · Live und laut",
    roles: { hank: "Rhythmusgitarre · Harmonica · Keyboards", wade: "Bass", ty: "Drums" },
    galleryEyebrow: "Das Leben zwischen den Songs", galleryTitle: "In Bildern.",
    galleryText: "Berge, offene Straßen, kleine Bühnen und ruhige Augenblicke zu Hause.",
    footerStories: "Songs & Geschichten", rights: "Alle Rechte vorbehalten.",
  },
  fr: {
    home: "ACCUEIL", menu: "Menu", mainNav: "Navigation principale", mobileNav: "Navigation mobile",
    navigation: [["Musique", "#music"], ["Son histoire", "#story"], ["Le groupe", "#band"], ["Galerie", "#gallery"], ["Chansons & histoires", "/lyrics"]],
    genre: "Country Rock moderne",
    intro: "Des histoires sincères de famille, de liberté, de secondes chances et de cette route qui finit toujours par ramener chez soi.",
    explore: "Découvrir Coming Home", discover: "Découvrir son histoire", songsButton: "Chansons & histoires",
    quote: "« Alex C. Turner n’écrit pas sur la vie à la campagne. Il écrit sur ceux qui cherchent le chemin du retour. »",
    debut: "Le premier album à venir", homeFeeling: "Le foyer est un sentiment.",
    albumIntro: "Chaque chanson est un chapitre d’une vie façonnée par les Blue Ridge Mountains, les longues routes, le travail, la famille et les personnes pour lesquelles il vaut toujours la peine de revenir.",
    readStories: "Lire les paroles & les histoires",
    listen: "Écouter", services: "Retrouvez Alex sur votre plateforme préférée.",
    servicesText: "Suivez le profil officiel d’Alex pour ne manquer aucune nouvelle sortie.",
    spotify: "Ouvrir Spotify", amazon: "Ouvrir Amazon Music",
    storyEyebrow: "Son histoire", storyTitle: "Façonné par le chemin parcouru.",
    chapters: [
      ["01", "Une enfance en Virginie", "Alex a grandi parmi les forêts, les routes de montagne et les communautés ouvrières de Virginie. Comme beaucoup d’adolescents, il s’est mis à la guitare à treize ans. Ce qui n’était d’abord qu’une curiosité de jeunesse est devenu sa façon de raconter des histoires. Les Blue Ridge Mountains sont alors devenues sa boussole intérieure et demeurent présentes dans ses chansons."],
      ["02", "Construire sa vie", "Il a choisi la menuiserie plutôt que l’université et a appris que le travail honnête façonne bien plus que le bois. Plus tard, il a construit une grande partie de sa maison avec la même patience."],
      ["03", "Les années de groupe", "Bien avant d’occuper le devant de la scène, Alex jouait de la guitare solo et chantait les chœurs dans des bars, des clubs, des honky-tonks et des festivals régionaux."],
      ["04", "Coming Home", "Lorsque le groupe s’est séparé, Alex a commencé à raconter ses propres histoires. Coming Home ouvre une carrière solo centrée sur la famille, la responsabilité, la mémoire et les secondes chances."],
    ],
    road: "Sur la route", meetBand: "Le groupe.",
    bandIntro: "Alex reste l’auteur, le chanteur et le cœur du projet. Sur scène, un groupe soudé donne toute leur force aux chansons : guitares électriques, batterie puissante, basse profonde et des racines que l’on entend dans chaque note.",
    live: "Country Rock · En direct et sans retenue",
    roles: { hank: "Guitare rythmique · Harmonica · Claviers", wade: "Basse", ty: "Batterie" },
    galleryEyebrow: "La vie entre les chansons", galleryTitle: "En images.",
    galleryText: "Des montagnes, des routes ouvertes, de petites scènes et des instants paisibles à la maison.",
    footerStories: "Chansons & histoires", rights: "Tous droits réservés.",
  },
  es: {
    home: "INICIO", menu: "Menú", mainNav: "Navegación principal", mobileNav: "Navegación móvil",
    navigation: [["Música", "#music"], ["Su historia", "#story"], ["La banda", "#band"], ["Galería", "#gallery"], ["Canciones e historias", "/lyrics"]],
    genre: "Country Rock moderno",
    intro: "Historias sinceras sobre la familia, la libertad, las segundas oportunidades y el camino que siempre acaba llevándote a casa.",
    explore: "Descubre Coming Home", discover: "Descubre su historia", songsButton: "Canciones e historias",
    quote: "«Alex C. Turner no escribe canciones sobre la vida en el campo. Escribe sobre personas que buscan el camino de regreso a casa».",
    debut: "Próximo álbum de debut", homeFeeling: "El hogar es una sensación.",
    albumIntro: "Cada canción es un capítulo de una vida marcada por las Blue Ridge Mountains, largas carreteras, trabajo duro, familia y las personas por las que siempre merece la pena regresar.",
    readStories: "Leer letras e historias",
    listen: "Escuchar ahora", services: "Escucha a Alex en tu plataforma favorita.",
    servicesText: "Sigue el perfil oficial de Alex para no perderte ningún lanzamiento.",
    spotify: "Abrir Spotify", amazon: "Abrir Amazon Music",
    storyEyebrow: "Su historia", storyTitle: "Moldeado por el camino recorrido.",
    chapters: [
      ["01", "Criado en Virginia", "Alex creció entre los bosques, las carreteras de montaña y las comunidades trabajadoras de Virginia. Como tantos adolescentes, empezó a tocar la guitarra a los trece años. Lo que nació como una curiosidad juvenil se convirtió en su manera de contar historias. Las Blue Ridge Mountains pasaron a ser su brújula y siguen presentes en sus canciones."],
      ["02", "Construir una vida", "Eligió la carpintería en lugar de la universidad y aprendió que el trabajo honrado da forma a mucho más que la madera. Más tarde construyó gran parte de su propia casa con la misma paciencia."],
      ["03", "Los años con la banda", "Mucho antes de ocupar el centro del escenario, Alex tocaba la guitarra solista y hacía coros en bares, clubes, honky-tonks y festivales regionales."],
      ["04", "Coming Home", "Cuando terminó la etapa con la banda, Alex empezó a contar sus propias historias. Coming Home abre una carrera en solitario centrada en la familia, la responsabilidad, los recuerdos y las segundas oportunidades."],
    ],
    road: "En la carretera", meetBand: "La banda.",
    bandIntro: "Alex sigue siendo el compositor, la voz y el centro del proyecto. Sobre el escenario, una banda muy unida da peso a las canciones: guitarras eléctricas, batería contundente, bajo profundo y unas raíces que se perciben en cada nota.",
    live: "Country Rock · En directo y a todo volumen",
    roles: { hank: "Guitarra rítmica · Armónica · Teclados", wade: "Bajo", ty: "Batería" },
    galleryEyebrow: "La vida entre canciones", galleryTitle: "En imágenes.",
    galleryText: "Montañas, carreteras abiertas, pequeñas salas y momentos tranquilos en casa.",
    footerStories: "Canciones e historias", rights: "Todos los derechos reservados.",
  },
} as const;

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

export function HomeContent({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  const songs = getSongs(locale);

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
            aria-label={`Alex C. Turner – ${copy.home}`}
          >
            {copy.home}
          </a>

          <nav
            className="hidden items-center gap-7 text-[0.68rem] font-semibold uppercase tracking-[0.2em] md:flex"
            aria-label={copy.mainNav}
          >
            {copy.navigation.map(([label, href]) => (
              <a
                key={label}
                href={href.startsWith("/") ? localePath(locale, href) : href}
                className="text-[#eee9df]/80 transition-colors hover:text-[#d39a50]"
              >
                {label}
              </a>
            ))}
          </nav>

          <LanguageSwitcher currentLocale={locale} />

          <details className="group relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] [&::-webkit-details-marker]:hidden">
              {copy.menu}
              <span className="relative block h-3.5 w-5" aria-hidden="true">
                <span className="absolute left-0 top-0 h-px w-5 bg-current transition-transform group-open:translate-y-[6px] group-open:rotate-45" />
                <span className="absolute bottom-0 left-0 h-px w-5 bg-current transition-transform group-open:-translate-y-[7px] group-open:-rotate-45" />
              </span>
            </summary>
            <nav
              className="absolute right-0 top-9 z-20 w-52 border border-white/10 bg-[#141312]/95 p-2 shadow-2xl backdrop-blur-xl"
              aria-label={copy.mobileNav}
            >
              {copy.navigation.map(([label, href]) => (
                <a
                  key={label}
                  href={href.startsWith("/") ? localePath(locale, href) : href}
                  className="block px-4 py-3 text-sm tracking-[0.12em] text-[#eee9df]/85 transition-colors hover:bg-white/5 hover:text-[#d39a50]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </details>
        </header>

        <div className="mx-auto flex w-full max-w-[1440px] flex-1 items-end px-5 pb-16 pt-24 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-[#d39a50] sm:text-xs">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              {copy.genre}
            </p>
            <h1 className="font-serif text-6xl leading-[0.84] tracking-[-0.045em] text-[#f7f3eb] sm:text-8xl lg:text-[8.6rem]">
              Alex C.
              <span className="block italic text-[#d9c9b5]">Turner</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#eee9df]/78 sm:text-lg sm:leading-8">
              {copy.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#music"
                className="inline-flex min-h-12 items-center justify-center bg-[#b87731] px-7 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#ca8b45] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d39a50]"
              >
                {copy.explore}
              </a>
              <a
                href="#story"
                className="inline-flex min-h-12 items-center justify-center border border-white/35 px-7 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {copy.discover}
              </a>
              <Link
                href={localePath(locale, "/lyrics")}
                className="inline-flex min-h-12 items-center justify-center border border-[#d39a50]/75 px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#e7b36f] transition-colors hover:border-[#d39a50] hover:bg-[#d39a50]/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d39a50]"
              >
                {copy.songsButton}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#1b1917] px-5 py-20 sm:px-8 sm:py-24">
        <blockquote className="mx-auto max-w-5xl text-center font-serif text-3xl leading-tight text-[#eee9df] sm:text-5xl">
          {copy.quote}
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
              {copy.debut}
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
              {copy.homeFeeling}
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/58 sm:text-lg">
              {copy.albumIntro}
            </p>
            <ol className="mt-10 border-t border-white/10">
              {songs.map((song) => (
                <li key={song.slug} className="border-b border-white/10">
                  <Link
                    href={localePath(locale, `/lyrics/${song.slug}`)}
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
              href={localePath(locale, "/lyrics")}
              className="mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d39a50] transition-colors hover:text-[#e0ad6b]"
            >
              {copy.readStories} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-24 grid max-w-7xl gap-10 border-t border-white/10 pt-16 sm:mt-32 sm:pt-20 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c78a3a]">
              {copy.listen}
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-6xl">
              {copy.services}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
              {copy.servicesText}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={streamingLinks.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-[#1ed760] px-7 text-xs font-bold uppercase tracking-[0.18em] text-[#07150b] transition-colors hover:bg-[#35e273] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1ed760]"
              >
                {copy.spotify}
              </a>
              <a
                href={streamingLinks.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-white/25 px-7 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-white/60 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {copy.amazon}
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
              locale={locale}
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
              {copy.storyEyebrow}
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
              {copy.storyTitle}
            </h2>
            <div className="mt-14">
              {copy.chapters.map(([number, title, text]) => (
                <article
                  key={number}
                  className="grid gap-4 border-t border-black/15 py-7 sm:grid-cols-[3rem_1fr]"
                >
                  <span className="pt-1 text-[0.68rem] font-bold tracking-[0.18em] text-[#9a632d]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
                      {text}
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
                {copy.road}
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">
                {copy.meetBand}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/55 lg:justify-self-end">
              {copy.bandIntro}
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
              {copy.live}
            </p>
          </div>

          <div className="mt-px grid gap-px bg-white/10 sm:grid-cols-3">
            {[
              {
                name: "Hank",
                role: copy.roles.hank,
                image: "/images/band/lead-guitar-harmonica.png",
              },
              {
                name: "Wade",
                role: copy.roles.wade,
                image: "/images/band/bass-player.png",
              },
              {
                name: "Tyler “Ty”",
                role: copy.roles.ty,
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
                {copy.galleryEyebrow}
              </p>
              <h2 className="mt-5 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">
                {copy.galleryTitle}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/48">
              {copy.galleryText}
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
              {copy.genre}
            </p>
          </div>
          <div className="sm:text-right">
            <Link
              href={localePath(locale, "/lyrics")}
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-[#d39a50]"
            >
              {copy.footerStories}
            </Link>
            <p className="mt-6 text-xs text-white/30">
              © 2026 Alex Turow Records. {copy.rights}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function Home() {
  return <HomeContent locale="en" />;
}
