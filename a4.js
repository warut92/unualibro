document.addEventListener("DOMContentLoaded", function() {
            // Set the number of A4-sized divs you want
            const numberOfDivs = 4;

            for (let i = 0; i < numberOfDivs; i++) {
                const a4Div = document.createElement("div");
                a4Div.className = "a4-size";
                a4Div.innerHTML = `<p>This is A4 div ${i + 1}</p>`;
                document.body.appendChild(a4Div);
            }
          });
