
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Recommendation.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";


const Recommendation = () => {

    const [recs, setRecs] = useState([]);
 
    useEffect(() => {
		const fetchTests = async () => {
			try {
				const res = await fetch("/recommendation.json");
				const data = await res.json();
				setRecs(data);
			} catch (error) {
				console.error("Error fetching test data:", error);
			}
		};

		fetchTests();
	}, []);


	// const axiosCommon = useAxiosCommon();
	// const { data: recs = [], isLoading } = useQuery({
	// 	queryKey: ["Recommedation"],
	// 	queryFn: async () => {
	// 		const { data } = await axiosCommon.get("/recommendations");
	// 		// console.log(data);
	// 		return data;
	// 	},
	// });
	// // console.log(recs);
	// if (isLoading) {
	// 	return <LoadingSpinner />;
	// }
	return (
		<div>
			<h2 className="text-4xl text-center my-10 font-extrabold dark:text-white">
				Personalized Health Recommendations
			</h2>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{recs.map((rec) => (
					<SwiperSlide key={rec._id}>
						<div
							key={rec.id}
							className={`bg-center bg-no-repeat py-10 bg-gray-500 bg-blend-multiply bg-cover`}
							style={{
								backgroundImage: `url(${rec.image})`,
							}}
						>
							{/* <img
								src={rec.image}
								alt={rec.title}
								className="w-full h-48 object-cover rounded"
							/> */}
							<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white text-center md:text-5xl lg:text-6xl">
								{rec.title}
							</h1>
							<p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-8 lg:px-16">
								{rec.description}
							</p>
							<p className="mb-4 text-base font-normal text-gray-300 lg:text-xl sm:px-8 lg:px-16">
								Type: {rec.type}
							</p>
							<p className="mb-4 text-base font-normal text-gray-300 lg:text-xl sm:px-8 lg:px-16">
								Date: {new Date(rec.date).toLocaleDateString()}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Recommendation;