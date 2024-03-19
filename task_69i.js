const pets = ["🐔", "😹"];
({ item: pets[2] } = { item: "🐼" });
console.log(pets);
