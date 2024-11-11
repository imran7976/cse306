import TestCard from "../dashboard/Home/TestCard";
import { useEffect, useState } from "react";

const FeaturedTests = () => {

    const [tests, setTests] = useState([]);
 
    useEffect(() => {
		const fetchTests = async () => {
			try {
				const res = await fetch("/test.json");
				const data = await res.json();
				setTests(data);
			} catch (error) {
				console.error("Error fetching test data:", error);
			}
		};

		fetchTests();
	}, []);
	return (
		<>
			<h2 className="text-4xl text-center my-10 font-extrabold dark:text-white">
				Our Most Popular Tests
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">
				{tests.map((test) => (
					<TestCard key={test._id} test={test}></TestCard>
				))}
			</div>
		</>
	);
};

export default FeaturedTests;