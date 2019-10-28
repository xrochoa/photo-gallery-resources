const sharp = require('sharp');
const fs = require('fs');
const inputFolder = './temp/';
const parkName = 'hale';

/* CREATE FOLDERS */
let highresFolder = `./highres/${parkName}`;
if (!fs.existsSync(highresFolder)) {
    fs.mkdirSync(highresFolder);
}

let thumbFolder = `./thumb/${parkName}`;
if (!fs.existsSync(thumbFolder)) {
    fs.mkdirSync(thumbFolder);
}

/* RESIZE FOR HIGHRES AND THUMB */
fs.readdir(inputFolder, (err, files) => {
    files.forEach(file => {
        if (file !== '.DS_Store') {
            resizeStream(file, { width: 1920, height: 1200 }, highresFolder);
            resizeStream(file, { width: 600, height: 400 }, thumbFolder);
        }
    });
});


function resizeStream(file, size, outputFolder) {

    // input stream
    let inStream = fs.createReadStream(`${inputFolder}${file}`);

    // output stream
    let outStream = fs.createWriteStream(`${outputFolder}/${file}`, { flags: "w" });

    // on error of output file being saved
    outStream.on('error', function () {
        console.log("Error");
    });

    // on success of output file being saved
    outStream.on('close', function () {
        console.log("Successfully saved file");
    });

    // input stream transformer
    // "info" event will be emitted on resize
    let transform = sharp()
        .resize(size)
        .on('info', function () {
            console.log("Resizing done, file not saved");
        });

    inStream.pipe(transform).pipe(outStream);

}
