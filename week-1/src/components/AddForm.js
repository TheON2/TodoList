const AddForm = ({ title, content, onChangeTitle, onChangeContent, addTodoHandler }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    addTodoHandler(title, content);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className="input-group">
        <label className="form-label">제목</label>
        <input type="text" name="title" className="add-input input-body" value={title} onChange={onChangeTitle} />
        <label className="form-label">내용</label>
        <input type="text" name="body" className="add-input" value={content} onChange={onChangeContent} />
      </div>
      <button className="add-button" type="submit">추가하기</button>
    </form>
  );
};

export default AddForm;