import "./SemordnilapPairingsS.scss";

interface Props {
    semordnilaps: string[][];
}

export const SemordnilapPairings = ({ semordnilaps }: Props) => {
    return (
        <div>
            {semordnilaps.map((Parings: string[], index) => {
                const wordOne = Parings[0];
                const wordTwo = Parings[1];

                return (
                    <div className="SemordnilapPairings">
                        <h4>Semordnilap Pairing:{index + 1}</h4>
                        <div className="SemordnilapPairings-words">
                            <h6>{wordOne}</h6> & <h6>{wordTwo}</h6>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
