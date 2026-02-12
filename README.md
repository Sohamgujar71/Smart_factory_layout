# Smart Factory Layout

Clean frontend prototype for a **Dynamic Factory Layout Tool**.

## Highlights

- Neat, low-clutter factory map with area blocks and directional flow arrows
- Click an area (example: **Floor Middle**) to open area-specific machine view
- Area drill-down includes machine cards and visual **S / U / Straight** flow sequence
- Click a machine card to view runtime details (Status, OEE, MTBF, MTTR, Cycle Time)
- Role-based behavior (Admin can upload/stage/activate)
- Version history and live KPI summary panel

## Files

- `index.html` – dashboard structure and area detail region
- `styles.css` – cleaned visual system and responsive layout
- `app.js` – rendering logic, area-click behavior, flow drawing, machine details

## Run

```bash
python -m http.server 4173
```

Open `http://localhost:4173`.

