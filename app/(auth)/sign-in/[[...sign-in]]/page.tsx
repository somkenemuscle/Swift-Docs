import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <main className="max-h-screen flex items-center">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-4">
                {/* Sign In Section */}
                <div className="flex justify-center items-center p-8 mt-24 h-screen">
                    <SignIn />
                </div>

                {/* Image Section */}
                <div className="hidden lg:flex w-full h-full">
                    <img
                        src="https://images.unsplash.com/photo-1544819667-9bfc1de23d4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Sign In Illustration"
                        className="object-cover"
                    />
                </div>
            </div>
        </main>
    );
};

export default SignInPage;
