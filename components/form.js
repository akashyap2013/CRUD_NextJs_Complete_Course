import UpdateUserForm from "./updateUserForm";
import AddUserForm from "./addUserForm";

export default function Form(){

    const flag = true;

    return (
        <div className="container mx-auto py-5">
            { flag ? <AddUserForm /> : <UpdateUserForm /> }
        </div>
    )
}