---
title: google_drive Components
description: Audited Flowi Workflow built-in components in the google_drive category.
---

# google_drive components

Machine-readable reference: [`../../ai/components/google_drive.json`](../../ai/components/google_drive.json)

| Component ID | Display name | Status | Description |
|---|---|---|---|
| `google_drive.GoogleDriveCopyFile` | Copy File | AVAILABLE | Creates a copy of a Google Drive file. |
| `google_drive.GoogleDriveCreateFolder` | Create Folder | AVAILABLE | Creates a folder in Google Drive using a connected Google account. |
| `google_drive.GoogleDriveDeleteFile` | Delete Permanently | AVAILABLE | Permanently deletes a Google Drive file or folder. |
| `google_drive.GoogleDriveDownloadFile` | Download File | AVAILABLE | Downloads a regular file from Google Drive and returns a Flowi-compatible server file. |
| `google_drive.GoogleDriveExportFile` | Export File | AVAILABLE | Exports Google Docs, Sheets or Slides into standard file formats. |
| `google_drive.GoogleDriveGetFile` | Get File | AVAILABLE | Gets metadata for a Google Drive file or folder using a connected Google account. |
| `google_drive.GoogleDriveListFiles` | List Files | AVAILABLE | Lists files from a connected Google Drive account using Flowi-managed OAuth credentials. |
| `google_drive.GoogleDriveMoveFile` | Move File | AVAILABLE | Moves a Google Drive file or folder to another folder. |
| `google_drive.GoogleDriveRenameFile` | Rename File | AVAILABLE | Renames a Google Drive file or folder. |
| `google_drive.GoogleDriveRestoreFile` | Restore File | AVAILABLE | Restores a Google Drive file or folder from trash. |
| `google_drive.GoogleDriveTrashFile` | Trash File | AVAILABLE | Moves a Google Drive file or folder to trash. |
| `google_drive.GoogleDriveUploadFile` | Upload File | AVAILABLE | Uploads a Flowi file to Google Drive using a connected Google account. |
| `google_drive.GoogleDriveWorkspaceApiRequest` | Workspace API Request | AVAILABLE | Runs advanced Google Drive, Docs, Sheets, or Slides API methods using the connected user's Google OAuth account. |
| `google_drive.GoogleDriveComponent` | Google Drive Loader | LEGACY | Loads documents from Google Drive using provided credentials. |
| `google_drive.GoogleDriveSearchComponent` | Google Drive Search | LEGACY | Searches Google Drive files using provided credentials and query parameters. |

For new workflows, prefer `AVAILABLE` components. Do not create new flows with `LEGACY` components unless maintaining older workflows.
