import "./ProfileS.scss";
import { MainCard } from "./UserProfileCards/MainCard/MainCard";
import { MemberShipCard } from "./UserProfileCards/MemberShipCard/MemberShipCard";
import { ProgressCard } from "./UserProfileCards/ProgressCard/ProgressCard";

export const Profile = () => {
    return (
        <div className="Profile">
            <div className="MainCard">
                <MainCard />
            </div>
            <div className="SideCards">
                <ProgressCard />
                <MemberShipCard />
            </div>
        </div>
    );
};
