# Photo Gallery Resources

Includes high resolution and thumbnail images for:
- photo-gallery-v1 built in Angular.js
- photo-gallery-v2 built in Vue.js

This repo does not contain the original raw and modified images which are quite large.

## Image Sizes

Originals: 6000x4000 300ppi
High Resolution: 1920x1200 300ppi
Thumbnail: 600x400 (Variable dpi due to inconsistent updates)

Notes: 
- The JPEG quality has been variable due to inconsistent updates. ~~Prefer 12.~~. Use script default.
- The dpi for thumbnail has been variable due to inconsistent updates. ~~Prefer 72ppi.~~. Use script default.
- Images have varying sizes due to Photomatix alignment.
~~- Canvas is not cropped. Image gets a small stretch Photoshop batch processing to fit standard sizes.~~
- Canvas is not cropped but stretched. Images are now resized by node script. 

# Resize and Upload
1) Add images to temp folder
2) Change national park code in script
3) Run script
4) Add park to galleries.json and subtitles to photos.json
5) Push changes (Frontend should use updated resources immediately)
