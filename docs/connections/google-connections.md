# Google Connections

Flowi includes a reusable Google OAuth connection system.

## Verified component families

- Google Docs
- Google Drive
- Google Sheets
- Google Slides

## Verified behavior

The audited implementation includes:

- OAuth authorization;
- connection listing;
- scope validation;
- encrypted access/refresh token storage;
- automatic access-token refresh;
- reauthorization support;
- connection deactivation.

## Gmail note

Do not assume Gmail uses the same shared Google Connection mechanism. The audited Gmail component follows a separate credential path.
