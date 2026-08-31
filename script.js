
/* =====================================================
   RUSSIEN @ 18
   SCRIPT.JS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       OPENING ENVELOPE
    ================================================= */

    const openingScreen =
        document.getElementById("openingScreen");

    const mainInvitation =
        document.getElementById("mainInvitation");

    const envelopeButton =
        document.getElementById("envelopeButton");

    const backgroundMusic =
        document.getElementById("backgroundMusic");

    let invitationOpened = false;


    function openInvitation() {

        if (invitationOpened) return;

        invitationOpened = true;

        console.log("Envelope clicked!");


        /* Open envelope animation */

        if (envelopeButton) {
            envelopeButton.classList.add("open");
        }


        /* Reveal website */

        setTimeout(function () {

            if (openingScreen) {
                openingScreen.classList.add("hidden");
            }

            if (mainInvitation) {
                mainInvitation.classList.add("visible");
            }

            document.body.classList.remove("locked");


            /* Start music */

            if (backgroundMusic) {

                backgroundMusic.volume = 0.45;

                backgroundMusic.play().catch(function (error) {

                    console.log(
                        "Music could not autoplay:",
                        error
                    );

                });

            }


            revealOnScroll();

        }, 1500);

    }


    /* Envelope CLICK */

    if (envelopeButton) {

        envelopeButton.addEventListener(
            "click",
            openInvitation
        );


        /* Envelope KEYBOARD */

        envelopeButton.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openInvitation();

                }

            }
        );

    } else {

        console.error(
            "ERROR: envelopeButton was not found."
        );

    }



    /* =================================================
       COUNTDOWN
    ================================================= */

    const eventDate =
        new Date(
            "September 26, 2026 16:00:00"
        ).getTime();


    function updateCountdown() {

        const now =
            new Date().getTime();

        const difference =
            eventDate - now;


        const daysElement =
            document.getElementById("days");

        const hoursElement =
            document.getElementById("hours");

        const minutesElement =
            document.getElementById("minutes");

        const secondsElement =
            document.getElementById("seconds");


        if (difference <= 0) {

            if (daysElement)
                daysElement.textContent = "00";

            if (hoursElement)
                hoursElement.textContent = "00";

            if (minutesElement)
                minutesElement.textContent = "00";

            if (secondsElement)
                secondsElement.textContent = "00";

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


        if (daysElement)
            daysElement.textContent =
                String(days).padStart(2, "0");

        if (hoursElement)
            hoursElement.textContent =
                String(hours).padStart(2, "0");

        if (minutesElement)
            minutesElement.textContent =
                String(minutes).padStart(2, "0");

        if (secondsElement)
            secondsElement.textContent =
                String(seconds).padStart(2, "0");

    }


    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );



    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealItems =
        document.querySelectorAll(".reveal");


    function revealOnScroll() {

        const windowHeight =
            window.innerHeight;


        revealItems.forEach(
            function (element) {

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
        document.querySelector(
            ".hero-background"
        );


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

    document.body.classList.add(
        "locked"
    );



    /* =================================================
       REDUCED MOTION
    ================================================= */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (prefersReducedMotion) {

        revealItems.forEach(
            function (element) {

                element.classList.add(
                    "active"
                );

            }
        );

    }



    /* =================================================
       18 SPECIALS — GUEST LISTS
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


    const guestSectionTitles = {

        gifts: "18 Gifts",

        candles: "18 Candles",

        roses: "18 Roses",

        "blue-bills": "18 Blue Bills",

        shots: "18 Shots"

    };



    /* =================================================
       OPEN GUEST POPUP
    ================================================= */

    function openGuestPopup(section) {

        const popup =
            document.getElementById(
                "guestPopup"
            );

        const title =
            document.getElementById(
                "guestPopupTitle"
            );

        const list =
            document.getElementById(
                "guestList"
            );


        if (!popup || !title || !list) {

            console.error(
                "Guest popup HTML is missing."
            );

            return;

        }


        const guests =
            guestLists[section];


        if (!guests) {

            console.error(
                "Guest list not found:",
                section
            );

            return;

        }


        title.textContent =
            guestSectionTitles[section];


        list.innerHTML = "";


        guests.forEach(
            function (guest) {

                const item =
                    document.createElement("li");

                item.textContent =
                    guest;

                list.appendChild(item);

            }
        );


        popup.classList.add(
            "active"
        );


        popup.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "popup-open"
        );

    }



    /* =================================================
       CLOSE GUEST POPUP
    ================================================= */

    function closeGuestPopup() {

        const popup =
            document.getElementById(
                "guestPopup"
            );


        if (!popup) return;


        popup.classList.remove(
            "active"
        );


        popup.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "popup-open"
        );

    }



    /* =================================================
       18 SPECIALS CLICK EVENTS
    ================================================= */

    const cards =
        document.querySelectorAll(
            ".tradition-card[data-section]"
        );


    console.log(
        "18 Specials cards found:",
        cards.length
    );


    cards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    const section =
                        card.getAttribute(
                            "data-section"
                        );


                    if (!section) return;


                    const popup =
                        document.getElementById(
                            "guestPopup"
                        );

                    const title =
                        document.getElementById(
                            "guestPopupTitle"
                        );


                    if (
                        popup &&
                        popup.classList.contains(
                            "active"
                        ) &&
                        title &&
                        title.textContent ===
                            guestSectionTitles[section]
                    ) {

                        closeGuestPopup();

                        return;

                    }


                    openGuestPopup(
                        section
                    );

                }
            );


            card.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        card.click();

                    }

                }
            );

        }
    );



    /* =================================================
       CLOSE BUTTON
    ================================================= */

    const closeButton =
        document.getElementById(
            "closeGuestPopup"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeGuestPopup
        );

    }



    /* =================================================
       CLICK OUTSIDE POPUP
    ================================================= */

    const popup =
        document.getElementById(
            "guestPopup"
        );


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
       ESCAPE KEY
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                popup &&
                popup.classList.contains(
                    "active"
                )
            ) {

                closeGuestPopup();

            }

        }
    );


    /* Initial reveal */

    revealOnScroll();

});
