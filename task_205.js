const bird = {
  name: "🐤",
};
const animal = {
  name: "🦘",
};
function show() {
  console.log(this.name);
}
const objShow = show.bind(bird);
objShow.call(animal);
