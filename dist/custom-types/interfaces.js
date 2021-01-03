"use strict";
/**
 * Interfaces
 */
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("title : " + picture.title + " , date : " + picture.date + " , orientation : " + picture.orientation + "]");
}
var myPic = {
    title: "Test-title",
    date: "2020-03-01",
    orientation: PhotoOrientation.Landscape,
    extra: 4,
};
showPicture(myPic);
showPicture({
    title: "test",
    date: "2019-02-10",
    orientation: PhotoOrientation.Portrait,
});
function generatePicture(config) {
    var pic = { title: "default", date: "2020-03" };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
picture = generatePicture({ title: "Travel Pic" });
picture = generatePicture({ title: "Travel Picture", date: "2020-05" });
var user;
user = { id: 10, username: "luixaviles", isPro: true };
user.username = "10";
console.log("user", user);
module.exports = {};
