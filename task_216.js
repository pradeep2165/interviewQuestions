const arr = [1, 2, 3, 4, 5];
//1. Filter Odd Numbers
//2. Square Each Number
//** Give 2 Possible solution

// sol1
arr.filter((n) => n % 2 == 0).map((n) => n * n);

// sol2
arr.flatMap((n) => (n % 2 == 0 ? n * n : []));
