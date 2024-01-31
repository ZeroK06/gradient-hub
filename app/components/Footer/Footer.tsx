import { Logo } from "../Logo"
import { Wrapper } from "../Wrapper"

const Footer = () => {
    return (
        <div className="h-[100px] w-full bg-black/90 py-10 text-white">
            <Wrapper>
                {/* <Logo /> */}
                <hr className="border-white/20" />
                <p className="w-full text-center mt-4 text-white/50">
                    @2023 - All rights reserved.
                </p>
            </Wrapper>
        </div>
    )
}

export default Footer