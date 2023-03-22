import { ProgressBar } from "react-bootstrap";
import "./ProfileS.scss";
import { MainCard } from "./UserProfileCards/MainCard/MainCard";
import { MemberShipCard } from "./UserProfileCards/MemberShipCard/MemberShipCard";

export const Profile = () => {
    return (
        <div className="Profile">
            <div className="MainCard">
                <MainCard />
            </div>
            <div className="SideCards">
                <ProgressBar />
                <MemberShipCard />
            </div>
        </div>
    );
};
