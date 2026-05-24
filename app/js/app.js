(function () {
  'use strict';

  const VALID_EMAIL = 'test@example.com';
  const VALID_PASSWORD = 'Password123';
  const DYNAMIC_DELAY_MS = 2000;

  // --- Navigation ---
  const navLinks = document.querySelectorAll('.nav-link');
  const panels = document.querySelectorAll('.panel');

  function showPanel(sectionId) {
    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.panel === sectionId);
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.section === sectionId);
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showPanel(link.dataset.section);
      history.replaceState(null, '', link.getAttribute('href'));
    });
  });

  function initFromHash() {
    const hash = location.hash.slice(1) || 'home';
    const exists = document.getElementById(hash);
    showPanel(exists ? hash : 'home');
  }

  window.addEventListener('hashchange', initFromHash);
  initFromHash();

  // --- Cookie banner ---
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAccept = document.getElementById('cookie-accept');

  cookieAccept.addEventListener('click', () => {
    cookieBanner.hidden = true;
  });

  // --- Login ---
  const loginForm = document.getElementById('login-form');
  const loginMessage = document.getElementById('login-message');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value.trim();
    const password = loginForm.password.value;

    if (!loginForm.checkValidity()) {
      loginForm.reportValidity();
      return;
    }

    const success = email === VALID_EMAIL && password === VALID_PASSWORD;
    loginMessage.hidden = false;
    loginMessage.textContent = success
      ? 'Welcome back! Login successful.'
      : 'Invalid email or password. Please try again.';
    loginMessage.className = success ? 'message success' : 'message error';
  });

  // --- Profile form ---
  const profileForm = document.getElementById('profile-form');
  const profileSummary = document.getElementById('profile-summary');

  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!profileForm.checkValidity()) {
      profileForm.reportValidity();
      return;
    }

    const skills = [...profileForm.querySelectorAll('input[name="skills"]:checked')]
      .map((el) => el.value);
    const level = profileForm.querySelector('input[name="level"]:checked')?.value ?? '';

    profileSummary.hidden = false;
    profileSummary.innerHTML =
      '<strong>Profile saved</strong><br>' +
      `Name: ${profileForm.fullName.value}<br>` +
      `Role: ${profileForm.role.options[profileForm.role.selectedIndex].text}<br>` +
      `Level: ${level}<br>` +
      `Skills: ${skills.length ? skills.join(', ') : 'none'}<br>` +
      `Start date: ${profileForm.startDate.value}`;
  });

  // --- Dynamic content ---
  const loadDynamicBtn = document.getElementById('load-dynamic');
  const dynamicSpinner = document.getElementById('dynamic-spinner');
  const dynamicResult = document.getElementById('dynamic-result');

  loadDynamicBtn.addEventListener('click', () => {
    loadDynamicBtn.disabled = true;
    dynamicResult.hidden = true;
    dynamicSpinner.hidden = false;

    setTimeout(() => {
      dynamicSpinner.hidden = true;
      dynamicResult.hidden = false;
      loadDynamicBtn.disabled = false;
    }, DYNAMIC_DELAY_MS);
  });

  // --- Modals & alerts ---
  const customModal = document.getElementById('custom-modal');
  const modalResult = document.getElementById('modal-result');
  const confirmResult = document.getElementById('confirm-result');

  document.getElementById('open-modal').addEventListener('click', () => {
    customModal.hidden = false;
    modalResult.hidden = true;
  });

  document.getElementById('modal-cancel').addEventListener('click', () => {
    customModal.hidden = true;
    modalResult.hidden = false;
    modalResult.textContent = 'Action cancelled.';
    modalResult.className = 'message';
  });

  document.getElementById('modal-confirm').addEventListener('click', () => {
    customModal.hidden = true;
    modalResult.hidden = false;
    modalResult.textContent = 'Action confirmed!';
    modalResult.className = 'message success';
  });

  document.getElementById('trigger-alert').addEventListener('click', () => {
    window.alert('This is a native alert dialog.');
  });

  document.getElementById('trigger-confirm').addEventListener('click', () => {
    const accepted = window.confirm('Do you accept the terms?');
    confirmResult.hidden = false;
    confirmResult.textContent = accepted ? 'You accepted.' : 'You declined.';
    confirmResult.className = accepted ? 'message success' : 'message error';
  });

  // --- Sortable table ---
  const tableBody = document.querySelector('#users-table tbody');
  const sortButtons = document.querySelectorAll('.sort-btn');
  let sortDirection = {};

  sortButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.sort;
      sortDirection[key] = sortDirection[key] === 'asc' ? 'desc' : 'asc';
      const dir = sortDirection[key];

      sortButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      btn.textContent = btn.textContent.replace(/ [↑↓]$/, '') + (dir === 'asc' ? ' ↑' : ' ↓');

      const rows = [...tableBody.querySelectorAll('tr')];
      rows.sort((a, b) => {
        let aVal = a.dataset[key];
        let bVal = b.dataset[key];
        if (key === 'score') {
          aVal = Number(aVal);
          bVal = Number(bVal);
        }
        if (aVal < bVal) return dir === 'asc' ? -1 : 1;
        if (aVal > bVal) return dir === 'asc' ? 1 : -1;
        return 0;
      });
      rows.forEach((row) => tableBody.appendChild(row));
    });
  });

  // --- File upload ---
  const uploadForm = document.getElementById('upload-form');
  const uploadResult = document.getElementById('upload-result');

  uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const file = uploadForm.file.files[0];
    uploadResult.hidden = false;
    if (!file) {
      uploadResult.textContent = 'Please choose a file first.';
      uploadResult.className = 'message error';
      return;
    }
    uploadResult.textContent = `Uploaded: ${file.name} (${file.size} bytes)`;
    uploadResult.className = 'message success';
  });

  // --- Wizard ---
  const wizardForm = document.getElementById('wizard-form');
  const wizardSteps = document.querySelectorAll('.wizard-step');
  const wizardPanels = document.querySelectorAll('.wizard-panel');
  const wizardBack = document.getElementById('wizard-back');
  const wizardNext = document.getElementById('wizard-next');
  const wizardSubmit = document.getElementById('wizard-submit');
  const wizardReview = document.getElementById('wizard-review');
  const wizardSuccess = document.getElementById('wizard-success');
  let currentStep = 1;

  function setWizardStep(step) {
    currentStep = step;
    wizardSteps.forEach((el) => el.classList.toggle('active', Number(el.dataset.step) === step));
    wizardPanels.forEach((el) => el.classList.toggle('active', Number(el.dataset.wizardStep) === step));
    wizardBack.disabled = step === 1;
    wizardNext.hidden = step === 3;
    wizardSubmit.hidden = step !== 3;

    if (step === 3) {
      wizardReview.innerHTML =
        `<dt>Email</dt><dd>${wizardForm.wizardEmail.value}</dd>` +
        `<dt>Company</dt><dd>${wizardForm.wizardCompany.value}</dd>`;
    }
  }

  wizardNext.addEventListener('click', () => {
    const panel = wizardForm.querySelector(`.wizard-panel[data-wizard-step="${currentStep}"]`);
    const inputs = panel.querySelectorAll('input[required]');
    for (const input of inputs) {
      if (!input.checkValidity()) {
        input.reportValidity();
        return;
      }
    }
    setWizardStep(currentStep + 1);
  });

  wizardBack.addEventListener('click', () => setWizardStep(currentStep - 1));

  wizardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    wizardSuccess.hidden = false;
    wizardForm.hidden = true;
  });

  // --- Locator challenges (dynamic IDs) ---
  const challengeContainer = document.getElementById('challenge-container');
  const regenerateBtn = document.getElementById('regenerate-ids');

  function randomId() {
    return 'dyn-' + Math.random().toString(36).slice(2, 9);
  }

  function setupChallenge() {
    const btnId = randomId();
    const labelId = randomId();
    challengeContainer.innerHTML =
      `<button type="button" id="${btnId}" class="challenge-btn">Click me</button>` +
      `<span id="${labelId}" class="challenge-label">Status: waiting</span>`;

    document.getElementById(btnId).addEventListener('click', () => {
      document.getElementById(labelId).textContent = 'Status: clicked!';
    });
  }

  regenerateBtn.addEventListener('click', setupChallenge);
  setupChallenge();
})();
