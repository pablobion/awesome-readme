import tw from "tailwind-styled-components";

const Container = tw.div`   
    text-white
    rounded-xl
    p-4
    mr-8
    w-28
    flex
    flex-col
    items-center
    bg-opacity-25
    backdrop-filter 
    backdrop-blur-md
    shadow-2xl
    shadow-inner-2xl
    bg-yellow-100
    `;

const Button = tw.div`   
    bg-blue-900
    px-4
    py-2
    rounded-xl
    mb-2
    border-b-4
    border-blue-800
    hover:bg-green-500 ease
    transition duration-300
`;

function Menu() {
    return (
        <Container>
            <p>LOGO</p>
            <Button className="mt-8">Home</Button>
            <Button id="kkkk">Home</Button>
            <Button>Home</Button>
            <Button className="focus:bg-blue-200">Home</Button>

            {/* <button className="text-green-800 cursor-pointer hover:bg-green-300 hover:text-white rounded p-2 border-b-4 border-green-200 hover:border-green-400">Option1</button> */}
        </Container>
    );
}

export default Menu;
