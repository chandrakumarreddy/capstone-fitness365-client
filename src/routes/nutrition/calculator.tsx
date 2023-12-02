// @ts-nocheck

import { useState } from "react";
import Header from "../../components/Header";
import { Card } from "antd";

const ResultsDisplay = ({ results }) => {
  return (
    <div className="flex flex-col border-blue-500 border-2 w-96 overflow-hidden rounded-lg">
      <Card title={<h3 className="text-lg font-medium">Results</h3>}>
        <div className="text-base font-medium grdi gap-4">
          <p>Daily Calories: {results.dailyCalories}</p>
          <p>Carbohydrates: {results.carbs}g</p>
          <p>Protein: {results.protein}g</p>
          <p>Fats: {results.fat}g</p>
        </div>
      </Card>
    </div>
  );
};

const initialState = {
  age: "",
  gender: "",
  height: "",
  weight: "",
  activityLevel: "",
  goal: "",
};

const UserInputForm = ({ userData, setUserData, onCalculate, resetForm }) => {
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCalculate();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
      <div className="grid gap-5 grid-cols-2">
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={userData.age}
          onChange={handleChange}
          className="rounded-lg"
        />
        <select
          name="gender"
          value={userData.gender}
          onChange={handleChange}
          className="rounded-lg"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="number"
          name="height"
          placeholder="Height (cm)"
          value={userData.height}
          onChange={handleChange}
          className="rounded-lg"
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={userData.weight}
          onChange={handleChange}
          className="rounded-lg"
        />
        <select
          name="activityLevel"
          value={userData.activityLevel}
          onChange={handleChange}
          className="rounded-lg"
        >
          <option value="">Activity Level</option>
          <option value="sedentary">Sedentary</option>
          <option value="light">Light Activity</option>
          <option value="moderate">Moderate Activity</option>
          <option value="active">Active</option>
          <option value="veryActive">Very Active</option>
        </select>
        <select
          name="goal"
          value={userData.goal}
          onChange={handleChange}
          className="rounded-lg"
        >
          <option value="">Goal</option>
          <option value="lose">Weight Loss</option>
          <option value="maintain">Maintain Weight</option>
          <option value="gain">Weight Gain</option>
        </select>
      </div>
      <div className="flex justify-center gap-6">
        <button
          type="submit"
          className="rounded-lg bg-blue-500 text-white py-2 px-4 w-fit"
        >
          Calculate
        </button>
        <button
          type="reset"
          className="rounded-lg border-gray-500 py-2 px-4 w-fit border"
          onClick={resetForm}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

const Calculator = () => {
  const [userData, setUserData] = useState(initialState);
  const [results, setResults] = useState(null);

  const resetForm = () => {
    setUserData(initialState);
    setResults(null);
  };

  const handleCalculation = () => {
    // BMR Calculation
    let BMR;
    if (userData.gender === "male") {
      BMR =
        88.362 +
        13.397 * userData.weight +
        4.799 * userData.height -
        5.677 * userData.age;
    } else {
      BMR =
        447.593 +
        9.247 * userData.weight +
        3.098 * userData.height -
        4.33 * userData.age;
    }

    // Activity Level Adjustment
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };
    const dailyCalories = BMR * activityMultipliers[userData.activityLevel];

    // Macronutrient Calculations
    let macros;
    switch (userData.goal) {
      case "lose":
        macros = { carbs: 40, protein: 35, fat: 25 };
        break;
      case "maintain":
        macros = { carbs: 50, protein: 30, fat: 20 };
        break;
      case "gain":
        macros = { carbs: 50, protein: 20, fat: 30 };
        break;
      default:
        macros = { carbs: 50, protein: 30, fat: 20 };
    }

    const carbsGrams = (dailyCalories * (macros.carbs / 100)) / 4;
    const proteinGrams = (dailyCalories * (macros.protein / 100)) / 4;
    const fatGrams = (dailyCalories * (macros.fat / 100)) / 9;

    setResults({
      dailyCalories: dailyCalories.toFixed(0),
      carbs: carbsGrams.toFixed(0),
      protein: proteinGrams.toFixed(0),
      fat: fatGrams.toFixed(0),
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full">
      <UserInputForm
        userData={userData}
        setUserData={setUserData}
        onCalculate={handleCalculation}
        resetForm={resetForm}
      />
      {results && <ResultsDisplay results={results} />}
    </div>
  );
};

export default function NutritionCalculator() {
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <div className="flex gap-8 flex-col flex-1 items-start my-6 w-full">
          <h3 className="text-2xl font-bold text-center w-full text-orange-500">
            Calorie and Macronutrient Calculator
          </h3>
          <Calculator />
        </div>
      </main>
    </>
  );
}
