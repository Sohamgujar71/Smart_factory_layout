# Smart Factory Layout

A complete frontend project for a **Dynamic Factory Layout Tool** with a polished visual dashboard inspired by your framing flow.

## What is implemented

- Factory-map canvas with areas (Floor Left, Main Framing, FinishLine, etc.)
- Directional process flow arrows between areas
- Clickable machine/work-center chips with live-style status colors
- Right-side details panel (status, OEE, MTBF, MTTR, cycle time, maintenance due)
- Role selector (`Viewer`, `Admin`, `Developer`)
- Admin-only CSV upload staging
- Activation flow with version history updates
- Live summary counters (Total / Running / Attention / Down)

## Files

- `index.html` – app layout and dashboard structure
- `styles.css` – complete responsive styling
- `app.js` – rendering logic, interactions, CSV handling, role/activation behavior

## Run locally

No build tool is required.

```bash
python -m http.server 4173
```

Open: `http://localhost:4173`

## CSV expectation

The app accepts CSV uploads for staging (Admin role). At minimum, include headers and one data row.

Example headers:

```csv
AreaId,MachineId,MachineName,WorkCenterId,X,Y,Status,OEE,MTBF,MTTR,CycleTime,MaintenanceDue
```

## Notes

- This implementation is frontend-focused and intentionally uses in-browser mock data for layout/runtime visualization.
- It provides a strong UI/UX foundation for future backend integration (database snapshots, validation engine, and real-time data APIs).
