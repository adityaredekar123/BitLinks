// pages/contact.js
import Head from "next/head";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact Us | BitLinks</title>
                <meta
                    name="description"
                    content="Get in touch with the BitLinks team. We're here to help with your questions and feedback."
                />
            </Head>
            <main className="container mx-auto p-8">
                <section className="text-center py-8">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-600">
                        We’d love to hear from you! Fill out the form below or reach us at{" "}
                        <a href="mailto:support@bitlinks.com" className="text-purple-600">
                            support@bitlinks.com
                        </a>.
                    </p>
                </section>

                <section className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                                rows="5"
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </section>
            </main>
        </>
    );
};

export default Contact;
