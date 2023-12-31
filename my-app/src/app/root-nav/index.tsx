'use client';

import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ScrollText, X, Home, MenuSquare } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { classNames } from '@/lib/utils';
import { PageMoonIcon } from '@/components/ui/pagemoon-icon';
import { buttonVariants } from '@/components/ui/button';

interface Props {
    children: React.ReactNode;
}

export const Navigation: React.FC<Props> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const pathname = usePathname();

    const [navItems, setNavItems] = useState([
        {
            name: 'Home',
            href: '/',
            icon: Home,
            current: false,
        },
        {
            name: 'Reviews',
            href: '/reviews',
            icon: ScrollText,
            current: false,
        },
    ]);

    React.useEffect(() => {
        setNavItems(
            navItems.map((item) => ({
                ...item,
                current: item.href === pathname,
            })),
        );
        setSidebarOpen(false);
    }, [pathname]);

    return (
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as='div'
                    className='relative z-50 lg:hidden'
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter='transition-opacity ease-linear duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition-opacity ease-linear duration-300'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-slate-100/80' />
                    </Transition.Child>

                    <div className='fixed inset-0 flex'>
                        <Transition.Child
                            as={Fragment}
                            enter='transition ease-in-out duration-300 transform'
                            enterFrom='-translate-x-full'
                            enterTo='translate-x-0'
                            leave='transition ease-in-out duration-300 transform'
                            leaveFrom='translate-x-0'
                            leaveTo='-translate-x-full'
                        >
                            <Dialog.Panel className='relative mr-16 flex w-full max-w-xs flex-1'>
                                <Transition.Child
                                    as={Fragment}
                                    enter='ease-in-out duration-300'
                                    enterFrom='opacity-0'
                                    enterTo='opacity-100'
                                    leave='ease-in-out duration-300'
                                    leaveFrom='opacity-100'
                                    leaveTo='opacity-0'
                                >
                                    <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                                        <button
                                            type='button'
                                            className='-m-2.5 p-2.5'
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                        >
                                            <span className='sr-only'>
                                                Close sidebar
                                            </span>
                                            <X
                                                className='h-6 w-6'
                                                aria-hidden='true'
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-slate-100 px-6 pb-2 ring-1 ring-white/10'>
                                    <div className='flex h-16 shrink-0 items-center'>
                                        <PageMoonIcon className='h-8 w-auto' />
                                    </div>
                                    <nav className='flex flex-1 flex-col'>
                                        <ul className='flex flex-1 flex-col gap-y-7'>
                                            <li>
                                                <ul className='-mx-2 space-y-1'>
                                                    {navItems.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                className={classNames(
                                                                    buttonVariants(
                                                                        {
                                                                            size: 'default',
                                                                            variant:
                                                                                'default',
                                                                        },
                                                                    ),
                                                                    item.current
                                                                        ? 'bg-secondary hover:bg-secondary/80'
                                                                        : '',
                                                                    'w-full justify-between',
                                                                )}
                                                            >
                                                                <item.icon
                                                                    className='mr-3 h-6 w-6 shrink-0 stroke-1'
                                                                    aria-hidden='true'
                                                                />
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-56 lg:flex-col'>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-slate-100 px-6'>
                    <div className='flex h-16 shrink-0 items-center'>
                        <PageMoonIcon className='h-8 w-auto' />
                    </div>
                    <nav
                        className='flex flex-1 flex-col items-start
                    '
                    >
                        <ul className='flex flex-1 flex-col gap-y-7'>
                            <li>
                                <ul className='space-y-3'>
                                    {navItems.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={classNames(
                                                    buttonVariants({
                                                        size: 'default',
                                                        variant: 'default',
                                                    }),
                                                    item.current
                                                        ? 'bg-secondary hover:bg-secondary/80'
                                                        : '',
                                                    'w-full justify-between',
                                                )}
                                            >
                                                <item.icon
                                                    className='mr-3 h-6 w-6 shrink-0 stroke-1'
                                                    aria-hidden='true'
                                                />
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='sticky top-0 z-40 flex items-center gap-x-6 bg-slate-100 px-4 py-4 shadow-sm sm:px-6 lg:hidden'>
                <button
                    type='button'
                    className='-m-2.5 p-2.5 text-gray-400 lg:hidden'
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className='sr-only'>Open sidebar</span>
                    <MenuSquare className='h-6 w-6' aria-hidden='true' />
                </button>
                <div className='flex-1 text-sm leading-6 text-white'>
                    PageMoon
                </div>
            </div>

            <main className='py-10 lg:pl-72'>
                <div className='px-4 sm:px-6 lg:px-8'>{children}</div>
            </main>
        </div>
    );
};
