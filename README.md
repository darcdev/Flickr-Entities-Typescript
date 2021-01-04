# Flickr Entities

![typescript](https://emojis.slackmojis.com/emojis/images/1479745458/1383/typescript.png?1479745458)

#### Define Flickr entities using Typescript Language

## Enum

### PhotoOrientation

```ts
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}
```

## Entities

### User

```ts
class User {
  private album: Album[];

  constructor(
    private id: number,
    private username: string,
    private firstName: string,
    private isPro: boolean
  ) {
    this.album = [];
  }

  addAlbum(album: Album) {}

  removeAlbum(album: Album): Album | undefined {}
}
```

### Picture

```ts
class Picture extends Item {
  public constructor(
    id: number,
    title: string,
    private _date: string,
    private _orientation: PhotoOrientation
  ) {
    super(id, title);
  }
  public toString() {}
}
```

### Item

```ts
class Item {
  constructor(public readonly id: number, protected title: string) {}
}
```

### Album

```ts
class Album extends Item {
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title);
    this.pictures = [];
  }
  public addPicture(picture: Picture) {}
}
```
