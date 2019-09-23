const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40];
// pepsi[0] = 40;

type Drink = [string, boolean, number];

const pepsi1: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];