
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
        <h3 className="text-3xl font-semibold uppercase border-y-4 py-4">---{heading}---</h3>
        <p className="text-yellow-600 mb-2 text-2xl font-semibold">-- {subHeading}-- </p>
        
    </div>
    );
};

export default SectionTitle;