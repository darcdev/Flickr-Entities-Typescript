/**
 * Inherit Interface
 */

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  description: string;
}

interface Picture extends Entity {
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 4050302,
  title: "Meetups",
  description: "Community events around the world",
};

const picture: Picture = {
  id: 4030202,
  title: "Family",
  orientation: PhotoOrientation.Panorama,
};

let newPicture = {} as Picture;
newPicture.title = "Moon";

export = {};
