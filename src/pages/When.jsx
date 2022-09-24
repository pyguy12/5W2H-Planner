import { useSelector, useDispatch } from 'react-redux';
import { updateProperty } from '../wizardSlice';

export default function When(props) {
    const dispatch = useDispatch();
    return (
        <div className="bg-slate mt-10 px-2">
            <h1 className="font-bold text-4xl">When?</h1>
            <div className="mt-2 p-4 rounded bg-indigo-200">
                <p>
                    This stage comprises determining the time frame within which a team can put a solution to an issue
                    in place or carry out each action required to reach a goal. Setting delivery deadlines for each
                    project phase may be a part of this process. The necessary sequence of stages can be identified and
                    any necessary contingencies within the project's steps can be determined by setting milestones and
                    deadlines at this phase.
                </p>
                <br />
                <p className="font-bold">Here's an Example: By the end of the current quarter.</p>
            </div>
            <div className="mt-4">
                <textarea
                    className="rounded w-full p-4"
                    onChange={(e) =>
                        dispatch(
                            updateProperty({
                                updateType: 'whenInput',
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
