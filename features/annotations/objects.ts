const profile = {
  name: 'Hephaestus',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: {
  age: number; } 
  = profile; //destructuring
const { coords: {lat, lng} }: 
  { coords: { 
    lat: number; 
    lng: number }} 
  = profile;