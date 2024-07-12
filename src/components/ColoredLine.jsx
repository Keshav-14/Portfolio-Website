const ColoredLine = ({ color }) => (
    <div className="flex flex-wrap justify-center mt-20 mb-20">
        <hr className="w-3/4 h-0.5"
        style={{
            color: color,
            backgroundColor: color,
        }}
        />
    </div> 
);

export default ColoredLine;