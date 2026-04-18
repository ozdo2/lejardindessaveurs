/**
 * ╔═══════════════════════════════════════════════════════════════════╗
 * ║              FICHIER DE CONFIGURATION — restaurant.config.js     ║
 * ║                                                                   ║
 * ║  CE FICHIER EST LE SEUL QUE VOUS DEVEZ MODIFIER.                 ║
 * ║  Il contient 100% des informations propres à votre restaurant.   ║
 * ║                                                                   ║
 * ║  Les fichiers template (index.html, admin/, pages légales)       ║
 * ║  lisent automatiquement ce fichier — ne les touchez jamais.      ║
 * ╚═══════════════════════════════════════════════════════════════════╝
 *
 * SECTIONS :
 *   A. Identité & contact
 *   B. Thème & couleurs
 *   C. Images
 *   D. Histoire & présentation
 *   E. Menu
 *   F. Horaires & fermetures
 *   G. Équipe
 *   H. Accessibilité
 *   I. Réseaux sociaux
 *   J. Chatbot
 *   K. Services techniques (Firebase, EmailJS, Analytics)
 *   L. Pages légales
 */

const RESTAURANT_CONFIG = {

    // ═══════════════════════════════════════════════════════
    // A. IDENTITÉ & CONTACT
    // ═══════════════════════════════════════════════════════
    identite: {
        nom:              "Le Jardin des Saveurs",
        slogan:           "Une expérience culinaire inoubliable",
        description:      "Restaurant gastronomique depuis 1985. Une cuisine authentique et raffinée dans un cadre exceptionnel.",
        annee_fondation:  1985,
        etoiles_michelin: 1,   // 0 = aucune, 1, 2 ou 3
    },

    contact: {
        adresse_ligne1:    "42 Avenue des Gourmets",
        adresse_ligne2:    "75001 Paris, France",
        telephone:         "+33 1 42 34 56 78",
        telephone_href:    "+33142345678",       // Format sans espaces pour le lien tel:
        email:             "contact@jardindessaveurs.fr",
        // Google Maps : Carte → Partager → Intégrer → copier le src="..."
        google_maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081493!2d2.3352765!3d48.8606111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sLouvre%20Museum!5e0!3m2!1sen!2sfr!4v1234567890",
    },

    // ═══════════════════════════════════════════════════════
    // B. THÈME & COULEURS
    // ═══════════════════════════════════════════════════════
    theme: {
        couleur_principale:  "#2c5f2d",  // Couleur dominante (nav, boutons, titres)
        couleur_secondaire:  "#97c680",  // Couleur survol
        couleur_accent:      "#d4af37",  // Or (prix, dates, détails)
        couleur_fond_clair:  "#f8f8f8",  // Fond des sections paires
        couleur_fond_sombre: "#1a1a1a",  // Fond footer
    },

    // ═══════════════════════════════════════════════════════
    // C. IMAGES
    // Remplacez les URLs par vos propres photos
    // ═══════════════════════════════════════════════════════
    images: {
        hero:     "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600",
        histoire: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
        carousel: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800",
            "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800",
        ],
    },

    // ═══════════════════════════════════════════════════════
    // D. HISTOIRE & PRÉSENTATION
    // ═══════════════════════════════════════════════════════
    histoire: {
        titre_origines: "Nos Origines",
        paragraphes_origines: [
            "Fondé en 1985, Le Jardin des Saveurs est né de la passion de notre chef fondateur, Jean-Pierre Dubois, pour la cuisine authentique et les produits locaux de qualité.",
            "Niché au cœur de la région, notre restaurant est devenu au fil des années une véritable institution culinaire, alliant tradition et innovation.",
        ],
        titre_philosophie: "Notre Philosophie",
        paragraphes_philosophie: [
            "Nous croyons en une cuisine sincère, respectueuse des saisons et des producteurs locaux. Chaque plat raconte une histoire, celle de notre terroir et de notre savoir-faire.",
            "Notre équipe s'engage à vous offrir une expérience gastronomique mémorable dans un cadre élégant et chaleureux.",
        ],
    },

    points_forts: [
        { icone: "🍽️", titre: "Cuisine Gastronomique", description: "Des plats raffinés préparés avec passion par notre chef étoilé et son équipe talentueuse." },
        { icone: "🌱", titre: "Produits Locaux",        description: "Nous travaillons exclusivement avec des producteurs locaux pour garantir fraîcheur et qualité." },
        { icone: "🍷", titre: "Cave d'Exception",       description: "Une sélection de vins soigneusement choisie pour sublimer chaque plat de notre menu." },
        { icone: "✨", titre: "Ambiance Unique",         description: "Un cadre élégant et intimiste pour vos moments les plus précieux." },
    ],

    // ═══════════════════════════════════════════════════════
    // E. MENU
    // ═══════════════════════════════════════════════════════
    menu: {
        url_menu_complet: "https://votre-site.com/menu",
        categories: [
            {
                id: "entrees", label: "Entrées",
                plats: [
                    { nom: "Foie Gras Maison",      prix: "24€", description: "Mi-cuit, chutney de figues et pain brioché toasté" },
                    { nom: "Tartare de Saumon",      prix: "18€", description: "Saumon frais, avocat, citron vert et coriandre" },
                    { nom: "Velouté de Saison",      prix: "12€", description: "Crème légère et croûtons maison" },
                    { nom: "Salade de Chèvre Chaud", prix: "16€", description: "Mesclun, tomates confites, miel et noix" },
                ],
            },
            {
                id: "plats", label: "Plats",
                plats: [
                    { nom: "Filet de Bœuf Rossini", prix: "42€", description: "Filet de bœuf, foie gras poêlé, sauce truffe et légumes du marché" },
                    { nom: "Saint-Jacques Rôties",   prix: "38€", description: "Noix de Saint-Jacques, purée de céleri et émulsion citron" },
                    { nom: "Pavé de Saumon",         prix: "32€", description: "Saumon sauvage, risotto crémeux aux asperges" },
                    { nom: "Magret de Canard",       prix: "34€", description: "Magret rôti, sauce aux fruits rouges et gratin dauphinois" },
                ],
            },
            {
                id: "desserts", label: "Desserts",
                plats: [
                    { nom: "Soufflé au Chocolat", prix: "14€", description: "Servi tiède avec glace vanille Bourbon" },
                    { nom: "Tarte Tatin",          prix: "12€", description: "Pommes caramélisées et crème fraîche épaisse" },
                    { nom: "Fondant au Chocolat",  prix: "13€", description: "Cœur coulant, glace pistache maison" },
                    { nom: "Assiette de Fromages", prix: "15€", description: "Sélection de fromages affinés et confiture maison" },
                ],
            },
            {
                id: "specialites", label: "Spécialités",
                plats: [
                    { nom: "Homard Breton",           prix: "56€", description: "Homard entier grillé, beurre d'herbes et légumes de saison" },
                    { nom: "Tournedos Rossini",        prix: "48€", description: "Filet mignon, foie gras, truffe noire et jus corsé" },
                    { nom: "Plateau de Fruits de Mer", prix: "65€", description: "Pour 2 personnes - Huîtres, langoustines, bulots, crevettes" },
                ],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════
    // F. HORAIRES & FERMETURES
    // ═══════════════════════════════════════════════════════
    horaires: [
        { jour: "Lundi",          heures: "Fermé" },
        { jour: "Mardi - Samedi", heures: "12h00 - 14h30 • 19h00 - 22h30" },
        { jour: "Dimanche",       heures: "12h00 - 14h30" },
    ],

    // Supprimez les dates passées, ajoutez les nouvelles
    fermetures: [
        { date: "Du 24 au 26 Décembre 2024", raison: "Fermeture annuelle pour les fêtes de Noël" },
        { date: "1er Janvier 2025",           raison: "Jour de l'An - Réouverture le 2 janvier" },
        { date: "Du 15 au 31 Août 2025",      raison: "Congés annuels d'été" },
    ],

    // ═══════════════════════════════════════════════════════
    // G. ÉQUIPE
    // photo : URL image (décommentez), icone : emoji fallback
    // ═══════════════════════════════════════════════════════
    equipe: [
        {
            icone: "👨‍🍳",
            // photo: "https://votre-site.com/photos/chef.jpg",
            nom: "Jean-Pierre Dubois", role: "Chef Exécutif",
            description: "30 ans d'expérience, étoilé Michelin, passionné par la cuisine du terroir.",
        },
        {
            icone: "👩‍🍳",
            nom: "Marie Leroy", role: "Chef Pâtissière",
            description: "Créatrice de desserts d'exception, formée dans les plus grandes maisons.",
        },
        {
            icone: "🍷",
            nom: "Philippe Martin", role: "Sommelier",
            description: "Expert en vins, il saura vous guider vers l'accord parfait.",
        },
        {
            icone: "👔",
            nom: "Sophie Bernard", role: "Directrice de Salle",
            description: "Garante de votre bien-être, elle orchestre le service avec élégance.",
        },
    ],

    // ═══════════════════════════════════════════════════════
    // H. ACCESSIBILITÉ
    // ═══════════════════════════════════════════════════════
    accessibilite: [
        { icone: "♿", titre: "Accès PMR",          description: "Rampe d'accès et entrée de plain-pied. Tous nos espaces sont accessibles aux personnes à mobilité réduite." },
        { icone: "🚻", titre: "Sanitaires Adaptés", description: "Toilettes spacieuses et équipées pour les personnes handicapées." },
        { icone: "🅿️", titre: "Parking Réservé",    description: "Places de stationnement réservées PMR à proximité immédiate du restaurant." },
        { icone: "👂", titre: "Boucle Magnétique",  description: "Système d'amplification sonore disponible pour les personnes malentendantes." },
    ],

    // ═══════════════════════════════════════════════════════
    // I. RÉSEAUX SOCIAUX
    // ═══════════════════════════════════════════════════════
    reseaux_sociaux: [
        { label: "Instagram", icon: "📷", url: "https://instagram.com/votre-compte" },
        { label: "Facebook",  icon: "👍", url: "https://facebook.com/votre-page"   },
        { label: "TikTok",    icon: "🎵", url: "https://tiktok.com/@votre-compte"  },
        { label: "Twitter",   icon: "🐦", url: "https://twitter.com/votre-compte"  },
    ],

    // ═══════════════════════════════════════════════════════
    // J. CHATBOT
    // Utilisez {{tel}}, {{email}}, {{adresse}} dans les
    // réponses — ils sont remplacés automatiquement par les
    // vraies valeurs du restaurant (section A).
    // ═══════════════════════════════════════════════════════
    chatbot_reponses: [
        {
            mots_cles: ["heure", "horaire", "ouvert", "ouvre", "ferme"],
            reponse:   "Nous sommes ouverts :<br>📅 Mardi au Samedi : 12h-14h30 & 19h-22h30<br>📅 Dimanche : 12h-14h30<br>🚫 Fermé le lundi",
        },
        {
            mots_cles: ["réserv", "table", "book", "place"],
            reponse:   "Pour réserver une table, utilisez notre formulaire sur cette page ou appelez-nous au {{tel}} ! 📞",
        },
        {
            mots_cles: ["menu", "carte", "plat", "manger"],
            reponse:   "Consultez notre menu gastronomique dans la section dédiée ! 🍽️",
        },
        {
            mots_cles: ["prix", "tarif", "coût", "combien", "€"],
            reponse:   "Nos plats vont de 12€ à 65€. Consultez notre menu pour les détails ! 💰",
        },
        {
            mots_cles: ["adresse", "où", "trouver", "localisation", "itinéraire"],
            reponse:   "Nous sommes situés au {{adresse}}. Consultez la carte sur notre page ! 📍",
        },
        {
            mots_cles: ["contact", "téléphone", "email", "appel"],
            reponse:   "📞 Téléphone : {{tel}}<br>📧 Email : {{email}}",
        },
        {
            mots_cles: ["événement", "soirée", "concert", "jazz", "animation"],
            reponse:   "Consultez notre section Événements pour découvrir nos prochaines soirées ! 🎵",
        },
        {
            mots_cles: ["handicap", "pmr", "accessible", "fauteuil", "mobilité"],
            reponse:   "Notre restaurant est entièrement accessible PMR avec rampe, toilettes adaptées et parking réservé. ♿",
        },
        {
            mots_cles: ["allergi", "gluten", "végé", "vegan", "intolérance"],
            reponse:   "Nous prenons en compte toutes les allergies et régimes spéciaux. Mentionnez-le à la réservation ! 🌱",
        },
        {
            mots_cles: ["parking", "stationn", "garer", "voiture"],
            reponse:   "Un parking public est disponible à 100m du restaurant. Des places PMR sont réservées devant l'établissement. 🅿️",
        },
    ],

    chatbot_defaut: "Je n'ai pas bien compris votre question. Contactez-nous au {{tel}} ou par email à {{email}} 😊",

    // ═══════════════════════════════════════════════════════
    // K. SERVICES TECHNIQUES
    // ═══════════════════════════════════════════════════════

    firebase: {
        apiKey:            "AIzaSyDMC9RPVIH2kHc3brvB9dR6TTEbBaaXxsg",
        authDomain:        "le-jardin-des-saveurs-630bf.firebaseapp.com",
        projectId:         "le-jardin-des-saveurs-630bf",
        storageBucket:     "le-jardin-des-saveurs-630bf.firebasestorage.app",
        messagingSenderId: "965407064324",
        appId:             "1:965407064324:web:aa9a447fa94a19c69b5051",
    },

    emailjs: {
        public_key:            "9cbH8LkCwz3dX1YKP",
        service_id:            "service_uqqrt7m",
        template_restaurateur: "template_0e9bc1m",  // Email → restaurateur (nouvelle réservation)
        template_client:       "template_c50bmdp",  // Email → client (confirmation)
        email_restaurateur:    "l41205761@gmail.com",
        // Compatibilité anciens templates
        get template_id()  { return this.template_restaurateur; },
        get destinataire() { return this.email_restaurateur; },
    },

    analytics: {
        measurement_id:         "G-175ECPB5QL",
        respecter_consentement: true, // true = chargé seulement si cookies acceptés
    },

    // ═══════════════════════════════════════════════════════
    // L. PAGES LÉGALES
    // Remplissez une seule fois — toutes les pages légales
    // utilisent automatiquement ces valeurs.
    // ═══════════════════════════════════════════════════════
    legal: {
        nom_restaurant:    "Le Jardin des Saveurs",
        forme_juridique:   "SARL",
        siret:             "XXX XXX XXX XXXXX",
        tva_intra:         "FR XX XXX XXX XXX",
        nom_responsable:   "Jean-Pierre Dubois",
        adresse_complete:  "42 Avenue des Gourmets, 75001 Paris, France",
        email_contact:     "contact@jardindessaveurs.fr",
        telephone_contact: "+33 1 42 34 56 78",
        date_maj:          "Janvier 2025",

        hebergeur_nom:     "Vercel Inc.",
        hebergeur_adresse: "340 Pine Street, Suite 701, San Francisco, CA 94104 — États-Unis",
        hebergeur_site:    "https://vercel.com",

        delai_annulation:  "24h",  // Délai annulation gratuite
        attente_table:     "15",   // Minutes conservation table
    },

};
