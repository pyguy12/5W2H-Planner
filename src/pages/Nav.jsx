const Nav = (props) => {
    const dots = [];
    for (let i = 1; i <= props.totalSteps; i += 1) {
        const isActive = props.currentStep === i;
        dots.push(
            <span
                key={`step-${i}`}
                className={`rounded px-6 py-4 m-2 ${
                    isActive ? 'bg-indigo-400' : 'bg-indigo-200'
                } cursor-pointer hover:bg-indigo-300 font-bold shadow`}
                onClick={() => props.goToStep(i)}
            >
                {i}
            </span>
        );
    }

    return <div className="mb-2 flex justify-between">{dots}</div>;
};

export default Nav;
