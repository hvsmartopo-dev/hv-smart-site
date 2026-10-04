/* =========================================================
   HV SMART
   STYLE.CSS
   ========================================================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #07100b;
  color: #ffffff;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}


/* =========================================================
   VARIÁVEIS
   ========================================================= */

:root {
  --green: #18d66b;
  --green-dark: #0b9e4b;
  --green-light: #50ef91;

  --background: #07100b;
  --background-2: #0b1710;
  --card: #0e1d14;

  --text: #ffffff;
  --text-muted: #9da9a1;

  --border: rgba(255, 255, 255, 0.08);

  --max-width: 1180px;
}


/* =========================================================
   HEADER
   ========================================================= */

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  z-index: 1000;

  background: rgba(7, 16, 11, 0.90);

  backdrop-filter: blur(15px);

  border-bottom: 1px solid var(--border);
}

.header-content {
  max-width: var(--max-width);

  margin: auto;

  min-height: 76px;

  padding: 0 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}


/* LOGO */

.logo {
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 22px;
  font-weight: 900;

  letter-spacing: -1px;
}

.logo-hv {
  color: var(--green);
}

.logo-smart {
  color: #ffffff;
}


/* MENU */

.navigation {
  display: flex;
  align-items: center;

  gap: 30px;
}

.navigation a {
  font-size: 14px;
  color: #d8dedb;

  transition: 0.3s;
}

.navigation a:hover {
  color: var(--green);
}

.menu-button {
  display: none;

  background: transparent;
  border: 0;

  color: white;

  font-size: 28px;

  cursor: pointer;
}


/* =========================================================
   HERO
   ========================================================= */

.hero {
  min-height: 760px;

  padding: 150px 25px 90px;

  display: flex;
  align-items: center;

  background:
    radial-gradient(
      circle at 80% 30%,
      rgba(24, 214, 107, 0.14),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      #07100b,
      #0a1710
    );
}

.hero-content {
  width: 100%;
  max-width: var(--max-width);

  margin: auto;

  display: grid;

  grid-template-columns: 1.2fr 0.8fr;

  gap: 70px;

  align-items: center;
}

.hero-tag,
.section-tag {
  display: inline-block;

  color: var(--green);

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 2px;

  margin-bottom: 18px;
}

.hero h1 {
  max-width: 700px;

  font-size: clamp(45px, 6vw, 76px);

  line-height: 1.05;

  letter-spacing: -3px;

  margin-bottom: 25px;
}

.hero h1 strong {
  display: block;

  color: var(--green);
}

.hero-text p {
  max-width: 570px;

  color: var(--text-muted);

  font-size: 18px;

  margin-bottom: 35px;
}


/* BOTÕES */

.hero-buttons {
  display: flex;

  flex-wrap: wrap;

  gap: 14px;
}

.button {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  min-height: 50px;

  padding: 0 25px;

  border-radius: 7px;

  font-size: 14px;

  font-weight: 800;

  border: 1px solid transparent;

  cursor: pointer;

  transition: 0.3s;
}

.button-primary {
  background: var(--green);

  color: #031008;
}

.button-primary:hover {
  background: var(--green-light);

  transform: translateY(-2px);
}

.button-secondary {
  border-color: rgba(255, 255, 255, 0.18);

  color: white;
}

.button-secondary:hover {
  border-color: var(--green);

  color: var(--green);
}


/* HERO CARD */

.hero-card {
  padding: 45px;

  border-radius: 20px;

  background:
    linear-gradient(
      145deg,
      rgba(24, 214, 107, 0.14),
      rgba(255, 255, 255, 0.03)
    );

  border: 1px solid rgba(24, 214, 107, 0.2);

  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.35);
}

.camera-icon {
  width: 75px;
  height: 75px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-bottom: 25px;

  border-radius: 18px;

  background: rgba(24, 214, 107, 0.12);

  color: var(--green);

  font-size: 42px;
}

.hero-card h2 {
  font-size: 30px;

  margin-bottom: 12px;
}

.hero-card p {
  color: var(--text-muted);

  margin-bottom: 25px;
}

.card-link {
  color: var(--green);

  font-weight: 800;

  font-size: 14px;
}


/* =========================================================
   SEÇÕES
   ========================================================= */

.section {
  padding: 100px 25px;
}

.section-header {
  max-width: 700px;

  margin: 0 auto 55px;

  text-align: center;
}

.section-header h2 {
  font-size: clamp(34px, 5vw, 52px);

  line-height: 1.1;

  letter-spacing: -2px;

  margin-bottom: 18px;
}

.section-header p {
  color: var(--text-muted);

  font-size: 16px;
}


/* =========================================================
   SERVIÇOS
   ========================================================= */

.services {
  background: var(--background-2);
}

.services-grid {
  max-width: var(--max-width);

  margin: auto;

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 18px;
}

.service-card {
  padding: 30px;

  background: var(--card);

  border: 1px solid var(--border);

  border-radius: 15px;

  transition: 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);

  border-color: rgba(24, 214, 107, 0.35);
}

.service-icon {
  font-size: 32px;

  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 20px;

  margin-bottom: 10px;
}

.service-card p {
  color: var(--text-muted);

  font-size: 14px;
}


/* =========================================================
   MONITORAMENTO
   ========================================================= */

.monitoring {
  background: #050b07;
}

.camera-panel {
  max-width: 1000px;

  margin: auto;

  background: #020403;

  border: 1px solid var(--border);

  border-radius: 15px;

  overflow: hidden;

  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.35);
}

.camera-header {
  min-height: 60px;

  padding: 0 20px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  background: #0c1710;

  border-bottom: 1px solid var(--border);

  font-size: 14px;
}

.camera-header > div {
  display: flex;

  align-items: center;

  gap: 9px;
}

.status-dot {
  width: 9px;
  height: 9px;

  border-radius: 50%;

  background: #777;
}

.camera-status {
  font-size: 11px;

  font-weight: 800;

  color: #888;
}

.camera-screen {
  min-height: 500px;

  display: flex;

  align-items: center;
  justify-content: center;

  background:
    radial-gradient(
      circle,
      rgba(24, 214, 107, 0.05),
      transparent 50%
    ),
    #020403;
}

.camera-placeholder {
  max-width: 400px;

  padding: 30px;

  text-align: center;
}

.camera-placeholder-icon {
  font-size: 55px;

  margin-bottom: 15px;

  opacity: 0.8;
}

.camera-placeholder h3 {
  font-size: 23px;

  margin-bottom: 10px;
}

.camera-placeholder p {
  color: var(--text-muted);

  font-size: 14px;

  margin-bottom: 25px;
}


/* =========================================================
   SOBRE
   ========================================================= */

.about {
  background: var(--background-2);
}

.about-content {
  max-width: var(--max-width);

  margin: auto;

  display: grid;

  grid-template-columns: 1.2fr 0.8fr;

  gap: 70px;

  align-items: center;
}

.about-text h2 {
  font-size: clamp(34px, 5vw, 52px);

  line-height: 1.1;

  letter-spacing: -2px;

  margin-bottom: 25px;
}

.about-text p {
  max-width: 650px;

  color: var(--text-muted);

  margin-bottom: 15px;
}

.about-highlight {
  padding: 45px;

  border-radius: 20px;

  background:
    linear-gradient(
      145deg,
      rgba(24, 214, 107, 0.12),
      rgba(255, 255, 255, 0.02)
    );

  border: 1px solid rgba(24, 214, 107, 0.2);
}

.highlight-number {
  color: var(--green);

  font-size: 70px;

  font-weight: 900;

  line-height: 1;

  margin-bottom: 20px;
}

.about-highlight h3 {
  font-size: 27px;

  margin-bottom: 10px;
}

.about-highlight p {
  color: var(--text-muted);
}


/* =========================================================
   CONTATO
   ========================================================= */

.contact {
  background: #050b07;
}

.contact-grid {
  max-width: 900px;

  margin: auto;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 18px;
}

.contact-card {
  padding: 25px;

  display: flex;

  align-items: center;

  gap: 18px;

  background: var(--card);

  border: 1px solid var(--border);

  border-radius: 12px;

  transition: 0.3s;
}

.contact-card:hover {
  border-color: var(--green);

  transform: translateY(-3px);
}

.contact-icon {
  font-size: 30px;
}

.contact-card h3 {
  font-size: 16px;
}

.contact-card p {
  color: var(--text-muted);

  font-size: 13px;
}


/* =========================================================
   FOOTER
   ========================================================= */

.footer {
  padding: 50px 25px;

  background: #030704;

  border-top: 1px solid var(--border);

  text-align: center;
}

.footer-content {
  max-width: var(--max-width);

  margin: auto;
}

.footer-logo {
  font-size: 24px;

  font-weight: 900;

  margin-bottom: 10px;
}

.footer-logo span {
  color: var(--green);
}

.footer p {
  color: var(--text-muted);

  font-size: 13px;
}

.footer-line {
  width: 100%;

  height: 1px;

  background: var(--border);

  margin: 30px 0;
}

.copyright {
  opacity: 0.65;
}


/* =========================================================
   RESPONSIVO - TABLET
   ========================================================= */

@media (max-width: 900px) {

  .navigation {
    gap: 15px;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-content,
  .about-content {
    grid-template-columns: 1fr;

    gap: 45px;
  }

  .hero {
    min-height: auto;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

}


/* =========================================================
   RESPONSIVO - CELULAR
   ========================================================= */

@media (max-width: 650px) {

  .header-content {
    min-height: 65px;

    padding: 0 18px;
  }

  .menu-button {
    display: block;
  }

  .navigation {
    display: none;

    position: absolute;

    top: 65px;

    left: 0;

    width: 100%;

    padding: 20px;

    flex-direction: column;

    align-items: flex-start;

    gap: 0;

    background: #07100b;

    border-bottom: 1px solid var(--border);
  }

  .navigation.active {
    display: flex;
  }

  .navigation a {
    width: 100%;

    padding: 14px 0;

    border-bottom: 1px solid var(--border);
  }

  .hero {
    padding: 120px 20px 70px;
  }

  .hero h1 {
    font-size: 47px;

    letter-spacing: -2px;
  }

  .hero-text p {
    font-size: 16px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons .button {
    width: 100%;
  }

  .hero-card {
    padding: 30px;
  }

  .section {
    padding: 75px 20px;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .section-header h2 {
    font-size: 36px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .camera-screen {
    min-height: 350px;
  }

  .about-text h2 {
    font-size: 36px;
  }

  .about-highlight {
    padding: 30px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

}


/* =========================================================
   TELAS MUITO PEQUENAS
   ========================================================= */

@media (max-width: 380px) {

  .hero h1 {
    font-size: 40px;
  }

  .logo {
    font-size: 19px;
  }

}
