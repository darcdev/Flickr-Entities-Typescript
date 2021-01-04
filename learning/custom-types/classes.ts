/**
 * class
 */

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}
// Super Clase

abstract class Item {
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }
}
// class Item {
//   protected _id: number;
//   protected _title: string;

//   constructor(id: number, title: string) {
//     this._id = id;
//     this._title = title;
//   }
// }
class Picture extends Item {
  public static photoOrientation = PhotoOrientation;
  //Propiedades
  orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title);
    this.orientation = orientation;
  }
  get id() {
    return this._id;
  }
  // set id(id: number) {
  //   this._id = id;
  // }

  get title() {
    return this._title;
  }
  set(title: string) {
    this._title = title;
  }

  get _orientation() {
    return this.orientation;
  }
  set _orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
  }
  // Comportamiento
  public toString() {
    return `[id: ${this._id} 
             title : ${this._title}
             orientation : ${this.orientation}]`;
  }
}

class Album extends Item {
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title);
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
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

// const item = new Item(1, "Test"); // Error clase abstracta

// Miembros estaticos

console.log("PhotoOrientation", Picture.photoOrientation.Landscape);
export = {};
