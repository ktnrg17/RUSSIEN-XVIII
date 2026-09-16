document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTS
    ========================== */

    const openingScreen = document.getElementById("openingScreen");
    const mainInvitation = document.getElementById("mainInvitation");
    const envelopeButton = document.getElementById("envelopeButton");
    const backgroundMusic = document.getElementById("backgroundMusic");


    /* =========================
       OPEN INVITATION
    ========================== */

    window.openInvitation = function () {

        if (envelopeButton) {
            envelopeButton.classList.add("open");
        }

        setTimeout(() => {

            if (openingScreen) {
                openingScreen.classList.add("hidden");
            }

            if (mainInvitation) {
                mainInvitation.classList.add("visible");
            }

            document.body.classList.add("invitation-open");

            /* Start background music after user interaction */
            if (backgroundMusic) {

                backgroundMusic.volume = 0.45;

                const playPromise = backgroundMusic.play();

                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        // Browser may block autoplay.
                    });
                }
            }

        }, 1500);

    };


    /* =========================
       COUNTDOWN
    ========================== */

    const targetDate = new Date(
        "September 26, 2026 16:00:00"
    ).getTime();


    function updateCountdown() {

        const now = new Date().getTime();

        const distance = targetDate - now;


        if (distance <= 0) {

            const days = document.getElementById("days");
            const hours = document.getElementById("hours");
            const minutes = document.getElementById("minutes");
            const seconds = document.getElementById("seconds");

            if (days) days.textContent = "00";
            if (hours) hours.textContent = "00";
            if (minutes) minutes.textContent = "00";
            if (seconds) seconds.textContent = "00";

            return;
        }


        const daysValue = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

        const hoursValue = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutesValue = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const secondsValue = Math.floor(
            (distance % (1000 * 60)) /
            1000
        );


        const days = document.getElementById("days");
        const hours = document.getElementById("hours");
        const minutes = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");


        if (days) {
            days.textContent =
                String(daysValue).padStart(2, "0");
        }

        if (hours) {
            hours.textContent =
                String(hoursValue).padStart(2, "0");
        }

        if (minutes) {
            minutes.textContent =
                String(minutesValue).padStart(2, "0");
        }

        if (seconds) {
            seconds.textContent =
                String(secondsValue).padStart(2, "0");
        }

    }


    updateCountdown();

    setInterval(updateCountdown, 1000);


    /* =========================
       SCROLL REVEAL
    ========================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =========================
       HERO PARALLAX
    ========================== */

    const heroBackground =
        document.querySelector(".hero-background");


    function updateHeroParallax() {

        if (!heroBackground) {
            return;
        }

        const scrollY = window.scrollY;

        if (scrollY < window.innerHeight) {

            heroBackground.style.transform =
                `translateY(${scrollY * 0.25}px) scale(1.05)`;

        }

    }


    window.addEventListener(
        "scroll",
        updateHeroParallax,
        {
            passive: true
        }
    );


    /* =========================
       REDUCED MOTION
    ========================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (prefersReducedMotion.matches) {

        document.documentElement.classList.add(
            "reduce-motion"
        );

    }


    /* =========================
       SPECIAL GUEST LISTS
    ========================== */

    const specialLists = {

        gifts: {
            title: "18 Gifts",
            label: "SPECIAL GIFTS",
            guests: [
                "Guest 1",
                "Guest 2",
                "Guest 3",
                "Guest 4",
                "Guest 5",
                "Guest 6",
                "Guest 7",
                "Guest 8",
                "Guest 9",
                "Guest 10",
                "Guest 11",
                "Guest 12",
                "Guest 13",
                "Guest 14",
                "Guest 15",
                "Guest 16",
                "Guest 17",
                "Guest 18"
            ]
        },

        candles: {
            title: "18 Candles",
            label: "SPECIAL CANDLES",
            guests: [
                "Guest 1",
                "Guest 2",
                "Guest 3",
                "Guest 4",
                "Guest 5",
                "Guest 6",
                "Guest 7",
                "Guest 8",
                "Guest 9",
                "Guest 10",
                "Guest 11",
                "Guest 12",
                "Guest 13",
                "Guest 14",
                "Guest 15",
                "Guest 16",
                "Guest 17",
                "Guest 18"
            ]
        },

        roses: {
            title: "18 Roses",
            label: "SPECIAL ROSES",
            guests: [
                "Guest 1",
                "Guest 2",
                "Guest 3",
                "Guest 4",
                "Guest 5",
                "Guest 6",
                "Guest 7",
                "Guest 8",
                "Guest 9",
                "Guest 10",
                "Guest 11",
                "Guest 12",
                "Guest 13",
                "Guest 14",
                "Guest 15",
                "Guest 16",
                "Guest 17",
                "Guest 18"
            ]
        },

        blueBills: {
            title: "18 Blue Bills",
            label: "SPECIAL BLUE BILLS",
            guests: [
                "Guest 1",
                "Guest 2",
                "Guest 3",
                "Guest 4",
                "Guest 5",
                "Guest 6",
                "Guest 7",
                "Guest 8",
                "Guest 9",
                "Guest 10",
                "Guest 11",
                "Guest 12",
                "Guest 13",
                "Guest 14",
                "Guest 15",
                "Guest 16",
                "Guest 17",
                "Guest 18"
            ]
        },

        shots: {
            title: "18 Shots",
            label: "SPECIAL SHOTS",
            guests: [
                "Guest 1",
                "Guest 2",
                "Guest 3",
                "Guest 4",
                "Guest 5",
                "Guest 6",
                "Guest 7",
                "Guest 8",
                "Guest 9",
                "Guest 10",
                "Guest 11",
                "Guest 12",
                "Guest 13",
                "Guest 14",
                "Guest 15",
                "Guest 16",
                "Guest 17",
                "Guest 18"
            ]
        }

    };


    /* =========================
       OPEN SPECIAL POPUP
    ========================== */

    window.openSpecial = function (type) {

        const popup =
            document.getElementById("specialPopup");

        const popupTitle =
            document.getElementById("popupTitle");

        const popupLabel =
            document.getElementById("popupLabel");

        const guestList =
            document.getElementById("guestList");


        if (!popup || !popupTitle || !popupLabel || !guestList) {
            return;
        }


        const special =
            specialLists[type];


        if (!special) {
            return;
        }


        popupTitle.textContent =
            special.title;

        popupLabel.textContent =
            special.label;


        guestList.innerHTML = "";


        special.guests.forEach(
            (guest, index) => {

                const guestItem =
                    document.createElement("div");

                guestItem.className =
                    "guest-item";


                const number =
                    document.createElement("span");

                number.className =
                    "guest-number";

                number.textContent =
                    String(index + 1).padStart(2, "0");


                const name =
                    document.createElement("span");

                name.className =
                    "guest-name";

                name.textContent =
                    guest;


                guestItem.appendChild(number);
                guestItem.appendChild(name);

                guestList.appendChild(guestItem);

            }
        );


        popup.classList.add("active");

        document.body.classList.add("popup-open");

    };


    /* =========================
       CLOSE SPECIAL POPUP
    ========================== */

    window.closeSpecial = function () {

        const popup =
            document.getElementById("specialPopup");


        if (popup) {
            popup.classList.remove("active");
        }


        document.body.classList.remove(
            "popup-open"
        );

    };


    /* =========================
       ESCAPE KEY
    ========================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                window.closeSpecial();

            }

        }
    );


    /* =========================
       CLOSE POPUP WHEN CLICKING
       OUTSIDE CONTENT
    ========================== */

    const popup =
        document.getElementById("specialPopup");


    if (popup) {

        popup.addEventListener(
            "click",
            event => {

                if (
                    event.target === popup
                ) {

                    window.closeSpecial();

                }

            }
        );

    }

});
