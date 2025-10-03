# 📊 CTF Academy Progress Tracker

A sprint velocity tracking dashboard born out of creative necessity - built to visualize and demonstrate the progress of our CTF Academy program in a clear, engaging way.


## ✨ Features

- **📈 Sprint Velocity Tracking** - Calculate and display average story points per sprint
- **📊 Interactive Charts** - Visualize completed vs. pending story points with stacked bar charts
- **🎯 Key Metrics Dashboard** - Track total completed points, average velocity, and current sprint progress
- **📅 Sprint-by-Sprint Comparison** - See how each sprint stacks up against previous ones
- **🎨 Clean UI** - Modern, responsive design built with Tailwind CSS

## 🛠️ Tech Stack

- **React** - Component-based UI framework
- **Vite** - Lightning-fast build tool and dev server
- **Recharts** - Composable charting library for data visualization
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/ctf-academy-progress-tracker.git
cd ctf-academy-progress-tracker
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Adding Sprint Data

Edit the sprint data in your main component to reflect your team's actual metrics:

```javascript
const sprints = [
  {
    name: 'Sprint 1',
    date: 'Sept 22, 2025',
    completed: 23.5,
    pending: 0,
    total: 23.5
  },
  // Add more sprints...
];
```

### Styling

The project uses Tailwind CSS. Customize the theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    },
  },
},
```

## 📊 Metrics Explained

- **Average Velocity**: Total completed story points divided by number of sprints
- **Total Completed**: Cumulative story points completed across all sprints
- **Sprint Progress**: Percentage of current sprint's story points completed

## 🤝 Contributing

This started as a personal project, but contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built for the CTF Academy team and our amazing devs, shoutout to @tallbreadstick,
  @nahuyadada, @MystoganF
- Inspired by the need to make sprint metrics more engaging and accessible
- Created with a dash of boredom and a sprinkle of creativity ✨

## 📧 Contact

Gino Sarsonas - Scrum Master @ CTF Academy

Project Link: (https://github.com/tallbreadstick/ctf-academy)

---

*Made with ❤️ and a desire to make sprint tracking less boring*
