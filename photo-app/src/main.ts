import { Album } from "./album";
import { PhotoOrientation } from "./photoOrientation";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(1, "Erickowski", "Erick", true);
const album = new Album(10, "Platzi Album");
const picture = new Picture(1, "Foto", "2020-08", PhotoOrientation.Landscape);

// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log("user", user);

user.removeAlbum(album);

console.log("user", user);
