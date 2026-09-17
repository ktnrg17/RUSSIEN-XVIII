document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const openingScreen =
        document.getElementById("openingScreen");

    const mainInvitation =
        document.getElementById("mainInvitation");

    const envelopeButton =
        document.getElementById("envelopeButton");

    const backgroundMusic =
        document.getElementById("backgroundMusic");

    const guestPopup =
        document.getElementById("guestPopup");

    const guestPopupOverlay =
        document.getElementById("guestPopupOverlay");

    const guestPopupClose =
        document.getElementById("guestPopupClose");

    const guestPopupTitle =
        document.getElementById("guestPopupTitle");

    const guestList =
        document.getElementById("guestList");


    /* =====================================================
       STATE
    ===================================================== */

    let invitationOpened = false;


    /* =====================================================
       OPEN INVITATION
    ===================================================== */

    function openInvitation() {

        if (invitationOpened) {
            return;
        }

        invitationOpened = true;


        console.log("Envelope clicked!");


        /* Open envelope animation */

        if (envelopeButton) {
            envelopeButton.classList.add("open");
        }


        /* Wait for envelope animation */

        setTimeout(function () {

            if (openingScreen) {
                openingScreen.classList.add("hidden");
            }

            if (mainInvitation) {
                mainInvitation.classList.add("visible");
            }


            /* Unlock scrolling */

            document.body.classList.remove("locked");


            /* Always start at first page */

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            });


            /* Start music */

            if (backgroundMusic) {

                backgroundMusic.volume = 0.4;

                backgroundMusic
                    .play()
                    .catch(function (error) {

                        console.log(
                            "Music could not autoplay:",
                            error
                        );

                    });
            }


            /* Start reveal animations */

            revealOnScroll();

        }, 1500);

    }


    /* =====================================================
       ENVELOPE CLICK
    ===================================================== */

    if (envelopeButton) {

        envelopeButton.addEventListener(
            "click",
            openInvitation
        );

    }


    /* =====================================================
       COUNTDOWN
    ===================================================== */

    const targetDate =
        new Date(
            "September 26, 2026 16:00:00"
        ).getTime();


    function updateCountdown() {

        const now =
            new Date().getTime();

        const distance =
            targetDate - now;


        const daysElement =
            document.getElementById("days");

        const hoursElement =
            document.getElementById("hours");

        const minutesElement =
            document.getElementById("minutes");

        const secondsElement =
            document.getElementById("seconds");


        if (
            !daysElement ||
            !hoursElement ||
            !minutesElement ||
            !secondsElement
        ) {
            return;
        }


        if (distance <= 0) {

            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";

            return;
        }


        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );

        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60)) /
                1000
            );


        daysElement.textContent =
            String(days).padStart(2, "0");

        hoursElement.textContent =
            String(hours).padStart(2, "0");

        minutesElement.textContent =
            String(minutes).padStart(2, "0");

        secondsElement.textContent =
            String(seconds).padStart(2, "0");

    }


    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    function revealOnScroll() {

        const revealElements =
            document.querySelectorAll(".reveal");


        if (
            "IntersectionObserver"
            in window
        ) {

            const observer =
                new IntersectionObserver(
                    function (entries) {

                        entries.forEach(
                            function (entry) {

                                if (
                                    entry.isIntersecting
                                ) {

                                    entry.target.classList.add(
                                        "active"
                                    );

                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.12
                    }
                );


            revealElements.forEach(
                function (element) {

                    observer.observe(
                        element
                    );

                }
            );

        } else {

            revealElements.forEach(
                function (element) {

                    element.classList.add(
                        "active"
                    );

                }
            );

        }

    }


    revealOnScroll();


    /* =====================================================
       GUEST LISTS
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
            "TITA JUVIE",
            "RACHELLE ANNE",
            "KAT",
            "KEAN",
            "SYRIA",
            "AZTI",
            "AIRA",
            "EZRA/ASEC",
            "CLEARY",
            "SHANE MACABODBOD",
            "CHLOE",
            "GERALDINE",
            "NICO",
            "MARLEY",
            "PRINCESS BACARON"

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
            "HERSHEY",
            "JOANNA",
            "ANGELA",
            "NICA",
            "CATHERINE NITOLLAMA",
            "ERIC",
            "KATRINA",
            "JANINE"

        ],


        roses: [

            "ZU",
            "CYRUS",
            "MATTHEW",
            "PRINCE",
            "ALEX",
            "RAYMOND",
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
            "TJ",
            "EZEKIEL",
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
            "GERM",
            "CHAI",
            "TITO NOY",
            "KUYA NOY",
            "ATE LALET",
            "NICA",
            "KAGAWAD RODERICK",
            "HENRY/PRINCESS",
            "MIA",
            "CATHERINE NITOLLAMA",
            "MADE",
            "FAITH",
            "AIRA"

        ],


        shots: [

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
            "LUCY",
            "ANGELA",
            "STEPHANIE",
            "ALTHEA",
            "SYRIA",
            "NICOLE",
            "ALEX"

        ]

    };


    /* =====================================================
       POPUP TITLES
    ===================================================== */

    const guestSectionTitles = {

        gifts:
            "18 Gifts",

        candles:
            "18 Candles",

        roses:
            "18 Roses",

        "blue-bills":
            "18 Blue Bills",

        shots:
            "18 Shots"

    };


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


        guestPopupTitle.textContent =
            guestSectionTitles[section];


        guestList.innerHTML = "";


        guests.forEach(
            function (guest) {

                const li =
                    document.createElement("li");

                li.textContent =
                    guest;

                guestList.appendChild(li);

            }
        );


        guestPopup.classList.add(
            "active"
        );

        guestPopup.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "popup-open"
        );


        if (guestPopupClose) {

            setTimeout(
                function () {

                    guestPopupClose.focus();

                },
                50
            );

        }

    }


    /* =====================================================
       CLOSE GUEST POPUP
    ===================================================== */

    function closeGuestPopup() {

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
       SPECIAL CARD CLICK
    ===================================================== */

    const traditionCards =
        document.querySelectorAll(
            ".tradition-card"
        );


    traditionCards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    const section =
                        card.dataset.section;

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

                        const section =
                            card.dataset.section;

                        openGuestPopup(
                            section
                        );

                    }

                }
            );

        }
    );


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    if (guestPopupClose) {

        guestPopupClose.addEventListener(
            "click",
            closeGuestPopup
        );

    }


    /* =====================================================
       CLICK OUTSIDE POPUP
    ===================================================== */

    if (guestPopupOverlay) {

        guestPopupOverlay.addEventListener(
            "click",
            closeGuestPopup
        );

    }


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                guestPopup &&
                guestPopup.classList.contains("active")
            ) {

                closeGuestPopup();

            }

        }
    );


    /* =====================================================
       NAVIGATION
    ===================================================== */

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    const target =
                        document.querySelector(
                            link.getAttribute("href")
                        );


                    if (target) {

                        setTimeout(
                            function () {

                                window.scrollTo({
                                    top:
                                        target.offsetTop -
                                        70,
                                    behavior:
                                        "smooth"
                                });

                            },
                            10
                        );

                    }

                }
            );

        }
    );


    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const heroBackground =
        document.querySelector(
            ".hero-background"
        );


    if (
        heroBackground &&
        !window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        window.addEventListener(
            "scroll",
            function () {

                const scrollY =
                    window.scrollY;


                if (
                    scrollY <
                    window.innerHeight
                ) {

                    heroBackground.style.transform =
                        `scale(1.12) translateY(${scrollY * 0.12}px)`;

                }

            },
            {
                passive: true
            }
        );

    }

});
