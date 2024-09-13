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
