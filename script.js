/* =====================================================
   RUSSIEN @ 18
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
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
