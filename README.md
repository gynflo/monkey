## Initialisation du projet le 26/04/23

- Tailwindcss & TypeScript OK
- Création de divers dossiers dans src

  - api
  - config
  - context
  - hooks
  - lib
  - ui
    |_ components
    |_ design-system
    |\_ modules
  - utils

- Configuration de nextConfig afin de build dans out 

```nextConfig.js
    const nextConfig = {
    reactStrictMode: true,
    output: "export"
    }
```


- Configuration Firebase
- Installation de firebase
- Initialisation Firebase
  |_What do you want to use as your public directory? out

  *** *** *** *** *** *** *** *** *** ***  *** *** *** *** *** *** *** *** *** *** 

Afin d'avoir des classe dynamiques, installation du package clsx 