// Digital Clock with Timezone Support

class DigitalClock {
    constructor() {
        this.primaryTimezone = 'local';
        this.secondaryClocks = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
        this.updateTimezoneInfo();
        this.loadSavedClocks();
    }

    setupEventListeners() {
        // Primary timezone selector
        document.getElementById('primaryTimezoneSelect').addEventListener('change', (e) => {
            this.primaryTimezone = e.target.value;
            this.updateClock();
        });

        // Add timezone button
        document.getElementById('addTimezoneBtn').addEventListener('click', () => {
            const select = document.getElementById('addTimezoneSelect');
            if (select.value) {
                this.addSecondaryTimezone(select.value);
                select.value = '';
            }
        });
    }

    updateClock() {
        // Update primary clock
        const now = new Date();
        const timeString = this.getTimeString(now, this.primaryTimezone);
        const dateString = this.getDateString(now, this.primaryTimezone);
        const timezoneString = this.getTimezoneString(this.primaryTimezone);

        document.getElementById('primaryTime').textContent = timeString;
        document.getElementById('primaryDate').textContent = dateString;
        document.getElementById('primaryTimezone').textContent = timezoneString;

        // Update secondary clocks
        this.secondaryClocks.forEach((timezone, index) => {
            this.updateSecondaryClockDisplay(index, now);
        });

        this.updateTimezoneInfo();
    }

    getTimeString(date, timezone) {
        if (timezone === 'local') {
            return date.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
        }
        return date.toLocaleTimeString('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    }

    getDateString(date, timezone) {
        if (timezone === 'local') {
            return date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        return date.toLocaleDateString('en-US', {
            timeZone: timezone,
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    getTimezoneString(timezone) {
        if (timezone === 'local') {
            const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            return localTimezone;
        }
        return timezone;
    }

    addSecondaryTimezone(timezone) {
        if (!this.secondaryClocks.includes(timezone)) {
            this.secondaryClocks.push(timezone);
            this.renderSecondaryClocks();
            this.saveClocks();
        }
    }

    removeSecondaryTimezone(index) {
        this.secondaryClocks.splice(index, 1);
        this.renderSecondaryClocks();
        this.saveClocks();
    }

    renderSecondaryClocks() {
        const container = document.getElementById('multiClockContainer');
        container.innerHTML = '';

        this.secondaryClocks.forEach((timezone, index) => {
            const now = new Date();
            const timeString = this.getTimeString(now, timezone);
            const dateString = this.getDateString(now, timezone);
            const timezoneString = this.getTimezoneString(timezone);

            const clockCard = document.createElement('div');
            clockCard.className = 'clock-card';
            clockCard.innerHTML = `
                <button class="remove-btn" onclick="clock.removeSecondaryTimezone(${index})">×</button>
                <div class="time">${timeString}</div>
                <div class="date">${dateString}</div>
                <div class="timezone">${timezoneString}</div>
            `;
            container.appendChild(clockCard);
        });
    }

    updateSecondaryClockDisplay(index, now) {
        const timezone = this.secondaryClocks[index];
        const timeString = this.getTimeString(now, timezone);
        const dateString = this.getDateString(now, timezone);
        const cards = document.querySelectorAll('.clock-card');
        
        if (cards[index]) {
            cards[index].querySelector('.time').textContent = timeString;
            cards[index].querySelector('.date').textContent = dateString;
        }
    }

    updateTimezoneInfo() {
        const now = new Date();
        const currentTz = this.primaryTimezone === 'local' 
            ? Intl.DateTimeFormat().resolvedOptions().timeZone 
            : this.primaryTimezone;
        
        const timeString = this.getTimeString(now, this.primaryTimezone);
        const dateString = this.getDateString(now, this.primaryTimezone);
        
        const info = `
            <p><strong>Current Timezone:</strong> ${currentTz}</p>
            <p><strong>Current Time:</strong> ${timeString}</p>
            <p><strong>Current Date:</strong> ${dateString}</p>
            <p><strong>Total Secondary Clocks:</strong> ${this.secondaryClocks.length}</p>
            <p><strong>Active Timezones:</strong> ${this.secondaryClocks.length > 0 ? this.secondaryClocks.join(', ') : 'None'}</p>
        `;
        
        document.getElementById('timezoneInfo').innerHTML = info;
    }

    saveClocks() {
        localStorage.setItem('digitalClockTimezones', JSON.stringify(this.secondaryClocks));
    }

    loadSavedClocks() {
        const saved = localStorage.getItem('digitalClockTimezones');
        if (saved) {
            try {
                this.secondaryClocks = JSON.parse(saved);
                this.renderSecondaryClocks();
            } catch (e) {
                console.error('Error loading saved clocks:', e);
            }
        }
    }
}

// Initialize clock when DOM is ready
let clock;
document.addEventListener('DOMContentLoaded', () => {
    clock = new DigitalClock();
});