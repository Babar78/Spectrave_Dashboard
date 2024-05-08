import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'

// react icons
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className='bg-gray-100 pt-16'>
            <div className="content_container">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <Link to="/">
                            <img src={logo} alt='Company Logo' />
                        </Link>
                        <div className="mt-6 lg:max-w-sm">
                            <p className="text-sm text-gray-800">
                                At Spectrave, we are committed to revolutionizing the future of energy through innovative solar solutions. With a focus on sustainability, we strive to harness the power of the sun to create a cleaner, and greener world. <br /><br />Our mission is to provide reliable and efficient solar energy systems that empower communities and businesses to embrace renewable energy alternatives.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide text-gray-900">
                            Contacts
                        </p>
                        <div className="flex">
                            <p className="mr-1 text-gray-800">Phone:</p>
                            <Link
                                to="#"
                                aria-label="Our phone"
                                title="Our phone"
                                className="transition-colors duration-300 text-gray-400 hover:text-gray-600"
                            >
                                850-123-5021
                            </Link>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-gray-800">Email:</p>
                            <Link
                                to="mailto:#"
                                aria-label="Our email"
                                title="Our email"
                                className="transition-colors duration-300 text-gray-400 hover:text-gray-600"
                            >
                                info@spectrave.gmail
                            </Link>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-gray-800">Address:</p>
                            <Link
                                to="#"
                                target="_blank"
                                aria-label="Our address"
                                title="Our address"
                                className="transition-colors duration-300 text-gray-400 hover:text-gray-600"
                            >
                                312 Lovely Street, NY
                            </Link>
                        </div>
                    </div>
                    <div>
                        <span className="text-base font-bold tracking-wide text-gray-900">
                            Social
                        </span>
                        <div className="flex items-center mt-1 space-x-3">

                            <Link
                                to="#"
                                className="text-gray-400 transition-colors duration-300 hover:text-gray-600"
                            >
                                <FaSquareXTwitter size={24} />
                            </Link>

                            <Link
                                to="#"
                                className="text-gray-400 transition-colors duration-300 hover:text-gray-600"
                            >
                                <RiInstagramFill size={24} />
                            </Link>
                            <Link
                                to="#"
                                className="text-gray-400 transition-colors duration-300 hover:text-gray-600"
                            >
                                <FaSquareFacebook size={24} />
                            </Link>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            Join us in our journey towards a brighter, more sustainable tomorrow.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                    <p className="text-sm text-gray-600">
                        © Copyright 2024 Spectrave Inc. All rights reserved.
                    </p>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <Link
                                to="#"
                                className="text-sm text-gray-400 transition-colors duration-300 hover:text-gray-600"
                            >
                                F.A.Q
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="text-sm text-gray-400 transition-colors duration-300 hover:text-gray-600"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="text-sm text-gray-400 transition-colors duration-300 hover:text-gray-600"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer