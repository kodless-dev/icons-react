<h1 align="center">🎨 @kodless-dev/icon-react</h1>

<p align="center">
  <em>Composants React légers pour charger dynamiquement des icônes <a href="https://lucide.dev" target="_blank">Lucide</a> via un CDN GitHub Pages.</em>
</p>

<p align="center">
  <a href="https://github.com/kodless-dev/icons-react/actions/workflows/publish.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/kodless-dev/icons-react/publish.yml?label=build&logo=github" alt="Build Status" />
  </a>
  <a href="https://github.com/kodless-dev/icons-react/releases">
    <img src="https://img.shields.io/github/v/release/kodless-dev/icons-react?logo=semantic-release&label=version" alt="GitHub release" />
  </a>
  <a href="https://github.com/kodless-dev/icons-react/pkgs/npm/icon-react">
    <img src="https://img.shields.io/badge/GitHub%20Packages-%40kodless--dev%2Ficon--react-24292f?logo=github" alt="GitHub Package" />
  </a>
  <a href="https://github.com/kodless-dev/icons-cdn">
    <img src="https://img.shields.io/badge/CDN%20Ready-https%3A%2F%2Fkodless--dev.github.io%2Ficons--cdn-0a0?logo=vercel&color=black" alt="CDN Available" />
  </a>
  <img src="https://img.shields.io/github/license/kodless-dev/icons-react" alt="License MIT" />
</p>

---

## 📦 Installation

### 📚 Depuis GitHub Packages

> 💡 Ce package n’est pas sur npm mais sur **GitHub Packages**.

#### Avec Bun

```bash
bun add @kodless-dev/icon-react
```

#### Avec npm

```bash
npm install @kodless-dev/icon-react --registry=https://npm.pkg.github.com
```

#### Avec pnpm

```bash
pnpm add @kodless-dev/icon-react --registry=https://npm.pkg.github.com
```

---

## ⚡ Utilisation

```tsx
import { RemoteIcon, useIconList } from '@kodless-dev/icon-react';

export function Example() {
  const [icons, setIcons] = useState<string[]>([]);

  useEffect(() => {
    useIconList().then(setIcons);
  }, []);

  return (
    <div>
      <h3>Exemple d'icône :</h3>
      <RemoteIcon name="heart" color="red" size={48} />

      <h4>Liste d'icônes disponibles : {icons.length}</h4>
    </div>
  );
}
```

---

## 🧠 API

`<RemoteIcon />`

| Prop        | Type               | Défaut                                          | Description                    |
| ----------- | ------------------ | ----------------------------------------------- | ------------------------------ |
| `name`      | `string`           | —                                               | Nom de l’icône (ex: `"heart"`) |
| `size`      | `number \| string` | `24`                                            | Taille en pixels               |
| `color`     | `string`           | `"currentColor"`                                | Couleur de l’icône             |
| `className` | `string`           | `undefined`                                     | Classe CSS optionnelle         |
| `cdnUrl`    | `string`           | `https://kodless-dev.github.io/icons-cdn/icons` | Base CDN personnalisée         |

`useIconList(cdnUrl?)`

Renvoie la liste de toutes les icônes disponibles sur le CDN (JSON généré automatiquement).

```ts
const icons = await useIconList(); // ['activity', 'heart', 'github', ...]
```

---

## 🌐 CDN des icônes

Les icônes SVG sont hébergées via :
https://kodless-dev.github.io/icons-cdn/icons

Exemple direct :

```html
<img
  src="https://kodless-dev.github.io/icons-cdn/icons/heart.svg"
  alt="Heart"
/>
```

---

## 🛠️ Développement local

```bash
bun install
bun run dev
```

Pour builder le package :

```bash
bun run build
```

---

## 📦 Publication

**Automatique (GitHub Actions)**

Pousser un nouveau tag versionné :

```bash
git tag v1.0.0
git push origin v1.0.0
```

Le workflow publish.yml s’exécutera et publiera le package sur GitHub Packages.

**Manuelle**

```bash
export GITHUB_TOKEN=ghp_xxxxxxxxx
bun run build
bun publish --access public
```

---

## 🪶 Licence

[MIT © kodless-dev](./LICENSE)
