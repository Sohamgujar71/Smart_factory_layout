const data = {
  areas: [
    { areaId: 'A-FL', areaName: 'Floor Left', x: 40, y: 60, width: 190, height: 110, color: '#cfe0f8' },
    { areaId: 'A-RW', areaName: 'Real Wall', x: 270, y: 60, width: 190, height: 110, color: '#cfe0f8' },
    { areaId: 'A-FW', areaName: 'Front Wall', x: 500, y: 60, width: 190, height: 110, color: '#cfe0f8' },
    { areaId: 'A-SPL', areaName: 'Side Panel Left', x: 730, y: 60, width: 230, height: 110, color: '#f8e4c8' },
    { areaId: 'A-DL', areaName: 'Door Left', x: 995, y: 60, width: 190, height: 110, color: '#d8ecd4' },
    { areaId: 'A-FM', areaName: 'Floor Middle', x: 40, y: 240, width: 190, height: 110, color: '#cfe0f8' },
    { areaId: 'A-MF', areaName: 'Main Framing', x: 270, y: 210, width: 915, height: 170, color: '#f5e2ca' },
    { areaId: 'A-FIN', areaName: 'FinishLine', x: 1255, y: 210, width: 220, height: 170, color: '#d8ecd4' },
    { areaId: 'A-FR', areaName: 'Floor Right', x: 40, y: 430, width: 190, height: 110, color: '#cfe0f8' },
    { areaId: 'A-ROOF', areaName: 'Roof', x: 270, y: 430, width: 420, height: 110, color: '#cfe0f8' },
    { areaId: 'A-SPR', areaName: 'Side Panel Right', x: 730, y: 430, width: 230, height: 110, color: '#f8e4c8' },
    { areaId: 'A-DR', areaName: 'Door Right', x: 995, y: 430, width: 190, height: 110, color: '#d8ecd4' }
  ],
  lines: [
    { lineId: 'L-1', fromAreaId: 'A-FL', toAreaId: 'A-FM' },
    { lineId: 'L-2', fromAreaId: 'A-FM', toAreaId: 'A-MF' },
    { lineId: 'L-3', fromAreaId: 'A-MF', toAreaId: 'A-FIN' },
    { lineId: 'L-4', fromAreaId: 'A-FR', toAreaId: 'A-FM' }
  ],
  workCenters: [
    { id: 'M-101', machineName: 'Station 1', workCenterId: 'WC-FL-001', x: 65, y: 112, status: 'Running', oee: 91, mtbf: 124, mttr: 17, cycleTime: '45s', maintenanceDue: '2026-03-14', lastUpdated: '2s ago' },
    { id: 'M-102', machineName: 'Station 2', workCenterId: 'WC-RW-001', x: 295, y: 112, status: 'Running', oee: 88, mtbf: 98, mttr: 21, cycleTime: '42s', maintenanceDue: '2026-03-18', lastUpdated: '4s ago' },
    { id: 'M-103', machineName: 'Station 3', workCenterId: 'WC-FW-001', x: 525, y: 112, status: 'Attention', oee: 81, mtbf: 86, mttr: 24, cycleTime: '47s', maintenanceDue: '2026-02-25', lastUpdated: '3s ago' },
    { id: 'M-104', machineName: 'Station 4', workCenterId: 'WC-SPL-001', x: 755, y: 112, status: 'Running', oee: 90, mtbf: 116, mttr: 14, cycleTime: '43s', maintenanceDue: '2026-04-01', lastUpdated: '2s ago' },
    { id: 'M-105', machineName: 'Station 5', workCenterId: 'WC-DL-001', x: 1020, y: 112, status: 'Down', oee: 63, mtbf: 45, mttr: 38, cycleTime: '—', maintenanceDue: '2026-02-18', lastUpdated: '1s ago' },
    { id: 'M-204', machineName: 'Finish Inspection', workCenterId: 'WC-FIN-001', x: 1295, y: 270, status: 'Running', oee: 89, mtbf: 140, mttr: 15, cycleTime: '52s', maintenanceDue: '2026-03-22', lastUpdated: '4s ago' }
  ]
};

const history = [
  { version: 'v1.0.3', activatedAt: '2026-02-11 09:30', activatedBy: 'admin@plant.local', checksum: '7f2a9ec1' },
  { version: 'v1.0.2', activatedAt: '2026-02-09 14:20', activatedBy: 'admin@plant.local', checksum: '35d44b90' }
];

const roleSelect = document.getElementById('roleSelect');
const roleHint = document.getElementById('roleHint');
const csvInput = document.getElementById('csvInput');
const activateBtn = document.getElementById('activateBtn');
const uploadMessage = document.getElementById('uploadMessage');
const detailPanel = document.getElementById('detailPanel');
let stagedVersion = '';

const getAreaCenter = (areaId) => {
  const area = data.areas.find((a) => a.areaId === areaId);
  return area ? { x: area.x + area.width / 2, y: area.y + area.height / 2 } : { x: 0, y: 0 };
};

function renderHistory() {
  document.getElementById('historyList').innerHTML = history
    .map((h) => `<li><strong>${h.version}</strong><span>${h.activatedAt}</span><small>${h.activatedBy} · ${h.checksum}</small></li>`)
    .join('');
}

function renderSummary() {
  const summary = data.workCenters.reduce((acc, wc) => {
    acc.total += 1;
    acc[wc.status] += 1;
    return acc;
  }, { total: 0, Running: 0, Attention: 0, Down: 0 });

  document.getElementById('totalCount').textContent = summary.total;
  document.getElementById('runningCount').textContent = summary.Running;
  document.getElementById('attentionCount').textContent = summary.Attention;
  document.getElementById('downCount').textContent = summary.Down;
}

function renderDetail(wc) {
  detailPanel.innerHTML = `<h3>${wc.machineName}</h3>
    <p class="detail-id">${wc.workCenterId}</p>
    <dl>
      <div><dt>Status</dt><dd>${wc.status}</dd></div>
      <div><dt>OEE</dt><dd>${wc.oee}%</dd></div>
      <div><dt>Cycle Time</dt><dd>${wc.cycleTime}</dd></div>
      <div><dt>MTBF</dt><dd>${wc.mtbf}h</dd></div>
      <div><dt>MTTR</dt><dd>${wc.mttr}m</dd></div>
      <div><dt>Maintenance Due</dt><dd>${wc.maintenanceDue}</dd></div>
      <div><dt>Updated</dt><dd>${wc.lastUpdated}</dd></div>
    </dl>`;
}

function renderLayout() {
  document.getElementById('lineLayer').innerHTML = data.lines.map((line) => {
    const from = getAreaCenter(line.fromAreaId);
    const to = getAreaCenter(line.toAreaId);
    return `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" stroke="#222" stroke-width="2.2" marker-end="url(#arrow)"></line>`;
  }).join('');

  document.getElementById('areaLayer').innerHTML = data.areas.map((area) =>
    `<article class="area-card ${area.areaId === 'A-MF' ? 'main-area' : ''}" style="left:${area.x}px;top:${area.y}px;width:${area.width}px;height:${area.height}px;background:${area.color}">
      <h3>${area.areaName}</h3><p>${area.areaId}</p></article>`).join('');

  const wcLayer = document.getElementById('workCenterLayer');
  wcLayer.innerHTML = '';
  data.workCenters.forEach((wc) => {
    const button = document.createElement('button');
    button.className = `workcenter-chip status-${wc.status.toLowerCase()}`;
    button.style.left = `${wc.x}px`;
    button.style.top = `${wc.y}px`;
    button.innerHTML = `<strong>${wc.machineName}</strong><span>${wc.status}</span>`;
    button.addEventListener('click', () => renderDetail(wc));
    wcLayer.appendChild(button);
  });
}

function roleChanged() {
  const role = roleSelect.value;
  if (role === 'Admin') {
    roleHint.textContent = 'Full layout management access.';
    csvInput.disabled = false;
  } else if (role === 'Developer') {
    roleHint.textContent = 'Validation and configuration visibility mode.';
    csvInput.disabled = true;
  } else {
    roleHint.textContent = 'Read-only monitoring mode.';
    csvInput.disabled = true;
  }
}

roleSelect.addEventListener('change', roleChanged);

csvInput.addEventListener('change', () => {
  const file = csvInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const text = String(reader.result || '');
    const rows = text.trim().split('\n');
    if (rows.length < 2) {
      uploadMessage.textContent = 'CSV parsing failed: no data rows.';
      return;
    }

    stagedVersion = `v1.1.${Math.floor(Math.random() * 90) + 10}`;
    activateBtn.disabled = false;
    uploadMessage.textContent = `Staged ${rows.length - 1} rows as ${stagedVersion}.`;
  };
  reader.readAsText(file);
});

activateBtn.addEventListener('click', () => {
  if (!stagedVersion) return;
  history.unshift({ version: stagedVersion, activatedAt: new Date().toLocaleString(), activatedBy: 'admin@plant.local', checksum: Math.random().toString(16).slice(2, 10) });
  renderHistory();
  uploadMessage.textContent = `${stagedVersion} activated successfully.`;
  activateBtn.disabled = true;
});

renderLayout();
renderSummary();
renderHistory();
renderDetail(data.workCenters[0]);
roleChanged();
