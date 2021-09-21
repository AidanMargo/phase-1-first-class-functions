// function runFiveMiles() {
//   console.log('Go for a five-mile run');
// }

// function liftWeights(){
//   console.log('Pump iron');
// }

// function swimFortyLaps(){
//   console.log('Swim 40 laps');
// }

// function Monday(){
//   exerciseRoutine(liftweights)
// }

// function exerciseRoutine(postRunActivity){
//   runFiveMiles();
//   postRunActivity();
// }

// function morningRoutine(exercise) {
//   let breakfast;

//   if(exercise === liftWeights){
//     breakfast = 'protein bar';
//   } else if (exercise === swimFortyLaps) {
//     breakfast = 'kale smoothie';
//   } else {
//     breakfast === 'granola';
//   }
//   exerciseRoutine(exercise);
//   return function () {
//     console.log(`Nom nom nom, this ${breakfast} is delicious!`)
//   };
// }

// const afterExercise = morningRoutine(swimFortyLaps);
// afterExercise()

const namedFunction = () => 2+2;
const returnsAnAnonymousFunction = () => console.log('Please wait...')
function receivesAFunction(cb){
  return cb();
}

function returnsANamedFunction(){
  return namedFunction;
}

returnsAnAnonymousFunction(function () {
  return 'Now returning!'
})

receivesAFunction(function (){return 5+5})