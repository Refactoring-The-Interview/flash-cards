import { Tags } from "../../../../../Apis/types";

interface Props {
    title: Tags;
}

export const TableListTitle = ({ title }: Props) => {
    return (
        <th>
            <h4>{title}</h4>
        </th>
    );
};
