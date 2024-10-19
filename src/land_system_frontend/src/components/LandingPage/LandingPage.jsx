import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; 
import blockchain from '../../images/blockchain.jpg'
import deed from "../../images/deed2.jpg"
import {getPrincipal} from '../../features/auth/Account'
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"

const LandingPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);

    const handleLandownerLogin = async () => {
        
        setIsLoading(true);
        // setTimeout(() => {
            
        //     window.location.href = '/landowner';
        // }, 2000); 
        const result = await dispatch(getPrincipal());
        if (getPrincipal.fulfilled.match(result)) {
           setIsLoading(false)
           navigate('/landowner')
    } else {
        alert("Please create an internet identity to access our system")
        setIsLoading(false)
    };
}

    const handleGovernmentLogin = async () => {
       
        setIsLoading(true);
       
        const result = await dispatch(getPrincipal());
        if (getPrincipal.fulfilled.match(result)) {
           setIsLoading(false)
           navigate('/government')
    } else {
        alert("Please create an internet identity to access our system")
        setIsLoading(false)
    };
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#FAF3E0]">
                <div className="loader border-4 border-dotted border-[#2E7D32] rounded-full w-16 h-16 animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF3E0] p-5">
            <div className="w-full max-w-5xl text-center">
                <h1 className="text-4xl font-bold text-[#2E7D32] mb-4">
                    Revolutionizing Land Ownership with Blockchain
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    A secure, transparent, and efficient platform for land registration and ownership verification.
                </p>

                <div className="relative mb-6 w-full h-64">
                    <img 
                        src={deed}
                        alt="land"
                        className="absolute inset-0 w-full h-full object-fit rounded-lg shadow-lg"
                    />
                    <img 
                        src={blockchain}
                        alt="Blockchain"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg opacity-30" 
                    />
                </div>

                {/* Button Section */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                    <button 
                        className="bg-[#2E7D32] text-white font-semibold py-2 px-4 rounded shadow hover:bg-[#256029] transition"
                        onClick={handleLandownerLogin}
                        disabled={isLoading}
                    >
                        Login as Landowner
                    </button>
                    <button 
                        className="bg-[#8B4513] text-white font-semibold py-2 px-4 rounded shadow hover:bg-[#6F3F2D] transition"
                        onClick={handleGovernmentLogin}
                        disabled={isLoading}
                    >
                        Login as Government Official
                    </button>
                </div>

                <div className="mt-8 text-gray-600">
                    <p>Learn more about how our platform works:</p>
                    <a 
                        href="#learn-more" 
                        className="text-[#42A5F5] hover:underline"
                    >
                        Learn More
                    </a>
                </div>

                {/* New Information Sections */}
                <section id="learn-more" className="mt-12">
                    <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">Why Choose Our Platform?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#2E7D32]">Transparency</h3>
                            <p className="text-gray-600">
                                Our blockchain technology ensures that all land transactions are publicly accessible, reducing fraud and increasing trust.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#2E7D32]">Security</h3>
                            <p className="text-gray-600">
                                Utilizing advanced cryptography, our platform secures all sensitive data, ensuring your information is protected.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#2E7D32]">Efficiency</h3>
                            <p className="text-gray-600">
                                Streamline land registration and transfer processes, significantly reducing time and paperwork involved.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#2E7D32]">Decentralization</h3>
                            <p className="text-gray-600">
                                Our decentralized model removes the need for intermediaries, lowering costs and increasing accessibility for all users.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold text-[#2E7D32] mb-4">Get Started Today!</h2>
                    <p className="text-gray-600 mb-6">
                        Join our community of landowners, buyers, and government officials who are transforming land ownership in Kenya. Register now to experience the future of land management!
                    </p>
                    <button className="bg-[#2E7D32] text-white font-semibold py-2 px-4 rounded shadow hover:bg-[#256029] transition">
                        Register Now
                    </button>
                </section>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#2E7D32] text-white text-center py-8 mt-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                        <div className="text-sm">
                            <p>&copy; pawainnovations 2024. All rights reserved.</p>
                        </div>
                        <div className="flex space-x-4 mt-2 sm:mt-0">
                            <a href="/" className="hover:underline">About Us</a>
                            <a href="/" className="hover:underline">Contact</a>
                            <a href="/" className="hover:underline">Terms of Service</a>
                            <a href="/" className="hover:underline">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4 mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </footer>

            
        </div>
    );
};

export default LandingPage;
