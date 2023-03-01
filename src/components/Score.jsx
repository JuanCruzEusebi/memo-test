import './../styles/score.css'

export default function Score({score}) {
    

    return (
        <div className="score-mainContainer">
            <h1>The score is:{score} </h1>
        </div>
    )
}