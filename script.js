const para = document.getElementById("para")
const flip = document.getElementById("flip")
var Name = "reversed"
var file = Name + ".txt"
const realPass = "TheQuantumStateOfANaturalComputerInSpace_24"

async function processFile(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load file: ${response.statusText}`);
        }

        const text = await response.text();
        const lines = text.split("\n"); // Split file content into lines
        const outputDiv = document.getElementById("para");
        outputDiv.innerHTML = ""; // Clear any previous content

        lines.forEach((line) => {
            var trimmedLine = line.trim();
            if (trimmedLine.startsWith("#1")) {
                const h1 = document.createElement("h1");
                if (trimmedLine.endsWith(',')) {
                    trimmedLine = trimmedLine.slice(0, -1);
                    h1.style.textAlign = 'center';
                }
                h1.textContent = trimmedLine.substring(2).trim(); // Exclude the #
                outputDiv.appendChild(h1);
            }
            else if (trimmedLine.startsWith("#2")) {
                const h2 = document.createElement("h2");
                if (trimmedLine.endsWith(',')) {
                    h2.style.textAlign = 'center';
                    trimmedLine = trimmedLine.slice(0, -1)
                }
                h2.textContent = trimmedLine.substring(2).trim(); // Exclude the #
                outputDiv.appendChild(h2);
            }
            else if (trimmedLine.startsWith("#3")) {
                const h3 = document.createElement("h3");
                if (trimmedLine.endsWith(',')) {
                    h3.style.textAlign = 'center';
                    trimmedLine = trimmedLine.slice(0, -1)
                }
                h3.textContent = trimmedLine.substring(2).trim(); // Exclude the #
                outputDiv.appendChild(h3);
            }
            else if (trimmedLine.startsWith("#4")) {
                const h4 = document.createElement("h4");
                if (trimmedLine.endsWith(',')) {
                    h4.style.textAlign = 'center';
                    trimmedLine = trimmedLine.slice(0, -1)
                }
                h4.textContent = trimmedLine.substring(2).trim(); // Exclude the #
                outputDiv.appendChild(h4);
            }
            else {
                const p = document.createElement("p");
                if (trimmedLine.endsWith(',')) {
                    p.style.textAlign = 'center';
                    trimmedLine = trimmedLine.slice(0, -1)
                }
                p.textContent = trimmedLine;
                outputDiv.appendChild(p);
            }
    
        });
    } catch (error) {
        console.error("Error processing file:", error);
    }
}

processFile(file)

async function getPassword() {
    const password = await promptForPassword();  // Wait for user input
    // Continue with other logic after password is entered
    return password
  }

  function promptForPassword() {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'password';  // Hides the input text
      input.placeholder = 'Enter password';
      document.body.appendChild(input);
      input.focus();  // Focus on the input field
      
      input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          resolve(input.value);  // Resolve the promise with the input value
          input.remove();  // Remove the input field after user presses Enter
        }
      });
      
    });
  }

flip.addEventListener("click", async function(e) {
    if (Name == "reversed"){
        // password = prompt("Enter password")
        var password = await getPassword()
        if (password != realPass) {
            alert("Invalid password!")
            return
        }
        Name = "text"
        file = Name + ".txt"
        console.log("text")
    }
    else if (Name == "text"){
        Name = "reversed"
        file = Name + ".txt"
        console.log("reversed")
    }
    processFile(file)
})