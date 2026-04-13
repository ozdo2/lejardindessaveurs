/**
 * cookie-banner.js
 * Bannière de consentement cookies — RGPD conforme
 * À inclure sur toutes les pages (index.html + pages légales)
 */

(function () {
    'use strict';

    const STORAGE_KEY = 'ljs_cookies_consent'; // ljs = Le Jardin des Saveurs
    const BANNER_ID   = 'cookie-banner';

    /* ── Injection du HTML si pas encore dans le DOM ── */
    function injectBanner() {
        if (document.getElementById(BANNER_ID)) return; // déjà présent

        const banner = document.createElement('div');
        banner.id = BANNER_ID;
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Gestion des cookies');
        banner.innerHTML = `
            <div class="cookie-text">
                <strong>🍪 Ce site utilise des cookies</strong><br>
                Nous utilisons des cookies essentiels pour le bon fonctionnement du site.
                En cliquant sur « Accepter », vous consentez également aux cookies d'analyse.
                <a href="/cookies" target="_blank">En savoir plus</a>
            </div>
            <div class="cookie-actions">
                <button class="cookie-btn cookie-btn-refuse" id="cookie-refuse" aria-label="Refuser les cookies non essentiels">Refuser</button>
                <button class="cookie-btn cookie-btn-accept" id="cookie-accept" aria-label="Accepter tous les cookies">Accepter</button>
            </div>`;

        document.body.appendChild(banner);

        // Apparition différée pour laisser la page charger
        requestAnimationFrame(() => {
            setTimeout(() => banner.classList.add('visible'), 300);
        });

        document.getElementById('cookie-accept').addEventListener('click', () => setConsent('accepted'));
        document.getElementById('cookie-refuse').addEventListener('click', () => setConsent('refused'));
    }

    /* ── Sauvegarde du choix ── */
    function setConsent(value) {
        try {
            localStorage.setItem(STORAGE_KEY, value);
        } catch (e) {
            // fallback cookie si localStorage bloqué
            document.cookie = `${STORAGE_KEY}=${value};max-age=31536000;path=/;SameSite=Lax`;
        }
        hideBanner();

        // Si accepté → on peut activer les analytics ici
        if (value === 'accepted') {
            window.dispatchEvent(new CustomEvent('cookiesAccepted'));
        }
    }

    /* ── Lecture du consentement ── */
    function getConsent() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            const match = document.cookie.match(new RegExp('(?:^|; )' + STORAGE_KEY + '=([^;]*)'));
            return match ? decodeURIComponent(match[1]) : null;
        }
    }

    /* ── Masquage ── */
    function hideBanner() {
        const banner = document.getElementById(BANNER_ID);
        if (!banner) return;
        banner.classList.remove('visible');
        setTimeout(() => banner.remove(), 400);
    }

    /* ── Init ── */
    function init() {
        const consent = getConsent();
        if (!consent) {
            injectBanner(); // Pas encore de choix → afficher
        }
        // Si consent existant → ne rien afficher
    }

    // Lancement après chargement du DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose pour usage externe si besoin
    window.CookieConsent = { getConsent, setConsent };

})();
