// const generateGrowingSchedule = (phase) => {
//   let daysOfGrowth = 0;

//   if (phase === "seedling") {
//     daysOfGrowth = 140;
//   } else if (phase === "vegetative") {
//     daysOfGrowth = 120;
//   } else if (phase === "flowering") {
//     daysOfGrowth = 70;
//   }

//   return daysOfGrowth;
// };


// const generateWateringSchedule = (phase, medium) => {
//   let waterFrequency = 0;

//   if (phase === "seedling" && (medium === "soil" || medium === "soilless")) {
//     waterFrequency = 2;
//   } else if (phase === "seedling" && medium === "hydroponic") {
//     waterFrequency = 0;
//   } else if (phase === "vegetative" && medium === "soil") {
//     waterFrequency = 3;
//   } else if (phase === "vegetative" && (medium === "soilless" || medium === "hydroponic")) {
//     waterFrequency = 2;
//   } else if (phase === "flowering" && (medium === "soil" || medium === "soilless")) {
//     waterFrequency = 2;
//   } else if (phase === "flowering" && medium === "hydroponic") {
//     waterFrequency = 0;
//   }

//   return waterFrequency;
// };
// 

// const generateFeedingSchedule = (phase, medium) => {
//   let feedingSchedule = 0;

//   if (phase === "seedling" && medium === "soil") {
//     feedingSchedule = 0;
//   } else if (phase === "seedling" && (medium === "soilless" || medium === "hydroponic")) {
//     feedingSchedule = 7;
//   } else if (phase === "vegetative" && medium === "soil") {
//     feedingSchedule = 7;
//   } else if ((phase === "vegetative" || phase === "flowering") && (medium === "soilless" || medium === "hydroponic")) {
//     feedingSchedule = 3;
//   } else if (phase === "flowering" && medium === "soil") {
//     feedingSchedule = 7;
//   }

//   return feedingSchedule;
// };

// const generateTransplantingSchedule = (phase, medium) => {
//   let transplantSchedule = [];

//   if (phase === "seedling" && (medium === "soil" || medium === "soilless")) {
//     transplantSchedule = [20];
//   } else if (phase === "vegetative" && (medium === "soil" || medium === "soilless")) {
//     transplantSchedule = [15,40];
//   } else {
//     transplantSchedule = [];
//   }

//   return transplantSchedule;
// };

// const generateDefoliatingSchedule = (phase) => {
//   let defoliatingSchedule = [];

//   if (phase === "vegetative") {
//     defoliatingSchedule = [25];
//   } else if (phase === "flowering") {
//     defoliatingSchedule = [10,45];
//   }

//   return defoliatingSchedule;
// };

// const generateSchedule = (formData) => {
//   // Retrieve phase and medium values from the form data object
//   const { phase, medium } = formData;

//   // Generate the schedule based on the provided phase and medium
//   const daysOfGrowth = generateGrowingSchedule(phase);
//   const waterFrequency = generateWateringSchedule(phase, medium);
//   const feedingSchedule = generateFeedingSchedule(phase, medium);
//   const transplantSchedule = generateTransplantingSchedule(phase, medium);
//   const defoliatingSchedule = generateDefoliatingSchedule(phase);

//   // Construct the complete schedule object or format it as needed
//   const schedule = {
//     daysOfGrowth,
//     waterFrequency,
//     feedingSchedule,
//     transplantSchedule,
//     defoliatingSchedule,
//   };

//   // Return the generated schedule
//   return schedule;
// };

// // Example usage with the provided form data object
// const formData = {
//   phase: "seedling",
//   medium: "soil",
// };

// const completeSchedule = generateCompleteSchedule(plant);
// console.log(completeSchedule);

//  ///////////////////////////////////////////////////////////////////

// const generateSeedlingSchedule = (medium) => {
//   let seedlingSchedule = [];

//   for (let i = 0; i <= 20; i++) {

//   }
// }

// ////////////////////////////////////////////////////////////////////

// const seedlingScheduleSoil = {
//   1: null,
//   2: "water",
//   3: null,
//   4: "water",
//   5: null,
//   6: null,
//   7: "water",
//   8: null,
//   9: "water",
//   10: "checkPH",
//   11: null,
//   12: "water",
//   13: null,
//   14: "water",
//   15: null,
//   16: null,
//   17: "water",
//   18: null,
//   19: "water",
//   20: "transplant"
// }

// const seedlingScheduleSoilless = {
//   1: null,
//   2: "water",
//   3: null,
//   4: "water",
//   5: null,
//   6: "feed",
//   7: null,
//   8: "water",
//   9: null,
//   10: "water",   
//   11: "checkPH",
//   12: "water",
//   13: null,
//   14: "feed",
//   15: null,
//   16: "water",
//   17: null,
//   18: "water",
//   19: null,
//   20: "transplant"
// }

// const seedlingScheduleHydroponic = {
//   1: null,
//   2: null,
//   3: "water",
//   4: null,
//   5: null,
//   6: "feedWater",
//   7: "checkPH",
//   8: null,
//   9: "water",
//   10: null,
//   11: null,
//   12: "feedWater",
//   13: "checkPH",
//   14: null,
//   15: null,
//   16: "water",
//   17: null,
//   18: null,
//   19: null,
//   20: "replaceResevoir"
// }

// const vegetativeScheduleSoil = {
//  1: null,
// 2: "water",
// 3: null,
// 4: null,
// 5: "water",
// 6: null,
// 7: null,
// 8: "feed",
// 9: null,
// 10: null,
// 11: "water",
// 12: null,
// 13: null,
// 14: "water",
// 15: null,
// 16: null,
// 17: "feed",
// 18: null,
// 19: "transplant",
// 20: "water",
// 21: null,
// 22: null,
// 23: "water",
// 24: null,
// 25: null,
// 26:"feed",
// 27: null,
// 28: null,
// 29: "water",
// 30: null,
// 31: null,
// 32: "water",
// 33: null,
// 34: null,
// 35: "feed",
// 36: null,
// 37: null,
// 38: "water",
// 39: null,
// 40: "transplant",
// 41: "water",
// 42: null,
// 43: null,
// 44: "water",
// 45: null,
// 46: null,
// 47: "feed",
// 48: null,
// 49: null,
// 50: "water-defoliate"
// }

// const vegetativeScheduleSoilless = {
// 1: "water",
// 2: "feed",
// 3:  null,
// 4: "water",
// 5: "feed",
// 6:  null,
// 7: "water",
// 8: "feed",
// 9: null,
// 10: "water",
// 11: "feed",
// 12: null,
// 13: "water",
// 14: "feed",
// 15: null,
// 16: "water",
// 17: "feed",
// 18: null,
// 19: "water",
// 20: "transplant",
// 21: "feed",
// 22: null,
// 23: "water",
// 24: "feed",
// 25: null,
// 26: "water",
// 27: "feed",
// 28: null,
// 29: "water",
// 30: "feed",
// 31: null,
// 32: "water",
// 33: "feed",
// 34: null,
// 35: "water",
// 36: "feed",
// 37: null,
// 38: "water",
// 39: "feed",
// 40: "transplant",
// 41: "water",
// 42: null,
// 43: "water",
// 44: "feed",
// 45: null,
// 46: "water",
// 47: "feed",
// 48: null,
// 49: "water",
// 50: "defoliate"
// }

// const vegetativeScheduleHydroponic = {
//   1: null,
//   2: null,
//   3: "water",
//   4: "checkPH",
//   5: "feed",
//   6: null,
//   7: null,
//   8: "water",
//   9: null,
//   10: null,
//   11: "feed",
//   12: "checkPH",
//   13: null,
//   14: null,
//   15: "water",
//   16: null,
//   17: "feed",
//   18: "checkPH",
//   19: null,
//   20: null,
//   21: "replaceResevoir",
//   22: null,
//   23: null,
//   24: "water",
//   25: null,
//   26: "checkPH",
//   27: null,
//   28: "feed",
//   29: null,
//   30: null,
//   31: "water",
//   32: "checkPH",
//   33: null,
//   34: null,
//   35: "feed",
//   36: null,
//   37: "checkPH",
//   38: "water",
//   39: null,
//   40: null,
//   41: "replaceResevoir",
//   42: null,
//   43: null,
//   44: "water",
//   45: "checkPH",
//   46: null,
//   47: "feed",
//   48: null,
//   49: "defoliate",
//   50: "water"
// }

// const floweringScheduleSoil = {
//   1: null,
//   2: null,
//   3: "feed",
//   4: null,
//   5: null,
//   6: "water",
//   7: null,
//   8: null,
//   9: "feed",
//   10: "checkPH",
//   11: null, 
//   12: "water",
//   13: null,
//   14: null,
//   15: "feed",
//   16: null,
//   17: null,
//   18: "water",
//   19: null,
//   20: null,
//   21: "feed",
//   22: "defoliate",
//   23: null,
//   24: "water",
//   25: "checkPH",
//   26: null,
//   27: "feed",
//   28: null,
//   29: null,
//   30: "water",
//   31: null,
//   32: null,
//   33: "feed",
//   34: null,
//   35: null,
//   36: "water",
//   37: null,
//   38: null,
//   39: "feed",
//   40: null,
//   41: null,
//   42: "water",
//   43: "checkPH",
//   44: null,
//   45: "feed",
//   46: null,
//   47: "defoliate",
//   48: "water",
//   49: null,
//   50: null,
//   51: "feed",
//   52: null,
//   53: null,
//   54: "water",
//   55: null,
//   56: null,
//   57: "feed",
//   58: null,
//   59: null,
//   60: "water",
//   61: null,
//   62: null,
//   63: "water",
//   64: null,
//   65: null,
//   66: "water",
//   67: null,
//   68: null,
//   69: "water",
//   70: "harvest"
// }


// //////////////////////////////////////////////////////////////////////

// const createSeedlingScheduleSoil = () =>
//   Array.from({ length: 20 }, (_, index) =>
//     [2, 4, 7, 9, 12, 14, 17, 19].includes(index + 1)
//       ? "water"
//       : index + 1 === 10
//       ? "checkPH"
//       : index + 1 === 20
//       ? "transplant"
//       : null
//   );

const createSeedlingScheduleSoilless = () =>
  Array.from({ length: 20 }, (_, index) =>
    [2, 4, 8, 10, 11, 12, 14, 16, 18].includes(index + 1)
      ? "water"
      : [6, 13].includes(index + 1)
      ? "feed"
      : index + 1 === 11
      ? "checkPH"
      : index + 1 === 20
      ? "transplant"
      : null
  );

const createSeedlingScheduleHydroponic = () =>
  Array.from({ length: 20 }, (_, index) =>
    [3, 6, 7, 9, 12, 13, 16].includes(index + 1)
      ? "water"
      : [6, 12].includes(index + 1)
      ? "feedWater"
      : [7, 13].includes(index + 1)
      ? "checkPH"
      : index + 1 === 20
      ? "replaceResevoir"
      : null
  );


// const createVegetativeScheduleSoil = () =>
//   Array.from({ length: 50 }, (_, index) =>
//     [2, 5, 8, 11, 14, 17, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50].includes(index + 1)
//       ? "water"
//       : [8, 17, 35, 47].includes(index + 1)
//       ? "feed"
//       : [19, 40].includes(index + 1)
//       ? "transplant"
//       : index + 1 === 50
//       ? "water-defoliate"
//       : null
//   );


  const createVegetativeScheduleSoilless = () =>
  Array.from({ length: 50 }, (_, index) =>
    [1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 36, 38, 39, 41, 43, 44, 46, 47, 49].includes(index + 1)
      ? "water"
      : [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50].includes(index + 1)
      ? "feed"
      : [20, 40].includes(index + 1)
      ? "transplant"
      : index + 1 === 50
      ? "defoliate"
      : null
    );
  
const createVegetativeScheduleHydroponic = () =>
  Array.from({ length: 50 }, (_, index) =>
    [3, 4, 5, 8, 11, 12, 15, 17, 18, 21, 24, 26, 28, 31, 32, 35, 37, 38, 41, 44, 45, 47, 49, 50].includes(index + 1)
      ? "water"
      : [4, 11, 17, 18, 26, 28, 32, 35, 37, 41, 45, 47].includes(index + 1)
      ? "checkPH"
      : [5, 11, 17, 35, 47].includes(index + 1)
      ? "feed"
      : [21, 41].includes(index + 1)
      ? "replaceResevoir"
      : index + 1 === 49
      ? "defoliate"
      : null
  );


  // const createFloweringScheduleSoil = () =>
  // Array.from({ length: 70 }, (_, index) =>
  //   [3, 6, 9, 15, 18, 21, 27, 30, 33, 36, 39, 42, 48, 51, 54, 57, 60, 63, 66, 69].includes(index + 1)
  //     ? "feed"
  //     : [10, 24, 43, 48, 52, 61, 64, 70].includes(index + 1)
  //     ? "checkPH"
  //     : [2, 5, 12, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68].includes(index + 1)
  //     ? "water"
  //     : index + 1 === 22
  //     ? "defoliate"
  //     : null
  // );
  








const createSeedlingScheduleSoil = () => {
  let seedlingScheduleSoil = [null]
  
  for (let i = 0; i < 20; i++) {
    if (seedlingScheduleSoil[i - 1] === "water" || (seedlingScheduleSoil[i -2] === "water" && seedlingScheduleSoil[i -4] ==="water")) {
      seedlingScheduleSoil.push(null)
    } else if (seedlingScheduleSoil[i - 1] === null) {
      seedlingScheduleSoil.push("water")
    } 
  }
  seedlingScheduleSoil[9] = "checkPH"
  seedlingScheduleSoil[19] = "transplant"
  return seedlingScheduleSoil;
}


const createVegetativeScheduleSoil = () => {
  const vegetativeScheduleSoil = [];

  for (let i = 0; i <= 50; i++) {
    if (
      vegetativeScheduleSoil[i - 1] === "water" ||
      (vegetativeScheduleSoil[i - 2] === "water" &&
        vegetativeScheduleSoil[i - 4] === "water")
    ) {
      vegetativeScheduleSoil.push(null);
    } else if (i === 0 || vegetativeScheduleSoil[i - 1] === null) {
      vegetativeScheduleSoil.push("water");
    } else if ([7, 16, 34, 46].includes(i)) {
      vegetativeScheduleSoil.push("feed");
    } else if ([18, 39].includes(i)) {
      vegetativeScheduleSoil.push("transplant");
    } else if (i === 50) {
      vegetativeScheduleSoil.push("water-defoliate");
    } else {
      vegetativeScheduleSoil.push(null);
    }
  }

  return vegetativeScheduleSoil;
};


const createFloweringScheduleSoil = () => {
  const floweringScheduleSoil = [null];

  for (let i = 0; i < 70; i++) {
    if (floweringScheduleSoil[i - 1] === "water" || (floweringScheduleSoil[i - 2] === "water" && floweringScheduleSoil[i - 4] === "water")) {
      floweringScheduleSoil.push(null);
    } else if (floweringScheduleSoil[i - 1] === null) {
      floweringScheduleSoil.push("water");
    }
  }

  floweringScheduleSoil[9] = "checkPH";
  floweringScheduleSoil[19] = "transplant";

  return floweringScheduleSoil;
};
