import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import StepWizard from 'react-step-wizard';
import BasicInfoForm from './BasicInfoForm.jsx';
import What from './What.jsx';
import Nav from './Nav.jsx';
import Why from './Why.jsx';
import Where from './Where.jsx';
import When from './When.jsx';
import Who from './Who.jsx';
import How from './How.jsx';
import HowMuch from './HowMuch.jsx';

export default function Wizard() {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
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
                                    </div>
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
                        ></Transition>
                    </Popover>
                </div>
                <div className="bg-indigo-100 p-12 rounded shadow">
                    <StepWizard nav={<Nav />}>
                        <BasicInfoForm />
                        <What />
                        <Why />
                        <Where />
                        <When />
                        <Who />
                        <How />
                        <HowMuch />
                    </StepWizard>
                </div>
            </div>
        </div>
    );
}
