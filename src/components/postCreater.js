export const PostCreater = ({setPostContent, submitHandler}) => {
    return (
    <div>
        <form onSubmit={submitHandler}>
            <input onChange={(e) => setPostContent(e.target.value)} />
            <button type='submit'>POST</button>
        </form>
    </div>
    );
};