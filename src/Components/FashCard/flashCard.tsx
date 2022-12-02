import ArrayMethods from "../ArrayQuestions/arrayMethods";



const flashCard = () => {



  return (
    <main className="card">

      <div className="card__header">
        <div className="card__header-timer">
          timer
        </div>

        <div className="card__header-count">
          1/5
        </div>

        <button> Submit </button>

      </div>


      <div className="card__question">
        <ArrayMethods />
      </div>


    </main>
  )
}


export default flashCard;