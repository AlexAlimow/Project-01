import { useState } from "react";

export default function IdealWeightCalculator() {
    const [height, setHeight] = useState('170');
    const [idealWeight, setIdealWeight] = useState(0);
    const [error, setError] = useState('');
    const [gender, setGender] = useState('female');

    function handleCalculateIdealWeight() {
        const weightToSubtract = gender === 'male' ? 100 : 110;
        const weight = Number(height) - weightToSubtract;
        if (weight < 0) {
            setError('Height must be greater than 100 cm');
        } else {
            setError('');
            setIdealWeight(weight);
        }
    }

    return (
        <div>
            <h2>Calculate your ideal weight</h2>

            <select name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <label htmlFor="height">Height:</label>
            <input
                type="text"
                name="height"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)} />


            <button type="button" onClick={handleCalculateIdealWeight}>Calculate</button>
            {error ? <p>{error}</p> : null}
            {idealWeight && !error ?
                <p>Your ideal weight is {idealWeight} kg</p> : null}
        </div>
    );

}

