const getCount = objects => {
    let counter = 0;
    objects.forEach(object => {
        if (object.x === object.y) {
            counter++;
        }
    });
    console.log(counter);
}

const arr = [
  {x: 1, y: 1},
  {x: 2, y: 3},
  {x: 3, y: 3},
  {x: 3, y: 4},
  {x: 4, y: 5}
]

getCount(arr);