import React, { useState, useEffect } from 'react'
import logo from "../../assets/logo/logo.svg"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

// Icons from React Icons
import { GoHomeFill } from "react-icons/go";
import { AiFillDashboard } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoPersonSharp, IoSettings } from "react-icons/io5";


// Mantine Menu
import { Menu } from '@mantine/core';
import { Avatar } from '@mantine/core';

// Mantine Burger for Drawer
import { useDisclosure } from '@mantine/hooks';
import { Burger, Drawer } from '@mantine/core';


const Navbar = () => {

    // Get the current location
    let location = useLocation();

    // Set the active link
    const [active, setActive] = useState('home');

    // State of Drawer
    const [opened, { toggle }] = useDisclosure();

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setActive('home');
                break;
            case '/dashboard':
                setActive('dashboard');
                break;
            default:
                setActive('home');
                break;
        }
    }
        , [location.pathname])

    return (
        <div className="navbar">
            <aside className="md:flex hidden h-screen w-fit flex-col items-center border-r border-gray-200 bg-white p-2">
                <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
                    <img src={logo} alt='Company Logo' />
                </div>
                <nav className="flex flex-1 flex-col gap-y-4 pt-10 w-full">
                    <Link to="/" className={`rounded-lg p-2 ${active === "home" ? "text-primary bg-gray-100 hover:bg-gray-50" : "hover:text-primary"} flex items-center gap-2 justify-center w-full`}>
                        <GoHomeFill className='text-[20px]' />
                        <span>
                            Home
                        </span>

                    </Link>
                    <Link to="/dashboard" className={`rounded-lg p-2 ${active === "dashboard" ? "text-primary bg-gray-100 hover:bg-gray-50" : "hover:text-primary"} flex items-center gap-2 justify-center w-full`}>
                        <AiFillDashboard className='text-[20px]' />

                        <span>
                            Dashboard
                        </span>
                    </Link>
                </nav>
                <div className='mb-10'>
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <button
                            >
                                <Avatar
                                    size="lg"
                                    radius="100%"
                                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                                />
                            </button>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>User Profile</Menu.Label>
                            <Menu.Item leftSection={<IoPersonSharp className='text-[20px]' />}>
                                Profile
                            </Menu.Item>
                            <Menu.Item leftSection={<IoSettings className='text-[20px]' />}>
                                Settings
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item leftSection={<FiLogOut className='text-[20px]' />}>
                                Logout
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </aside>
            <nav className='md:hidden flex justify-between border-b border-gray-200 p-5 h-[80px]'>
                <Drawer opened={opened} onClose={toggle} title="Navigation Links" size='xs'>
                    <Link to="/" className={`rounded-lg p-2 ${active === "home" ? "text-primary bg-gray-100 hover:bg-gray-50" : "hover:text-primary"} flex items-center gap-2 justify-center w-full`} onClick={toggle}>
                        <GoHomeFill className='text-[20px]' />
                        <span>
                            Home
                        </span>

                    </Link>
                    <Link to="/dashboard" className={`mt-5 rounded-lg p-2 ${active === "dashboard" ? "text-primary bg-gray-100 hover:bg-gray-50" : "hover:text-primary"} flex items-center gap-2 justify-center w-full`} onClick={toggle}>
                        <AiFillDashboard className='text-[20px]' />

                        <span>
                            Dashboard
                        </span>
                    </Link>
                </Drawer>
                <Burger opened={opened} onClick={toggle} aria-label="Toggle Drawer" />
                <img src={logo} alt='Company Logo' />
                <div className=''>
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <Avatar
                                size="md"
                                radius="100%"
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                            />
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>User Profile</Menu.Label>
                            <Menu.Item leftSection={<IoPersonSharp className='text-[20px]' />}>
                                Profile
                            </Menu.Item>
                            <Menu.Item leftSection={<IoSettings className='text-[20px]' />}>
                                Settings
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item leftSection={<FiLogOut className='text-[20px]' />}>
                                Logout
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </nav>
        </div>
    )
}

export default Navbar