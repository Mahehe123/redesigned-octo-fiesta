// ── Mitsumori Quotation CRM — Firebase Configuration ─────────────────────────
// Project: qmaker-e2033
// Replace placeholder values with your real credentials from:
// Firebase Console → Project Settings → Your apps → SDK setup and configuration

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDIkJgs8AH04gESfwPAKf1p3ZfUcyCh28M",
  authDomain:        "qmaker-e2033.firebaseapp.com",
  projectId:         "qmaker-e2033",
  storageBucket:     "qmaker-e2033.appspot.com",
  messagingSenderId: "21900320955",
  appId:             "1:21900320955:web:178fe6e0d6a496a2af899e"
};

// ── Firestore collection names ────────────────────────────────────────────────
const COL = {
  QUOTATIONS : 'qt_quotations',
  BACKUPS    : 'qt_backups',
  META       : 'qt_meta',
  USERS      : 'qt_users'
};

// Prefixed with "qt_" so this tool's collections never collide with
// any other Mitsumori data in the same Firebase project.

const META_DOC_ID   = 'counter';
const BACKUP_RETAIN = 7; // rolling days