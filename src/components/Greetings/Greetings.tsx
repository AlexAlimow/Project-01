interface GreetingsProps {
    name: string;

}

function Greetings({ name }: GreetingsProps) {
    return (
        <div>
            <p>Hello, {name}!</p>
        </div>
    );
}

export default Greetings;