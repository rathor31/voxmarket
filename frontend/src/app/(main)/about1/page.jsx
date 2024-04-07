import React from 'react';

const about1 = () => {
    const feedbacks = [
        {
            id: 1,
            name: 'John Doe',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod tellus id justo tristique, a cursus lorem commodo.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            feedback: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec sagittis dui.'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            feedback: 'Nullam et elit eget lectus euismod fermentum in a tellus. Fusce ultrices euismod odio, vel egestas urna commodo in.'
        },
        {
            id: 4,
            name: 'Bob Brown',
            feedback: 'Vestibulum et laoreet elit, vitae iaculis nulla. Morbi eget lobortis dui. In consequat odio at tellus dictum volutpat.'
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-gray-800 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod tellus id justo tristique, a cursus lorem commodo. Proin non ex nunc. Donec maximus, enim et lobortis eleifend, mi lectus ullamcorper tellus, nec consequat neque mi at nunc.</p>

                <h2 className="text-2xl font-bold mb-4">Customer Feedback</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {feedbacks.map((feedback) => (
                        <div key={feedback.id} className="bg-white p-6 shadow-md rounded">
                            <p className="text-gray-800 mb-4">{feedback.feedback}</p>
                            <p className="text-gray-600 font-semibold">{feedback.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default about1;
