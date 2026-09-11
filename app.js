// Pooja Bhakti Bhajan - Complete Application Engine
// Audio Player, Panchang Calculator, 108x Jaap Mala, Devotional Explorer & WhatsApp Viral Engine

class DevotionalApp {
    constructor() {
        this.currentTrack = null;
        this.isPlaying = false;
        this.repeat108Mode = false;
        this.currentRepeatCount = 0;
        this.selectedCategory = 'all';
        this.activeLanguage = 'hi'; // 'hi' or 'en'
        this.activeItem = null;

        // 108x Jaap Mala State
        this.jaapCount = parseInt(localStorage.getItem('pbb_jaap_count') || '0');
        this.totalMalas = parseInt(localStorage.getItem('pbb_total_malas') || '0');
        this.jaapStreak = parseInt(localStorage.getItem('pbb_jaap_streak') || '1');

        // Web Audio Context for Divine Synthesized Bells & Sacred Tones
        this.audioCtx = null;
        this.audioElement = new Audio();

        this.init();
    }

    init() {
        this.initAudioContext();
        this.initAudioEngine();
        this.setupTheme();
        this.calculateLivePanchang();
        this.renderDevotionalContent();
        this.initJaapMala();
        this.initWhatsAppGenerator();
        this.setupEventListeners();
        this.renderDailyGitaShloka();
        this.initScrollSpy();

        // Default initial track
        if (DEVOTIONAL_DATA.aartis.length > 0) {
            this.setTrack(DEVOTIONAL_DATA.aartis[0], false);
        }
    }

    initAudioContext() {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.audioCtx = new AudioContext();
            }
        } catch (e) {
            console.log("Web Audio API not supported", e);
        }
    }

    // Sacred Temple Bell Acoustic Synthesis
    playTempleBellSound() {
        if (!this.audioCtx) return;
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }

        const now = this.audioCtx.currentTime;
        const fundamental = 587.33; // D5 Sacred frequency

        // Harmonic series for authentic brass temple bell resonance
        const harmonics = [1, 2.01, 3.03, 4.2, 5.4];
        const gains = [0.6, 0.4, 0.25, 0.15, 0.08];

        harmonics.forEach((h, index) => {
            const osc = this.audioCtx.createOscillator();
            const gainNode = this.audioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(fundamental * h, now);

            gainNode.gain.setValueAtTime(gains[index], now);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 3.5 - (index * 0.4));

            osc.connect(gainNode);
            gainNode.connect(this.audioCtx.destination);

            osc.start(now);
            osc.stop(now + 3.5);
        });

        // Provide haptic vibration on mobile
        if (navigator.vibrate) {
            navigator.vibrate([40, 20, 60]);
        }
    }

    // Sacred Om Drone Frequency
    playOmDrone(freq = 432, duration = 4.0) {
        if (!this.audioCtx) return;
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }

        const now = this.audioCtx.currentTime;
        const osc1 = this.audioCtx.createOscillator();
        const osc2 = this.audioCtx.createOscillator();
        const gainNode = this.audioCtx.createGain();

        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(freq, now);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq / 2, now); // Sub-bass

        // Lowpass filter for warm resonant chant feel
        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, now);

        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.linearRampToValueAtTime(0.3, now + 0.8);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + duration);
        osc2.stop(now + duration);
    }

    // Setup Dark / Light Theme
    setupTheme() {
        const savedTheme = localStorage.getItem('pbb_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('pbb_theme', newTheme);
        this.updateThemeIcon(newTheme);
    }

    updateThemeIcon(theme) {
        const btn = document.getElementById('themeToggleBtn');
        if (btn) {
            btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    // Live Hindu Panchang Algorithm - Real Astronomical Solar & Lunar Calculation
    calculateLivePanchang() {
        const now = new Date();
        const days = [
            { hi: 'रविवार', en: 'Sunday' },
            { hi: 'सोमवार', en: 'Monday' },
            { hi: 'मंगलवार', en: 'Tuesday' },
            { hi: 'बुधवार', en: 'Wednesday' },
            { hi: 'गुरुवार', en: 'Thursday' },
            { hi: 'शुक्रवार', en: 'Friday' },
            { hi: 'शनिवार', en: 'Saturday' }
        ];

        const hindiMonths = [
            'जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून',
            'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'
        ];

        const dayIdx = now.getDay();
        const curDay = days[dayIdx];
        const dayName = `${curDay.hi} (${curDay.en})`;
        const formattedDate = `${now.getDate()} ${hindiMonths[now.getMonth()]} ${now.getFullYear()}`;

        // Standard Rahu Kaal by day of week (Vedic 90-minute muhurtas)
        const rahuTimes = [
            '04:30 PM - 06:00 PM', // Sunday (8th period)
            '07:30 AM - 09:00 AM', // Monday (2nd period)
            '03:00 PM - 04:30 PM', // Tuesday (7th period)
            '12:00 PM - 01:30 PM', // Wednesday (5th period)
            '01:30 PM - 03:00 PM', // Thursday (6th period)
            '10:30 AM - 12:00 PM', // Friday (4th period)
            '09:00 AM - 10:30 AM'  // Saturday (3rd period)
        ];

        const abhijitTime = '11:45 AM - 12:35 PM';
        const currentRahu = rahuTimes[dayIdx];

        // 15 Tithis of a Paksha
        const tithisList = [
            { hi: 'प्रतिपदा', en: 'Pratipada' },
            { hi: 'द्वितीया', en: 'Dwitiya' },
            { hi: 'तृतीया', en: 'Tritiya' },
            { hi: 'चतुर्थी', en: 'Chaturthi' },
            { hi: 'पंचमी', en: 'Panchami' },
            { hi: 'षष्ठी', en: 'Shashti' },
            { hi: 'सप्तमी', en: 'Saptami' },
            { hi: 'अष्टमी', en: 'Ashtami' },
            { hi: 'नवमी', en: 'Navami' },
            { hi: 'दशमी', en: 'Dashami' },
            { hi: 'एकादशी', en: 'Ekadashi' },
            { hi: 'द्वादशी', en: 'Dwadashi' },
            { hi: 'त्रयोदशी', en: 'Trayodashi' },
            { hi: 'चतुर्दशी', en: 'Chaturdashi' },
            { hi: 'पूर्णिमा', en: 'Purnima' }
        ];

        // 27 Vedic Nakshatras
        const nakshatras = [
            'अश्विनी (Ashwini)', 'भरणी (Bharani)', 'कृत्तिका (Krittika)', 'रोहिणी (Rohini)',
            'मृगशिरा (Mrigashira)', 'आर्द्रा (Ardra)', 'पुनर्वसु (Punarvasu)', 'पुष्य (Pushya)',
            'आश्लेषा (Ashlesha)', 'मघा (Magha)', 'पूर्वाफाल्गुनी (Purva Phalguni)', 'उत्तराफाल्गुनी (Uttara Phalguni)',
            'हस्त (Hasta)', 'चित्रा (Chitra)', 'स्वाति (Swati)', 'विशाखा (Vishakha)',
            'अनुराधा (Anuradha)', 'ज्येष्ठा (Jyeshtha)', 'मूल (Mula)', 'पूर्वाषाढ़ा (Purva Ashadha)',
            'उत्तराषाढ़ा (Uttara Ashadha)', 'श्रवण (Shravana)', 'धनिष्ठा (Dhanishta)', 'शतभिषा (Shatabhisha)',
            'पूर्वाभाद्रपद (Purva Bhadrapada)', 'उत्तराभाद्रपद (Uttara Bhadrapada)', 'रेवती (Revati)'
        ];

        // Astronomical Solar & Lunar Ephemeris (Vedic calculation based on Udayatithi - Sunrise)
        const calcDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0);
        const d = (calcDate.getTime() - Date.UTC(2000, 0, 1, 12, 0, 0)) / 86400000.0;
        const rad = Math.PI / 180.0;

        // Sun Mean Anomaly and Ecliptic Longitude
        const g = ((357.529 + 0.98560028 * d) % 360) * rad;
        const q = (280.459 + 0.98564736 * d) % 360;
        const L_sun = (q + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g)) % 360;
        const L_sun_norm = (L_sun + 360) % 360;

        // Moon Mean Longitude and Mean Anomaly
        const L_moon_mean = (218.316 + 13.176396 * d) % 360;
        const M_moon = ((134.963 + 13.064993 * d) % 360) * rad;

        // Moon Ecliptic Longitude with primary periodic perturbations
        const elong = (L_moon_mean - L_sun_norm) * rad;
        const L_moon = (L_moon_mean + 6.289 * Math.sin(M_moon) - 1.274 * Math.sin(M_moon - 2 * elong) + 0.658 * Math.sin(2 * elong)) % 360;
        const L_moon_norm = (L_moon + 360) % 360;

        // Lahiri Ayanamsha for Sidereal / Nirayana Moon coordinate
        const ayanamsha = 23.85 + (now.getFullYear() - 2000) * 0.01397 + (now.getMonth() / 12.0) * 0.01397;
        const sidereal_moon = (L_moon_norm - ayanamsha + 360) % 360;

        // Tithi: Lunar elongation (Moon - Sun) divided by 12 degrees
        const diff = (L_moon_norm - L_sun_norm + 360) % 360;
        const tithiNum = Math.floor(diff / 12) + 1; // 1 to 30

        let currentTithi = '';
        let currentPaksha = '';

        if (tithiNum <= 15) {
            currentPaksha = 'शुक्ल पक्ष (Shukla Paksha)';
            const tObj = tithisList[tithiNum - 1];
            currentTithi = `${tObj.hi} (${tObj.en})`;
        } else {
            currentPaksha = 'कृष्ण पक्ष (Krishna Paksha)';
            const kIdx = tithiNum - 16;
            const tObj = (kIdx === 14) ? { hi: 'अमावस्या', en: 'Amavasya' } : tithisList[kIdx];
            currentTithi = `${tObj.hi} (${tObj.en})`;
        }

        // Nakshatra: Sidereal Moon divided by (360 / 27) = 13.3333 degrees
        const nakshatraIdx = Math.floor(sidereal_moon / (360 / 27)) % 27;
        const currentNakshatra = nakshatras[nakshatraIdx];

        // Update Panchang Ticker & Hero Widget
        const tickerTithi = document.getElementById('tickerTithi');
        const tickerMuhurat = document.getElementById('tickerMuhurat');
        const tickerRahu = document.getElementById('tickerRahu');
        const panchangTithiEl = document.getElementById('panchangTithi');
        const panchangPakshaEl = document.getElementById('panchangPaksha');
        const panchangNakshatraEl = document.getElementById('panchangNakshatra');
        const panchangVaarEl = document.getElementById('panchangVaar');
        const panchangDateEl = document.getElementById('panchangTodayDate');
        const panchangAbhijitEl = document.getElementById('panchangAbhijit');
        const panchangRahuEl = document.getElementById('panchangRahu');

        if (tickerTithi) tickerTithi.innerText = `${currentPaksha}, ${currentTithi}`;
        if (tickerMuhurat) tickerMuhurat.innerText = `अभिजीत मुहूर्त: ${abhijitTime}`;
        if (tickerRahu) tickerRahu.innerText = `राहुकाल: ${currentRahu}`;

        if (panchangTithiEl) panchangTithiEl.innerText = currentTithi;
        if (panchangPakshaEl) panchangPakshaEl.innerText = currentPaksha;
        if (panchangNakshatraEl) panchangNakshatraEl.innerText = currentNakshatra;
        if (panchangVaarEl) panchangVaarEl.innerText = dayName;
        if (panchangDateEl) panchangDateEl.innerText = formattedDate;
        if (panchangAbhijitEl) panchangAbhijitEl.innerText = abhijitTime;
        if (panchangRahuEl) panchangRahuEl.innerText = currentRahu;
    }

    // Devotional Content Rendering
    renderDevotionalContent() {
        const grid = document.getElementById('devotionalCardsGrid');
        if (!grid) return;

        let items = [];
        if (this.selectedCategory === 'all' || this.selectedCategory === 'aarti') {
            items = items.concat(DEVOTIONAL_DATA.aartis);
        }
        if (this.selectedCategory === 'all' || this.selectedCategory === 'chalisa') {
            items = items.concat(DEVOTIONAL_DATA.chalisas);
        }
        if (this.selectedCategory === 'all' || this.selectedCategory === 'mantra') {
            items = items.concat(DEVOTIONAL_DATA.mantras);
        }
        if (this.selectedCategory === 'all' || this.selectedCategory === 'vrat') {
            items = items.concat(DEVOTIONAL_DATA.vrats);
        }
        if (this.selectedCategory === 'blog') {
            items = items.concat(DEVOTIONAL_DATA.blogs || []);
        }

        // Apply Search Filter if any
        const searchInput = document.getElementById('devotionalSearch');
        if (searchInput && searchInput.value.trim() !== '') {
            const query = searchInput.value.toLowerCase().trim();
            if (this.selectedCategory === 'all') {
                items = items.concat(DEVOTIONAL_DATA.blogs || []);
            }
            items = items.filter(item => 
                (item.title && item.title.toLowerCase().includes(query)) ||
                (item.titleEn && item.titleEn.toLowerCase().includes(query)) ||
                (item.deity && item.deity.toLowerCase().includes(query)) ||
                (item.category && item.category.toLowerCase().includes(query)) ||
                (item.description && item.description.toLowerCase().includes(query)) ||
                (item.significance && item.significance.toLowerCase().includes(query)) ||
                (item.highlights && item.highlights.toLowerCase().includes(query)) ||
                (item.englishTransliteration && item.englishTransliteration.toLowerCase().includes(query)) ||
                (item.englishLyrics && item.englishLyrics.toLowerCase().includes(query))
            );
        }

        if (items.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                    <h3>कोई सामग्री नहीं मिली (No Results Found)</h3>
                    <p>कृपया अन्य मंत्र, आरती, चालीसा या ब्लॉग का नाम खोजें।</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = items.map(item => {
            if (item.isExternalBlog) {
                return `
                    <div class="devotional-card" onclick="window.open('${item.link}', '_blank', 'noopener')">
                        <div class="card-top">
                            <div class="card-deity-icon">${item.icon || '📰'}</div>
                            <span class="card-badge" style="background: rgba(255,119,0,0.12); color: var(--saffron-primary);">${item.category || 'Blog'}</span>
                        </div>
                        <div>
                            <h3 class="card-title">${item.title}</h3>
                            <div class="card-subtitle">${item.titleEn || ''}</div>
                            <p class="card-snippet">${item.description}</p>
                        </div>
                        <div class="card-footer">
                            <span style="font-size: 0.8rem; color: var(--text-muted);">
                                📅 ${item.date} • ${item.duration}
                            </span>
                            <a href="${item.link}" target="_blank" rel="noopener" class="btn-secondary" onclick="event.stopPropagation()" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; text-decoration: none; border-radius: var(--radius-full);">
                                पूरा लेख पढ़ें ↗
                            </a>
                        </div>
                    </div>
                `;
            }
            return `
                <div class="devotional-card" onclick="app.openDetailModal('${item.id}')">
                    <div class="card-top">
                        <div class="card-deity-icon">${item.icon || '🕉️'}</div>
                        <span class="card-badge">${item.category || 'Vrat'}</span>
                    </div>
                    <div>
                        <h3 class="card-title">${item.title}</h3>
                        <div class="card-subtitle">${item.titleEn || item.deity || ''}</div>
                        <p class="card-snippet">${(item.description || item.significance || '').substring(0, 110)}...</p>
                    </div>
                    <div class="card-footer">
                        <span style="font-size: 0.8rem; color: var(--text-muted);">
                            ⏱️ ${item.duration || item.date || 'नित्य पाठ'}
                        </span>
                        <button class="card-btn-play ${this.currentTrack && this.currentTrack.id === item.id && this.isPlaying ? 'playing' : ''}" data-item-id="${item.id}" onclick="event.stopPropagation(); app.handleCardPlay('${item.id}')" title="Play / Pause">
                            ${this.currentTrack && this.currentTrack.id === item.id && this.isPlaying ? '⏸' : '▶'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Render Devotional Blog Posts in Dedicated Section
    renderBlogPosts() {
        const grid = document.getElementById('blogCardsGrid');
        if (!grid || !DEVOTIONAL_DATA.blogs) return;

        grid.innerHTML = DEVOTIONAL_DATA.blogs.map(post => `
            <a href="${post.link}" target="_blank" rel="noopener" class="blog-card" aria-label="${post.title}">
                <div class="blog-card-thumb-wrap">
                    <img src="${post.imageUrl}" alt="${post.title}" class="blog-card-thumb" loading="lazy" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\\'blog-card-thumb-fallback\\'>${post.icon || '🕉️'}</div>';">
                    <span class="blog-card-badge-floating">${post.icon || '📖'} ${post.category}</span>
                </div>
                <div class="blog-card-body">
                    <div>
                        <div class="blog-card-meta">
                            <span>📅 ${post.date}</span>
                            <span>⏱️ ${post.duration || '5 मिनट पाठ'}</span>
                        </div>
                        <h3 class="blog-card-title">${post.title}</h3>
                        <p class="blog-card-excerpt">${post.description}</p>
                        ${post.highlights ? `
                            <div class="blog-card-highlights">
                                <strong>✨ मुख्य बिंदु:</strong> ${post.highlights}
                            </div>
                        ` : ''}
                    </div>
                    <div class="blog-card-footer">
                        <span>Pooja Bhakti Bhajan</span>
                        <span class="blog-card-action-link">पूरा लेख पढ़ें ↗</span>
                    </div>
                </div>
            </a>
        `).join('');
    }

    // Modal Details Popup
    openDetailModal(itemId) {
        const item = this.findItemById(itemId);
        if (!item) return;

        this.activeItem = item;
        const modalOverlay = document.getElementById('lyricsModalOverlay');
        const modalTitle = document.getElementById('modalTitle');
        const modalSubtitle = document.getElementById('modalSubtitle');
        const modalContent = document.getElementById('modalContent');
        const modalBenefits = document.getElementById('modalBenefits');

        if (modalTitle) modalTitle.innerText = item.title;
        if (modalSubtitle) modalSubtitle.innerText = item.titleEn || item.deity || '';
        
        this.updateModalLyrics();

        if (modalBenefits) {
            modalBenefits.innerHTML = item.benefits ? `
                <div style="background: rgba(255,119,0,0.08); padding: 1rem; border-radius: 8px; border-left: 3px solid var(--saffron-primary); margin-top: 1.5rem; text-align: left;">
                    <strong style="color: var(--saffron-deep);">🌸 आध्यात्मिक लाभ (Spiritual Benefits):</strong>
                    <p style="font-size: 0.95rem; margin-top: 0.3rem;">${item.benefits}</p>
                </div>
            ` : '';
        }

        if (modalOverlay) {
            modalOverlay.classList.add('active');
        }
    }

    updateModalLyrics() {
        const modalContent = document.getElementById('modalContent');
        if (!modalContent || !this.activeItem) return;

        const item = this.activeItem;
        if (this.activeLanguage === 'hi') {
            modalContent.innerText = item.hindiLyrics || item.sanskritText || (item.vidhi ? item.vidhi.join('\n\n') : item.description);
        } else {
            modalContent.innerText = item.englishLyrics || item.englishTransliteration || (item.vidhi ? item.vidhi.join('\n\n') : item.description);
        }
    }

    setLanguage(lang) {
        this.activeLanguage = lang;
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        this.updateModalLyrics();
    }

    closeModal() {
        const modalOverlay = document.getElementById('lyricsModalOverlay');
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    }

    findItemById(id) {
        const allItems = [
            ...DEVOTIONAL_DATA.aartis,
            ...DEVOTIONAL_DATA.chalisas,
            ...DEVOTIONAL_DATA.mantras,
            ...DEVOTIONAL_DATA.vrats,
            ...(DEVOTIONAL_DATA.blogs || [])
        ];
        return allItems.find(item => item.id === id);
    }

    initAudioEngine() {
        if (!this.audioElement) return;

        const progressSlider = document.getElementById('progressSlider');
        const currentTimeEl = document.getElementById('playerCurrentTime');
        const durationEl = document.getElementById('playerDuration');

        const formatTime = (seconds) => {
            if (isNaN(seconds) || seconds < 0 || !isFinite(seconds)) return '0:00';
            const m = Math.floor(seconds / 60);
            const s = Math.floor(seconds % 60);
            return `${m}:${s < 10 ? '0' : ''}${s}`;
        };

        this.audioElement.addEventListener('loadedmetadata', () => {
            if (durationEl && this.audioElement.duration) {
                durationEl.innerText = formatTime(this.audioElement.duration);
            }
        });

        this.audioElement.addEventListener('timeupdate', () => {
            if (!this.audioElement.duration) return;
            const current = this.audioElement.currentTime;
            const duration = this.audioElement.duration;
            if (currentTimeEl) currentTimeEl.innerText = formatTime(current);
            if (progressSlider && !this.isScrubbing) {
                progressSlider.value = (current / duration) * 100;
            }
        });

        if (progressSlider) {
            progressSlider.addEventListener('input', () => {
                this.isScrubbing = true;
                if (this.audioElement.duration) {
                    const target = (progressSlider.value / 100) * this.audioElement.duration;
                    if (currentTimeEl) currentTimeEl.innerText = formatTime(target);
                }
            });

            progressSlider.addEventListener('change', () => {
                if (this.audioElement.duration) {
                    this.audioElement.currentTime = (progressSlider.value / 100) * this.audioElement.duration;
                }
                this.isScrubbing = false;
            });
        }

        this.audioElement.addEventListener('ended', () => {
            if (this.repeat108Mode) {
                this.currentRepeatCount++;
                this.recordChant();
                this.audioElement.currentTime = 0;
                this.audioElement.play().catch(() => {});
            } else {
                this.pauseAudio();
                if (currentTimeEl) currentTimeEl.innerText = '0:00';
                if (progressSlider) progressSlider.value = 0;
            }
        });

        this.audioElement.addEventListener('play', () => this.updateTrackPlayStates());
        this.audioElement.addEventListener('pause', () => this.updateTrackPlayStates());
        this.audioElement.addEventListener('error', (e) => {
            console.warn("Audio element error, falling back to sacred tone:", e);
        });
    }

    // Audio Player Controls
    handleCardPlay(itemId) {
        if (this.currentTrack && this.currentTrack.id === itemId) {
            this.togglePlayPause();
        } else {
            this.playItem(itemId);
        }
    }

    playItem(itemId) {
        const item = this.findItemById(itemId);
        if (!item) return;
        this.setTrack(item, true);
    }

    setTrack(item, autoplay = true) {
        this.currentTrack = item;
        
        const trackTitle = document.getElementById('playerTrackTitle');
        const trackMeta = document.getElementById('playerTrackMeta');
        const trackIcon = document.getElementById('playerThumb');
        const durationEl = document.getElementById('playerDuration');
        const currentTimeEl = document.getElementById('playerCurrentTime');
        const progressSlider = document.getElementById('progressSlider');

        if (trackTitle) trackTitle.innerText = item.title;
        if (trackMeta) trackMeta.innerText = item.deity || item.category || 'भक्ति संगीत';
        if (trackIcon) trackIcon.innerText = item.icon || '🕉️';

        if (currentTimeEl) currentTimeEl.innerText = '0:00';
        if (progressSlider) progressSlider.value = 0;

        if (item.audioUrl) {
            this.audioElement.src = item.audioUrl;
            this.audioElement.load();
        }

        if (durationEl) durationEl.innerText = item.duration || '--:--';

        if (autoplay) {
            this.playAudio();
        } else {
            this.pauseAudio();
        }
    }

    playAudio() {
        if (!this.currentTrack) return;
        this.isPlaying = true;
        this.updateTrackPlayStates();

        if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }

        if (this.currentTrack.audioUrl && this.audioElement.src) {
            const playPromise = this.audioElement.play();
            if (playPromise !== undefined) {
                playPromise.catch(err => {
                    console.log("Audio playback notice:", err);
                    this.playOmDrone(this.currentTrack?.frequency || 432, 4.0);
                });
            }
        } else {
            this.playOmDrone(this.currentTrack?.frequency || 432, 5.0);
        }

        this.playTempleBellSound();
    }

    pauseAudio() {
        this.isPlaying = false;
        this.updateTrackPlayStates();
        if (this.audioElement) {
            this.audioElement.pause();
        }
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.pauseAudio();
        } else {
            this.playAudio();
        }
    }

    updatePlayPauseButton() {
        const btn = document.getElementById('mainPlayBtn');
        if (btn) {
            btn.innerHTML = this.isPlaying ? '⏸' : '▶';
        }
    }

    updateTrackPlayStates() {
        this.updatePlayPauseButton();

        // Update modal play button
        const modalPlayBtn = document.getElementById('modalPlayBtn');
        if (modalPlayBtn) {
            if (this.activeItem && this.currentTrack && this.activeItem.id === this.currentTrack.id && this.isPlaying) {
                modalPlayBtn.innerHTML = '⏸';
                modalPlayBtn.title = 'Pause playback';
            } else {
                modalPlayBtn.innerHTML = '▶';
                modalPlayBtn.title = 'Play this track';
            }
        }

        // Update all card play buttons
        document.querySelectorAll('.card-btn-play').forEach(btn => {
            if (btn.id === 'modalPlayBtn') return;
            const itemId = btn.getAttribute('data-item-id');
            if (this.currentTrack && itemId === this.currentTrack.id && this.isPlaying) {
                btn.innerHTML = '⏸';
                btn.classList.add('playing');
                btn.title = 'Pause';
            } else {
                btn.innerHTML = '▶';
                btn.classList.remove('playing');
                btn.title = 'Play / Listen';
            }
        });
    }

    toggleRepeat108() {
        this.repeat108Mode = !this.repeat108Mode;
        const btn = document.getElementById('btnRepeat108');
        if (btn) {
            btn.style.color = this.repeat108Mode ? 'var(--saffron-primary)' : 'inherit';
            btn.style.fontWeight = this.repeat108Mode ? 'bold' : 'normal';
        }
    }

    // 108x Digital Jaap Mala Engine
    initJaapMala() {
        this.updateJaapUI();
    }

    recordChant() {
        this.jaapCount++;
        
        // Haptic feedback & Bell resonance
        this.playTempleBellSound();

        if (this.jaapCount >= 108) {
            this.updateJaapUI();
            this.totalMalas++;
            localStorage.setItem('pbb_total_malas', this.totalMalas.toString());
            setTimeout(() => {
                this.triggerMalaCompletionCelebration();
                this.jaapCount = 0;
                localStorage.setItem('pbb_jaap_count', '0');
                this.updateJaapUI();
            }, 300);
        } else {
            localStorage.setItem('pbb_jaap_count', this.jaapCount.toString());
            this.updateJaapUI();
        }
    }

    resetJaapCount() {
        if (confirm("क्या आप जाप काउंटर रीसेट करना चाहते हैं? (Reset Mala count?)")) {
            this.jaapCount = 0;
            localStorage.setItem('pbb_jaap_count', '0');
            this.updateJaapUI();
        }
    }

    updateJaapUI() {
        const countDisplay = document.getElementById('currentBeadCount');
        const malasDisplay = document.getElementById('totalMalasCompleted');
        const streakDisplay = document.getElementById('jaapStreakDisplay');
        const progressRing = document.getElementById('beadProgressRing');

        if (countDisplay) countDisplay.innerText = this.jaapCount;
        if (malasDisplay) malasDisplay.innerText = this.totalMalas;
        if (streakDisplay) streakDisplay.innerText = `${this.jaapStreak} दिन (Days)`;

        if (progressRing) {
            const circumference = 565;
            const offset = circumference - (this.jaapCount / 108) * circumference;
            progressRing.style.strokeDashoffset = offset;
        }
    }

    triggerMalaCompletionCelebration() {
        alert("🌸 108 महामंत्र जाप संपूर्ण! (108 Chants Completed! 1 Mala Achieved) 🙏\nईश्वर आप पर सदैव कृपा बनाए रखें।");
        this.playTempleBellSound();
    }

    // Daily Bhagavad Gita Shloka
    renderDailyGitaShloka() {
        const shlokaCard = document.getElementById('dailyGitaCard');
        if (!shlokaCard || !DEVOTIONAL_DATA.shlokas.length) return;

        const todayIndex = new Date().getDate() % DEVOTIONAL_DATA.shlokas.length;
        const shloka = DEVOTIONAL_DATA.shlokas[todayIndex];

        shlokaCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span class="hero-badge">📖 आज का दिव्य श्लोक</span>
                <span style="font-size: 0.85rem; color: var(--text-muted);">${shloka.chapter}</span>
            </div>
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--saffron-deep); margin-bottom: 1rem; line-height: 1.7; white-space: pre-line; font-family: 'Noto Sans Devanagari', serif;">
                ${shloka.sanskrit}
            </div>
            <p style="font-size: 1rem; color: var(--text-secondary); margin-bottom: 1rem;">
                <strong>अर्थ:</strong> ${shloka.hindi}
            </p>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
                <span style="font-size: 0.85rem; color: var(--text-gold); font-weight: 600;"># ${shloka.theme}</span>
                <button class="btn-secondary" style="padding: 0.35rem 0.9rem; font-size: 0.85rem;" onclick="app.shareGitaShloka(${todayIndex})">
                    📲 शेयर करें (Share)
                </button>
            </div>
        `;
    }

    shareGitaShloka(index) {
        const shloka = DEVOTIONAL_DATA.shlokas[index];
        const text = `🕉️ *आज का दिव्य विचार - श्रीमद्भगवद्गीता*\n\n${shloka.sanskrit}\n\n*भावार्थ:* ${shloka.hindi}\n\n👉 नित्य दर्शन एवं आरती के लिए पधारें: https://poojabhaktibhajan.com`;
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }

    // Viral WhatsApp Blessing Generator
    initWhatsAppGenerator() {
        this.updateBlessingCardPreview();
    }

    updateBlessingCardPreview() {
        const devoteeNameInput = document.getElementById('blessingDevoteeName');
        const greetingSelect = document.getElementById('blessingGreetingType');
        const previewQuote = document.getElementById('previewBlessingQuote');
        const previewAuthor = document.getElementById('previewBlessingAuthor');

        const devoteeName = devoteeNameInput && devoteeNameInput.value.trim() ? devoteeNameInput.value.trim() : 'आपके परिवार';
        const greetingType = greetingSelect ? greetingSelect.value : 'shubh-prabhat';

        let greetingText = '';
        if (greetingType === 'shubh-prabhat') {
            greetingText = `🌅 शुभ प्रभात! 🕉️\n\nभगवान श्री गणेश और महादेव शिव शंकर आपके जीवन में सुख, शांति, समृद्धि और उत्तम स्वास्थ्य प्रदान करें।`;
        } else if (greetingType === 'jai-shri-krishna') {
            greetingText = `🦚 जय श्री कृष्णा! 🌸\n\nकर्म करो पर फल की चिंता मत करो। भगवान कृष्ण का आशीर्वाद सदैव आपके साथ रहे।`;
        } else if (greetingType === 'har-har-mahadev') {
            greetingText = `🔱 हर हर महादेव! 🕉️\n\nकाल भी उसका क्या बिगाड़े, जो भक्त हो महाकाल का। महादेव आपके समस्त कष्टों का हरण करें।`;
        } else if (greetingType === 'jai-hanuman') {
            greetingText = `🚩 जय श्री राम! जय बजरंग बली! 🐒\n\nसंकट कटै मिटै सब पीरा, जो सुमिरै हनुमत बलबीरा। हनुमान जी आपको हर संकट से बचाएं।`;
        }

        if (previewQuote) previewQuote.innerText = greetingText;
        if (previewAuthor) previewAuthor.innerText = `— ${devoteeName} की ओर से सादर प्रणाम`;
    }

    shareBlessingOnWhatsApp() {
        const previewQuote = document.getElementById('previewBlessingQuote');
        const previewAuthor = document.getElementById('previewBlessingAuthor');

        const message = `🌸 *शुभ संदेश एवं मंगलकामनाएँ* 🌸\n\n${previewQuote?.innerText}\n\n${previewAuthor?.innerText}\n\n🪔 *नित्य पूजा, आरती एवं पंचांग देखें:*\n👉 https://poojabhaktibhajan.com`;
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    // Setup UI Event Listeners
    setupEventListeners() {
        // Theme button
        const themeBtn = document.getElementById('themeToggleBtn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => this.toggleTheme());
        }

        // Temple bell header button
        const bellBtn = document.getElementById('templeBellBtn');
        if (bellBtn) {
            bellBtn.addEventListener('click', () => this.playTempleBellSound());
        }

        // Mobile hamburger menu toggle
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileNav = document.getElementById('mobileNavDropdown');
        if (hamburgerBtn && mobileNav) {
            hamburgerBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileNav.classList.toggle('nav-open');
                hamburgerBtn.innerHTML = mobileNav.classList.contains('nav-open') ? '✕' : '☰';
            });
            // Close menu when a mobile nav link is clicked
            mobileNav.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    mobileNav.classList.remove('nav-open');
                    hamburgerBtn.innerHTML = '☰';
                });
            });
            // Close when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburgerBtn.contains(e.target) && !mobileNav.contains(e.target)) {
                    mobileNav.classList.remove('nav-open');
                    hamburgerBtn.innerHTML = '☰';
                }
            });
        }

        // Nav link active state on click (all desktop + mobile nav links)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                // activate matching data-section links
                const section = link.dataset.section;
                if (section) {
                    document.querySelectorAll(`.nav-link[data-section="${section}"]`).forEach(l => l.classList.add('active'));
                } else {
                    link.classList.add('active');
                }
            });
        });

        // Category Chips
        document.querySelectorAll('.category-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                this.selectedCategory = chip.dataset.category;
                this.renderDevotionalContent();
            });
        });

        // Search Input
        const searchInput = document.getElementById('devotionalSearch');
        if (searchInput) {
            searchInput.addEventListener('input', () => this.renderDevotionalContent());
        }

        // WhatsApp Generator Inputs
        const devoteeInput = document.getElementById('blessingDevoteeName');
        const greetingSelect = document.getElementById('blessingGreetingType');
        if (devoteeInput) devoteeInput.addEventListener('input', () => this.updateBlessingCardPreview());
        if (greetingSelect) greetingSelect.addEventListener('change', () => this.updateBlessingCardPreview());

        // Close Modal
        const modalClose = document.getElementById('modalCloseBtn');
        const modalOverlay = document.getElementById('lyricsModalOverlay');
        if (modalClose) modalClose.addEventListener('click', () => this.closeModal());
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) this.closeModal();
            });
        }

        // Keyboard ESC to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }

    // Scroll-spy: highlight nav link for currently visible section
    initScrollSpy() {
        const sectionIds = ['panchang', 'aartis', 'chalisas', 'mantras', 'jaap-mala', 'blogs'];
        const navLinks = document.querySelectorAll('.nav-link[data-section]');

        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.dataset.section === sectionId);
                    });
                }
            });
        }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
    }
}

// Instantiate App on DOM ready
let app;
window.addEventListener('DOMContentLoaded', () => {
    app = new DevotionalApp();
});
