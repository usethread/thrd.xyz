import Navbar from "@/components/Navbar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {

    return (
        <div className="w-full h-full">
            <Navbar/>
            <div className="nav-main justify-center items-center">
                <form>
                    <h1>Login</h1>
                    <div className="flex flex-col gap-2">
                        <Label>Email</Label>
                        <Input type="email" placeholder="Email" className="w-64" />
                    </div>
                </form>
            </div>
        </div>
    )
}