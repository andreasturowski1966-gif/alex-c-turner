export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      {/* Hero */}
      <section className="flex min-h-screen items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <p className="mb-4 uppercase tracking-[0.4em] text-amber-500">
            Modern Country Rock
          </p>

          <h1 className="text-6xl font-bold md:text-8xl">
            Alex C. Turner
          </h1>

          <p className="mt-8 text-xl leading-8 text-stone-300 md:text-2xl">
            Honest stories about family, freedom, second chances and the road
            that always leads home.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-amber-600 px-8 py-4 text-lg font-semibold transition hover:bg-amber-500">
              Listen to Coming Home
            </button>

            <button className="rounded-lg border border-stone-600 px-8 py-4 text-lg transition hover:bg-stone-800">
              About Alex
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}