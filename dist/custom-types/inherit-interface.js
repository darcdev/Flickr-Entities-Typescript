"use strict";
/**
 * Inherit Interface
 */
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 4050302,
    title: "Meetups",
    description: "Community events around the world",
};
var picture = {
    id: 4030202,
    title: "Family",
    orientation: PhotoOrientation.Panorama,
};
var newPicture = {};
newPicture.title = "Moon";
module.exports = {};
