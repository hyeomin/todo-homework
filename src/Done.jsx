const Done = function ({ item, removeFunction, cancelFunction }) {
    return (
        <div className="done-card" key={item.id}>
            <h3 className="card-title">{item.title}</h3>
            <p>{item.body}</p>
            <section>
                <button
                    className="remove-btn"
                    onClick={() => removeFunction(item.id)}
                >
                    삭제하기
                </button>
                {/* <button>취소</button> */}
                <button
                    className="cancel-btn"
                    onClick={() => cancelFunction(item.id)}
                >
                    {item.isDone ? "취소" : "완료"}
                </button>
            </section>
        </div>
    );
};

export default Done;
