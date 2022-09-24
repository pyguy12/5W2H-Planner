import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TabStopPosition, TabStopType, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { useSelector, useDispatch } from 'react-redux';
import { updateProperty } from '../wizardSlice';
import store from '../store';

function generate(state) {
    state = state.wizard;
    const name = new Paragraph({
        text: state.firstName + ' ' + state.lastName,
    });
    const projectName = new Paragraph({
        text: state.projectName,
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
    });
    const organization = new Paragraph({
        text: state.organization,
    });
    const whatHeading = new Paragraph({
        text: 'What?',
        heading: HeadingLevel.HEADING_2,
    });
    const whatParagraph = new Paragraph({
        text: state.whatInput,
        spacing: {
            after: 200,
        },
    });
    const whyHeading = new Paragraph({
        text: 'Why?',
        heading: HeadingLevel.HEADING_2,
    });
    const whyParagraph = new Paragraph({
        text: state.whyInput,
        spacing: {
            after: 200,
        },
    });
    const whereHeading = new Paragraph({
        text: 'Where?',
        heading: HeadingLevel.HEADING_2,
    });
    const whereParagraph = new Paragraph({
        text: state.whereInput,
        spacing: {
            after: 200,
        },
    });
    const whenHeading = new Paragraph({
        text: 'When?',
        heading: HeadingLevel.HEADING_2,
    });
    const whenParagraph = new Paragraph({
        text: state.whenInput,
        spacing: {
            after: 200,
        },
    });
    const whoHeading = new Paragraph({
        text: 'Who?',
        heading: HeadingLevel.HEADING_2,
    });
    const whoParagraph = new Paragraph({
        text: state.whoInput,
        spacing: {
            after: 200,
        },
    });
    const howHeading = new Paragraph({
        text: 'How?',
        heading: HeadingLevel.HEADING_2,
    });
    const howParagraph = new Paragraph({
        text: state.howInput,
        spacing: {
            after: 200,
        },
    });
    const howMuchHeading = new Paragraph({
        text: 'How Much?',
        heading: HeadingLevel.HEADING_2,
    });
    const howMuchParagraph = new Paragraph({
        text: state.howMuchInput,
    });

    const document = new Document({
        sections: [
            {
                children: [
                    name,
                    organization,
                    projectName,
                    whatHeading,
                    whatParagraph,
                    whyHeading,
                    whyParagraph,
                    whereHeading,
                    whereParagraph,
                    whenHeading,
                    whenParagraph,
                    whoHeading,
                    whoParagraph,
                    howHeading,
                    howParagraph,
                    howMuchHeading,
                    howMuchParagraph,
                ],
            },
        ],
    });

    Packer.toBlob(document).then((blob) => {
        saveAs(blob, '5W2H.docx');
    });
}

export default function HowMuch(props) {
    const dispatch = useDispatch();
    return (
        <div className="bg-slate mt-10 px-2">
            <h1 className="font-bold text-4xl">How Much?</h1>
            <div className="mt-2 p-4 rounded bg-indigo-200">
                <p>
                    A team will estimate the project's anticipated budget during this stage. A team or single
                    individuals can estimate the expenditures for each stage of their project using the previously
                    mentioned information. This can also refer to the quantity of a product being remade at a particular
                    price while correcting a production issue. Consistent accountability follow-up checks may be helpful
                    when using this for budgeting purposes to make sure that a team stays within its budget throughout
                    the process.
                </p>
                <br />
                <p className="font-bold">Here's an Example: Maximum budget for software is $120,000.</p>
            </div>
            <div className="mt-4">
                <textarea
                    className="rounded w-full p-4"
                    onChange={(e) =>
                        dispatch(
                            updateProperty({
                                updateType: 'howMuchInput',
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
                    generate(store.getState());
                }}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 float-right"
            >
                Generate Document
            </button>
        </div>
    );
}
