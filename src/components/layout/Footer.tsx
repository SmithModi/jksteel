import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, ChevronRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {


    const openWhatsApp = () => {
        // JK Steel WhatsApp number
        window.open('https://wa.me/919510174496', '_blank');
    };

    return (
        <footer className="relative pt-20 pb-10">




            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Logo and About */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/" className="inline-block group">
                            <img
                                src="/jksteellogo.png"
                                alt="JK Steel Logo"
                                className="h-16 mb-3 transition-transform duration-300 group-hover:scale-105 object-contain"
                            />
                        </Link>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Premium kitchenware and household essentials designed for modern living. Elevating your culinary experience since establishment.
                        </p>
                        <div className="flex space-x-3 pt-2">
                            <motion.a
                                href="#"
                                className="bg-white/5 hover:bg-purple-600 border border-white/10 text-white p-2.5 rounded-full transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                                aria-label="Facebook"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Facebook size={18} />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="bg-white/5 hover:bg-purple-600 border border-white/10 text-white p-2.5 rounded-full transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                                aria-label="Instagram"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Instagram size={18} />
                            </motion.a>
                            <motion.button
                                onClick={openWhatsApp}
                                className="bg-white/5 hover:bg-green-600 border border-white/10 text-white p-2.5 rounded-full transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                                aria-label="WhatsApp"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <MessageSquare size={18} />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-playfair font-semibold text-white border-b border-purple-500/30 pb-3 mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Products', path: '/products' },
                                { name: 'Contact', path: '/contact' }
                            ].map((item) => (
                                <motion.li
                                    key={item.name}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        to={item.path}
                                        className="text-slate-400 hover:text-purple-400 transition-colors flex items-center group text-sm"
                                    >
                                        <ChevronRight size={16} className="mr-2 text-purple-500/60 group-hover:text-purple-400 transition-colors" />
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Products */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-playfair font-semibold text-white border-b border-purple-500/30 pb-3 mb-4">
                            Our Products
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Storage Solutions', path: '/products' },
                                { name: 'Premium Cookware', path: '/products' },
                                { name: 'Kitchen Tools', path: '/products' },
                                { name: 'Household Essentials', path: '/products' },
                                { name: 'Dining Accessories', path: '/products' }
                            ].map((item) => (
                                <motion.li
                                    key={item.name}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        to={item.path}
                                        className="text-slate-400 hover:text-purple-400 transition-colors flex items-center group text-sm"
                                    >
                                        <ChevronRight size={16} className="mr-2 text-purple-500/60 group-hover:text-purple-400 transition-colors" />
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-xl font-playfair font-semibold text-white border-b border-purple-500/30 pb-3 mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start group">
                                <MapPin size={20} className="mt-1 mr-3 shrink-0 text-purple-500 group-hover:scale-110 transition-transform" />
                                <span className="text-slate-400 text-sm leading-relaxed">
                                    Jay Khodiyar Krupa, Plot no 2, Jay sardar industrial area, near kothariya railway station, Rajkot - 360002
                                </span>
                            </li>
                            <li className="flex items-center group">
                                <Phone size={18} className="mr-3 shrink-0 text-purple-500 group-hover:scale-110 transition-transform" />
                                <a
                                    href="tel:+916353786749"
                                    className="text-slate-400 hover:text-purple-400 transition-colors font-medium text-sm"
                                >
                                    +91 6353786749
                                </a>
                            </li>
                            <li className="flex items-center group">
                                <Mail size={18} className="mr-3 shrink-0 text-purple-500 group-hover:scale-110 transition-transform" />
                                <a
                                    href="mailto:jaykhodiyarkrupa@gmail.com"
                                    className="text-slate-400 hover:text-purple-400 transition-colors font-medium text-sm"
                                >
                                    jaykhodiyarkrupa@gmail.com
                                </a>
                            </li>
                            <li>
                                <motion.button
                                    onClick={openWhatsApp}
                                    className="mt-2 flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-medium border border-green-500/30 text-sm"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <MessageSquare size={16} /> Chat on WhatsApp
                                </motion.button>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    className="border-t border-white/10 mt-12 pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-slate-500 text-sm">
                            &copy; {new Date().getFullYear()} JK Steel Kitchenware. All rights reserved.
                        </p>

                        {/* Policy links */}
                        <div className="flex gap-6 text-sm">
                            <Link
                                to="/"
                                className="text-slate-500 hover:text-purple-400 transition-colors duration-300"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/"
                                className="text-slate-500 hover:text-purple-400 transition-colors duration-300"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
