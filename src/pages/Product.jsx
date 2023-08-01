import { useParams } from "react-router-dom";

export default function Product() {
  //url의 id가 달라지면 다른 상품을 보이게하자!
  const { id } = useParams();

  //데이터베이스에서 id가 00인 데이터를 가져온다.
  //화면에 보여준다.

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            상품{id}
          </div>
          <div>
            <h3>가격: ~~~~</h3>
            <h3>좋아요: ~~~~</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
            >
              <option>옵션1</option>
              <option>옵션2</option>
              <option>옵션3</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
