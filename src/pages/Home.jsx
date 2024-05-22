import { Link } from "react-router-dom";

function Home() {

    const links = Array.from({ length: 100 }, (_, index) => index + 1);

    return (
        <>
            <div>
                {links.map((id) => (
                    <div key={id}>
                        <Link to={`/detail/${id}`}>Detail {id}번 페이지로 이동하기</Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;