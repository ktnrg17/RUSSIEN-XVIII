/* =====================================================
   RUSSIEN @ 18
   SCRIPT.JS
===================================================== */


/* =====================================================
   18 SPECIALS — GUEST LISTS
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
   TITLES
===================================================== */

const guestSectionTitles = {

    gifts: "18 Gifts",

    candles: "18 Candles",

    roses: "18 Roses",

    "blue-bills": "18 Blue Bills",

    shots: "18 Shots"

};


/* =====================================================
   OPEN GUEST LIST
===================================================== */

function openGuestPopup(section) {

    const popup =
        document.getElementById("guestPopup");

    const title =
        document.getElementById("guestPopupTitle");

    const list =
        document.getElementById("guestList");


    if (!popup || !title || !list) {
        console.error(
            "Guest popup elements were not found in index.html."
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


    /* Set title */

    title.textContent =
        guestSectionTitles[section];


    /* Remove old guests */

    list.innerHTML = "";


    /* Add guests */

    guests.forEach(function(guest) {

        const item =
            document.createElement("li");

        item.textContent =
            guest;

        list.appendChild(item);

    });


    /* Show popup */

    popup.classList.add("active");

    popup.setAttribute(
        "aria-hidden",
        "false"
    );


    /* Stop background from scrolling */

    document.body.classList.add(
        "popup-open"
    );

}


/* =====================================================
   CLOSE GUEST LIST
===================================================== */

function closeGuestPopup() {

    const popup =
        document.getElementById("guestPopup");


    if (!popup) {
        return;
    }


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


/* =====================================================
   WAIT UNTIL PAGE IS READY
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* ---------------------------------------------
           GET ELEMENTS
        --------------------------------------------- */

        const cards =
            document.querySelectorAll(
                ".tradition-card"
            );

        const popup =
            document.getElementById(
                "guestPopup"
            );

        const closeButton =
            document.getElementById(
                "closeGuestPopup"
            );


        /* ---------------------------------------------
           CHECK CARDS
        --------------------------------------------- */

        console.log(
            "18 Specials cards found:",
            cards.length
        );


        /* ---------------------------------------------
           CARD CLICK
        --------------------------------------------- */

        cards.forEach(function(card) {

            card.addEventListener(
                "click",
                function() {

                    const section =
                        card.getAttribute(
                            "data-section"
                        );


                    console.log(
                        "Selected section:",
                        section
                    );


                    /*
                       If the popup is already open
                       for the same section,
                       clicking again closes it.
                    */

                    const currentTitle =
                        document.getElementById(
                            "guestPopupTitle"
                        );


                    if (
                        popup &&
                        popup.classList.contains(
                            "active"
                        ) &&
                        currentTitle &&
                        currentTitle.textContent ===
                            guestSectionTitles[section]
                    ) {

                        closeGuestPopup();

                        return;

                    }


                    /* Open selected section */

                    openGuestPopup(
                        section
                    );

                }
            );


            /* -----------------------------------------
               KEYBOARD SUPPORT
            ----------------------------------------- */

            card.addEventListener(
                "keydown",
                function(event) {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        card.click();

                    }

                }
            );

        });


        /* ---------------------------------------------
           CLOSE BUTTON
        --------------------------------------------- */

        if (closeButton) {

            closeButton.addEventListener(
                "click",
                function() {

                    closeGuestPopup();

                }
            );

        }


        /* ---------------------------------------------
           CLICK OUTSIDE POPUP
        --------------------------------------------- */

        if (popup) {

            popup.addEventListener(
                "click",
                function(event) {

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


        /* ---------------------------------------------
           ESCAPE KEY
        --------------------------------------------- */

        document.addEventListener(
            "keydown",
            function(event) {

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

    }
);
