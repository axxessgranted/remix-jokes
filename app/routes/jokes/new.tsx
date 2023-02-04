const JokesNewRoute = () => {
  return (
    <div>
      <p>Add your own utterly hilarious joke</p>
      <form method='post'>
        <div>
          <label>
            Name: <input type='text' name='name' />
          </label>
        </div>
        <div>
          <label>
            Content: <input type='text' name='Content' />
          </label>
        </div>
        <div>
          <button type='submit' className='button'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JokesNewRoute;
