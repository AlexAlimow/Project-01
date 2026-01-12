import s from './Goodbye.module.css';

interface GoodbyeProps {
    familyName: string;
    score?: number;
}

function Goodbye({ familyName, score }: GoodbyeProps) {
    return (
        <div className= {s.container}>
            <p>Goodbye, {familyName}!</p>
            {score ? `Your score is ${score}` : null}
        </div>
    );
    // тернарный оператор для необязательного пропса
}

export default Goodbye;