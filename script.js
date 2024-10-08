const body = document.querySelector("body");
const container = document.querySelector("#container");

function createGrid(gridSize) {
  container.innerHTML = "";

  const elementSize = 100 / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridElement = document.createElement("div");
    gridElement.className = "element";
    gridElement.style.flexBasis = `${elementSize}%`;
    gridElement.style.height = `${elementSize}%`;

    container.appendChild(gridElement);

    const gridElements = document.querySelectorAll(".element");
    gridElements.forEach((gridElement) => {
      gridElement.addEventListener("mouseenter", () => {
        gridElement.style.backgroundColor = "black";
      });
    });
  }
}

createGrid(16);

const gridBtn = document.createElement("button");
body.insertBefore(gridBtn, container);
gridBtn.textContent = "New Grid";
gridBtn.addEventListener("click", createNewGrid);

function createNewGrid() {
  const gridSize = parseInt(
    prompt("Enter a number for squares per side", "16")
  );
  if (gridSize > 0 && gridSize < 100) {
    createGrid(gridSize);
  } else {
    alert("Invalid option! Please select a number between 1 & 99.");
  }
}
