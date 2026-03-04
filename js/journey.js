const R            = 210;   
const DOT_R        = 18;
const LABEL_OFFSET = 48;

const svgGroup    = document.getElementById('stageGroup');
const diagramWrap = document.getElementById('diagramWrap');
const infoPanel   = document.getElementById('infoPanel');
const infoInner   = document.getElementById('infoInner');
const rocketEl    = document.getElementById('rocket');

lucide.createIcons({ nodes: [rocketEl] });

let activeIdx   = null;
let rocketAngle = null;


function angleFor(idx) {
  return -Math.PI / 2 + idx * (2 * Math.PI / 12);
}
function ptFromAngle(ang, radius) {
  return { x: radius * Math.cos(ang), y: radius * Math.sin(ang) };
}
function labelAnchor(ang) {
  const cos = Math.cos(ang);
  if (cos > 0.2)  return 'start';
  if (cos < -0.2) return 'end';
  return 'middle';
}

stages.forEach((stage, i) => {
  const ang     = angleFor(i);
  const pt      = ptFromAngle(ang, R);
  const labelPt = ptFromAngle(ang, R + LABEL_OFFSET);
  const anchor  = labelAnchor(ang);

  const words = stage.title.split(' ');
  let lines;
  if (words.length <= 2) {
    lines = [stage.title];
  } else if (words.length === 3) {
    lines = [words[0] + ' ' + words[1], words[2]];
  } else {
    const mid = Math.ceil(words.length / 2);
    lines = [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
  }

  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('class', 'stage-point');
  g.dataset.idx = i;

  // Invisible hit area
  const hit = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  hit.setAttribute('cx', pt.x);
  hit.setAttribute('cy', pt.y);
  hit.setAttribute('r', DOT_R + 10);
  hit.setAttribute('fill', 'transparent');
  g.appendChild(hit);

  // Visible dot
  const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('class', 'dot');
  dot.setAttribute('cx', pt.x);
  dot.setAttribute('cy', pt.y);
  dot.setAttribute('r', DOT_R);
  g.appendChild(dot);

  // Number
  const num = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  num.setAttribute('class', 'num');
  num.setAttribute('x', pt.x);
  num.setAttribute('y', pt.y);
  num.textContent = stage.num;
  g.appendChild(num);

  // Label
  const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  txt.setAttribute('class', 'label');
  txt.setAttribute('text-anchor', anchor);
  txt.setAttribute('dominant-baseline', 'central');

  const lineH   = 22;
  const totalH  = (lines.length - 1) * lineH;
  lines.forEach((line, li) => {
    const ts = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    ts.setAttribute('x', labelPt.x);
    ts.setAttribute('y', labelPt.y - totalH / 2 + li * lineH);
    ts.textContent = line;
    txt.appendChild(ts);
  });
  g.appendChild(txt);

  g.addEventListener('click', () => handleStageClick(i));
  svgGroup.appendChild(g);
});


function renderPanel(stage) {
  infoInner.innerHTML = `
    <div class="panel-content-wrap" style="display:flex;flex-direction:column;gap:18px;">
      <div class="panel-stage-num">STAGE ${stage.num} OF 12</div>
      <div class="panel-icon"><i data-lucide="${stage.icon}"></i></div>
      <div class="panel-title">${stage.title}</div>
      <div><span class="panel-emotion">${stage.emotion}</span></div>
      <div class="panel-divider"></div>
      <div>
        <div class="panel-section-title">The Story</div>
        <p class="panel-description">${stage.description}</p>
      </div>
      <div>
        <div class="panel-section-title">Characters</div>
        <div class="panel-chars">
          ${stage.characters.map(c => `<span class="char-tag">${c}</span>`).join('')}
        </div>
      </div>
      <div>
        <div class="panel-section-title">Tone</div>
        <p class="panel-tone">${stage.tone}</p>
      </div>
    </div>`;
}



function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function svgToCss(x, y) {
  const rect   = diagramWrap.getBoundingClientRect();
  const scaleX = rect.width  / 880;
  const scaleY = rect.height / 680;
  return { left: (x + 440) * scaleX, top: (y + 340) * scaleY };
}

function animateRocket(fromAng, toAng, onComplete) {
  let delta = toAng - fromAng;
  while (delta >  Math.PI) delta -= 2 * Math.PI;
  while (delta < -Math.PI) delta += 2 * Math.PI;

  const clockwise = delta > 0;
  const duration = Math.abs(delta) / (Math.PI * 2) * 4000 + 800;
  const start     = performance.now();

  rocketEl.style.display = 'block';

  function frame(now) {
    const raw = Math.min((now - start) / duration, 1);
    const ang = fromAng + delta * easeInOut(raw);
    const pt  = ptFromAngle(ang, R);
    const css = svgToCss(pt.x, pt.y);
    const tangentAng = ang + (clockwise ? Math.PI / 2 : -Math.PI / 2);

    rocketEl.style.left      = css.left + 'px';
    rocketEl.style.top       = css.top  + 'px';
    rocketEl.style.transform = `translate(-50%,-50%) rotate(${tangentAng * 180 / Math.PI}deg)`;

    if (raw < 1) {
      requestAnimationFrame(frame);
    } else {
      rocketEl.style.display = 'none';
      onComplete();
    }
  }
  requestAnimationFrame(frame);
}


function handleStageClick(idx) {
  if (idx === activeIdx) return;

  const targetAngle = angleFor(idx);

  document.querySelectorAll('.stage-point').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });

  if (rocketAngle === null) {
    rocketAngle = targetAngle;
    activeIdx   = idx;
    infoPanel.classList.add('open');
    renderPanel(stages[idx]);
    lucide.createIcons();
  } else {
    const fromAng = rocketAngle;
    rocketAngle   = targetAngle;
    activeIdx     = idx;

    infoPanel.classList.add('open');
    infoInner.style.opacity = '0';

    animateRocket(fromAng, targetAngle, () => {
      renderPanel(stages[idx]);
      lucide.createIcons();
      infoInner.style.transition = 'opacity 0.4s ease';
      infoInner.style.opacity    = '1';
      setTimeout(() => { infoInner.style.transition = ''; }, 500);
    });
  }
}


document.getElementById('panelClose').addEventListener('click', () => {
  infoPanel.classList.remove('open');
  document.querySelectorAll('.stage-point').forEach(el => el.classList.remove('active'));
  activeIdx = null;
});
