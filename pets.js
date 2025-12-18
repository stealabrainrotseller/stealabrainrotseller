const pets = [
  { name: "Rare Brainrot #1", price: 3 },
  { name: "Rare Brainrot #2", price: 4 },
  { name: "Legendary Brainrot #1", price: 10 },
  { name: "Legendary Brainrot #2", price: 12 },
  // 👉 KEEP ADDING UP TO 300
];

const container = document.getElementById("pet-container");

pets.forEach(pet => {
  const card = document.createElement("div");
  card.className = "pet-card";

  card.innerHTML = `
    <h3>${pet.name}</h3>
    <p class="price">$${pet.price}</p>
    <a class="btn" href="https://wa.me/917822088921">Buy Now</a>
  `;

  container.appendChild(card);
});
