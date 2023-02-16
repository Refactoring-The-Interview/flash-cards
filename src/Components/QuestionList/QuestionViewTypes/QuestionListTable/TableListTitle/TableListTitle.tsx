import { Tags } from "../../../../../Apis/types";

interface Props {
    titles: Tags[];
}

export const TableListTitle = ({ titles }: Props) => {
    return (
        <tr>
            {titles.map((title) => {
                return (
                    <th>
                        <h6>{title}</h6>
                    </th>
                );
            })}
        </tr>
    );
};
