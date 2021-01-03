/**
 * class
 */

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  //Propiedades
  #id: number;
  #title: string;
  orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.#id = id;
    this.#title = title;
    this.orientation = orientation;
  }

  // Comportamiento

  public toString() {
    return `[id: ${this.#id} 
             title : ${this.#title}
             orientation : ${this.orientation}]`;
  }
}

class Album {
  #id: number;
  #title: string;
  #pictures: Picture[];

  public constructor(id: number, title: string) {
    this.#id = id;
    this.#title = title;
    this.#pictures = [];
  }

  public addPicture(picture: Picture) {
    this.#pictures.push(picture);
  }
}

const album: Album = new Album(1, "Personal Pictures");
const picture: Picture = new Picture(
  1,
  "Platzi Session",
  PhotoOrientation.Panorama
);
album.addPicture(picture);

// Access to public members

// picture.#id = 2;
// picture.#title = "Another title";
// album.#title = "Personal Activities";

console.log("album", album);
export = {};
