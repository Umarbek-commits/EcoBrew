import { useState, useRef, useCallback } from "react";
import logo from '../assets/logo.png'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Playfair+Display:wght@700&display=swap');

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes spinBowl {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pulse {
    0%,100% { transform: scale(1); }
    50% { transform: scale(1.06); }
  }
  @keyframes bounce {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  @keyframes popIn {
    from { transform: scale(0.5); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  @keyframes confettiFall {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(220px) rotate(720deg); opacity: 0; }
  }
  @keyframes sunRay {
    0%,100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
    50% { transform: scale(1.15) rotate(15deg); opacity: 1; }
  }
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    25% { transform: translateX(-6px); }
    75% { transform: translateX(6px); }
  }

  .ebg-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .ebg-wrap { font-family: 'Nunito', sans-serif; background: #f7f3ec; border-radius: 20px; overflow: hidden; user-select: none; }
  .ebg-screen { padding: 28px 24px 32px; animation: fadeIn 0.4s ease; }
  .ebg-header { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
  .ebg-logo { width: 32px; height: 32px; background: #2d7a45; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; }
  .ebg-brand { font-family: 'Playfair Display', serif; font-size: 18px; color: #2d7a45; font-weight: 700; }
  .ebg-progress-wrap { background: #ddd7cc; border-radius: 8px; height: 6px; margin-bottom: 24px; overflow: hidden; }
  .ebg-progress-fill { height: 100%; background: linear-gradient(90deg, #2d7a45, #5bb870); border-radius: 8px; transition: width 0.5s ease; }
  .ebg-step-label { font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
  .ebg-step-title { font-family: 'Playfair Display', serif; font-size: 22px; color: #2c2c2a; margin-bottom: 8px; font-weight: 700; }
  .ebg-step-desc { font-size: 14px; color: #666; line-height: 1.6; margin-bottom: 22px; }

  .ebg-btn-primary { background: #2d7a45; color: white; border: none; border-radius: 14px; padding: 14px 32px; font-size: 16px; font-family: 'Nunito', sans-serif; font-weight: 700; cursor: pointer; transition: background 0.2s, transform 0.1s; display: inline-flex; align-items: center; gap: 8px; width: 100%; justify-content: center; }
  .ebg-btn-primary:hover { background: #235f36; }
  .ebg-btn-primary:active { transform: scale(0.97); }
  .ebg-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

  .ebg-intro-hero { text-align: center; padding: 12px 0 24px; }
  .ebg-intro-icon { width: 90px; height: 90px; background: #e8f5e9; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 46px; animation: pulse 2.5s infinite; }
  .ebg-intro-title { font-family: 'Playfair Display', serif; font-size: 26px; color: #2c2c2a; font-weight: 700; margin-bottom: 12px; line-height: 1.2; }
  .ebg-intro-sub { font-size: 15px; color: #666; line-height: 1.6; max-width: 320px; margin: 0 auto 28px; }

  .ebg-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
  .ebg-card { background: white; border-radius: 16px; padding: 18px 12px; text-align: center; cursor: pointer; border: 2px solid #e0d9cf; transition: all 0.2s; position: relative; overflow: hidden; }
  .ebg-card:hover { border-color: #2d7a45; transform: translateY(-2px); }
  .ebg-card.correct { border-color: #2d7a45; background: #f0faf3; pointer-events: none; }
  .ebg-card.wrong { border-color: #e24b4a; background: #fff5f5; animation: shake 0.3s ease; }
  .ebg-card-emoji { font-size: 36px; margin-bottom: 8px; }
  .ebg-card-name { font-size: 13px; font-weight: 700; color: #444; }
  .ebg-badge { position: absolute; top: 6px; right: 6px; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; animation: popIn 0.3s ease; }
  .ebg-badge-ok { background: #2d7a45; color: white; }
  .ebg-badge-no { background: #e24b4a; color: white; }
  .ebg-error { background: #fff0f0; border: 1px solid #f0b0b0; border-radius: 10px; padding: 10px 14px; font-size: 13px; color: #c0392b; margin-bottom: 12px; animation: popIn 0.3s ease; }

  .ebg-mix-center { text-align: center; margin: 16px 0 24px; }
  .ebg-ingr-row { display: flex; justify-content: center; gap: 32px; margin-bottom: 20px; }
  .ebg-ingr-chip { background: white; border-radius: 12px; padding: 12px 16px; font-size: 28px; border: 1.5px solid #e0d9cf; text-align: center; }
  .ebg-ingr-chip span { display: block; font-size: 11px; color: #888; margin-top: 4px; font-weight: 600; }
  .ebg-bowl { width: 120px; height: 90px; background: #d4c4a0; border-radius: 0 0 60px 60px; margin: 0 auto 16px; position: relative; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 12px; font-size: 28px; overflow: hidden; }
  .ebg-bowl::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 10px; background: #c4b490; border-radius: 10px 10px 0 0; }
  .ebg-bowl.mixing { animation: spinBowl 0.6s linear infinite; }
  .ebg-msg-green { background: #e8f5e9; border-radius: 12px; padding: 12px 16px; font-size: 14px; color: #2d7a45; font-weight: 700; animation: popIn 0.4s ease; }
  .ebg-msg-yellow { background: #fff8e1; border-radius: 12px; padding: 10px 14px; font-size: 14px; color: #b26a00; font-weight: 700; animation: popIn 0.4s ease; }

  .ebg-dry-scene { text-align: center; margin: 8px 0 20px; }
  .ebg-sun { font-size: 52px; animation: sunRay 2s ease-in-out infinite; margin-bottom: 4px; display: block; }
  .ebg-grounds { width: 110px; height: 40px; border-radius: 50%; margin: 0 auto 20px; transition: background 0.3s; }
  .ebg-dry-bar-wrap { background: #e0d9cf; border-radius: 12px; height: 14px; margin-bottom: 8px; overflow: hidden; }
  .ebg-dry-bar { height: 100%; background: linear-gradient(90deg, #f4a261, #e9c46a); border-radius: 12px; transition: width 0.05s linear; }
  .ebg-dry-pct { font-size: 13px; color: #888; text-align: right; margin-bottom: 16px; font-weight: 700; }
  .ebg-dry-hint { font-size: 13px; color: #999; margin-bottom: 12px; font-style: italic; }
  .ebg-dry-zone { width: 100%; height: 80px; border-radius: 12px; background: #f0ebe0; cursor: crosshair; border: 2px dashed #c4b490; display: flex; align-items: center; justify-content: center; font-size: 13px; color: #aaa; margin-bottom: 16px; position: relative; overflow: hidden; touch-action: none; }
  .ebg-dry-zone-fill { position: absolute; bottom: 0; left: 0; height: 100%; background: linear-gradient(180deg, #f9e4a0 0%, #e9c46a 100%); transition: width 0.1s; border-radius: 10px 0 0 10px; }
  .ebg-dry-zone-text { position: relative; z-index: 1; pointer-events: none; }

  .ebg-pkg-wrap { text-align: center; margin: 10px 0 24px; }
  .ebg-pkg-box { width: 140px; margin: 0 auto 16px; animation: bounce 2s ease-in-out infinite; }
  .ebg-pkg-top { background: #2d7a45; border-radius: 12px 12px 0 0; padding: 8px 14px 6px; color: white; font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; text-align: center; }
  .ebg-pkg-body { background: #4caf50; padding: 12px 14px; border-radius: 0 0 12px 12px; text-align: center; }
  .ebg-pkg-icon { font-size: 36px; margin-bottom: 4px; display: block; }
  .ebg-pkg-tag { background: #e8f5e9; color: #2d7a45; font-size: 10px; font-weight: 700; border-radius: 20px; padding: 3px 10px; letter-spacing: 0.06em; display: inline-block; margin-top: 6px; }

  .ebg-plants-stage { display: flex; gap: 16px; margin: 12px 0 20px; justify-content: center; }
  .ebg-plant-pot { flex: 1; max-width: 150px; text-align: center; }
  .ebg-pot-label { font-size: 12px; font-weight: 700; color: #888; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.06em; }
  .ebg-pot-label.eco { color: #2d7a45; }
  .ebg-pot-wrap { position: relative; height: 140px; display: flex; align-items: flex-end; justify-content: center; }
  .ebg-pot-base { width: 70px; height: 50px; background: #c4a882; border-radius: 4px 4px 10px 10px; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); }
  .ebg-pot-base.eco { background: #a5c8a0; }
  .ebg-pot-base::before { content: ''; position: absolute; top: 0; left: -4px; right: -4px; height: 8px; background: #b89060; border-radius: 4px 4px 0 0; }
  .ebg-stem { position: absolute; bottom: 48px; left: 50%; transform: translateX(-50%); width: 6px; border-radius: 4px; background: #4caf50; transition: height 0.1s linear; }
  .ebg-stem.eco { background: #2d7a45; }
  .ebg-leaves { position: absolute; bottom: 48px; left: 50%; transform: translateX(-50%); transition: all 0.1s linear; pointer-events: none; }

  .ebg-final { text-align: center; padding: 28px 24px 32px; background: #f7f3ec; animation: fadeIn 0.6s ease; }
  .ebg-confetti-wrap { position: relative; height: 60px; margin-bottom: 8px; overflow: hidden; }
  .ebg-confetti-dot { position: absolute; border-radius: 2px; }
  .ebg-final-icon { font-size: 72px; margin: 0 auto 16px; display: block; animation: bounce 1.5s ease-in-out infinite; }
  .ebg-final-title { font-family: 'Playfair Display', serif; font-size: 28px; color: #2d7a45; font-weight: 700; margin-bottom: 16px; }
  .ebg-final-desc { font-size: 15px; color: #555; line-height: 1.65; margin-bottom: 28px; max-width: 320px; margin-left: auto; margin-right: auto; }
  .ebg-pill { background: #e8f5e9; border-radius: 20px; padding: 4px 14px; color: #2d7a45; font-weight: 700; display: inline-block; margin: 0 3px; font-size: 14px; }
`;

const CONFETTI_COLORS = ['#2d7a45','#5bb870','#f4a261','#e9c46a','#e76f51','#264653'];

function Header() {
  return (
    <div className="w-12 h-12 mx-auto mb-8 rounded-full bg-eco-pale/40 backdrop-blur-sm flex items-center justify-center shadow-xl">
  <img
    src={logo}
    alt="EcoBrew"
    className="w12 h-12 object-contain animate-pulse"
  />
</div>
  );
}

function ProgressBar({ pct }) {
  return (
    <div className="ebg-progress-wrap">
      <div className="ebg-progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}

// ── SCREEN: INTRO ─────────────────────────────────────────────
function ScreenIntro({ onStart }) {
  return (
    <div className="ebg-screen">
      <Header />
      <div className="ebg-intro-hero">
        <div className="ebg-intro-icon">
           <img
             src={logo}
             alt="EcoBrew"
             className="w-24 h-24 object-contain"
           />
        </div>
        <div className="ebg-intro-title">Создай своё первое&nbsp;EcoBrew</div>
        <div className="ebg-intro-sub">
          Узнай за минуту, как кофейный жмых превращается в экологическое удобрение.
        </div>
        <button className="ebg-btn-primary" onClick={onStart}>🌱 Начать</button>
      </div>
    </div>
  );
}

// ── SCREEN: STEP 1 ────────────────────────────────────────────
const INGREDIENTS = [
  { id: 'coffee', emoji: '☕', name: 'Кофейный жмых', correct: true },
  { id: 'egg',    emoji: '🥚', name: 'Яичная скорлупа', correct: true },
  { id: 'plastic',emoji: '🥤', name: 'Пластик', correct: false },
  { id: 'trash',  emoji: '🗑️', name: 'Обычный мусор', correct: false },
];

function ScreenStep1({ onDone }) {
  const [states, setStates] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const correctCount = useRef(0);

  const pick = (ing) => {
    if (states[ing.id]) return;
    if (ing.correct) {
      setStates(s => ({ ...s, [ing.id]: 'correct' }));
      setErrorMsg('');
      correctCount.current += 1;
      if (correctCount.current >= 2) setTimeout(onDone, 600);
    } else {
      setStates(s => ({ ...s, [ing.id]: 'wrong' }));
      setErrorMsg('⚠️ Этот материал не подходит для EcoBrew.');
      setTimeout(() => setStates(s => ({ ...s, [ing.id]: undefined })), 1400);
    }
  };

  return (
    <div className="ebg-screen">
      <Header />
      <ProgressBar pct={20} />
      <div className="ebg-step-label">Шаг 1 из 5</div>
      <div className="ebg-step-title">Сбор сырья</div>
      <div className="ebg-step-desc">Выбери только подходящие ингредиенты для удобрения EcoBrew.</div>
      {errorMsg && <div className="ebg-error">{errorMsg}</div>}
      <div className="ebg-grid">
        {INGREDIENTS.map(ing => (
          <div
            key={ing.id}
            className={`ebg-card ${states[ing.id] || ''}`}
            onClick={() => pick(ing)}
          >
            <div className="ebg-card-emoji">{ing.emoji}</div>
            <div className="ebg-card-name">{ing.name}</div>
            {states[ing.id] === 'correct' && <div className="ebg-badge ebg-badge-ok">✓</div>}
            {states[ing.id] === 'wrong'   && <div className="ebg-badge ebg-badge-no">✕</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── SCREEN: STEP 2 ────────────────────────────────────────────
function ScreenStep2({ onDone }) {
  const [phase, setPhase] = useState('idle'); // idle | mixing | done

  const doMix = () => {
    if (phase !== 'idle') return;
    setPhase('mixing');
    setTimeout(() => {
      setPhase('done');
      setTimeout(onDone, 900);
    }, 1600);
  };

  return (
    <div className="ebg-screen">
      <Header />
      <ProgressBar pct={40} />
      <div className="ebg-step-label">Шаг 2 из 5</div>
      <div className="ebg-step-title">Смешивание</div>
      <div className="ebg-step-desc">Ингредиенты собраны. Смешай их вместе.</div>
      <div className="ebg-mix-center">
        <div className="ebg-ingr-row">
          <div className="ebg-ingr-chip">☕<span>Жмых</span></div>
          <div className="ebg-ingr-chip">🥚<span>Скорлупа</span></div>
        </div>
        <div className={`ebg-bowl ${phase === 'mixing' ? 'mixing' : ''}`}>
          {phase === 'done' ? '🌿' : '🥄'}
        </div>
        {phase === 'done' && <div className="ebg-msg-green" style={{ marginTop: 16 }}>✅ Сырьё подготовлено.</div>}
      </div>
      {phase === 'idle' && (
        <button className="ebg-btn-primary" onClick={doMix}>Смешать</button>
      )}
      {phase === 'mixing' && (
        <button className="ebg-btn-primary" disabled>Перемешиваем...</button>
      )}
    </div>
  );
}

// ── SCREEN: STEP 3 ────────────────────────────────────────────
function ScreenStep3({ onDone }) {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const lastX = useRef(-1);
  const active = useRef(true);

  const handleMove = useCallback((x) => {
    if (!active.current) return;
    if (lastX.current >= 0) {
      const dist = Math.abs(x - lastX.current);
      setPct(prev => {
        const next = Math.min(100, prev + dist * 0.4);
        if (next >= 100 && active.current) {
          active.current = false;
          setDone(true);
        }
        return next;
      });
    }
    lastX.current = x;
  }, []);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX - rect.left);
  };
  const onMouseLeave = () => { lastX.current = -1; };
  const onTouchMove = (e) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX - rect.left);
  };
  const onTouchStart = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    lastX.current = e.touches[0].clientX - rect.left;
  };

  const p = Math.round(pct);

  return (
    <div className="ebg-screen">
      <Header />
      <ProgressBar pct={60} />
      <div className="ebg-step-label">Шаг 3 из 5</div>
      <div className="ebg-step-title">Сушка</div>
      <div className="ebg-step-desc">Высушите сырьё под солнцем.</div>
      <div className="ebg-dry-scene">
        <span className="ebg-sun">☀️</span>
        <div className="ebg-grounds" style={{ background: p > 50 ? '#795548' : '#6d4c41', filter: p > 50 ? 'brightness(1.1)' : 'none' }} />
      </div>
      <div className="ebg-dry-bar-wrap">
        <div className="ebg-dry-bar" style={{ width: `${p}%` }} />
      </div>
      <div className="ebg-dry-pct">{p}%</div>
      <div className="ebg-dry-hint">Двигай мышкой или пальцем по полю ниже</div>
      <div
        className="ebg-dry-zone"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
      >
        <div className="ebg-dry-zone-fill" style={{ width: `${p}%` }} />
        <div className="ebg-dry-zone-text">{done ? 'Готово!' : '→ Веди здесь'}</div>
      </div>
      {done && <div className="ebg-msg-yellow" style={{ marginBottom: 12 }}>☀️ Сушка завершена.</div>}
      {done && (
        <button className="ebg-btn-primary" style={{ marginTop: 12 }} onClick={onDone}>Далее →</button>
      )}
    </div>
  );
}

// ── SCREEN: STEP 4 ────────────────────────────────────────────
function ScreenStep4({ onDone }) {
  return (
    <div className="ebg-screen">
      <Header />
      <ProgressBar pct={80} />
      <div className="ebg-step-label">Шаг 4 из 5</div>
      <div className="ebg-step-title">Удобрение готово</div>
      <div className="ebg-step-desc">Ваше экологическое удобрение EcoBrew упаковано и готово к использованию!</div>
      <div className="ebg-pkg-wrap">
        <div className="ebg-pkg-box">
          <div className="ebg-pkg-top">EcoBrew</div>
          <div className="ebg-pkg-body">
            <span className="ebg-pkg-icon">🌿</span>
            <div className="ebg-pkg-tag">ECO • ORGANIC</div>
          </div>
        </div>
        <div style={{ fontSize: 14, color: '#666', lineHeight: 1.6 }}>
          Ваше удобрение готово.<br />Испытайте его на растениях.
        </div>
      </div>
      <button className="ebg-btn-primary" onClick={onDone}>🌿 Испытать удобрение</button>
    </div>
  );
}

// ── SCREEN: STEP 5 ────────────────────────────────────────────
function ScreenStep5({ onDone }) {
  const [leftH, setLeftH] = useState(0);
  const [rightH, setRightH] = useState(0);
  const [started, setStarted] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const startGrow = () => {
    setStarted(true);
    let curL = 0, curR = 0;
    const maxL = 40, maxR = 80;
    const interval = setInterval(() => {
      curL = Math.min(maxL, curL + 0.5);
      curR = Math.min(maxR, curR + 1.2);
      setLeftH(curL);
      setRightH(curR);
      if (curL >= maxL && curR >= maxR) {
        clearInterval(interval);
        setShowMsg(true);
        setTimeout(onDone, 1600);
      }
    }, 40);
  };

  return (
    <div className="ebg-screen">
      <Header />
      <ProgressBar pct={100} />
      <div className="ebg-step-label">Шаг 5 из 5</div>
      <div className="ebg-step-title">Эксперимент с ростом</div>
      <div className="ebg-step-desc">Сравни рост растений с обычной почвой и с EcoBrew.</div>
      <div className="ebg-plants-stage">
        <div className="ebg-plant-pot">
          <div className="ebg-pot-label">Обычная почва</div>
          <div className="ebg-pot-wrap">
            <div className="ebg-leaves" style={{ fontSize: Math.min(20, leftH * 0.5), bottom: 48 + leftH - 2 }}>🌿</div>
            <div className="ebg-stem" style={{ height: leftH }} />
            <div className="ebg-pot-base" />
          </div>
        </div>
        <div className="ebg-plant-pot">
          <div className="ebg-pot-label eco">EcoBrew</div>
          <div className="ebg-pot-wrap">
            <div className="ebg-leaves" style={{ fontSize: Math.min(28, rightH * 0.35), bottom: 48 + rightH - 2 }}>🌳</div>
            <div className="ebg-stem eco" style={{ height: rightH }} />
            <div className="ebg-pot-base eco" />
          </div>
        </div>
      </div>
      {showMsg && (
        <div className="ebg-msg-green" style={{ marginBottom: 12 }}>
          🌱 EcoBrew помогает улучшать рост растений.
        </div>
      )}
      {!started && (
        <button className="ebg-btn-primary" onClick={startGrow}>🌱 Начать эксперимент</button>
      )}
    </div>
  );
}

// ── SCREEN: FINAL ─────────────────────────────────────────────
function ScreenFinal({ onRestart }) {
  const dots = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: Math.random() * 90 + 5,
    top: Math.random() * 10,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    delay: Math.random() * 0.8,
    duration: 1 + Math.random() * 0.8,
    size: 6 + Math.random() * 6,
  }));

  return (
    <div className="ebg-final">
      <div className="ebg-confetti-wrap">
        {dots.map(d => (
          <div
            key={d.id}
            className="ebg-confetti-dot"
            style={{
              left: `${d.left}%`,
              top: d.top,
              background: d.color,
              width: d.size,
              height: d.size,
              animation: `confettiFall ${d.duration}s ${d.delay}s ease-in forwards`,
            }}
          />
        ))}
      </div>
      <span className="ebg-final-icon">🏆</span>
      <div className="ebg-final-title">Поздравляем!</div>
      <div className="ebg-final-desc">
        Вы переработали{' '}
        <span className="ebg-pill">☕ кофейный жмых</span>
        {' '}и{' '}
        <span className="ebg-pill">🥚 яичную скорлупу</span>
        {' '}и создали своё первое удобрение EcoBrew.
      </div>
      <button
        className="ebg-btn-primary"
        style={{ maxWidth: 240, margin: '0 auto' }}
        onClick={onRestart}
      >
        🔄 Пройти ещё раз
      </button>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────
export default function EcoBrewGame() {
  const [step, setStep] = useState('intro');

  const go = (s) => setStep(s);

  return (
    <>
      <style>{styles}</style>
      <section id="game">
      <div className="ebg-wrap">
        {step === 'intro'  && <ScreenIntro  onStart={() => go('step1')} />}
        {step === 'step1'  && <ScreenStep1  onDone={() => go('step2')} />}
        {step === 'step2'  && <ScreenStep2  onDone={() => go('step3')} />}
        {step === 'step3'  && <ScreenStep3  onDone={() => go('step4')} />}
        {step === 'step4'  && <ScreenStep4  onDone={() => go('step5')} />}
        {step === 'step5'  && <ScreenStep5  onDone={() => go('final')} />}
        {step === 'final'  && <ScreenFinal  onRestart={() => go('intro')} />}
      </div>
      </section>
    </>
  );
}