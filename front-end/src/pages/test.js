import axiosInstance from "../utils/axiosInterceptor"
const Test = () => {
    var data;
    const fechData = async () => {
        data = await axiosInstance.get("/private")

    }
    return (
        <>
            <h2>Test API axios interceptor</h2>
            <button onClick={fechData}>TEST</button>
            <p>{data?.data}</p>
        </>
    )
}


export default Test