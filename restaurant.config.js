/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║          FICHIER DE CONFIGURATION DU RESTAURANT             ║
 * ║                                                              ║
 * ║  Ce fichier contient TOUTES les informations personnalisables║
 * ║  Ne touchez JAMAIS à index.html — modifiez uniquement ici.  ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const RESTAURANT_CONFIG = {

    // ─────────────────────────────────────────────
    // 1. IDENTITÉ DU RESTAURANT
    // ─────────────────────────────────────────────
    identite: {
        nom: "Le Jardin des Saveurs",
        slogan: "Une expérience culinaire inoubliable",
        description: "Restaurant gastronomique depuis 1985. Une cuisine authentique et raffinée dans un cadre exceptionnel.",
        annee_fondation: 1985,
        etoiles_michelin: 1, // 0 = aucune étoile, 1, 2 ou 3
    },

    // ─────────────────────────────────────────────
    // 2. CONTACT & LOCALISATION
    // ─────────────────────────────────────────────
    contact: {
        adresse_ligne1: "42 Avenue des Gourmets",
        adresse_ligne2: "75001 Paris, France",
        telephone: "+33 1 42 34 56 78",
        telephone_href: "+33142345678",
        email: "contact@jardindessaveurs.fr",
        // URL de l'iframe Google Maps (Carte > Partager > Intégrer une carte > copier src="...")
        google_maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081493!2d2.3352765!3d48.8606111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sLouvre%20Museum!5e0!3m2!1sen!2sfr!4v1234567890",
    },

    // ─────────────────────────────────────────────
    // 3. RÉSEAUX SOCIAUX
    // ─────────────────────────────────────────────
    reseaux_sociaux: [
        { label: "Instagram", icon: "📷", url: "https://instagram.com/votre-compte" },
        { label: "Facebook",  icon: "👍", url: "https://facebook.com/votre-page"   },
        { label: "TikTok",    icon: "🎵", url: "https://tiktok.com/@votre-compte"  },
        { label: "Twitter",   icon: "🐦", url: "https://twitter.com/votre-compte"  },
    ],

    // ─────────────────────────────────────────────
    // 4. THÈME & COULEURS
    // ─────────────────────────────────────────────
    theme: {
        couleur_principale:  "#2c5f2d",  // Vert forêt
        couleur_secondaire:  "#97c680",  // Vert clair
        couleur_accent:      "#d4af37",  // Or
        couleur_fond_clair:  "#f8f8f8",
        couleur_fond_sombre: "#1a1a1a",
    },

    // ─────────────────────────────────────────────
    // 5. IMAGES
    // ─────────────────────────────────────────────
    images: {
        // Image de fond du Hero (bannière principale)
        hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600",

        // Image de la section "Notre Histoire"
        histoire: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",

        // Bandeau défilant d'images (ajoutez ou retirez des URLs)
        carousel: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800",
            "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800",
            "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800",
        ],
    },

    // ─────────────────────────────────────────────
    // 6. HISTOIRE DU RESTAURANT
    // ─────────────────────────────────────────────
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

    // ─────────────────────────────────────────────
    // 7. POINTS FORTS (section "L'Expérience")
    // ─────────────────────────────────────────────
    points_forts: [
        {
            icone: "🍽️",
            titre: "Cuisine Gastronomique",
            description: "Des plats raffinés préparés avec passion par notre chef étoilé et son équipe talentueuse."
        },
        {
            icone: "🌱",
            titre: "Produits Locaux",
            description: "Nous travaillons exclusivement avec des producteurs locaux pour garantir fraîcheur et qualité."
        },
        {
            icone: "🍷",
            titre: "Cave d'Exception",
            description: "Une sélection de vins soigneusement choisie pour sublimer chaque plat de notre menu."
        },
        {
            icone: "✨",
            titre: "Ambiance Unique",
            description: "Un cadre élégant et intimiste pour vos moments les plus précieux."
        },
    ],

    // ─────────────────────────────────────────────
    // 8. MENU
    // Chaque catégorie = { id, label, plats: [] }
    // ─────────────────────────────────────────────
    menu: {
        categories: [
            {
                id: "entrees",
                label: "Entrées",
                plats: [
                    { nom: "Foie Gras Maison",       prix: "24€", description: "Mi-cuit, chutney de figues et pain brioché toasté" },
                    { nom: "Tartare de Saumon",       prix: "18€", description: "Saumon frais, avocat, citron vert et coriandre" },
                    { nom: "Velouté de Saison",       prix: "12€", description: "Crème légère et croûtons maison" },
                    { nom: "Salade de Chèvre Chaud",  prix: "16€", description: "Mesclun, tomates confites, miel et noix" },
                ],
            },
            {
                id: "plats",
                label: "Plats",
                plats: [
                    { nom: "Filet de Bœuf Rossini",  prix: "42€", description: "Filet de bœuf, foie gras poêlé, sauce truffe et légumes du marché" },
                    { nom: "Saint-Jacques Rôties",    prix: "38€", description: "Noix de Saint-Jacques, purée de céleri et émulsion citron" },
                    { nom: "Pavé de Saumon",          prix: "32€", description: "Saumon sauvage, risotto crémeux aux asperges" },
                    { nom: "Magret de Canard",        prix: "34€", description: "Magret rôti, sauce aux fruits rouges et gratin dauphinois" },
                ],
            },
            {
                id: "desserts",
                label: "Desserts",
                plats: [
                    { nom: "Soufflé au Chocolat", prix: "14€", description: "Servi tiède avec glace vanille Bourbon" },
                    { nom: "Tarte Tatin",         prix: "12€", description: "Pommes caramélisées et crème fraîche épaisse" },
                    { nom: "Fondant au Chocolat", prix: "13€", description: "Cœur coulant, glace pistache maison" },
                    { nom: "Assiette de Fromages",prix: "15€", description: "Sélection de fromages affinés et confiture maison" },
                ],
            },
            {
                id: "specialites",
                label: "Spécialités",
                plats: [
                    { nom: "Homard Breton",           prix: "56€", description: "Homard entier grillé, beurre d'herbes et légumes de saison" },
                    { nom: "Tournedos Rossini",        prix: "48€", description: "Filet mignon, foie gras, truffe noire et jus corsé" },
                    { nom: "Plateau de Fruits de Mer", prix: "65€", description: "Pour 2 personnes - Huîtres, langoustines, bulots, crevettes" },
                ],
            },
        ],

        // Lien du menu PDF ou page dédiée (pour le QR Code)
        url_menu_complet: "https://votre-site.com/menu",
    },

    // ─────────────────────────────────────────────
    // 9. HORAIRES D'OUVERTURE
    // Mettez "Fermé" si le jour est fermé
    // ─────────────────────────────────────────────
    horaires: [
        { jour: "Lundi",            heures: "Fermé" },
        { jour: "Mardi - Samedi",   heures: "12h00 - 14h30 • 19h00 - 22h30" },
        { jour: "Dimanche",         heures: "12h00 - 14h30" },
    ],

    // ─────────────────────────────────────────────
    // 10. FERMETURES EXCEPTIONNELLES
    // ─────────────────────────────────────────────
    fermetures: [
        {
            date: "Du 24 au 26 Décembre 2024",
            raison: "Fermeture annuelle pour les fêtes de Noël",
        },
        {
            date: "1er Janvier 2025",
            raison: "Jour de l'An - Réouverture le 2 janvier",
        },
        {
            date: "Du 15 au 31 Août 2025",
            raison: "Congés annuels d'été",
        },
    ],

    // ─────────────────────────────────────────────
    // 11. ÉQUIPE
    // (Les événements sont gérés dans le dashboard admin → Firestore)
    // ─────────────────────────────────────────────
    equipe: [
        {
            icone: "👨‍🍳",
            // photo: "https://votre-site.com/photos/chef.jpg", // Décommentez pour utiliser une vraie photo
            nom: "Jean-Pierre Dubois",
            role: "Chef Exécutif",
            description: "30 ans d'expérience, étoilé Michelin, passionné par la cuisine du terroir.",
        },
        {
            icone: "👩‍🍳",
            nom: "Marie Leroy",
            role: "Chef Pâtissière",
            description: "Créatrice de desserts d'exception, formée dans les plus grandes maisons.",
        },
        {
            icone: "🍷",
            nom: "Philippe Martin",
            role: "Sommelier",
            description: "Expert en vins, il saura vous guider vers l'accord parfait.",
        },
        {
            icone: "👔",
            nom: "Sophie Bernard",
            role: "Directrice de Salle",
            description: "Garante de votre bien-être, elle orchestre le service avec élégance.",
        },
    ],

    // ─────────────────────────────────────────────
    // 13. ACCESSIBILITÉ
    // Retirez les items non applicables
    // ─────────────────────────────────────────────
    accessibilite: [
        {
            icone: "♿",
            titre: "Accès PMR",
            description: "Rampe d'accès et entrée de plain-pied. Tous nos espaces sont accessibles aux personnes à mobilité réduite.",
        },
        {
            icone: "🚻",
            titre: "Sanitaires Adaptés",
            description: "Toilettes spacieuses et équipées pour les personnes handicapées.",
        },
        {
            icone: "🅿️",
            titre: "Parking Réservé",
            description: "Places de stationnement réservées PMR à proximité immédiate du restaurant.",
        },
        {
            icone: "👂",
            titre: "Boucle Magnétique",
            description: "Système d'amplification sonore disponible pour les personnes malentendantes.",
        },
    ],

    // ─────────────────────────────────────────────
    // 12. AVIS CLIENTS (extraits de Google Maps)
    // note : de 1 à 5 étoiles
    // Laissez le tableau vide [] pour masquer la section
    // ─────────────────────────────────────────────
    avis_clients: [
        {
            auteur: "Marie L.",
            note:   5,
            date:   "il y a 2 semaines",
            texte:  "Une expérience gastronomique exceptionnelle. Le foie gras maison était divin, et le service irréprochable. On reviendra sans hésiter !",
        },
        {
            auteur: "Thomas B.",
            note:   5,
            date:   "il y a 1 mois",
            texte:  "Cadre magnifique, cuisine raffinée et personnel aux petits soins. Le magret de canard était parfaitement cuit. Un vrai moment de bonheur.",
        },
        {
            auteur: "Sophie M.",
            note:   4,
            date:   "il y a 3 semaines",
            texte:  "Excellent restaurant gastronomique. Les produits sont frais et travaillés avec soin. Je recommande vivement la soirée jazz du vendredi !",
        },
    ],

    // ─────────────────────────────────────────────
    // 13. MOYENS DE PAIEMENT ACCEPTÉS
    // Ajoutez ou retirez selon les modes acceptés
    // ─────────────────────────────────────────────
    paiements: [
        { icone: "💳", label: "Carte bancaire"   },
        { icone: "💶", label: "Espèces"          },
        { icone: "📱", label: "Apple Pay"        },
        { icone: "📱", label: "Google Pay"       },
        { icone: "🏷️", label: "Tickets restaurant" },
        { icone: "💳", label: "American Express" },
    ],

    // ─────────────────────────────────────────────
    // 14. EMAILJS (envoi des réservations)
    // ─────────────────────────────────────────────
    emailjs: {
        public_key:  "9cbH8LkCwz3dX1YKP",
        service_id:  "service_uqqrt7m",
        template_id: "template_0e9bc1m",
        destinataire: "l41205761@gmail.com",
    },

    // ─────────────────────────────────────────────
    // 15. CHATBOT — Réponses personnalisées
    // Chaque entrée = { mots_cles: [], reponse: "" }
    // ─────────────────────────────────────────────
    chatbot_reponses: [
        {
            mots_cles: ["heure", "horaire", "ouvert", "ouvre", "ferme"],
            reponse: "Nous sommes ouverts :<br>📅 Mardi au Samedi : 12h-14h30 & 19h-22h30<br>📅 Dimanche : 12h-14h30<br>🚫 Fermé le lundi",
        },
        {
            mots_cles: ["réserv", "table", "book", "place"],
            reponse: "Pour réserver une table, utilisez notre formulaire sur cette page ou appelez-nous au {{tel}} ! 📞",
        },
        {
            mots_cles: ["menu", "carte", "plat", "manger"],
            reponse: "Consultez notre menu gastronomique dans la section dédiée ! Entrées, plats, desserts et spécialités. 🍽️",
        },
        {
            mots_cles: ["prix", "tarif", "coût", "combien", "€"],
            reponse: "Nos plats vont de 12€ à 65€. Consultez notre menu pour les détails des prix ! 💰",
        },
        {
            mots_cles: ["adresse", "où", "trouver", "localisation", "itinéraire"],
            reponse: "Nous sommes situés au {{adresse}}. Consultez la carte sur notre page ! 📍",
        },
        {
            mots_cles: ["contact", "téléphone", "email", "appel"],
            reponse: "📞 Téléphone : {{tel}}<br>📧 Email : {{email}}",
        },
        {
            mots_cles: ["événement", "soirée", "concert", "jazz", "animation"],
            reponse: "Nous organisons des soirées jazz tous les vendredis ! Consultez notre section Événements pour plus d'infos. 🎵",
        },
        {
            mots_cles: ["handicap", "pmr", "accessible", "fauteuil", "mobilité"],
            reponse: "Notre restaurant est entièrement accessible PMR avec rampe, toilettes adaptées et parking réservé. ♿",
        },
        {
            mots_cles: ["allergi", "gluten", "végé", "vegan", "intolérance"],
            reponse: "Nous prenons en compte toutes les allergies et régimes spéciaux. Mentionnez-le à la réservation ou parlez-en à notre équipe ! 🌱",
        },
        {
            mots_cles: ["parking", "stationn", "garer", "voiture"],
            reponse: "Un parking public est disponible à 100m du restaurant. Des places PMR sont réservées devant l'établissement. 🅿️",
        },
    ],

    // Message par défaut si aucun mot-clé ne correspond
    chatbot_defaut: "Je n'ai pas bien compris votre question. Contactez-nous au {{tel}} ou par email à {{email}} 😊",

};
