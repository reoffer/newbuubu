
    function safeDecode(value) {
        try {
            return decodeURIComponent(decodeURIComponent(value));
        } catch (e) {
            try {
                return decodeURIComponent(value);
            } catch {
                return value;
            }
        }
    }

    function getURLParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        const rawValue = urlParams.get(name);
        return rawValue ? safeDecode(rawValue) : null;
    }

    // Snapchat ScCid
    const scCid = getURLParameter('ScCid');
    if (scCid) {
        localStorage.setItem('sc_cid', scCid);
        console.log('Saved ScCid:', scCid);
    }

    // Facebook fbclid
    const fbclid = getURLParameter('fbclid');
    if (fbclid) {
        localStorage.setItem('fbclid', fbclid);
        console.log('Saved fbclid:', fbclid);
    }

    // Google Ads gclid
    const gclid = getURLParameter('gclid');
    if (gclid) {
        localStorage.setItem('gclid', gclid);
        console.log('Saved gclid:', gclid);
    }

    // utm_term
    const utmTerm = getURLParameter('utm_term');
    if (utmTerm) {
        localStorage.setItem('utm_term', utmTerm);
    }
