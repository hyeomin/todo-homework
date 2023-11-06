const Working = function ({ item, removeFunction, doneFunction }) {
    return (
        <div className="working-card" key={item.id}>
            <h3 className="card-title">{item.title}</h3>
            <p>{item.body}</p>
            <section>
                <button
                    className="remove-btn"
                    onClick={() => removeFunction(item.id)}
                >
                    삭제하기
                </button>
                <button
                    className="done-btn"
                    onClick={() => doneFunction(item.id)}
                >
                    {item.isDone ? "취소" : "완료"}
                </button>
            </section>
        </div>
    );
};

export default Working;
