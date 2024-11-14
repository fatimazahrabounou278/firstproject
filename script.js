// Chargement des données JSON et génération des cartes
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Générer les cartes de stages
    const stageContainer = document.getElementById("stage-cards");
    data.stages.forEach((stage) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
                <h3>${stage.title}</h3>
                <p><strong>Lieu:</strong> ${stage.location}</p>
                <p><strong>Secteur:</strong> ${stage.sector}</p>
                <p>${stage.description}</p>
            `;
      stageContainer.appendChild(card);
    });

    // Générer les cartes CV
    const cvContainer = document.getElementById("cv-cards");
    data.cvs.forEach((cv) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
                <h3>${cv.name}</h3>
                <p><strong>Spécialité:</strong> ${cv.specialty}</p>
                <p><strong>Expérience:</strong> ${cv.experience}</p>
                <p>${cv.description}</p>
            `;
      cvContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Erreur de chargement des données:", error));
