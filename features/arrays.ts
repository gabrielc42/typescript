const animals: string[] = ['duck', 'pangolin', 'cardinal'];
const dates = [new Date(), new Date()];

const animalsByOrder: string[][] = [
  ['anseriformes'],
  ['pholidota'],
  ['passeriformes']
];

// help w inference when extracting values
const animalOrder = animalsByOrder[0];
const someOrder = animalsByOrder.pop();

// prevent incompatibale values
//animals.push(1);

// help w map
animals.map((animal: string): string => {
  return animal.toUpperCase();
});

