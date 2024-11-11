import { useState } from "react";

const BMICalculator = () => {
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [bmi, setBMI] = useState(null);
	const [message, setMessage] = useState("");

	const calculateBMI = (e) => {
		e.preventDefault();

		if (weight && height) {
			const heightInMeters = height / 100;
			const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
			setBMI(bmiValue);

			let bmiMessage = "";
			if (bmiValue < 18.5) {
				bmiMessage = "Underweight";
			} else if (bmiValue >= 18.5 && bmiValue < 24.9) {
				bmiMessage = "Normal weight";
			} else if (bmiValue >= 25 && bmiValue < 29.9) {
				bmiMessage = "Overweight";
			} else {
				bmiMessage = "Obesity";
			}
			setMessage(bmiMessage);
		} else {
			alert("Please enter valid weight and height");
		}
	};

	return (
		<div className="bmi-calculator">
			<h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
				BMI Calculator
			</h1>
			<form onSubmit={calculateBMI} className="max-w-sm mx-auto">
				{/* <div>
					<label htmlFor="weight">Weight (kg): </label>
					<input
						type="number"
						id="weight"
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
						required
					/>
				</div> */}
				<div className="mb-5">
					<label
						htmlFor="name"
						className="block mb-2 text-sm font-medium text-gray-900 "
					>
						Weight (kg):
					</label>
					<input
						value={weight}
						onChange={(e) => setWeight(e.target.value)}
						required
						type="number"
						id="weight"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
						placeholder="50kg"
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="name"
						className="block mb-2 text-sm font-medium text-gray-900 "
					>
						Height (cm):
					</label>
					<input
						value={height}
						onChange={(e) => setHeight(e.target.value)}
						required
						type="number"
						id="height"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
						placeholder="150cm"
					/>
				</div>
				<button
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
					type="submit"
				>
					Calculate BMI
				</button>
			</form>
			{bmi && (
				<div className="text-center my-4">
					<h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl ">
						Your BMI: {bmi}
					</h1>
					<h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl ">
						{message}
					</h1>
					<p></p>
				</div>
			)}
		</div>
	);
};

export default BMICalculator;
