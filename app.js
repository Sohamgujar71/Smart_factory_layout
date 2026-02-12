const data = {
  areas: [
    { areaId: 'A-FL', areaName: 'Floor Left', x: 40, y: 60, width: 190, height: 110, color: '#cfe0f8', flowType: 'S' },
    { areaId: 'A-RW', areaName: 'Real Wall', x: 270, y: 60, width: 190, height: 110, color: '#cfe0f8', flowType: 'S' },
    { areaId: 'A-FW', areaName: 'Front Wall', x: 500, y: 60, width: 190, height: 110, color: '#cfe0f8', flowType: 'S' },
    { areaId: 'A-SPL', areaName: 'Side Panel Left', x: 730, y: 60, width: 230, height: 110, color: '#f8e4c8', flowType: 'U' },
    { areaId: 'A-DL', areaName: 'Door Left', x: 995, y: 60, width: 190, height: 110, color: '#d8ecd4', flowType: 'U' },
    { areaId: 'A-FM', areaName: 'Floor Middle', x: 40, y: 240, width: 190, height: 110, color: '#cfe0f8', flowType: 'S' },
    { areaId: 'A-MF', areaName: 'Main Framing', x: 270, y: 210, width: 915, height: 170, color: '#f5e2ca', flowType: 'Straight' },
    { areaId: 'A-FIN', areaName: 'FinishLine', x: 1255, y: 210, width: 220, height: 170, color: '#d8ecd4', flowType: 'Straight' },
    { areaId: 'A-FR', areaName: 'Floor Right', x: 40, y: 430, width: 190, height: 110, color: '#cfe0f8', flowType: 'S' },
    { areaId: 'A-ROOF', areaName: 'Roof', x: 270, y: 430, width: 420, height: 110, color: '#cfe0f8', flowType: 'U' },
    { areaId: 'A-SPR', areaName: 'Side Panel Right', x: 730, y: 430, width: 230, height: 110, color: '#f8e4c8', flowType: 'U' },
    { areaId: 'A-DR', areaName: 'Door Right', x: 995, y: 430, width: 190, height: 110, color: '#d8ecd4', flowType: 'U' }
  ],
  lines: [
    { lineId: 'L-1', fromAreaId: 'A-FL', toAreaId: 'A-FM' },
    { lineId: 'L-2', fromAreaId: 'A-FM', toAreaId: 'A-MF' },
    { lineId: 'L-3', fromAreaId: 'A-MF', toAreaId: 'A-FIN' },
    { lineId: 'L-4', fromAreaId: 'A-FR', toAreaId: 'A-FM' }
  ],
  workCenters: [
    { id: 'M-101', machineName: 'FL-W1', workCenterId: 'WC-FL-001', areaId: 'A-FL', status: 'Running', oee: 91, mtbf: 124, mttr: 17, cycleTime: '45s', maintenanceDue: '2026-03-14', lastUpdated: '2s ago' },
    { id: 'M-102', machineName: 'FL-W2', workCenterId: 'WC-FL-002', areaId: 'A-FL', status: 'Running', oee: 88, mtbf: 109, mttr: 14, cycleTime: '47s', maintenanceDue: '2026-03-21', lastUpdated: '3s ago' },
    { id: 'M-103', machineName: 'FM-W1', workCenterId: 'WC-FM-001', areaId: 'A-FM', status: 'Attention', oee: 80, mtbf: 86, mttr: 24, cycleTime: '51s', maintenanceDue: '2026-02-25', lastUpdated: '3s ago' },
    { id: 'M-104', machineName: 'FM-W2', workCenterId: 'WC-FM-002', areaId: 'A-FM', status: 'Running', oee: 89, mtbf: 133, mttr: 12, cycleTime: '45s', maintenanceDue: '2026-03-28', lastUpdated: '2s ago' },
    { id: 'M-105', machineName: 'FM-W3', workCenterId: 'WC-FM-003', areaId: 'A-FM', status: 'Down', oee: 63, mtbf: 45, mttr: 38, cycleTime: '-', maintenanceDue: '2026-02-18', lastUpdated: '1s ago' },
    { id: 'M-201', machineName: 'MF-Robot-1', workCenterId: 'WC-MF-001', areaId: 'A-MF', status: 'Running', oee: 95, mtbf: 201, mttr: 9, cycleTime: '39s', maintenanceDue: '2026-03-30', lastUpdated: '2s ago' },
    { id: 'M-202', machineName: 'MF-Robot-2', workCenterId: 'WC-MF-002', areaId: 'A-MF', status: 'Running', oee: 92, mtbf: 189, mttr: 11, cycleTime: '39s', maintenanceDue: '2026-03-28', lastUpdated: '2s ago' },
    { id: 'M-203', machineName: 'MF-Robot-3', workCenterId: 'WC-MF-003', areaId: 'A-MF', status: 'Attention', oee: 78, mtbf: 88, mttr: 25, cycleTime: '44s', maintenanceDue: '2026-02-21', lastUpdated: '3s ago' },
    { id: 'M-301', machineName: 'FIN-Inspect', workCenterId: 'WC-FIN-001', areaId: 'A-FIN', status: 'Running', oee: 90, mtbf: 149, mttr: 13, cycleTime: '52s', maintenanceDue: '2026-03-22', lastUpdated: '4s ago' }
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
const selectedAreaTitle = document.getElementById('selectedAreaTitle');
const selectedAreaMeta = document.getElementById('selectedAreaMeta');
const machinesGrid = document.getElementById('machinesGrid');
const flowTypeLabel = document.getElementById('flowType');
const flowSvg = document.getElementById('flowSvg');
let stagedVersion = '';
let selectedAreaId = 'A-FM';

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

  document.getElementById('totalCount').textContent = String(summary.total);
  document.getElementById('runningCount').textContent = String(summary.Running);
  document.getElementById('attentionCount').textContent = String(summary.Attention);
  document.getElementById('downCount').textContent = String(summary.Down);
}

function renderMachineDetail(wc) {
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

function drawFlowShape(type, nodes) {
  if (!nodes.length) {
    flowSvg.innerHTML = '';
    return;
  }

  const spacing = 760 / Math.max(nodes.length, 1);
  const points = nodes.map((_, index) => {
    const x = 30 + spacing * index;
    if (type === 'U') {
      return { x, y: index < Math.ceil(nodes.length / 2) ? 45 : 110 };
    }
    if (type === 'S') {
      return { x, y: index % 2 === 0 ? 45 : 105 };
    }
    return { x, y: 75 };
  });

  const circles = points.map((pt, i) => `<circle cx="${pt.x}" cy="${pt.y}" r="9" fill="#2563eb"></circle><text x="${pt.x}" y="${pt.y - 14}" text-anchor="middle" font-size="11">${nodes[i].machineName}</text>`).join('');
  const path = points.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`).join(' ');

  flowSvg.innerHTML = `
    <path d="${path}" fill="none" stroke="#1f2937" stroke-width="2.5"></path>
    ${circles}
    <text x="12" y="140" font-size="12" fill="#6b7280">Sequence view based on ${type} line logic</text>
  `;
}

function renderAreaDetails(areaId) {
  selectedAreaId = areaId;
  const area = data.areas.find((a) => a.areaId === areaId);
  const machines = data.workCenters.filter((wc) => wc.areaId === areaId);

  selectedAreaTitle.textContent = `${area.areaName} (${area.areaId})`;
  selectedAreaMeta.textContent = `${machines.length} machine(s) in this area. Click any machine below for details.`;
  flowTypeLabel.textContent = area.flowType;

  drawFlowShape(area.flowType, machines);

  machinesGrid.innerHTML = machines.map((machine) => `
    <article class="machine-card" data-machine-id="${machine.id}">
      <strong>${machine.machineName}</strong>
      <small>${machine.workCenterId}</small>
      <span class="badge ${machine.status.toLowerCase()}">${machine.status}</span>
    </article>
  `).join('');

  document.querySelectorAll('.area-card').forEach((areaNode) => {
    areaNode.classList.toggle('active', areaNode.dataset.areaId === areaId);
  });

  if (machines.length) {
    renderMachineDetail(machines[0]);
  } else {
    detailPanel.innerHTML = '<h3>Machine Detail</h3><p class="helper">No machines configured for this area.</p>';
  }

  document.querySelectorAll('.machine-card').forEach((card) => {
    card.addEventListener('click', () => {
      const machine = machines.find((m) => m.id === card.dataset.machineId);
      if (machine) renderMachineDetail(machine);
    });
  });
}

function renderLayout() {
  document.getElementById('lineLayer').innerHTML = data.lines.map((line) => {
    const from = getAreaCenter(line.fromAreaId);
    const to = getAreaCenter(line.toAreaId);
    return `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" stroke="#222" stroke-width="2.2" marker-end="url(#arrow)"></line>`;
  }).join('');

  document.getElementById('areaLayer').innerHTML = data.areas.map((area) => {
    const count = data.workCenters.filter((wc) => wc.areaId === area.areaId).length;
    return `<article class="area-card ${area.areaId === 'A-MF' ? 'main-area' : ''}" data-area-id="${area.areaId}"
      style="left:${area.x}px;top:${area.y}px;width:${area.width}px;height:${area.height}px;background:${area.color}">
      <h3>${area.areaName}</h3>
      <p>${area.areaId} • ${count} machine(s)</p>
    </article>`;
  }).join('');

  document.querySelectorAll('.area-card').forEach((node) => {
    node.addEventListener('click', () => renderAreaDetails(node.dataset.areaId));
  });

  renderAreaDetails(selectedAreaId);
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
  history.unshift({
    version: stagedVersion,
    activatedAt: new Date().toLocaleString(),
    activatedBy: 'admin@plant.local',
    checksum: Math.random().toString(16).slice(2, 10)
  });
  renderHistory();
  uploadMessage.textContent = `${stagedVersion} activated successfully.`;
  activateBtn.disabled = true;
});

renderLayout();
renderSummary();
renderHistory();
roleChanged();
