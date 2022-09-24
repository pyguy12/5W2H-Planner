import { useSelector, useDispatch } from 'react-redux';
import { updateProperty } from '../wizardSlice';

export default function BasicInfoForm(props) {
    const dispatch = useDispatch();
    return (
        <>
            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Project Information</h3>
                            <p className="mt-1 text-sm text-gray-600">We do not store any of your information.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="first-name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                First name
                                            </label>
                                            <input
                                                onChange={(e) =>
                                                    dispatch(
                                                        updateProperty({
                                                            updateType: 'firstName',
                                                            input: e.target.value,
                                                        })
                                                    )
                                                }
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="last-name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Last name
                                            </label>
                                            <input
                                                onChange={(e) =>
                                                    dispatch(
                                                        updateProperty({
                                                            updateType: 'lastName',
                                                            input: e.target.value,
                                                        })
                                                    )
                                                }
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label
                                                htmlFor="email-address"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Project Name
                                            </label>
                                            <input
                                                onChange={(e) =>
                                                    dispatch(
                                                        updateProperty({
                                                            updateType: 'projectName',
                                                            input: e.target.value,
                                                        })
                                                    )
                                                }
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="country"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Organization Name
                                            </label>
                                            <input
                                                onChange={(e) =>
                                                    dispatch(
                                                        updateProperty({
                                                            updateType: 'organization',
                                                            input: e.target.value,
                                                        })
                                                    )
                                                }
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                props.nextStep();
                            }}
                            className="mt-4 float-right inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Next Step
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>
        </>
    );
}
