import { useSelector, useDispatch } from 'react-redux';
import { updateProperty } from '../wizardSlice';

export default function Why(props) {
    const dispatch = useDispatch();
    return (
        <div className="bg-slate mt-10 px-2">
            <h1 className="font-bold text-4xl">Why?</h1>
            <div className="mt-2 p-4 rounded bg-indigo-200">
                <p>
                    Identifying the causes of a problem or the significance of a goal is the next phase in this process.
                    If you utilize this question to address a problem, try to clarify why it exists by figuring out its
                    root cause, if at all possible. Determining the need to solve the issue may also be beneficial. For
                    a goal, explaining the rationale behind its creation might make it easier for each team member, for
                    instance, to comprehend why they must carry out specific activities. This is an important part of
                    the tool since it provides direction for a goal or project and helps an individual or team
                    comprehend its importance.
                </p>
                <br />
                <p className="font-bold">Here's an Example: Outdated software no longer meets company's needs.</p>
            </div>
            <div className="mt-4">
                <textarea
                    className="rounded w-full p-4"
                    onChange={(e) =>
                        dispatch(
                            updateProperty({
                                updateType: 'whyInput',
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
