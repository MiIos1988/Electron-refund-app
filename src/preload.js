const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', function () {

    const xmlFilesInput = document.getElementById('xmlFilesInput');
    const myButton = document.getElementById('myButton');

    myButton.addEventListener('click', () => {
        const files = Array.from(xmlFilesInput.files);
        const filePaths = files.map((file) => file.path);

        ipcRenderer.send("saveText", filePaths);
    });

});