// ============================================================
//  config.js — Firebase & Admin Configuration
//  Place this file next to index.html and load it before
//  the main application script.
// ============================================================

window.APP_CONFIG = {

  // ----------------------------------------------------------
  // Firebase configuration
  // Replace the placeholder values with your own Firebase
  // project settings (Project settings → General → Your apps).
  // These values are public by design, but you MUST protect
  // your data with Firestore Security Rules, Storage Rules,
  // App Check, and server‑side admin authorization.
  // ----------------------------------------------------------
  firebase: {
    apiKey:            "AIzaSyCHCFODNxuWq2rbHAHBhkm6gIBT2fEDvdg",
    authDomain:        "afghan-bazaar-aca1c.firebaseapp.com",
    projectId:         "afghan-bazaar-aca1c",
    storageBucket:     "afghan-bazaar-aca1c.firebasestorage.app",
    messagingSenderId: "642292480110",
    appId:             "1:642292480110:web:1f6a7e801ebcfa2ed6ce7f"
    // measurementId:  "G-XXXXXXXXXX"   // optional
  },

  // ----------------------------------------------------------
  // Initial administrator phone number
  // The client uses this only to display the admin UI.
  // REAL admin privileges MUST be enforced by Firebase
  // Security Rules and/or Cloud Functions (custom claims).
  // ----------------------------------------------------------
  adminPhone: "+93781780963",

  // ----------------------------------------------------------
  // Platform settings (can be changed without touching code)
  // ----------------------------------------------------------
  settings: {
    sellerMonthlyPrice: 1000,      // AFN per month
    sellerFreeDays: 30,            // free trial days
    currency: "AFN",
    defaultLanguage: "fa",         // "fa" (Dari) or "en"
    supportPhone: "781780963",  // shown in help texts
    platformName: {
      fa: "بازار افغان",
      en: "Afghan Bazaar"
    }
  },

  // ----------------------------------------------------------
  // Demo mode (optional)
  // If firebase.apiKey is left as placeholder, the app runs
  // automatically in demo mode with sample data.
  // Set demoMode to "off" to force Firebase even with
  // placeholder keys (not recommended).
  // ----------------------------------------------------------
  demoMode: "on"

};
