# Sandy's Portfolio

![Sandy's Portfolio](./public/assets/projects/sandy-portfolio.jpg)

A personal portfolio site built with React, Three.js, and Tailwind CSS.

## What's in here

- **Frontend**: React 19 with Vite for fast development
- **3D Model**: Mac laptop rendered with Three.js (rotatable, draggable)
- **Styling**: Tailwind CSS with custom gradients (cyan to purple theme)
- **Animations**: Framer Motion for smooth transitions and interactions
- **Routing**: React Router for navigation (Home, Terms, Privacy)
- **Forms**: EmailJS for contact form submissions
- **Responsive**: Works on mobile, tablet, and desktop

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to see it live.

### Build for production
```bash
npm run build
```

The `dist/` folder will have your optimized production build.

### Preview production build
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── DeveloperModel.jsx    (3D laptop model)
│   ├── ProjectDetails.jsx    (project modal)
│   ├── Card.jsx             (skill cards)
│   └── ...other components
├── sections/            # Page sections
│   ├── Hero.jsx         (3D model + intro)
│   ├── About.jsx        (about me with floating icons)
│   ├── Projects.jsx     (project showcase)
│   ├── Contact.jsx      (contact form)
│   └── ...other sections
├── pages/               # Page routes
│   ├── Terms.jsx
│   └── Privacy.jsx
├── constants/           # Data (projects, experience, education)
└── App.jsx             # Main app component
```

## Key Dependencies

- **React 19**: UI framework
- **Vite**: Build tool
- **Tailwind CSS 4**: Styling
- **Three.js**: 3D graphics
- **Framer Motion**: Animations
- **React Router**: Navigation
- **EmailJS**: Email handling

## Development Tips

- Hot reload works automatically while running `npm run dev`
- Components use Tailwind classes for styling
- Animations use Framer Motion's `motion` component
- 3D model responds to mouse drag (grab cursor)
- Check `src/constants/index.js` for project/experience data

## Styling

Everything uses Tailwind CSS with a custom color scheme:
- Primary color: Cyan (#22d3ee)
- Accent color: Purple (#5c33cc)
- Coral: (#ca2f8c)

The scrollbar is also styled to match the theme.

## 3D Model

The Mac laptop model is loaded from `/public/models/mac-laptop.glb`. It:
- Auto-rotates on load
- Can be dragged to rotate manually
- Fades in smoothly
- Scales responsively on different devices

## Adding New Projects

Edit `src/constants/index.js` and add to the projects array:
```javascript
{
  title: "Project Name",
  description: "What it does",
  subDescription: ["Feature 1", "Feature 2"],
  href: "https://link-to-project.com",
  image: "assets/project-image.png",
  tags: [{id: "1", name: "React"}, ...],
}
```

## Contact Form

The contact form uses EmailJS. Update credentials in `src/sections/Contact.jsx`:
```javascript
emailjs.send(
  "your_service_id",
  "your_template_id",
  formData,
  "your_public_key"
)
```

Get these from [emailjs.com](https://www.emailjs.com)

## Performance

The site is optimized for speed:
- Gzipped bundle: ~77 KB (main app)
- 3D library loads separately
- CSS is minified and split
- Images are optimized

Load time: ~1-2 seconds on 4G

## Browser Support

Works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Troubleshooting

**3D model not showing?**
- Check that `/public/models/mac-laptop.glb` exists
- Try refreshing the page
- Check browser console for errors

**Form not working?**
- Verify EmailJS credentials in Contact.jsx
- Check that CORS is allowed
- Test with browser console open

**Animations look choppy?**
- This is usually a browser performance issue
- Try closing other tabs
- Check GPU acceleration is enabled.

## Built With

This portfolio showcases modern web development practices:
- Interactive 3D graphics with Three.js
- Smooth animations and transitions
- Responsive design for all devices
- Fast performance with optimized builds
- Clean code and organized component structure

---

Made with ❤️ by Sandesh Sapkota

Have feedback? Found a bug? Open an issue or reach out through the contact form!
