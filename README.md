# ⏰ Digital Clock with Timezone Support

A stunning, responsive digital clock application with real-time updates and comprehensive timezone support. Built with HTML, CSS, and vanilla JavaScript.

## 🌟 Features

- **Real-Time Clock Display**: Updates every second with accurate time
- **Timezone Support**: Switch between any timezone in the world
- **Multiple Clock Display**: Add and manage multiple timezone clocks simultaneously
- **Responsive Design**: Beautiful UI that works on all devices
- **Local Storage**: Automatically saves your selected timezones
- **Popular Timezones**: Quick access to commonly used timezones
- **Animated UI**: Smooth animations and transitions
- **Timezone Information**: Displays detailed timezone information

## 🚀 Quick Start

### Live Demo
Visit the live application at: [https://langatcorne.github.io/digital-clock](https://langatcorne.github.io/digital-clock)

### Local Setup

1. Clone the repository:
```bash
git clone https://github.com/Langatcorne/digital-clock.git
cd digital-clock
```

2. Open in your browser:
```bash
# Simply open index.html in your browser
open index.html

# Or use a local server (Python 3)
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📋 Usage

### Primary Clock
1. Select a timezone from the dropdown menu
2. The primary clock will display the current time for the selected timezone
3. Time, date, and timezone name are automatically updated every second

### Multiple Timezones
1. Use the "Add Timezone" dropdown in the "Other Timezones" section
2. Click "Add Clock" to display the clock for that timezone
3. Click the "×" button on any clock card to remove it
4. Your selections are automatically saved

### Timezone Selection
The application includes popular timezones organized by region:
- **Americas**: New York, Los Angeles, Chicago, Denver, etc.
- **Europe & Africa**: London, Paris, Berlin, Moscow, Cairo, etc.
- **Asia**: Tokyo, Shanghai, Hong Kong, Singapore, Dubai, etc.
- **Oceania**: Sydney, Melbourne, Auckland, etc.
- **UTC**: Coordinated Universal Time

## 🎨 Design Features

- **Gradient Backgrounds**: Modern gradient design with smooth color transitions
- **Responsive Grid**: Automatically adjusts layout for different screen sizes
- **Card-Based UI**: Clean, organized presentation of timezone clocks
- **Smooth Animations**: Fade-in and slide-down animations on page load
- **Pulse Effect**: Subtle pulse animation on the time display
- **Interactive Buttons**: Hover effects and smooth transitions

## 🔧 Technical Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Flexbox, Grid, Gradients, and Animations
- **Vanilla JavaScript**: No external dependencies
- **Intl API**: Native JavaScript timezone support
- **LocalStorage**: Browser local storage for persistence

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome/Chromium (90+)
- Firefox (88+)
- Safari (14+)
- Edge (90+)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📁 Project Structure

```
digital-clock/
├── index.html      # Main HTML file
├── styles.css      # Complete styling with animations
├── script.js       # Clock logic and timezone handling
└── README.md       # This file
```

## 🎯 Key Classes and Methods

### DigitalClock Class

**Methods:**
- `init()` - Initialize the clock and event listeners
- `updateClock()` - Update all clock displays every second
- `getTimeString(date, timezone)` - Format time for a specific timezone
- `getDateString(date, timezone)` - Format date for a specific timezone
- `addSecondaryTimezone(timezone)` - Add a new timezone clock
- `removeSecondaryTimezone(index)` - Remove a timezone clock
- `saveClocks()` - Save timezone selections to localStorage
- `loadSavedClocks()` - Load saved timezone selections

## 💾 Local Storage

The application automatically saves your selected timezones. Your selections persist across browser sessions:
```javascript
localStorage.setItem('digitalClockTimezones', JSON.stringify(timezones))
```

## 🌐 Timezone Data

The application uses the JavaScript `Intl` API for accurate timezone handling. Timezones are based on the IANA Time Zone Database.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Langatcorne**
- GitHub: [@Langatcorne](https://github.com/Langatcorne)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/Langatcorne/digital-clock/issues).

## 🚀 Deployment

This project is deployed using **GitHub Pages**.

### Deploy Your Own

1. Fork the repository
2. Go to Settings → Pages
3. Set "Build and deployment" source to "Deploy from a branch"
4. Select "main" branch and "/root" folder
5. Click Save
6. Your site will be live at `https://yourusername.github.io/digital-clock`

## ✨ Version History

### v1.0.0 (Current)
- Initial release with timezone support
- Multiple timezone clock display
- Responsive design
- Local storage persistence
- Beautiful UI with animations

---

**Made with ❤️ by Langatcorne**