
import PropTypes from "prop-types";

const TestCard = ({ test }) => {
	return (
        <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg">
        <img
            className="w-full h-48 object-cover"
            src={test.image}
            alt={`${test.name}`}
        />
        <div className="p-4">
            <h5 className="text-xl font-bold text-gray-900 truncate">
                {test.name}
            </h5>
            <p className="text-sm text-gray-600 mt-1">
                Appointment Date: {new Date(test.date).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                {test.description}
            </p>
            <a
                href={`/test/${test._id}`}
                className="block mt-4 text-center text-sm font-medium text-blue-600 hover:text-blue-700"
            >
                Read more
            </a>
        </div>
    </div>  
	);
};

TestCard.propTypes = {
	test: PropTypes.object,
};

export default TestCard;