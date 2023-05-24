

const SectionTitle = ({subHeader,header}) => {
    return (
        <div className="text-center md:w-4/12 py-10 mx-auto my-8 ">
            <p className="text-yellow-500 pb-3">---{subHeader}---</p>
            <h3 className="uppercase border-y-4 py-5 text-5xl">{header}</h3>
        </div>
    );
};

export default SectionTitle;