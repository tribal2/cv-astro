# CV-Astro

Astro component to display a print-friendly and minimalist CV inspired by BartoszJarocki/cv.

![CV-Astro Demo](demo.png)

## Usage

```bash
npm install cv-astro
```

> Your Astro project must be configured to use TailwindCSS

Configure your TailwindCSS config to include the styles in the `cv-astro` package:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',

    // Add the following line
    './node_modules/cv-astro/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
```

Import the component in your Astro project:

```astro
---
import CV from 'cv-astro';
---
<CV {...cvData}/>
```

> `cvData` is an object implementing the `ICVData` type interface defined in `src/cv.d.ts`:
> ```ts
> interface ICvData {
>   info: IPersonalInfo;
>   experience?: IExperience[];
>   volunteering?: IVolunteer[];
>   education?:  IEducation[];
>   certifications?: ICertification[];
>   skills?: ISkill[];
>   projects?: IProject[];
>   order?: ECvSection[];
> }
> ```
