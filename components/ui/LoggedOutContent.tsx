import LoginForm from "@/components/ui/LoginForm";

export default function LoggedOutContent() {


    return (
        <div className=" bg-base-200 min-h-screen">
            <div className=" flex flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left p-16">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <LoginForm/>
            </div>

        </div>
    )
}