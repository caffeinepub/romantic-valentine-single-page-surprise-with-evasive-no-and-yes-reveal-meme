# Specification

## Summary
**Goal:** Replace the current post-“Yes” reveal image with the user-uploaded image while keeping the reveal message text unchanged.

**Planned changes:**
- Add the uploaded image (`WhatsApp Image 2026-02-07 at 8.14.44 PM.jpeg`) as a static frontend asset.
- Update the post-“Yes” reveal view to load and display the uploaded image instead of `/assets/generated/valentine-meme.dim_1200x800.png`.
- Preserve the existing reveal message text exactly and keep the current responsive, rounded, shadowed image styling.

**User-visible outcome:** After clicking the “Yes! 💕” button, users see the uploaded image on the reveal screen with the same message text and styling as before.
