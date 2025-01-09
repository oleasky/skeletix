# 🦴 Skeletix

**Skeletix** is a lightweight wireframing design system built with **React** and **TailwindCSS**. It’s designed to speed up prototyping and serve as a boilerplate for new projects, including **Next.js** apps. With a minimal yet powerful set of pre-built components, `skeletix` empowers you to quickly create, customize, and iterate on designs.

---

## 🚀 Features

- **Minimalistic Components**: Pre-styled components with TailwindCSS defaults.
- **Fully Customizable**: Extend styles using Tailwind's utility classes.
- **Next.js-Ready**: Compatible with Next.js server-side and client-side rendering.
- **Tailwind-Optimized**: Works seamlessly with your TailwindCSS setup.
- **Rapid Prototyping**: Perfect for wireframing or as a boilerplate for your next project.

---

## 📦 Installation

### Step 1: Install `skeletix`

```bash
npm install skeletix
```

Or with Yarn:

```bash
yarn add skeletix
```

### Step 2: Install Peer Dependencies
`skeletix` requires React, React DOM, TailwindCSS, and optionally Next.js. Ensure these are installed in your project:

```bash
npm install react react-dom tailwindcss
```

If you're using Next.js:

```bash
npm install next
```

### Step 3: TailwindCSS Configuration
Ensure your `tailwind.config.js` includes `skeletix` in the `content` array:

```javascript
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/skeletix/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### TailwindCSS Integration with `barestyles`

`skeletix` components work best when the `barestyles` TailwindCSS plugin is installed. If `barestyles` is not detected, components will render without `barestyles`-specific utility classes, and you may see a warning in the console.

### Installation
To use `skeletix` with `barestyles`:
1. Install the required packages:
   ```bash
   npm install barestyles
   ```


## 🛠️ Usage

### Basic Example
Start using skeletix components in your project:

```javascript
import { Container, Button } from 'skeletix';

export default function App() {
  return (
    <Container className="p-4">
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </Container>
  );
}

```

### Customizing Components
Add your own TailwindCSS classes to customize the components:

```javascript
<Button className="bg-blue-500 text-white hover:bg-blue-700">
  Custom Button
</Button>
```

## ⚡ Advanced Features
### Next.js Integration
Some `skeletix` components use NextJS components, like `next/Image`. If you aren't using NextJs these components won't be available ... FOR NOW!

## 🌈 Styling and Customization
- `skeletix` components are built with TailwindCSS defaults.
- You can override styles by passing className props.
- Add your own custom utilities in tailwind.config.js.

## 🛡️ Best Practices
- Always include skeletix in your TailwindCSS content array.
- Use the className prop to fully customize component styles.
- Combine with barestyles for advanced TailwindCSS utilities.

## 🤝 Contributing
Contributions are welcome! If you have ideas for new components or improvements, feel free to open an issue or submit a pull request.

## 🌟 Acknowledgments
Special thanks to the open-source community and the creators of React, TailwindCSS, and Next.js for providing the tools that make projects like this possible.

## 🚧 Roadmap
🛠 Add NextJS components fallbacks for other frameworks, like astro
🛠 Add more components for layouts and interactivity.
✨ Support for dark mode customization.
🌍 Localization-ready components.

## Happy prototyping with skeletix! 🎉