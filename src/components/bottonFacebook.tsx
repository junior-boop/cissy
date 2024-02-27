import { LogosFacebook } from "./icones";

export default function BoutonFace(){
    const handleClick = () => {
        return location.href = 'https://www.facebook.com/profile.php?id=100086090784697&mibextid=ZbWKwL'
    }
    return(
        <button onClick={handleClick} className="flex items-center gap-3">
            <span className="hidden lg:inline-block">
                Retrouvez-nous
            </span>
            <LogosFacebook className = "w-8 h-8" />
        </button>
    )
}
