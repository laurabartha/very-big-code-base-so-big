import useInputValue from './useInputValue';

function FavouriteFoodForm() {

    const [faveFood, handleFaveFoodChange, resetFaveFood] = useInputValue('');

    const [faveSoup, handleFaveSoupChange, resetFaveSoup] = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submitting logic here

    // reset form after submit:
      resetFaveFood();
    resetFaveSoup();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="favFood">What is your favourite food?</label>
          <input value={faveFood} onChange={handleFaveFoodChange} type="text" id="favFood" />

      <label htmlFor="favSoup">What is your favourite Soup?</label>
          <input value={faveSoup} onChange={handleFaveSoupChange} type="text" id="favSoup" />
      <button>Save</button>
    </form>
  )
}

export default FavouriteFoodForm; 