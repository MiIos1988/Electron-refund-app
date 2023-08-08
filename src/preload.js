const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', function () {

  const xmlFilesInput = document.getElementById('xmlFilesInput');
  const msg = document.getElementById('msg');
  const myButton = document.getElementById('myButton');
  xmlFilesInput.addEventListener("change", (event) => {
    const selectedFiles = event.target.files;
    console.log(selectedFiles)
    if (selectedFiles.length > 0) {
      msg.textContent = `Dodali ste ${selectedFiles.length} fajl(a).`;
    } else {
      msg.textContent = 'Niste dodali nijedan fajl.';
    }

  })

  myButton.addEventListener('click', () => {
    const files = Array.from(xmlFilesInput.files);
    const filePaths = files.map((file) => file.path);

    ipcRenderer.send("saveText", filePaths);
    // msg.textContent = ""
    msg.textContent = "Izrada tabela u toku...";

    ipcRenderer.on('tablesFinished', () => {
      msg.textContent = "Uspešno završeno!!!";
      setTimeout(() => {
        msg.textContent = "";
      }, 3000);
    });
  });


});