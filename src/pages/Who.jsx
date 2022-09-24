import { useSelector, useDispatch } from 'react-redux';
import { updateProperty } from '../wizardSlice';

export default function Who(props) {
    const dispatch = useDispatch();
    return (
        <div className="bg-slate mt-10 px-2">
            <h1 className="font-bold text-4xl">Who?</h1>
            <div className="mt-2 p-4 rounded bg-indigo-200">
                <p>
                    A process for resolving a problem, putting a solution into practice, or achieving a goal is created
                    by providing a complete response to this question. In this step, a team explains every action that
                    must be taken and assigns it to particular people. A project strategy, framework, or flowchart may
                    be useful at this point. The team then decides the approaches and software to utilize to fix the
                    problem.
                </p>
                <br />
                <p className="font-bold">
                    Here's an Example: Sales manager and special software analysis team collaborating.
                </p>
            </div>
            <div className="mt-4">
                <textarea
                    className="rounded w-full p-4"
                    onChange={(e) =>
                        dispatch(
                            updateProperty({
                                updateType: 'whoInput',
                                input: e.target.value,
                            })
                        )
                    }
                ></textarea>
            </div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    props.previousStep();
                }}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Previous Step
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    props.nextStep();
                }}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 float-right"
            >
                Next Step
            </button>
        </div>
    );
}
