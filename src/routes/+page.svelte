<script lang="ts">
  const stats = [
    { value: "100", label: "Posts" },
    { value: "22,929", label: "Followers" },
    { value: "224,249", label: "Post Views" },
    { value: "2,473", label: "Reactions" },
  ];

  const capabilities = [
    {
      icon: "architecture",
      title: "Scalable",
      description:
        "I build for the real world: high traffic, large datasets, growing teams, and products that cannot afford to break when growth kicks in.",
    },
    {
      icon: "devices",
      title: "Full Stack",
      description:
        "I work comfortably across mobile, web, frontend, backend, and architecture. Owning the full experience helps me build products that are cohesive, fast, and genuinely useful.",
    },
    {
      icon: "auto_awesome",
      title: "AI With Purpose",
      description:
        "I use AI as a practical tool to improve workflows, accelerate delivery, and create better user experiences in modern websites and mobile applications.",
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "work",
      href: "https://linkedin.com/in/jimmymcbride",
    },
    { name: "GitHub", icon: "code", href: "https://github.com/jimmymcbride" },
    { name: "Twitter", icon: "tag", href: "https://twitter.com/jimmymcbride" },
    { name: "Discord", icon: "forum", href: "#" },
    { name: "Dev.to", icon: "article", href: "https://dev.to/jimmymcbride" },
    { name: "RSS", icon: "rss_feed", href: "/rss" },
  ];
</script>

<svelte:head>
  <title>Jimmy McBride | Full Stack Developer</title>
  <meta
    name="description"
    content="Jimmy McBride - Professional full stack web and mobile app developer. Building products that scale, perform, and delight."
  />
</svelte:head>

<!-- Nav -->
<nav
  class="fixed top-0 w-full z-50 bg-base/80 backdrop-blur-md border-b border-surface0/30"
>
  <div
    class="flex justify-between items-center max-w-7xl mx-auto px-6 py-4 w-full"
  >
    <div class="font-headline text-2xl font-bold text-blue tracking-tight">
      Jimmy McBride
    </div>
    <div
      class="hidden md:flex items-center space-x-8 font-body font-medium text-lg leading-relaxed"
    >
      <a class="text-subtext0 hover:text-blue transition-colors" href="#about"
        >About</a
      >
      <a class="text-subtext0 hover:text-blue transition-colors" href="#stats"
        >Impact</a
      >
      <a
        class="text-subtext0 hover:text-blue transition-colors"
        href="#capabilities">Skills</a
      >
      <a class="text-subtext0 hover:text-blue transition-colors" href="#connect"
        >Connect</a
      >
    </div>
    <a
      href="#connect"
      class="bg-blue hover:bg-lavender text-base px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-sm active:scale-[0.98]"
    >
      Get In Touch
    </a>
  </div>
</nav>

<!-- Hero -->
<main>
  <section
    class="relative w-screen h-screen overflow-hidden flex items-center justify-center"
  >
    <!-- Hero Background Video (ping-pong loop) -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover object-center"
    >
      <source src="/hero-animation.webm" type="video/webm" />
      <source src="/hero-animation.mp4" type="video/mp4" />
    </video>
    <!-- Gradient overlay for text readability -->
    <div
      class="absolute inset-0 bg-linear-to-b from-base/70 via-base/40 to-base/90"
    ></div>

    <!-- Hero Content -->
    <div
      class="relative z-10 text-center px-8 py-12 md:px-16 md:py-16 max-w-5xl mx-auto bg-base/40 backdrop-blur-lg rounded-2xl border border-surface1/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
    >
      <div
        class="mb-6 inline-flex items-center px-4 py-1.5 rounded-full bg-surface0/50 text-blue font-body text-sm font-semibold tracking-wide border border-surface1/30"
      >
        <span class="w-2 h-2 rounded-full bg-green animate-pulse mr-2"></span>
        AVAILABLE FOR NEW PROJECTS
      </div>
      <h1
        class="font-headline text-5xl md:text-7xl lg:text-8xl text-text leading-[1.1] max-w-5xl mx-auto mb-8 font-extrabold tracking-tight"
      >
        Hi, I'm <span class="text-blue">Jimmy McBride.</span>
      </h1>
      <p
        class="font-body text-xl md:text-2xl text-subtext1 max-w-3xl mx-auto leading-relaxed mb-6"
      >
        I'm a professional full stack web and mobile app developer who loves
        building products that people actually use. I've worked on platforms
        serving millions of users and handling massive amounts of data, always
        with a focus on performance, reliability, and clean execution.
      </p>
      <p
        class="font-body text-lg md:text-xl text-subtext0 max-w-3xl mx-auto leading-relaxed mb-12"
      >
        I've built for global platforms, fast-moving startups, and plenty of
        fintech along the way. I'm also deeply up-to-date on using AI to create
        practical solutions for modern web and mobile applications. I'm always
        looking for better ways to build.
      </p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="#connect"
          class="w-full sm:w-auto px-10 py-5 bg-linear-to-b from-blue to-sapphire text-base rounded-xl font-bold text-lg shadow-[0_8px_24px_rgba(137,180,250,0.15)] hover:-translate-y-0.5 transition-all duration-300"
        >
          Let's Work Together
        </a>
        <a
          href="#capabilities"
          class="w-full sm:w-auto px-10 py-5 bg-surface0/80 text-text border border-surface1/30 rounded-xl font-bold text-lg hover:bg-surface1 transition-all duration-300"
        >
          What I Do
        </a>
      </div>

      <!-- Social Links -->
      <div class="flex justify-center items-center gap-3 mt-12">
        {#each socialLinks as link}
          <a
            href={link.href}
            class="w-11 h-11 rounded-full bg-surface0/60 flex items-center justify-center text-overlay1 hover:bg-blue/20 hover:text-blue transition-all duration-300"
            title={link.name}
          >
            <span class="material-symbols-outlined text-xl">{link.icon}</span>
          </a>
        {/each}
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section id="stats" class="bg-mantle py-16">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {#each stats as stat}
          <div class="p-4">
            <div
              class="font-headline text-4xl md:text-5xl font-bold text-blue mb-2"
            >
              {stat.value}
            </div>
            <div
              class="font-body text-overlay1 uppercase tracking-widest text-xs font-bold"
            >
              {stat.label}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Capabilities -->
  <section id="capabilities" class="max-w-7xl mx-auto px-6 py-24 md:py-32">
    <div class="text-center mb-20">
      <h2 class="font-headline text-4xl md:text-5xl text-text font-bold mb-4">
        What I Bring to the Table
      </h2>
      <div class="w-20 h-1 bg-teal mx-auto rounded-full"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      {#each capabilities as cap}
        <div
          class="group bg-mantle p-10 rounded-xl border border-surface0/30 shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_48px_rgba(137,180,250,0.06)] hover:border-blue/20 transition-all duration-500"
        >
          <div
            class="w-14 h-14 bg-surface0 rounded-lg flex items-center justify-center mb-8 text-blue group-hover:bg-blue/10 transition-colors duration-300"
          >
            <span class="material-symbols-outlined text-3xl">{cap.icon}</span>
          </div>
          <h3 class="font-headline text-2xl font-bold text-text mb-4">
            {cap.title}
          </h3>
          <p class="text-subtext0 leading-relaxed">
            {cap.description}
          </p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Quote -->
  <section class="max-w-5xl mx-auto px-6 pb-24">
    <div
      class="bg-surface0/40 p-12 md:p-20 rounded-xl text-center relative overflow-hidden"
    >
      <span
        class="material-symbols-outlined text-mauve/20 text-8xl absolute -top-4 -left-4 opacity-50"
        >format_quote</span
      >
      <p
        class="font-headline text-3xl md:text-4xl text-text font-medium italic relative z-10"
      >
        "I love creating software that feels great to use, scales under
        pressure, and solves real-world problems."
      </p>
      <div
        class="mt-8 font-body text-sm font-bold text-overlay1 tracking-widest uppercase"
      >
        — Jimmy McBride
      </div>
    </div>
  </section>

  <!-- Newsletter / Subscribe -->
  <section id="connect" class="max-w-7xl mx-auto px-6 py-24">
    <div
      class="bg-surface0 rounded-xl overflow-hidden shadow-2xl relative border border-surface1/30"
    >
      <div
        class="absolute inset-0 opacity-5 pointer-events-none"
        style="background-image: radial-gradient(circle at 2px 2px, var(--color-blue) 1px, transparent 0); background-size: 40px 40px;"
      ></div>
      <div
        class="relative z-10 px-8 py-16 md:p-20 flex flex-col items-center text-center"
      >
        <h2 class="font-headline text-4xl md:text-5xl font-bold mb-4 text-text">
          Subscribe
        </h2>
        <p class="text-subtext0 text-lg md:text-xl max-w-2xl mb-12">
          Stay up to date with my latest posts, projects, and insights on full
          stack development, AI, and building products that matter.
        </p>
        <form class="w-full max-w-lg flex flex-col sm:flex-row gap-4">
          <div class="grow">
            <input
              class="w-full px-6 py-4 bg-mantle border-b-2 border-surface2 focus:border-blue text-text placeholder:text-overlay0 focus:ring-0 transition-all rounded-t-lg"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <button
            class="bg-blue text-base font-bold px-10 py-4 rounded-lg hover:bg-lavender transition-colors shadow-lg active:scale-95"
            type="submit"
          >
            Submit
          </button>
        </form>
        <p class="mt-6 text-sm text-overlay0 font-body tracking-wide">
          No spam, just good stuff. Unsubscribe anytime.
        </p>
      </div>
    </div>
  </section>
</main>

<!-- Footer -->
<footer class="w-full rounded-t-4xl mt-20 bg-mantle">
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-8 py-16 w-full"
  >
    <div>
      <div class="font-headline text-xl italic text-blue mb-6">
        Jimmy McBride
      </div>
      <p
        class="font-body text-sm tracking-wide text-overlay1 max-w-xs leading-relaxed"
      >
        Full stack developer building products that people actually use. Focused
        on performance, reliability, and clean execution.
      </p>
    </div>
    <div class="flex flex-col space-y-4">
      <div
        class="font-body font-bold text-xs uppercase tracking-[0.2em] text-text mb-2"
      >
        Connect
      </div>
      {#each socialLinks as link}
        <a
          class="text-overlay1 hover:text-blue transition-colors underline decoration-teal decoration-2 underline-offset-4 w-fit"
          href={link.href}
        >
          {link.name}
        </a>
      {/each}
    </div>
    <div class="flex flex-col space-y-4">
      <div
        class="font-body font-bold text-xs uppercase tracking-[0.2em] text-text mb-2"
      >
        Subscribe
      </div>
      <form class="flex gap-2">
        <input
          class="grow px-4 py-2.5 bg-surface0/50 border border-surface1/30 rounded-lg text-text placeholder:text-overlay0 focus:ring-1 focus:ring-blue/30 focus:border-blue/50 transition-all text-sm"
          placeholder="Enter your email"
          type="email"
        />
        <button
          class="bg-blue text-base font-semibold px-5 py-2.5 rounded-lg hover:bg-lavender transition-colors text-sm active:scale-95"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p class="text-xs text-overlay0 mt-4 font-body">
        &copy; Copyright 2023. All rights reserved.
      </p>
    </div>
  </div>
  <div class="max-w-7xl mx-auto px-8 pb-8">
    <div class="h-px bg-surface1/20 w-full"></div>
  </div>
</footer>
