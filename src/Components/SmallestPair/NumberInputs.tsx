interface Props {
    value: number[];
    setValue(value: number[]): void;
}

export const NumberInputs = ({ value, setValue }: Props) => {
    return (
        <label>
            <h6>Numbers</h6>
            <input
                placeholder="separate numbers by space"
                onChange={(e) => {
                    const arr = e.target.value.split(" ");
                    setValue(arr.map((num: string) => parseInt(num)));
                }}
            />
        </label>
    );
};
