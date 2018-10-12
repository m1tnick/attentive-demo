export class DogBreedVM {
    breed: string;
    subBreed: [string];

    constructor(breed: string="", subBreed: [string]=['']) {
        this.breed = breed;
        this.subBreed = subBreed;
    }
}