import { useSelector, useDispatch } from 'react-redux';
import { updateProperty } from '../wizardSlice';

export default function Where(props) {
    const dispatch = useDispatch();
    return (
        <div className="bg-slate mt-10 px-2">
            <h1 className="font-bold text-4xl">Where?</h1>
            <div className="mt-2 p-4 rounded bg-indigo-200">
                <p>
                    Clarifying the location of a problem or the potential location of a remedy is part of this phase. It
                    identifies the location where a person can find a solution to an issue. The person conducting the
                    analysis, for instance, might identify the machine on which the issue is occurring and the
                    environment in which it is occurring. If it's a customer issue, think about pinpointing the precise
                    client location and seeing if there are any other issues there. Finding the potential locations for
                    the actions necessary to accomplish the goal may be a step in the goal-setting process. This section
                    outlines possible locations for project meetings and tasks, such as when a project spans several
                    areas or departments.
                </p>
                <br />
                <p className="font-bold">Here's an Example: In the sales department.</p>
            </div>
            <div className="mt-4">
                <textarea
                    className="rounded w-full p-4"
                    onChange={(e) =>
                        dispatch(
                            updateProperty({
                                updateType: 'whereInput',
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
