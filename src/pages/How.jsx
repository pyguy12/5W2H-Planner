import { useSelector, useDispatch } from 'react-redux';
import { updateProperty } from '../wizardSlice';

export default function How(props) {
    const dispatch = useDispatch();
    return (
        <div className="bg-slate mt-10 px-2">
            <h1 className="font-bold text-4xl">How?</h1>
            <div className="mt-2 p-4 rounded bg-indigo-200">
                <p>
                    Answering this question thoroughly creates a process for resolving an issue, implementing a solution
                    or achieving a goal. During this step, a team clarifies all necessary steps and assigns them to
                    specific individuals. It might be helpful here to create a flowchart, framework or project plan. The
                    team then also determines which software and methodologies to use to resolve its issue.
                </p>
                <br />
                <p className="font-bold">
                    Here's an Example: Analyze five alternative products and determine best replacement.
                </p>
            </div>
            <div className="mt-4">
                <textarea
                    className="rounded w-full p-4"
                    onChange={(e) =>
                        dispatch(
                            updateProperty({
                                updateType: 'howInput',
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
