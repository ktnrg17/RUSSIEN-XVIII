/* =====================================================
   RUSSIEN'S 18TH BIRTHDAY INVITATION
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   OPENING ENVELOPE
===================================================== */

const openingScreen =
    document.getElementById("openingScreen");

const mainInvitation =
    document.getElementById("mainInvitation");

const envelopeButton =
    document.getElementById("envelopeButton");

const backgroundMusic =
    document.getElementById("backgroundMusic");

let invitationOpened = false;


/*
   Open the invitation
*/

function openInvitation() {

    // Prevent opening multiple times
    if (invitationOpened) return;

    invitationOpened = true;

    // Add envelope opening animation
    envelopeButton.classList.add("open");


    /*
       Wait for envelope animation
       before revealing the website.
    */

    setTimeout(() => {

        // Hide opening screen
        openingScreen.classList.add("hidden");

        // Show main invitation
        mainInvitation.classList.add("visible");

        // Allow scrolling
        document.body.classList.remove("locked");


        /*
           Start music after user interaction.

           IMPORTANT:
           Browsers allow audio playback more easily
           because the guest clicked the envelope.
        */

        if (backgroundMusic) {

            backgroundMusic.volume = 0.45;

            backgroundMusic.play()
                .catch(error => {

                    console.log(
                        "Music could not autoplay:",
                        error
                    );

                });

        }


        // Activate elements currently visible
        revealOnScroll();

    }, 1500);

}


/*
   CLICK EVENT
*/

envelopeButton.addEventListener(
    "click",
    openInvitation
);


/*
   KEYBOARD ACCESSIBILITY

   Enter or Space can also open the envelope.
*/

envelopeButton.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openInvitation();

        }

    }
);



/* =====================================================
   COUNTDOWN
===================================================== */


/*
   September 26, 2026
   4:00 PM
*/

const eventDate =
    new Date(
        "September 26, 2026 16:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        eventDate - now;


    /*
       If the event has already happened
    */

    if (difference <= 0) {

        document.getElementById("days").textContent =
            "00";

        document.getElementById("hours").textContent =
            "00";

        document.getElementById("minutes").textContent =
            "00";

        document.getElementById("seconds").textContent =
            "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
                (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
                1000
        );


    /*
       Update HTML
    */

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


/*
   Run immediately
*/

updateCountdown();


/*
   Update every second
*/

setInterval(
    updateCountdown,
    1000
);



/* =====================================================
   SCROLL REVEAL
===================================================== */


/*
   IMPORTANT:
   This has a different name from the function below.
*/

const revealItems =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealItems.forEach(
        element => {

            const elementTop =
                element.getBoundingClientRect().top;


            if (
                elementTop <
                windowHeight * 0.88
            ) {

                element.classList.add("active");

            }

        }
    );

}


/*
   Run when scrolling
*/

window.addEventListener(
    "scroll",
    revealOnScroll,
    {
        passive: true
    }
);



/* =====================================================
   HERO PARALLAX
===================================================== */

const heroBackground =
    document.querySelector(".hero-background");


window.addEventListener(
    "scroll",
    () => {

        if (!heroBackground) return;


        /*
           Only use parallax on larger screens.
           This keeps mobile smooth.
        */

        if (window.innerWidth > 700) {

            const scrollY =
                window.scrollY;


            heroBackground.style.transform =
                `scale(1.05)
                 translateY(${scrollY * 0.12}px)`;

        }

    },
    {
        passive: true
    }
);



/* =====================================================
   INITIAL PAGE STATE
===================================================== */


/*
   Prevent scrolling while envelope is closed.
*/

document.body.classList.add("locked");



/* =====================================================
   REDUCED MOTION ACCESSIBILITY
===================================================== */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (prefersReducedMotion) {

    revealItems.forEach(
        element => {

            element.classList.add("active");


            18 SPECIALS - GUEST DATA
===================================================== */

const guestLists = {

    gifts: [
        "KAIRA",
        "ANGELA",
        "STEPHANIE",
        "ZATHEENA",
        "JOANNA",
        "AILEEN",
        "PRINCESS DURAN",
        "CATHY NITOLLAMA",
        "TITA JUVIE",
        "RACHELLE ANNE",
        "KAT",
        "KEAN",
        "SYRIA",
        "AZTI",
        "AIRA",
        "EZRA/ASEC",
        "CLEARY",
        "SHAMAINE"
    ],

    candles: [
        "MARY",
        "BLAIRE",
        "SYRIA",
        "PRINCESS DURAN",
        "HANNA",
        "MAILA",
        "KEAN",
        "NATHALIE",
        "JAM",
        "AURIE",
        "NICOLE",
        "MAMA NI PRINCESS",
        "ATE LALET",
        "HERSHEY",
        "JOANNA",
        "TRIXIE",
        "DJANA",
        "MAMA BENG",
        "ANGELA",
        "TITA NENG",
        "GLIEZEL",
        "ERICA"
    ],

    roses: [
        "ZU",
        "CYRUS",
        "MATTHEW",
        "PRINCE",
        "ALEX",
        "RAYMOND",
        "JM",
        "TITO NOY",
        "TITO BONGKOY",
        "TITO SONNY",
        "ANDREI",
        "SAM",
        "KYLE",
        "NITOY",
        "CHRISTIAN",
        "CAPAO",
        "JOLO",
        "AJ",
        "CHOLO"
    ],

    "blue-bills": [
        "TITA TESS",
        "TE BENG",
        "NANAY",
        "INAY",
        "PHEA",
        "XANDREI",
        "CHEBE",
        "CHAME",
        "MAM MALOU",
        "GERM",
        "SUMALNAP",
        "CHAI",
        "TITO NOY",
        "KUYA NOY",
        "ATE LALET",
        "NICA",
        "KAGAWAD RODERICK",
        "HENRY/PRINCESS"
    ],

    shots: [
        "TITO NOY",
        "KUYA NOY",
        "VIENNA",
        "ABI",
        "JANINE",
        "HAVEN",
        "AZTI",
        "JOANNA",
        "DIAH",
        "MARLEY",
        "GAB",
        "SAMANTHA",
        "CATHY",
        "MAILA",
        "GLIEZEL",
        "LUCY",
        "PRINCESS NICOLE",
        "ANGELA",
        "STEPHANIE",
        "ALTHEA",
        "SYRIA",
        "NICOLE"
    ]

};


/* =====================================================
   SECTION TITLES
===================================================== */

const guestSectionTitles = {

    gifts: "18 Gifts",

    candles: "18 Candles",

    roses: "18 Roses",

    "blue-bills": "18 Blue Bills",

    shots: "18 Shots"

};


/* =====================================================
   GET POPUP ELEMENTS
===================================================== */

const guestPopup =
    document.getElementById("guestPopup");

const guestPopupTitle =
    document.getElementById("guestPopupTitle");

const guestList =
    document.getElementById("guestList");

const closeGuestPopup =
    document.getElementById("closeGuestPopup");


/* =====================================================
   OPEN GUEST POPUP
===================================================== */

function openGuestPopup(section) {

    if (
        !guestPopup ||
        !guestPopupTitle ||
        !guestList
    ) {
        return;
    }


    const guests =
        guestLists[section];


    if (!guests) {
        return;
    }


    /* Set popup title */

    guestPopupTitle.textContent =
        guestSectionTitles[section];


    /* Clear previous list */

    guestList.innerHTML = "";


    /* Add guests */

    guests.forEach(function(guest) {

        const listItem =
            document.createElement("li");

        listItem.textContent =
            guest;

        guestList.appendChild(listItem);

    });


    /* Show popup */

    guestPopup.classList.add("active");

    guestPopup.setAttribute(
        "aria-hidden",
        "false"
    );


    /* Prevent background scrolling */

    document.body.classList.add(
        "popup-open"
    );

}


/* =====================================================
   CLOSE GUEST POPUP
===================================================== */

function closeGuestList() {

    if (!guestPopup) {
        return;
    }


    guestPopup.classList.remove(
        "active"
    );


    guestPopup.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "popup-open"
    );

}


/* =====================================================
   18 SPECIALS CARDS
===================================================== */

const traditionCards =
    document.querySelectorAll(
        ".tradition-card"
    );


traditionCards.forEach(function(card) {


    function activateCard() {

        const section =
            card.dataset.section;


        if (!section) {
            return;
        }


        /*
         * If the popup is already showing
         * this same section, clicking it again
         * will close the popup.
         */

        if (
            guestPopup &&
            guestPopup.classList.contains(
                "active"
            ) &&
            guestPopupTitle.textContent ===
                guestSectionTitles[section]
        ) {

            closeGuestList();

            return;

        }


        /*
         * If another section is selected,
         * show the new guest list.
         */

        openGuestPopup(section);

    }


    /* Mouse / touch */

    card.addEventListener(
        "click",
        activateCard
    );


    /*
     * Keyboard support
     * Enter or Space will open the list.
     */

    card.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                activateCard();

            }

        }
    );

});


/* =====================================================
   CLOSE BUTTON
===================================================== */

if (closeGuestPopup) {

    closeGuestPopup.addEventListener(
        "click",
        closeGuestList
    );

}


/* =====================================================
   CLICK OUTSIDE POPUP
===================================================== */

if (guestPopup) {

    guestPopup.addEventListener(
        "click",
        function(event) {

            if (
                event.target.classList.contains(
                    "guest-popup-overlay"
                )
            ) {

                closeGuestList();

            }

        }
    );

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            guestPopup &&
            guestPopup.classList.contains(
                "active"
            )
        ) {

            closeGuestList();

        }

    }
);

        }
    );

}
