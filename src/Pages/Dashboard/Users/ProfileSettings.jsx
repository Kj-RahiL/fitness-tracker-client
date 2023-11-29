import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const ProfileSettings = () => {
    const axiosPublic = useAxiosPublic()
    axiosPublic.get('/')
    return (
        <div>
            <h2>Profile Settings</h2>
        </div>
    );
};

export default ProfileSettings;