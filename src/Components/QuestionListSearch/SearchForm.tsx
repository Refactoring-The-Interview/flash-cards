import "./SearchFormS.scss";

interface Props {
    value: string;
    setValue(value: string): void;
}

export const SearchForm = ({ value, setValue }: Props) => {
    return (
        <form className="SearchForm">
            <label>
                Search Term:
                <input
                    type="text"
                    value={value}
                    onChange={(e) => {
                        let term = e.target.value;
                        setValue(term);
                    }}
                />
            </label>
        </form>
    );
};
