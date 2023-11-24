import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {

    const {user} = useAuth();

    return (
        <div>
            <h2 className="text-2xl">
                <span>Hi, Welcome </span>
                <span className="text-orange-500">
                {
                    user?.displayName ? user.displayName : ' Back'
                }
                </span>
            </h2>
        </div>
    );
};

export default UserHome;