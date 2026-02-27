
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: dark; }

body {
  @apply bg-[color:theme('colors.brand.bg')] text-neutral-100 antialiased;
}

.container { @apply mx-auto max-w-6xl px-4; }

a { @apply text-[color:theme('colors.brand.blue')]; }
a:hover { @apply opacity-90; }

::selection { background: rgba(77,163,255,0.25); color: #fff; }
