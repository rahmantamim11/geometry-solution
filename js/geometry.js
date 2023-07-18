 // Triangle

 let count = 0;

 function calculateTriangle() {
    const base = document.getElementById("triangle-base").value;
    const height = document.getElementById("triangle-height").value;

    if (base && height && !isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
      const area = 0.5 * base * height;
      appendResult("Triangle", area);
    } else {
      alert("Please enter valid numeric values for the base and height.");
    }
  }

  // Rectangle
  count+= 1;
  function calculateRectangle() {
    const width = document.getElementById("rectangle-width").value;
    const length = document.getElementById("rectangle-length").value;

    if (width && length && !isNaN(width) && !isNaN(length) && width > 0 && length > 0) {
      const area = width * length;
      appendResult("Rectangle", area);
    } else {
      alert("Please enter valid numeric values for the width and length.");
    }
  }

  // Parallelogram
  function calculateParallelogram() {
    const base = 10;
    const height = 12;

    const area = base * height;
    appendResult("Parallelogram", area);
  }

  // Rhombus
  function calculateRhombus() {
    const diagonal1 = 16;
    const diagonal2 = 8;

    const area = 0.5 * diagonal1 * diagonal2;
    appendResult("Rhombus", area);
  }

  // Pentagon
  function calculatePentagon() {
    const perimeter = 6;
    const base = document.getElementById("pentagon-base").value;

    if (base && !isNaN(base) && base > 0) {
      const area = 0.5 * perimeter * base;
      appendResult("Pentagon", area);
    } else {
      alert("Please enter a valid numeric value for the base.");
    }
  }

  // Ellipse
  function calculateEllipse() {
    const axisA = 10;
    const axisB = 4;
    const area = Math.PI * axisA * axisB;
    appendResult("Ellipse", area);
  }

  // Append result to the area calculation list
  function appendResult(shape, area) {
    const listItem = document.createElement("li");
    listItem.textContent = `${shape}: ${area.toFixed(2)}`;
    document.getElementById("area-calculation").appendChild(listItem);
  }