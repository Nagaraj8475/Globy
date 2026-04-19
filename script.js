// DOMAIN
function domainSuggest() {
  let input = document.getElementById("domainInput").value.toLowerCase().trim();
  let output = document.getElementById("domainOutput");

  if (!input) {
    output.innerText = "";
    output.classList.remove("show"); // ✅ added
    return;
  }

  if (input.startsWith(".")) input = input.slice(1);

  let byTld = countries.find(c =>
    c.tld.some(t => t.replace(".", "") === input)
  );

  if (byTld) {
    output.innerText = byTld.name;
    output.classList.add("show"); // ✅ added
    return;
  }

  let byName = countries.find(c =>
    c.name.toLowerCase() === input
  );

  if (byName) {
    output.innerText = byName.tld[0];
    output.classList.add("show"); // ✅ added
    return;
  }

  output.innerText = "Not found";
  output.classList.add("show"); // ✅ added
}


// PHONE
function phoneSuggest() {
  let input = document.getElementById("phoneInput").value.toLowerCase().trim();
  let output = document.getElementById("phoneOutput");

  if (!input) {
    output.innerHTML = "";
    output.classList.remove("show"); // ✅ added
    return;
  }

  let clean = input.replace("+", "");

  if (!isNaN(clean)) {
    let matches = countries.filter(c =>
      c.code.replace("+", "") === clean
    );

    if (matches.length === 1) {
      output.innerHTML = matches[0].name;
    } 
    else if (matches.length > 1) {
      output.innerHTML = `
        <div><b>Countries using +${clean}:</b></div>
        <ul>
          ${matches.map(c => `<li>${c.name}</li>`).join("")}
        </ul>
      `;
    } 
    else {
      output.innerHTML = "Not found";
    }

    output.classList.add("show"); // ✅ added
    return;
  }

  let byName = countries.find(c =>
    c.name.toLowerCase() === input
  );

  if (byName) {
    output.innerHTML = byName.code;
    output.classList.add("show"); // ✅ added
    return;
  }

  output.innerHTML = "Not found";
  output.classList.add("show"); // ✅ added
}