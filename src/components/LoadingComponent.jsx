const LoadingComponent = ({message}) => {
    return (
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center-justify-center w-screen">

                <div className="text-center w-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mt-20"> </div>
                    <p>{message}</p>
                </div>
            </div>
    )
}

export default LoadingComponent