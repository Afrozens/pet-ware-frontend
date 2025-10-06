
interface UserInfoProps {
    name: string;
    email: string;
}

const IndicatorUser = ({ name, email }: UserInfoProps) => {
    return (
        <div className="pb-10 border-b border-gray-200 space-x-2">
            <span className="font-semibold text-gray-900">{name}</span>
            <span className="text-gray-600">{email}</span>
        </div>
    );
};

export default IndicatorUser;