import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
    BoltIcon,
    UserIcon,
    QuestionMarkCircleIcon,
    ClockIcon,
    MapPinIcon,
    ClipboardDocumentListIcon,
    CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

import { Link } from 'react-router-dom';

const navigation = [
    { name: 'What is a 5W2H?', href: '#what' },
    { name: 'How it works', href: '#how' },
];

const features = [
    {
        name: 'What?',
        description:
            'The first step of the 5W2H process is to respond to this question, during which a team or expert identifies the issue or objective. What the 5W2H analysis seeks to resolve is outlined in the response.',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Why?',
        description:
            'Identifying the causes of a problem or the significance of a goal is the next phase in this process. If you utilize this question to address a problem, try to clarify why it exists by figuring out its root cause, if at all possible.',
        icon: BoltIcon,
    },
    {
        name: 'When?',
        description:
            'This stage comprises determining the time frame within which a team can put a solution to an issue in place or carry out each action required to reach a goal. Setting delivery deadlines for each project phase may be a part of this process.',
        icon: ClockIcon,
    },
    {
        name: 'Where?',
        description:
            'Clarifying the location of a problem or the potential location of a remedy is part of this phase. It identifies the location where a person can find a solution to an issue.',
        icon: MapPinIcon,
    },
    {
        name: 'Who?',
        description:
            'This step is used to describe who is affected by the project and also who is contributing towards the project completion.',
        icon: UserIcon,
    },
    {
        name: 'How?',
        description:
            'Answering this question thoroughly creates a process for resolving an issue, implementing a solution or achieving a goal.',
        icon: ClipboardDocumentListIcon,
    },
    {
        name: 'How Much?',
        description: `A team will estimate the project's anticipated budget during this stage. A team or single individuals can estimate the expenditures for each stage of their project using the previously mentioned information.`,
        icon: CurrencyDollarIcon,
    },
];

export default function Home() {
    return (
        <div>
            <div className="relative overflow-hidden bg-white">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                        <svg
                            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <Popover>
                            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                                <nav
                                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                                    aria-label="Global"
                                >
                                    <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                                        <div className="flex w-full items-center justify-between md:w-auto">
                                            <a href="/#" className="font-bold text-indigo-600">
                                                5W2H Planner
                                            </a>
                                            <div className="-mr-2 flex items-center md:hidden">
                                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Open main menu</span>
                                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="font-medium text-gray-500 hover:text-gray-900"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </nav>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                                >
                                    <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                                        <div className="flex items-center justify-between px-5 pt-4">
                                            <div>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close main menu</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="space-y-1 px-2 pt-2 pb-3">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">5W2H Planning Tool</span>{' '}
                                    <span className="block text-indigo-600 xl:inline">Free to use</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                    Generate a 5W2H document quickly and easily using this step-by-step wizard which
                                    walks you through the entire process. At the end, just click a button for a
                                    formatted ready-to-use 5W2H.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link
                                            to="/wizard"
                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                                        >
                                            Get started
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a
                                            href="#what"
                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                        alt=""
                    />
                </div>
            </div>
            <div className="bg-s bg-slate-50 py-12" id="what">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-lg font-semibold text-indigo-600">What is 5W2H?</h2>
                        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            A better way to plan projects
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            5W2H is a tool that provides guiding questions when assessing a process or problem. It
                            consists of 5 W's and 2 H's.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative">
                                    <dt>
                                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                                            {feature.name}
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <section>
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center">
                        <div class="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
                            <h2 class="text-3xl font-bold sm:text-4xl" id="how">
                                How it works
                            </h2>

                            <p class="mt-4 text-gray-600">
                                Using this application is simple. Just click the "Get Started" button below to be
                                transported to our wizard which will walk you through a step-by-step process for
                                creating your very own 5W2H document. Each step will have tips along the way to help you
                                generate the best document possible. At the end, you just have to click a button and
                                your document will be downloaded pre-formatted for you in a .docx file.
                            </p>

                            <Link
                                class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                                to="/wizard"
                            >
                                <span class="text-sm font-medium"> Get Started </span>

                                <svg
                                    class="w-5 h-5 ml-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                        </div>

                        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <a
                                class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                                href="/#"
                            >
                                <span class="inline-block p-3 rounded-lg bg-gray-50 text-lg font-bold">Step 1</span>

                                <h6 class="mt-2 font-bold">Read the Tips</h6>

                                <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                    Read the tips our wizard shows you.
                                </p>
                            </a>

                            <a
                                class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                                href="/#"
                            >
                                <span class="inline-block p-3 rounded-lg bg-gray-50 text-lg font-bold">Step 2</span>

                                <h6 class="mt-2 font-bold">Fill out the forms</h6>

                                <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                    Fill out the forms on our wizard.
                                </p>
                            </a>

                            <a
                                class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
                                href="/#"
                            >
                                <span class="inline-block p-3 rounded-lg bg-gray-50 text-lg font-bold">Step 3</span>

                                <h6 class="mt-2 font-bold">Download</h6>

                                <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                                    Download your custom document.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="bg-slate-50">
                <div class="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <div class="flex justify-center text-indigo-600 sm:justify-start font-bold">5W2H Planner</div>

                        <p class="mt-4 text-sm text-center text-gray-500 lg:text-right lg:mt-0">
                            Created by Warren Wu for CS 3162 Section 051.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
