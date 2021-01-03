/**
 * Interfaces
 */
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  console.log(
    `title : ${picture.title} , date : ${picture.date} , orientation : ${picture.orientation}]`
  );
}

let myPic = {
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

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const pic = { title: "default", date: "2020-03" };

  if (config.title) {
    pic.title = config.title;
  }
  if (config.date) {
    pic.date = config.date;
  }

  return pic;
}

let picture = generatePicture({});
picture = generatePicture({ title: "Travel Pic" });
picture = generatePicture({ title: "Travel Picture", date: "2020-05" });

interface User {
  readonly id: number;
  username: string;
  isPro: boolean;
}

let user: User;
user = { id: 10, username: "luixaviles", isPro: true };
user.username = "10";
console.log("user", user);

export = {};
