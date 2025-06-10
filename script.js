// script.js - Gère les interactions de l'application

// Fonction pour afficher l'onglet sélectionné et masquer les autres
function openTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.style.display = 'none'); // Masquer tous les onglets
  document.getElementById(tabId).style.display = 'block'; // Afficher l'onglet sélectionné
}

// Fonction pour simuler un appel REST API (asynchrone)
function simulateApi(serviceName) {
  const status = document.getElementById('status');
  status.innerText = `⏳ Calling REST API for ${serviceName}...`; // Message de démarrage

  // Simuler un délai de réponse avec setTimeout
  setTimeout(() => {
    status.innerText = `✅ REST API call completed for ${serviceName}`; // Message de succès
  }, 1500);
}

// Afficher automatiquement le premier onglet au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  openTab('tab1');
});
