import { useParams } from "react-router-dom"

function Detail() {

    const params = useParams();
    console.log(params);

    return(
        <>
        <h1>여기는 Detail 페이지입니다.</h1>
        <h1>그리고 여기는 그 중에서도 {params.id}번째 페이지입니다.</h1>
        </>
    )
}

export default Detail