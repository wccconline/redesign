# Webb Chapel Church of Christ - React Website

A modern React application for the Webb Chapel Church of Christ website, built with TypeScript, Vite, and Tailwind CSS.  

## 🚀 Features

- **Modern React Architecture**: Built with React 19, TypeScript, and Vite
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Component-Based**: Reusable components for maintainability
- **Third-Party Integrations**: 
  - Google Maps embedding
  - Cognito Forms for contact forms
  - Christian World Media for live streaming
  - Mailchimp for email subscriptions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Code splitting and lazy loading

## 📁 Project Structure

```
react-app/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   ├── Layout.tsx      # Page layout wrapper
│   │   ├── CognitoForm.tsx # Contact form integration
│   │   └── MailchimpForm.tsx # Email subscription form
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx    # Homepage
│   │   ├── ContactPage.tsx # Contact information
│   │   ├── MinistriesPage.tsx # Church ministries
│   │   ├── MissionariesPage.tsx # Missionary information
│   │   ├── LiveStreamingPage.tsx # Live streaming
│   │   ├── SitbPage.tsx   # Bible study program
│   │   └── ...            # Other pages
│   ├── App.tsx            # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/                # Static assets
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build:production

# Preview production build
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for development
- `npm run build:production` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking

## 🎨 Styling

The project uses Tailwind CSS for styling with custom configuration:

- **Primary Colors**: Church blue (#243f63) and gold (#d4af37)
- **Fonts**: Lato and Questrial
- **Responsive Design**: Mobile-first approach
- **Custom Components**: Reusable styled components

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:

```env
VITE_APP_TITLE=Webb Chapel Church of Christ
VITE_APP_URL=http://localhost:5173
```

### Tailwind Configuration

Custom colors and fonts are defined in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'church-blue': '#243f63',
      'church-gold': '#d4af37',
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'questrial': ['Questrial', 'sans-serif'],
    },
  },
}
```

## 📱 Pages

### Homepage (`/`)
- Hero section with church information
- Service times and location
- Quick links to important pages

### Ministries (`/ministries`)
- Interactive accordion with ministry information
- Detailed descriptions and contact information

### Missionaries (`/missionaries`)
- Missionary profiles and updates
- Support information and contact details

### Contact (`/contact`)
- Google Maps integration
- Contact form (Cognito Forms)
- Church address and phone number

### Live Streaming (`/livestreaming`)
- Live worship service stream
- Sermon archives
- Service schedule

### SITB (`/sitb`)
- Bible study correspondence program
- Registration form
- Program details and benefits

### Summer Learning Camp (`/summerlearningcamp`)
- Program information and schedule
- Registration details
- Activities and benefits

## 🔌 Third-Party Integrations

### Google Maps
- Embedded map showing church location
- No API key required for basic embedding

### Cognito Forms
- Contact forms and registrations
- Seamless integration with custom styling

### Christian World Media
- Live streaming of worship services
- Sermon archive access
- Embedded via iframe

### Mailchimp
- Email subscription management
- Newsletter signup forms
- Custom integration component

## 🚀 Deployment

See [deploy.md](./deploy.md) for detailed deployment instructions.

### Quick Deploy Options

1. **Netlify**: Connect repository, set build command to `npm run build:production`
2. **Vercel**: Connect repository, set output directory to `dist`
3. **GitHub Pages**: Use provided GitHub Actions workflow

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📈 Performance

The application is optimized for performance:

- **Code Splitting**: Lazy loading of components
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Compressed images and assets
- **CSS Purging**: Unused Tailwind classes removed

## 🔒 Security

- Content Security Policy headers
- HTTPS enforcement
- Secure third-party integrations
- Input validation and sanitization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

For technical support or questions:
- Check the deployment guide
- Review the troubleshooting section
- Contact the development team

## 📄 License

This project is for the Webb Chapel Church of Christ. All rights reserved.

---

Built with ❤️ for the Webb Chapel Church of Christ community.