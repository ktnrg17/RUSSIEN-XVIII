/* =====================================================
   RUSSIEN @ 18
   SCRIPT.JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       OPENING ENVELOPE
    ================================================= */

    const openingScreen = document.getElementById("openingScreen");
    const mainInvitation = document.getElementById("mainInvitation");
    const envelopeButton = document.getElementById("envelopeButton");
    const backgroundMusic = document.getElementById("backgroundMusic");

    let invitationOpened = false;


    function openInvitation() {

        if (invitationOpened) return;

        invitationOpened = true;

        console.log("Envelope clicked!");

        if (envelopeButton) {
            envelopeButton.classList.add("open");
        }

        setTimeout(function () {

            if (openingScreen) {
                openingScreen.classList.add("hidden");
            }

            if (mainInvitation) {
                mainInvitation.classList.add("visible");
            }

            document.body.classList.remove("locked");

            if (backgroundMusic) {

                backgroundMusic.volume = 0.45;

                backgroundMusic.play().catch(function (error) {
                    console.log("Music autoplay blocked:", error);
                });

            }

            revealOnScroll();

        }, 1500);
    }


    if (envelopeButton) {

        envelopeButton.addEventListener(
            "click",
            openInvitation
        );

    }



    /* =================================================
       COUNTDOWN
    ================================================= */

    const eventDate =
        new Date("September 26, 2026 16:00:00").getTime();


    function updateCountdown() {

        const now = new Date().getTime();

        const difference = eventDate - now;

        const daysElement =
            document.getElementById("days");

        const hoursElement =
            document.getElementById("hours");

        const minutesElement =
            document.getElementById("minutes");

        const secondsElement =
            document.getElementById("seconds");


        if (difference <= 0) {

            if (daysElement) daysElement.textContent = "00";
            if (hoursElement) hoursElement.textContent = "00";
            if (minutesElement) minutesElement.textContent = "00";
            if (secondsElement) secondsElement.textContent = "00";

            return;
        }


        const days =
            Math.floor(
                difference / (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (difference % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (difference % (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (difference % (1000 * 60)) /
                1000
            );


        if (daysElement) {
            daysElement.textContent =
                String(days).padStart(2, "0");
        }

        if (hoursElement) {
            hoursElement.textContent =
                String(hours).padStart(2, "0");
        }

        if (minutesElement) {
            minutesElement.textContent =
                String(minutes).padStart(2, "0");
        }

        if (secondsElement) {
            secondsElement.textContent =
                String(seconds).padStart(2, "0");
        }

    }


    updateCountdown();

    setInterval(updateCountdown, 1000);



    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealItems =
        document.querySelectorAll(".reveal");


    function revealOnScroll() {

        const windowHeight =
            window.innerHeight;


        revealItems.forEach(function (element) {

            const elementTop =
                element.getBoundingClientRect().top;


            if (elementTop < windowHeight * 0.88) {

                element.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        revealOnScroll,
        {
            passive: true
        }
    );



    /* =================================================
       HERO PARALLAX
    ================================================= */

    const heroBackground =
        document.querySelector(".hero-background");


    window.addEventListener(
        "scroll",
        function () {

            if (!heroBackground) return;

            if (window.innerWidth > 700) {

                const scrollY =
                    window.scrollY;

                heroBackground.style.transform =
                    `scale(1.05) translateY(${scrollY * 0.12}px)`;

            }

        },
        {
            passive: true
        }
    );



    /* =================================================
       INITIAL PAGE STATE
    ================================================= */

    document.body.classList.add("locked");



    /* =================================================
       REDUCED MOTION
    ================================================= */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (prefersReducedMotion) {

        revealItems.forEach(function (element) {

            element.classList.add("active");

        });

    }



    /* =================================================
       18 SPECIALS — GUEST DATA
    ================================================= */

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



    /* =================================================
       SECTION TITLES
    ================================================= */

    const guestSectionTitles = {

        gifts: "18 Gifts",

        candles: "18 Candles",

        roses: "18 Roses",

        "blue-bills": "18 Blue Bills",

        shots: "18 Shots"

    };



    /* =================================================
       POPUP ELEMENTS
    ================================================= */

    const popup =
        document.getElementById("guestPopup");

    const popupTitle =
        document.getElementById("guestPopupTitle");

    const guestList =
        document.getElementById("guestList");

    const closeButton =
        document.getElementById("closeGuestPopup");



    /* =================================================
       OPEN GUEST POPUP
    ================================================= */

    function openGuestPopup(section) {

        console.log(
            "Opening guest section:",
            section
        );


        if (!popup) {

            console.error(
                "ERROR: #guestPopup not found."
            );

            return;

        }


        if (!popupTitle) {

            console.error(
                "ERROR: #guestPopupTitle not found."
            );

            return;

        }


        if (!guestList) {

            console.error(
                "ERROR: #guestList not found."
            );

            return;

        }


        const guests =
            guestLists[section];


        if (!guests) {

            console.error(
                "ERROR: No guest list for:",
                section
            );

            return;

        }


        /* Set title */

        popupTitle.textContent =
            guestSectionTitles[section];


        /* Clear old list */

        guestList.innerHTML = "";


        /* Add guests */

        guests.forEach(function (guest) {

            const li =
                document.createElement("li");

            li.textContent = guest;

            guestList.appendChild(li);

        });


        /* Show popup */

        popup.classList.add("active");

        popup.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "popup-open"
        );


        console.log(
            "Guest popup opened successfully."
        );

    }



    /* =================================================
       CLOSE GUEST POPUP
    ================================================= */

    function closeGuestPopup() {

        if (!popup) return;

        popup.classList.remove("active");

        popup.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "popup-open"
        );

    }



    /* =================================================
       18 SPECIALS — EVENT DELEGATION
    ================================================= */

    document.addEventListener(
        "click",
        function (event) {

            const card =
                event.target.closest(
                    ".tradition-card[data-section]"
                );


            if (!card) return;


            const section =
                card.getAttribute(
                    "data-section"
                );


            if (!section) return;


            console.log(
                "18 Specials clicked:",
                section
            );


            /*
               If the popup is already showing
               this same section, close it.
            */

            if (
                popup &&
                popup.classList.contains("active") &&
                popupTitle &&
                popupTitle.textContent ===
                    guestSectionTitles[section]
            ) {

                closeGuestPopup();

                return;

            }


            openGuestPopup(section);

        }
    );



    /* =================================================
       KEYBOARD SUPPORT
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            const activeElement =
                document.activeElement;


            if (
                activeElement &&
                activeElement.matches(
                    ".tradition-card[data-section]"
                )
            ) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    activeElement.click();

                }

            }

        }
    );



    /* =================================================
       CLOSE BUTTON
    ================================================= */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                closeGuestPopup();

            }
        );

    }



    /* =================================================
       CLICK OUTSIDE POPUP
    ================================================= */

    if (popup) {

        popup.addEventListener(
            "click",
            function (event) {

                if (
                    event.target.classList.contains(
                        "guest-popup-overlay"
                    )
                ) {

                    closeGuestPopup();

                }

            }
        );

    }



    /* =================================================
       ESCAPE
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                popup &&
                popup.classList.contains("active")
            ) {

                closeGuestPopup();

            }

        }
    );



    /* =================================================
       INITIAL REVEAL
    ================================================= */

    revealOnScroll();

});
