/* =====================================================
   RUSSIEN @ 18
   MAIN JAVASCRIPT
===================================================== */


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

const revealItems =
    document.querySelectorAll(".reveal");

const specialItems =
    document.querySelectorAll(".special-item");

const heroBackground =
    document.querySelector(".hero-background");


let invitationOpened = false;


/* =====================================================
   OPEN INVITATION
===================================================== */

function openInvitation() {

    if (invitationOpened) {
        return;
    }

    invitationOpened = true;


    /*
        Start the envelope animation.
    */

    envelopeButton.classList.add("open");


    /*
        Wait until the physical envelope
        animation has progressed.
    */

    setTimeout(() => {

        /*
            Hide opening screen.
        */

        openingScreen.classList.add("hidden");


        /*
            Reveal main invitation.
        */

        mainInvitation.classList.add("visible");


        /*
            Allow scrolling.
        */

        document.body.classList.remove("locked");


        /*
            Start music after user interaction.

            The click/tap on the envelope counts as
            user interaction, making audio playback
            much more likely to work on mobile/iPad.
        */

        if (backgroundMusic) {

            backgroundMusic.volume = 0.45;

            const musicPromise =
                backgroundMusic.play();

            if (musicPromise !== undefined) {

                musicPromise.catch(() => {

                    console.log(
                        "Audio playback was blocked by the browser."
                    );

                });

            }

        }


        /*
            Trigger visible animations.
        */

        revealOnScroll();

    }, 1500);

}


/* =====================================================
   ENVELOPE CLICK
===================================================== */

envelopeButton.addEventListener(
    "click",
    openInvitation
);


/* =====================================================
   KEYBOARD ACCESSIBILITY
===================================================== */

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
    Event:
    September 26, 2026
    4:00 PM

    The browser uses the visitor's local timezone.
*/

const eventDate =
    new Date(
        "September 26, 2026 16:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        Date.now();

    const difference =
        eventDate - now;


    /*
        Event already happened.
    */

    if (difference <= 0) {

        setCountdown(
            "00",
            "00",
            "00",
            "00"
        );

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                difference %
                (1000 * 60)
            ) /
            1000
        );


    setCountdown(
        pad(days),
        pad(hours),
        pad(minutes),
        pad(seconds)
    );

}


/*
    Put countdown values into HTML.
*/

function setCountdown(
    days,
    hours,
    minutes,
    seconds
) {

    document.getElementById("days").textContent =
        days;

    document.getElementById("hours").textContent =
        hours;

    document.getElementById("minutes").textContent =
        minutes;

    document.getElementById("seconds").textContent =
        seconds;

}


/*
    Add leading zero.
*/

function pad(number) {

    return String(number)
        .padStart(2, "0");

}


/*
    Start countdown.
*/

updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

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


window.addEventListener(
    "scroll",
    revealOnScroll,
    {
        passive: true
    }
);


/* =====================================================
   INTERSECTION OBSERVER
===================================================== */


/*
    IntersectionObserver makes the animations
    smoother and more efficient on mobile/iPad.
*/

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

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


    revealItems.forEach(
        element => {

            observer.observe(element);

        }
    );

}


/* =====================================================
   18 SPECIALS
===================================================== */


/*
    Every section works independently.

    Tap:
        closed → open

    Tap again:
        open → closed
*/

specialItems.forEach(
    item => {

        const button =
            item.querySelector(
                ".special-header"
            );


        button.addEventListener(
            "click",
            () => {

                const isOpen =
                    item.classList.contains(
                        "open"
                    );


                /*
                    Close this section if already open.
                */

                if (isOpen) {

                    item.classList.remove(
                        "open"
                    );

                    button.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    return;
                }


                /*
                    Open section.
                */

                item.classList.add(
                    "open"
                );

                button.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }
        );

    }
);


/* =====================================================
   HERO PARALLAX
===================================================== */


/*
    Desktop gets a subtle parallax effect.

    Mobile/iPad gets a lighter effect to avoid
    performance issues.
*/

window.addEventListener(
    "scroll",
    () => {

        if (!heroBackground) {
            return;
        }


        const scrollY =
            window.scrollY;


        /*
            Disable strong parallax on small screens.
        */

        if (
            window.innerWidth <= 600
        ) {

            heroBackground.style.transform =
                "scale(1.03)";

            return;

        }


        /*
            Desktop / iPad.
        */

        const movement =
            scrollY * 0.08;


        heroBackground.style.transform =
            `scale(1.06) translateY(${movement}px)`;

    },
    {
        passive: true
    }
);


/* =====================================================
   TOUCH SAFETY
===================================================== */


/*
    Prevent accidental double-tap zoom on
    important interactive controls.
*/

document.querySelectorAll(
    "button, .map-button"
).forEach(
    element => {

        element.addEventListener(
            "touchend",
            function() {

                this.style.touchAction =
                    "manipulation";

            },
            {
                passive: true
            }
        );

    }
);


/* =====================================================
   INITIAL STATE
===================================================== */


/*
    Keep the page locked until envelope opens.
*/

document.body.classList.add(
    "locked"
);


/*
    Make elements already visible appear.
*/

if (
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    revealItems.forEach(
        element => {

            element.classList.add(
                "active"
            );

        }
    );

}
