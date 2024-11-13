import Image from "next/image";
import LoginForm from "@/components/ui/LoginForm";
import LoggedOutContent from "@/components/ui/LoggedOutContent";

export default function Home() {
    return (
        <div className=" flex justify-center items-center p-20">
            <LoggedOutContent />
        </div>
    );
}
